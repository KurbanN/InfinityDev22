"use client"

import { useEffect, useRef } from "react"

/**
 * Full-viewport grid + canvas particle animation (same logic as the former hero-only layer).
 * Fixed behind all content; keep page `<main>` without opaque background.
 */
export function SiteGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      if (w === 0 || h === 0) return
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    interface GridDot {
      x: number
      y: number
      direction: "horizontal" | "vertical"
      speed: number
      size: number
      opacity: number
      color: string
      targetX: number
      targetY: number
      trail: { x: number; y: number }[]
    }

    const colors = ["rgba(255, 255, 255, 0.5)"]
    const gridSize = 64
    const dotCount = 30

    const snapToGrid = (value: number) => Math.round(value / gridSize) * gridSize

    const gridDots: GridDot[] = []

    const initDots = () => {
      gridDots.length = 0
      const cw = canvas.offsetWidth
      const ch = canvas.offsetHeight
      for (let i = 0; i < dotCount; i++) {
        const isHorizontal = Math.random() > 0.5
        const x = snapToGrid(Math.random() * cw)
        const y = snapToGrid(Math.random() * ch)

        gridDots.push({
          x,
          y,
          direction: isHorizontal ? "horizontal" : "vertical",
          speed: Math.random() * 9 + 7.5,
          size: Math.random() * 2 + 2,
          opacity: Math.random() * 0.5 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          targetX: x,
          targetY: y,
          trail: [],
        })
      }
    }

    const onResize = () => {
      resizeCanvas()
      initDots()
    }

    resizeCanvas()
    initDots()
    window.addEventListener("resize", onResize)

    let animationId: number
    let lastTime = 0
    const frameInterval = 1000 / 30

    const animate = (currentTime: number) => {
      animationId = requestAnimationFrame(animate)

      const deltaTime = currentTime - lastTime
      if (deltaTime < frameInterval) return
      lastTime = currentTime - (deltaTime % frameInterval)

      const cw = canvas.offsetWidth
      const ch = canvas.offsetHeight

      ctx.clearRect(0, 0, cw, ch)

      gridDots.forEach((dot) => {
        dot.trail.unshift({ x: dot.x, y: dot.y })
        if (dot.trail.length > 10) dot.trail.pop()

        if (dot.direction === "horizontal") {
          if (Math.abs(dot.x - dot.targetX) < dot.speed) {
            dot.x = dot.targetX
            if (Math.random() > 0.7) {
              dot.direction = "vertical"
              const steps = Math.floor(Math.random() * 5) + 1
              dot.targetY = dot.y + (Math.random() > 0.5 ? 1 : -1) * steps * gridSize
            } else {
              const steps = Math.floor(Math.random() * 8) + 2
              dot.targetX = dot.x + (Math.random() > 0.5 ? 1 : -1) * steps * gridSize
            }
          } else {
            dot.x += dot.x < dot.targetX ? dot.speed : -dot.speed
          }
        } else {
          if (Math.abs(dot.y - dot.targetY) < dot.speed) {
            dot.y = dot.targetY
            if (Math.random() > 0.7) {
              dot.direction = "horizontal"
              const steps = Math.floor(Math.random() * 8) + 2
              dot.targetX = dot.x + (Math.random() > 0.5 ? 1 : -1) * steps * gridSize
            } else {
              const steps = Math.floor(Math.random() * 5) + 1
              dot.targetY = dot.y + (Math.random() > 0.5 ? 1 : -1) * steps * gridSize
            }
          } else {
            dot.y += dot.y < dot.targetY ? dot.speed : -dot.speed
          }
        }

        if (dot.x < -gridSize) {
          dot.x = cw + gridSize
          dot.targetX = dot.x
          dot.trail = []
        }
        if (dot.x > cw + gridSize) {
          dot.x = -gridSize
          dot.targetX = dot.x
          dot.trail = []
        }
        if (dot.y < -gridSize) {
          dot.y = ch + gridSize
          dot.targetY = dot.y
          dot.trail = []
        }
        if (dot.y > ch + gridSize) {
          dot.y = -gridSize
          dot.targetY = dot.y
          dot.trail = []
        }

        if (dot.trail.length > 1) {
          ctx.beginPath()
          ctx.moveTo(dot.x, dot.y)
          for (let i = 0; i < dot.trail.length; i++) {
            ctx.lineTo(dot.trail[i].x, dot.trail[i].y)
          }
          ctx.strokeStyle = dot.color
          ctx.globalAlpha = dot.opacity * 0.4
          ctx.lineWidth = dot.size
          ctx.lineCap = "round"
          ctx.stroke()
        }

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size * 4, 0, Math.PI * 2)
        ctx.fillStyle = dot.color
        ctx.globalAlpha = dot.opacity * 0.15
        ctx.fill()

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fillStyle = dot.color
        ctx.globalAlpha = dot.opacity
        ctx.fill()
      })

      ctx.globalAlpha = 1
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", onResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 min-h-[100dvh] w-full overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 [mask-image:radial-gradient(ellipse_100%_80%_at_50%_0%,#000_40%,transparent_95%)]" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_100%_85%_at_50%_15%,#000_35%,transparent_100%)]"
      />
    </div>
  )
}
