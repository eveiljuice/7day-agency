export type Language = 'en' | 'ru'

export const translations = {
  en: {
    // Navbar
    nav: {
      projects: 'Projects',
      services: 'Services',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      getStarted: 'Get Started',
    },
    // Hero
    hero: {
      title: 'Create Your MVP in 7 Days',
      subtitle: 'Full-cycle app development: from idea to production. No fluff, only results.',
      cta: 'Start Project',
      ctaSecondary: 'View Examples',
      trusted: 'Trusted by 20+ startups to build & launch software products.',
    },
    // Trust
    trust: {
      projects: 'Projects',
      countries: 'Countries',
      years: 'Years Experience',
      satisfaction: 'Client Satisfaction',
    },
    // Services
    services: {
      title: 'Services',
      subtitle: 'You dream it — I build it, grow it, and make it stand out.',
      web: {
        title: 'Website Launch',
        price: '$1,000',
        features: [
          'Deep market and competitor research',
          'Modern, mobile-first design that converts',
          'Copy and visuals created with AI',
          'SEO, analytics, and integrations ready',
          'Contact forms and automations set up',
        ],
      },
      app: {
        title: 'App Launch',
        price: '$2,500',
        features: [
          'iOS & Android-ready build',
          'Intuitive UX with smooth onboarding',
          'Auth, database, payments included',
          'Polished, minimal UI powered by AI',
          'Real-time preview before release',
        ],
      },
      mvp: {
        title: 'MVP Launch',
        price: '$1,500',
        features: [
          'Market research and user analysis',
          'Clear value proposition and positioning',
          'UX/UI design built to test and scale',
          'Live MVP ready to show investors',
          'Step-by-step launch checklist',
        ],
      },
      custom: {
        title: 'Custom',
        price: 'Let\'s Talk',
        features: [
          'Tailored solution for your unique needs',
          'Complex integrations and API work',
          'Enterprise-grade architecture',
          'Dedicated support and maintenance',
          'Flexible timeline and scope',
        ],
      },
      popular: 'Popular',
      getStarted: 'Get Started',
    },
    // Process
    process: {
      title: 'How We Work',
      subtitle: 'A proven process that delivers results every time.',
      steps: [
        {
          title: 'Consultation',
          description: 'We discuss your idea, goals, and requirements. Together we define the scope and create a roadmap.',
        },
        {
          title: 'Design & Prototype',
          description: 'Creating wireframes and high-fidelity designs in Figma. You see the product before development starts.',
        },
        {
          title: 'Development',
          description: 'Sprint-based development with regular updates. You stay informed and can provide feedback throughout.',
        },
        {
          title: 'Testing & Launch',
          description: 'Thorough QA testing, bug fixes, and deployment. Your product goes live, ready for users.',
        },
      ],
    },
    // Portfolio
    portfolio: {
      title: 'Projects',
      subtitle: 'That launched, scaled, and made millions.',
      viewCase: 'View Case',
      projects: [
        {
          title: 'ArenaGo',
          description: 'Platform for finding and booking sports venues. Search, filter, and rent courts in your city.',
          result: 'Live product',
          tags: ['Next.js', 'Maps API', 'Payments'],
          link: 'https://arenago.netlify.app/',
        },
        {
          title: 'Aural IDE',
          description: 'Next-gen development platform powered by AI. Code smarter, ship faster.',
          result: 'In development',
          tags: ['React', 'AI', 'Monaco Editor'],
          link: 'https://aural-ide.netlify.app/',
        },
        {
          title: 'TrendXL',
          description: 'TikTok trends discovery app. Find viral content before it blows up.',
          result: 'Live product',
          tags: ['Next.js', 'TikTok API', 'Analytics'],
          link: 'https://trendxl-20.vercel.app/',
        },
        {
          title: 'DoneIn5',
          description: 'Marketplace for AI agents. Find, deploy, and monetize autonomous AI solutions.',
          result: 'Live product',
          tags: ['Next.js', 'AI Agents', 'Marketplace'],
          link: 'https://donein5.com/',
        },
      ],
    },
    // Pricing
    pricing: {
      title: 'Pricing',
      subtitle: 'Transparent pricing. No hidden fees.',
      starter: {
        name: 'Starter MVP',
        price: '$5,000',
        period: '7 days',
        features: [
          'Landing page',
          'Basic backend',
          'Database setup',
          'Deployment',
          'Email support',
        ],
      },
      professional: {
        name: 'Professional',
        price: '$15,000',
        period: '14 days',
        features: [
          'Full-stack application',
          'Admin dashboard',
          'Analytics integration',
          'API development',
          'Priority support',
          '30-day bug fixes',
        ],
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Custom',
        period: 'Flexible',
        features: [
          'Custom solution',
          'Scalable architecture',
          'Dedicated support',
          'SLA guarantee',
          'Team training',
          'Ongoing maintenance',
        ],
      },
      popular: 'Popular',
      selectPlan: 'Select Plan',
      contactUs: 'Contact Us',
    },
    // FAQ
    faq: {
      title: 'Frequently Asked',
      subtitle: 'Everything you need to know about working together.',
      questions: [
        {
          question: 'Who is this for?',
          answer: 'This is perfect for startups, entrepreneurs, and companies looking to quickly validate their ideas with a working product. Whether you need an MVP to attract investors or a full application to launch your business.',
        },
        {
          question: 'How is this different from an agency or freelancer?',
          answer: 'Unlike large agencies, you work directly with me — no project managers or miscommunication. Unlike most freelancers, I handle the entire stack: design, frontend, backend, and deployment. One point of contact, complete ownership.',
        },
        {
          question: 'Do I need to prepare anything?',
          answer: 'Just your idea and vision. We\'ll work together to define requirements, create user stories, and plan the development. I\'ll guide you through the entire process.',
        },
        {
          question: 'How long does it take?',
          answer: 'MVP projects typically take 7-14 days. More complex applications may take 3-6 weeks. I\'ll give you an accurate timeline after our initial consultation.',
        },
        {
          question: 'Is support included?',
          answer: 'Yes! All packages include post-launch support. Starter includes email support, Professional includes 30-day bug fixes, and Enterprise includes ongoing maintenance and priority support.',
        },
        {
          question: 'How does payment work?',
          answer: '50% upfront to start the project, 50% on completion before deployment. For Enterprise projects, we can arrange milestone-based payments.',
        },
        {
          question: 'What if I need something custom?',
          answer: 'I love custom projects! Let\'s discuss your specific needs and I\'ll create a tailored proposal with timeline and pricing.',
        },
        {
          question: 'Who\'s behind all this?',
          answer: 'I\'m a full-stack developer with 5+ years of experience building products for startups. I\'ve helped launch 50+ products and have a 98% client satisfaction rate.',
        },
      ],
    },
    // Contact
    contact: {
      title: 'Share Your Idea and Get a Plan in 24 Hours',
      subtitle: 'Just send a short brief to get started.',
      name: 'Your Name',
      email: 'Your Email or X profile link',
      telegram: 'Your Telegram (@username)',
      project: 'Tell me about your project...',
      security: 'Security check: What is',
      answer: 'Your answer',
      submit: 'Submit',
      success: 'Thanks! I\'ll get back to you within 24 hours.',
      error: 'Something went wrong. Please try again.',
      selectedPackage: 'Selected package',
    },
    // Footer
    footer: {
      tagline: 'Building software with AI — from idea to launch, all handled by one expert.',
      navigation: 'Navigation',
      contactTitle: 'Contact',
      home: 'Homepage',
      rights: 'All rights reserved.',
    },
  },
  ru: {
    // Navbar
    nav: {
      projects: 'Проекты',
      services: 'Услуги',
      pricing: 'Цены',
      faq: 'FAQ',
      contact: 'Контакты',
      getStarted: 'Начать',
    },
    // Hero
    hero: {
      title: 'Создавайте MVP за 7 дней',
      subtitle: 'Полный цикл разработки приложений: от идеи до продакшена. Без лишних слов, только результаты.',
      cta: 'Начать проект',
      ctaSecondary: 'Посмотреть примеры',
      trusted: 'Нам доверяют 20+ стартапов для создания и запуска программных продуктов.',
    },
    // Trust
    trust: {
      projects: 'Проектов',
      countries: 'Стран',
      years: 'Лет опыта',
      satisfaction: 'Довольных клиентов',
    },
    // Services
    services: {
      title: 'Услуги',
      subtitle: 'Вы мечтаете — я создаю, развиваю и делаю уникальным.',
      web: {
        title: 'Запуск сайта',
        price: '$1,000',
        features: [
          'Глубокий анализ рынка и конкурентов',
          'Современный мобильный дизайн',
          'Тексты и визуал с помощью AI',
          'SEO, аналитика и интеграции',
          'Формы и автоматизации настроены',
        ],
      },
      app: {
        title: 'Запуск приложения',
        price: '$2,500',
        features: [
          'Готовый билд для iOS и Android',
          'Интуитивный UX с плавным онбордингом',
          'Авторизация, база, платежи включены',
          'Минималистичный UI на базе AI',
          'Превью в реальном времени',
        ],
      },
      mvp: {
        title: 'Запуск MVP',
        price: '$1,500',
        features: [
          'Исследование рынка и пользователей',
          'Четкое позиционирование продукта',
          'UX/UI дизайн для теста и роста',
          'Рабочий MVP для инвесторов',
          'Пошаговый чек-лист запуска',
        ],
      },
      custom: {
        title: 'Кастом',
        price: 'Обсудим',
        features: [
          'Решение под ваши уникальные задачи',
          'Сложные интеграции и API',
          'Энтерпрайз архитектура',
          'Выделенная поддержка',
          'Гибкие сроки и объем',
        ],
      },
      popular: 'Популярно',
      getStarted: 'Начать',
    },
    // Process
    process: {
      title: 'Как мы работаем',
      subtitle: 'Проверенный процесс, который приносит результаты каждый раз.',
      steps: [
        {
          title: 'Консультация',
          description: 'Обсуждаем вашу идею, цели и требования. Вместе определяем объем работ и создаем дорожную карту.',
        },
        {
          title: 'Дизайн и Прототип',
          description: 'Создаем вайрфреймы и детальный дизайн в Figma. Вы видите продукт до начала разработки.',
        },
        {
          title: 'Разработка',
          description: 'Спринтовая разработка с регулярными обновлениями. Вы в курсе событий и можете давать обратную связь.',
        },
        {
          title: 'Тестирование и Запуск',
          description: 'Тщательное QA тестирование, исправление багов и деплой. Ваш продукт выходит в свет.',
        },
      ],
    },
    // Portfolio
    portfolio: {
      title: 'Проекты',
      subtitle: 'Которые запустились, масштабировались и работают.',
      viewCase: 'Смотреть кейс',
      projects: [
        {
          title: 'ArenaGo',
          description: 'Платформа для поиска и бронирования спортплощадок. Найди и арендуй корт в своем городе.',
          result: 'Живой продукт',
          tags: ['Next.js', 'Maps API', 'Payments'],
          link: 'https://arenago.netlify.app/',
        },
        {
          title: 'Aural IDE',
          description: 'Платформа для разработки нового поколения с AI. Пиши код умнее, деплой быстрее.',
          result: 'В разработке',
          tags: ['React', 'AI', 'Monaco Editor'],
          link: 'https://aural-ide.netlify.app/',
        },
        {
          title: 'TrendXL',
          description: 'Приложение для поиска трендов TikTok. Находи вирусный контент до хайпа.',
          result: 'Живой продукт',
          tags: ['Next.js', 'TikTok API', 'Analytics'],
          link: 'https://trendxl-20.vercel.app/',
        },
        {
          title: 'DoneIn5',
          description: 'Маркетплейс AI-агентов. Находи, деплой и монетизируй автономные AI решения.',
          result: 'Живой продукт',
          tags: ['Next.js', 'AI Agents', 'Marketplace'],
          link: 'https://donein5.com/',
        },
      ],
    },
    // Pricing
    pricing: {
      title: 'Цены',
      subtitle: 'Прозрачные цены. Никаких скрытых комиссий.',
      starter: {
        name: 'Starter MVP',
        price: '$5,000',
        period: '7 дней',
        features: [
          'Лендинг страница',
          'Базовый бэкенд',
          'Настройка базы данных',
          'Деплой',
          'Email поддержка',
        ],
      },
      professional: {
        name: 'Professional',
        price: '$15,000',
        period: '14 дней',
        features: [
          'Фуллстек приложение',
          'Админ-панель',
          'Интеграция аналитики',
          'Разработка API',
          'Приоритетная поддержка',
          '30 дней исправления багов',
        ],
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Обсудить',
        period: 'Гибкие сроки',
        features: [
          'Кастомное решение',
          'Масштабируемая архитектура',
          'Выделенная поддержка',
          'Гарантия SLA',
          'Обучение команды',
          'Постоянное обслуживание',
        ],
      },
      popular: 'Популярно',
      selectPlan: 'Выбрать план',
      contactUs: 'Связаться',
    },
    // FAQ
    faq: {
      title: 'Частые вопросы',
      subtitle: 'Все, что нужно знать о работе вместе.',
      questions: [
        {
          question: 'Для кого это?',
          answer: 'Идеально подходит для стартапов, предпринимателей и компаний, желающих быстро проверить свои идеи с рабочим продуктом. Нужен ли MVP для привлечения инвесторов или полноценное приложение для запуска бизнеса.',
        },
        {
          question: 'Чем это отличается от агентства или фрилансера?',
          answer: 'В отличие от крупных агентств, вы работаете напрямую со мной — без менеджеров и недопонимания. В отличие от большинства фрилансеров, я занимаюсь всем: дизайн, фронтенд, бэкенд и деплой. Один контакт, полная ответственность.',
        },
        {
          question: 'Нужно ли что-то подготовить?',
          answer: 'Только вашу идею и видение. Мы вместе определим требования, создадим пользовательские истории и спланируем разработку. Я проведу вас через весь процесс.',
        },
        {
          question: 'Сколько времени это занимает?',
          answer: 'MVP проекты обычно занимают 7-14 дней. Более сложные приложения могут занять 3-6 недель. Точные сроки дам после первичной консультации.',
        },
        {
          question: 'Включена ли поддержка?',
          answer: 'Да! Все пакеты включают поддержку после запуска. Starter включает email поддержку, Professional — 30 дней исправления багов, Enterprise — постоянное обслуживание и приоритетную поддержку.',
        },
        {
          question: 'Как происходит оплата?',
          answer: '50% предоплата для начала проекта, 50% по завершению перед деплоем. Для Enterprise проектов можем договориться об оплате по этапам.',
        },
        {
          question: 'Что если нужно что-то особенное?',
          answer: 'Обожаю нестандартные проекты! Давайте обсудим ваши конкретные потребности, и я создам индивидуальное предложение с таймлайном и ценой.',
        },
        {
          question: 'Кто за всем этим стоит?',
          answer: 'Я фуллстек-разработчик с 5+ годами опыта создания продуктов для стартапов. Помог запустить 50+ продуктов с 98% удовлетворенностью клиентов.',
        },
      ],
    },
    // Contact
    contact: {
      title: 'Поделитесь идеей и получите план за 24 часа',
      subtitle: 'Просто отправьте короткое описание, чтобы начать.',
      name: 'Ваше имя',
      email: 'Ваш Email или ссылка на профиль',
      telegram: 'Ваш Telegram (@username)',
      project: 'Расскажите о вашем проекте...',
      security: 'Проверка: сколько будет',
      answer: 'Ваш ответ',
      submit: 'Отправить',
      success: 'Спасибо! Я отвечу в течение 24 часов.',
      error: 'Что-то пошло не так. Попробуйте еще раз.',
      selectedPackage: 'Выбранный пакет',
    },
    // Footer
    footer: {
      tagline: 'Создание ПО с помощью AI — от идеи до запуска, все в одних руках.',
      navigation: 'Навигация',
      contactTitle: 'Контакты',
      home: 'Главная',
      rights: 'Все права защищены.',
    },
  },
}

export function getTranslations(lang: Language) {
  return translations[lang]
}

