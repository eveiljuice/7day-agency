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
      mvp: {
        title: 'MVP Launch',
        price: '$5,000',
        features: [
          'Market research and user analysis',
          'Clear value proposition',
          'UX/UI design built to scale',
          'Live MVP with essential features',
          'Step-by-step launch guidance',
        ],
      },
      web: {
        title: 'Web Apps',
        price: '$8,000',
        features: [
          'React/Next.js architecture',
          'Scalable backend systems',
          'SEO optimization built-in',
          'Analytics integration',
          'Admin dashboard included',
        ],
      },
      mobile: {
        title: 'Mobile Apps',
        price: '$12,000',
        features: [
          'iOS & Android development',
          'Native performance',
          'Push notifications',
          'App Store ready',
          'Real-time sync',
        ],
      },
      ai: {
        title: 'AI Integration',
        price: '$3,000+',
        features: [
          'ChatGPT/Claude API integration',
          'Custom AI workflows',
          'Computer vision solutions',
          'Process automation',
          'AI-powered features',
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
          title: 'Unified Business Platform',
          description: 'All-in-one platform with project management, finance tracking, CRM, and team collaboration.',
          result: 'Raised $500K funding',
          tags: ['React', 'Node.js', 'PostgreSQL'],
        },
        {
          title: 'Travel Connection App',
          description: 'Mobile app helping travelers find authentic connections through a warm, intuitive interface.',
          result: '100K+ active users',
          tags: ['React Native', 'Firebase', 'Maps API'],
        },
        {
          title: 'Crypto Investment Platform',
          description: 'Clean, trustworthy app helping first-time investors feel confident and in control.',
          result: '$2M assets managed',
          tags: ['Next.js', 'Web3', 'TradingView'],
        },
        {
          title: 'Food Delivery Service',
          description: 'Local food delivery platform connecting restaurants with customers in real-time.',
          result: '50K orders/month',
          tags: ['Flutter', 'Node.js', 'Redis'],
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
      project: 'Tell me about your project...',
      security: 'Security check: What is',
      answer: 'Your answer',
      submit: 'Submit',
      success: 'Thanks! I\'ll get back to you within 24 hours.',
      error: 'Something went wrong. Please try again.',
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
      mvp: {
        title: 'Запуск MVP',
        price: '$5,000',
        features: [
          'Исследование рынка и анализ пользователей',
          'Четкое ценностное предложение',
          'UX/UI дизайн для масштабирования',
          'Рабочий MVP с основными функциями',
          'Пошаговое руководство по запуску',
        ],
      },
      web: {
        title: 'Веб-приложения',
        price: '$8,000',
        features: [
          'Архитектура React/Next.js',
          'Масштабируемый бэкенд',
          'Встроенная SEO оптимизация',
          'Интеграция аналитики',
          'Админ-панель включена',
        ],
      },
      mobile: {
        title: 'Мобильные приложения',
        price: '$12,000',
        features: [
          'Разработка для iOS и Android',
          'Нативная производительность',
          'Push-уведомления',
          'Готовность к App Store',
          'Синхронизация в реальном времени',
        ],
      },
      ai: {
        title: 'AI Интеграция',
        price: '$3,000+',
        features: [
          'Интеграция ChatGPT/Claude API',
          'Кастомные AI-воркфлоу',
          'Решения компьютерного зрения',
          'Автоматизация процессов',
          'AI-функции в приложении',
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
      subtitle: 'Которые запустились, масштабировались и заработали миллионы.',
      viewCase: 'Смотреть кейс',
      projects: [
        {
          title: 'Бизнес-платформа',
          description: 'Универсальная платформа с управлением проектами, финансами, CRM и командной работой.',
          result: 'Привлекли $500K инвестиций',
          tags: ['React', 'Node.js', 'PostgreSQL'],
        },
        {
          title: 'Приложение для путешественников',
          description: 'Мобильное приложение, помогающее находить настоящие связи через интуитивный интерфейс.',
          result: '100K+ активных пользователей',
          tags: ['React Native', 'Firebase', 'Maps API'],
        },
        {
          title: 'Крипто-инвестиционная платформа',
          description: 'Чистое, надежное приложение для начинающих инвесторов с уверенным управлением.',
          result: '$2M под управлением',
          tags: ['Next.js', 'Web3', 'TradingView'],
        },
        {
          title: 'Сервис доставки еды',
          description: 'Локальная платформа доставки, соединяющая рестораны с клиентами в реальном времени.',
          result: '50K заказов/месяц',
          tags: ['Flutter', 'Node.js', 'Redis'],
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
      project: 'Расскажите о вашем проекте...',
      security: 'Проверка: сколько будет',
      answer: 'Ваш ответ',
      submit: 'Отправить',
      success: 'Спасибо! Я отвечу в течение 24 часов.',
      error: 'Что-то пошло не так. Попробуйте еще раз.',
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

