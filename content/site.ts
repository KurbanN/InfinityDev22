/**
 * Контент Infinity Dev — источник: D:\Project\InfinityDev (index.html, meta).
 * Только копирайт и данные; вёрстка задаётся компонентами.
 */

export const brand = {
  name: "Infinity Dev",
  nameHtml: { main: "Infinity", accent: "Dev" },
  tagline:
    "IT-консалтинг: ИИ/ML, облако и цифровая трансформация для бизнеса в Казахстане и регионе.",
}

export const seo = {
  title: "Infinity Dev — ИИ, облако и цифровая трансформация",
  description:
    "Infinity Dev: IT-консалтинг с фокусом на ИИ/ML, облачные решения и цифровую трансформацию. Помогаем компаниям выстраивать технологическую стратегию и внедрять продукты с измеримым эффектом.",
  keywords: [
    "IT консалтинг",
    "цифровая трансформация",
    "разработка ПО",
    "ИИ",
    "машинное обучение",
    "облачные решения",
    "Казахстан",
    "Алматы",
  ],
  canonicalUrl: "https://infinitydev.kz",
  ogImage: "https://infinitydev.kz/images/og-image.jpg",
}

export const contacts = {
  email: "info@infinitydev.kz",
  phones: ["+7 (708) 888-02-08", "+7 (747) 111-00-10"],
  address: "Казахстан, Алматы",
  social: {
    linkedin: "https://www.linkedin.com/company/infinitydevs",
    instagram: "https://instagram.com/infinitydevkz",
  },
}

export const hero = {
  badge: "IT-консалтинг · Казахстан",
  line1: "Трансформируйте бизнес",
  line2: "с ИИ и цифрой.",
  subtitle:
    "Помогаем компаниям внедрять передовые технологии и выстраивать устойчивую цифровую стратегию — от идеи до измеримого результата.",
  primaryCta: "Обсудить проект",
  secondaryCta: "Услуги",
  dashboardLabel: "infinity dev · обзор",
}

export const stats = [
  { value: "4+", label: "направления услуг" },
  { value: "3+", label: "кейса в портфолио" },
  { value: "KZ", label: "Алматы · Казахстан" },
  { value: "ROI", label: "фокус на результате" },
]

/** Секция услуг — карусель «Наши услуги» */
export const services = [
  {
    icon: "Code2" as const,
    title: "Веб, CRM и аналитика",
    description:
      "Сайты, CRM и аналитика под задачи роста: интеграции, отчётность и прозрачные воронки.",
  },
  {
    icon: "Bot" as const,
    title: "ИИ-боты и автоматизация",
    description:
      "Чат- и голосовые сценарии, NLP и автоматизация процессов — чтобы снять рутину с команды.",
  },
  {
    icon: "Video" as const,
    title: "AI Video",
    description:
      "Видеоконтент с ИИ: UGC, рекламные форматы и конвейер производства под ваш бренд.",
  },
  {
    icon: "Cloud" as const,
    title: "Облако и DevOps",
    description:
      "Миграция в облако, CI/CD и надёжная инфраструктура без «магии» и лишней сложности.",
  },
  {
    icon: "Lightbulb" as const,
    title: "Инновации в приоритете",
    description: "Опережаем тренды и предлагаем решения под сложные бизнес-задачи.",
  },
  {
    icon: "Users" as const,
    title: "Экспертная команда",
    description: "ИИ, облако и продуктовая разработка — в одной команде.",
  },
  {
    icon: "TrendingUp" as const,
    title: "Ориентир на результат",
    description: "Считаем эффект в цифрах: скорость, стоимость владения и бизнес-метрики.",
  },
  {
    icon: "Layers" as const,
    title: "Комплексная трансформация",
    description: "От стратегии до внедрения — без разрыва между консалтингом и разработкой.",
  },
]

/** О компании — колонка у developer experience */
export const about = {
  eyebrow: "О компании",
  title: "Пионеры цифровых инноваций",
  lead:
    "Команда инженеров, дизайнеров и стратегов, которая переводит бизнес-цели в работающие цифровые продукты.",
  bullets: [
    "Быстрый старт и понятные этапы поставки",
    "Прозрачная коммуникация и ответственность за сроки",
    "Современный стек без лишней сложности для заказчика",
  ],
  terminal: `$ infinity-dev status

✓ Стратегия и аудит готовы
✓ Команда подключена
✓ Следующий шаг: воркшоп и дорожная карта

Готовы к запуску ▸`,
}

/** Кейсы — вкладки code section */
export const portfolioCases = {
  arsauto: `// Кейс: ArsAuto · автосалон
// CRM, контент и ИИ-поддержка продаж

✓ Единая витрина и заявки
✓ Интеграции под процессы дилера
✓ Запуск без простоя в продажах

https://arsauto.kz`,

  ciscup: `// Кейс: ciscup.kz · CS2
// Соревновательная микс-платформа

✓ Драфт, вето карт, серверы в KZ
✓ Турнирная логика и матчмейкинг
✓ Стабильность под пиковую нагрузку

https://ciscup.kz`,

  agrouchet: `// Кейс: Agrouchet.kz
// Платформа для агросектора

✓ Мобильные сценарии и данные полей
✓ IoT и аналитика под задачи отрасли
✓ Масштабирование под регион

https://agrouchet.kz`,
}

export const portfolioTabs = [
  { key: "arsauto" as const, label: "ArsAuto" },
  { key: "ciscup" as const, label: "ciscup.kz" },
  { key: "agrouchet" as const, label: "Agrouchet" },
]

/** Документация / стек — заголовки секции сетки интеграций */
export const docsSection = {
  eyebrow: "Документация",
  title: "Изучайте всё.",
  subtitle:
    "Подбор стека и интеграций под вашу архитектуру: от моделей и данных до платежей и маркетинга.",
  stats: [
    { value: "100+", label: "интеграций в экосистеме" },
    { value: "OAuth", label: "встроенная авторизация" },
    { value: "Webhooks", label: "синхронизация в реальном времени" },
  ],
  linkLabel: "Полная документация",
}

export const team = [
  {
    name: "Kurban Nurakhunov",
    role: "Front-End Developer, Founder",
    email: "kurban@infinitydev.kz",
  },
  {
    name: "Olzhas Satpayev",
    role: "Senior Full Stack разработчик, Founder",
    email: "olzhas@infinitydev.kz",
  },
  {
    name: "Yeraly Sakybay",
    role: "Project Manager",
    email: "yeraly@infinitydev.kz",
  },
]

export const values = [
  {
    title: "Инновации прежде всего",
    description:
      "Опережаем технологические тренды и предлагаем решения под сложные бизнес-задачи.",
  },
  {
    title: "Экспертная команда",
    description: "Инженеры с глубокой экспертизой в ИИ, облаке и современной разработке продуктов.",
  },
  {
    title: "Ориентир на результат",
    description: "Считаем успех в метриках бизнеса и ROI, а не только в объёме кода.",
  },
]

export const enterpriseSection = {
  eyebrow: "Команда и ценности",
  title: "Люди и принципы, которые ведут проекты",
  lead:
    "Нам доверяют продуктовые команды и бизнесы, которым нужна скорость без потери качества.",
  ctaTitle: "Готовы к следующему шагу?",
  ctaLead: "Расскажите о задаче — предложим формат работы и оценку.",
  ctaPrimary: "Связаться с нами",
  ctaSecondary: "Запросить презентацию",
}

export const cta = {
  title: "Готовы трансформировать бизнес?",
  subtitle:
    "Обсудим, как ИИ, облако и цифровые продукты помогут достичь ваших целей — без лишней бюрократии.",
  primary: "Написать нам",
  secondary: "Позвонить",
}

export const footer = {
  description:
    "Трансформируем бизнес через цифровые решения, ИИ и облачные технологии — от стратегии до запуска.",
  columns: [
    {
      title: "Услуги",
      links: [
        { label: "ИИ и автоматизация", href: "#features" },
        { label: "Облако и DevOps", href: "#features" },
        { label: "Веб и CRM", href: "#features" },
        { label: "AI Video", href: "#features" },
      ],
    },
    {
      title: "Компания",
      links: [
        { label: "О компании", href: "#developer-experience" },
        { label: "Кейсы", href: "#built-for-react" },
        { label: "Команда", href: "#enterprise" },
        { label: "Контакты", href: "#contact" },
      ],
    },
  ],
  legal: ["Политика конфиденциальности", "Условия"],
}
