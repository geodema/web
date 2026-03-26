document.addEventListener("DOMContentLoaded", () => {
  const PAGE_KEY = document.body.dataset.page || "home";
  const LANG_STORAGE_KEY = "geodema-language";
  let currentLanguage = localStorage.getItem(LANG_STORAGE_KEY) || "ru";

  if (!["ru", "en"].includes(currentLanguage)) {
    currentLanguage = "ru";
  }

  const COUNTRY_TRANSLATIONS = {
    Германия: { ru: "Германия", en: "Germany" },
    Нидерланды: { ru: "Нидерланды", en: "Netherlands" },
    Польша: { ru: "Польша", en: "Poland" },
    Финляндия: { ru: "Финляндия", en: "Finland" },
    Россия: { ru: "Россия", en: "Russia" },
    Великобритания: { ru: "Великобритания", en: "United Kingdom" },
    Швеция: { ru: "Швеция", en: "Sweden" },
    Франция: { ru: "Франция", en: "France" },
    Австрия: { ru: "Австрия", en: "Austria" },
    Швейцария: { ru: "Швейцария", en: "Switzerland" },
    Испания: { ru: "Испания", en: "Spain" },
    Израиль: { ru: "Израиль", en: "Israel" },
    Канада: { ru: "Канада", en: "Canada" },
    США: { ru: "США", en: "USA" },
    Сингапур: { ru: "Сингапур", en: "Singapore" },
    Япония: { ru: "Япония", en: "Japan" },
    Филиппины: { ru: "Филиппины", en: "Philippines" },
    Казахстан: { ru: "Казахстан", en: "Kazakhstan" },
    Армения: { ru: "Армения", en: "Armenia" },
    Молдова: { ru: "Молдова", en: "Moldova" },
    ОАЭ: { ru: "ОАЭ", en: "UAE" },
    Гонконг: { ru: "Гонконг", en: "Hong Kong" },
    Турция: { ru: "Турция", en: "Turkey" },
    Индия: { ru: "Индия", en: "India" },
    Италия: { ru: "Италия", en: "Italy" },
    Норвегия: { ru: "Норвегия", en: "Norway" },
  };

  const CITY_TRANSLATIONS = {
    "Франкфурт-на-Майне": { ru: "Франкфурт-на-Майне", en: "Frankfurt am Main" },
    Амстердам: { ru: "Амстердам", en: "Amsterdam" },
    Варшава: { ru: "Варшава", en: "Warsaw" },
    Хельсинки: { ru: "Хельсинки", en: "Helsinki" },
    Москва: { ru: "Москва", en: "Moscow" },
    "Санкт-Петербург": { ru: "Санкт-Петербург", en: "Saint Petersburg" },
    Екатеринбург: { ru: "Екатеринбург", en: "Yekaterinburg" },
    Новосибирск: { ru: "Новосибирск", en: "Novosibirsk" },
    Хабаровск: { ru: "Хабаровск", en: "Khabarovsk" },
    Самара: { ru: "Самара", en: "Samara" },
    Лондон: { ru: "Лондон", en: "London" },
    Стокгольм: { ru: "Стокгольм", en: "Stockholm" },
    Париж: { ru: "Париж", en: "Paris" },
    Вена: { ru: "Вена", en: "Vienna" },
    Цюрих: { ru: "Цюрих", en: "Zurich" },
    Мадрид: { ru: "Мадрид", en: "Madrid" },
    "Петах-Тиква": { ru: "Петах-Тиква", en: "Petah Tikva" },
    Монреаль: { ru: "Монреаль", en: "Montreal" },
    Майами: { ru: "Майами", en: "Miami" },
    Сингапур: { ru: "Сингапур", en: "Singapore" },
    Токио: { ru: "Токио", en: "Tokyo" },
    Макати: { ru: "Макати", en: "Makati" },
    Алматы: { ru: "Алматы", en: "Almaty" },
    Ереван: { ru: "Ереван", en: "Yerevan" },
    Кишинев: { ru: "Кишинев", en: "Chisinau" },
    Дубай: { ru: "Дубай", en: "Dubai" },
    Гонконг: { ru: "Гонконг", en: "Hong Kong" },
    Стамбул: { ru: "Стамбул", en: "Istanbul" },
    Мумбаи: { ru: "Мумбаи", en: "Mumbai" },
    Милан: { ru: "Милан", en: "Milan" },
    Осло: { ru: "Осло", en: "Oslo" },
  };

  const TRANSLATIONS = {
    ru: {
      shared: {
        switcherLabel: "Выбрать язык",
        languageNames: {
          ru: "Русский",
          en: "English",
        },
        burgerAria: "Открыть меню",
        logoAria: "Geodema VPN",
        nav: ["Главная", "Преимущества", "Тарифы", "Заработок с Geodema"],
        login: "Войти",
        footerDescription:
          "Ваш доступ к анонимности и безопасному интернету. Защитите свою конфиденциальность с помощью надежного VPN-сервиса.",
        footerTelegram: "Telegram поддержка",
        footerCta: "Начать пользоваться",
        footerCopyright: "© 2025-2026 Geodema Network. Все права защищены.",
        footerDocsTitle: "Юридические документы",
        footerDocsLinks: [
          "Публичная оферта",
          "Условия подписки",
          "Политика возвратов и отмены",
          "Правила допустимого использования (AUP)",
          "Политика конфиденциальности",
          "Политика обработки ПДн (152-ФЗ) + Согласие",
          "Политика безопасности и ответственного раскрытия",
          "Политика жалоб",
          "SLA (Уровень сервиса)",
        ],
        footerRequisites: "Реквизиты",
        footerAddress:
          "Юридический адрес: 108826, город Москва, п Коммунарка, ул Потаповская Роща, д. 4 к. 4, помещ. 1/п",
        reviewPrev: "Предыдущий отзыв",
        reviewNext: "Следующий отзыв",
        reviewDot: (index) => `Перейти к отзыву ${index + 1}`,
        providerLabel: "Провайдер",
        serverPrev: "Предыдущий сервер",
        serverNext: "Следующий сервер",
        markerAria: (country, count) => `${country}: ${count} сервер(ов)`,
        docsDownload: "Скачать",
      },
      home: {
        heroTitle:
          'Ваш доступ к<br /><span class="hero-word" aria-live="polite">анонимности</span>',
        heroWords: [
          "анонимности",
          "свободе",
          "безопасности",
          "скорости",
          "масштабируемости",
        ],
        heroText:
          "Доступный инструмент цифровой свободы, избавьтесь от ограничений и слежек в любой стране",
        heroPrimary: "Подключиться сейчас",
        heroSecondary: "Посмотреть тарифы",
        usersLabel: "Пользователей",
        connectedLabel: "Соединено",
        connectedCountry: "Германия",
        whyTitle: 'Почему выбирают <span class="highlight">Geodema VPN</span>',
        whyText:
          "Обеспечиваем стабильную работу зарубежных сервисов и высокий уровень безопасности для всех пользователей",
        whyTabs: [
          {
            title: "Военное шифрование AES-256",
            text: "Современный протокол VLESS обеспечивает максимальную анонимность, ваш трафик не только зашифрован на военном уровне, но и неотличим от обычного веб-серфинга",
          },
          {
            title: "Высокая скорость до 40 Gbit/s",
            text: "Наши серверы подключены к выделенным каналам со скоростью до 10 Gbit/s. Это гарантирует мгновенную загрузку игр и торрентов, а также безупречное воспроизведение 4K-видео без задержек",
          },
          {
            title: "Поддержка всех устройств",
            text: "Единая защита для вашей техники. Сервис совместим с iOS, Android, Windows, macOS, Linux, Smart TV и даже домашними роутерами",
          },
          {
            title: "Политика No-Logs",
            text: "Мы не храним историю ваших посещений и IP-Адреса. Ваша активность в сети остается только вашей, нам просто нечего передавать третьим лицам",
          },
        ],
        aboutTitle: 'Как работает <span class="highlight">наш сервис</span>',
        aboutUnprotected: "Незащищено",
        aboutProtected: "Защищено",
        aboutUnlock: "Доступ ко всем сервисам разблокирован",
        aboutServices: ["TikTok", "Discord", "YouTube", "Все остальное"],
        mapAlt: "Карта локаций серверов",
        devicesTitle:
          'Доступ к свободному интернету <span class="highlight">на любом устройстве</span>',
        devicesText:
          "Поддержка Android, iOS, Windows, macOS, Linux, Smart TV, браузеров и роутеров",
        devicesAlt: "Иллюстрация подключения устройств",
        pricesTitle: 'Выберите <span class="highlight">подходящий тариф</span>',
        pricesText: "30-дневная гарантия возврата средств",
        pricesButtons: [
          "Попробовать",
          "Подключить",
          "Подключить",
          "Подключить",
          "Подключить",
        ],
        reviewsTitle: '<span class="highlight">Отзывы</span> наших клиентов',
        reviewsTexts: [
          "Один из лучших впнов что я видел, очень помогает мне с вувой и блокировками, всем советую. Геодема ванлав",
          "Проверял скорость, скорость намного выше, чем с другими впн, которыми я пользуюсь (в настоящее время пользовался). Быстро грузятся видео, даже с мобильном интернетом (Ютуб, 2к/4к). Много разных стран подключения, подойдёт всем, для разных задач. Крайне рекомендую",
          "Взял на полгода со скидкой подписку, спасибо большое за ваш сервис и вашу работу. Пользуюсь с сентября, примерно, еще когда геодема была полностью бесплатна. Единственный впн который работает стабильно и не стух после пары месяцев + постоянно улучшают, это действительно ощутимо. На компе юзаю через Clash Verge, на планшете и айфоне Hарр, и еще матушке на смарт ТВ подключил - очень удобно, что на все платформы есть. Проблем с установкой ни разу ни возникало. Живите, ребята, пожалуйста. Скоро вы станете единственным средством связи с миром, вся надежда на вас",
        ],
        variantsTitle: 'Зарабатывай с <span class="highlight">Geodema</span>',
        variantsCards: [
          {
            title: "Реферальная система",
            text: "Получайте дни подписки",
            reward: "50% днями",
            line: "Реферал купил подписку на месяц",
            result: "→ Вы получаете 15 дней бесплатно",
          },
          {
            title: "Партнерская система",
            text: "Получайте реальные деньги",
            reward: "50% деньгами",
            line: "Реферал купил подписку на месяц",
            result: "→ Вы получаете 149 ₽ на баланс",
          },
        ],
        variantsButton: "Узнать подробнее",
        faqTitle: 'Часто задаваемые <span class="highlight">вопросы</span>',
        faqText:
          "Напишите нам в Telegram, если не нашли здесь ответ на свой вопрос",
        faqQuestions: [
          "Работает ли VPN в России?",
          "На скольких устройствах я могу использовать одну подписку?",
          "Сложно ли это настроить человеку без опыта?",
          "Что делать, если у меня возникнут проблемы с подключением?",
        ],
        faqAnswers: [
          "Да. Мы используем протокол VLESS с военным шифрованием, который на данный момент является самым устойчивым к блокировкам. В отличие от обычных VPN, наш трафик маскируется под посещение обычного зарубежного сайта. Системы фильтрации (DPI) видят это как стандартное безопасное соединение, поэтому сервис продолжает работать стабильно, когда другие отключаются.",
          "До 10 устройств. Вы можете подключить все домашние устройства одновременно: смартфоны, планшеты, ноутбуки, Smart TV и даже настроить VPN на роутере, чтобы защитить всю сеть одним кликом.",
          "Совсем нет. После оплаты вы получите простую пошаговую инструкцию. Настройка на смартфоне или ПК занимает меньше 2 минут: достаточно скачать приложение и вставить ваш персональный ключ доступа.",
          "Наша служба поддержки работает ежедневно. Если что-то пойдет не так, откройте тикет в личном кабинете, живой оператор ответит в течение нескольких минут и поможет всё наладить.",
        ],
        ctaTitle: "Начните пользоваться безопасным интернетом уже сегодня",
        ctaText:
          "Регистрация и оплата пробного тарифа займёт меньше 5 минут, присоединяйтесь!",
        ctaButton: "Попробовать",
      },
      ref: {
        heroBadge: "Реферальная программа",
        heroTitle: "<span>Зарабатывайте</span> вместе с Geodema VPN",
        heroText:
          "Получайте щедрые вознаграждения за приглашенных пользователей, днями или деньгами.",
        calcBadge: "Калькулятор доходности",
        calcTitle:
          'Посчитайте, сколько сможете зарабатывать <span class="highlight">ежемесячно</span>',
        calcText:
          "Калькулятор основан на месячном тарифе. При покупке рефералом подписки на больший срок ваша выплата увеличится, так как комиссия составляет фиксированные 50% от любой суммы покупки.",
        calcStats: [
          "Стоимость подписки",
          "Ваш процент",
          "Начисление с 1 оплаты",
        ],
        calcEyebrow: "Сколько людей вы пригласили",
        calcYear: "За год",
        calcIncome: "Ваш ежемесячный доход",
        calcAccruals: "Начисления",
        calcPill: "1 реферал = 149 ₽ / мес",
        variantsTitle: 'Две системы <span class="highlight">на выбор</span>',
        variantsCards: [
          {
            badge: "Для всех",
            title: "Реферальная система",
            text: "Получайте дни подписки",
            reward: "50% днями",
            line: "Реферал купил подписку на месяц",
            result: "→ Вы получаете 15 дней бесплатно",
          },
          {
            badge: "Для бизнеса",
            title: "Партнерская система",
            text: "Получайте реальные деньги",
            reward: "50% деньгами",
            line: "Реферал купил подписку на месяц",
            result: "→ Вы получаете 149 ₽ на баланс",
          },
        ],
        detailsBadge: "Как работает реферальная система",
        detailsTitle:
          'Дальше — всё, что важно знать <span class="highlight">о программе</span>',
        detailsText:
          "Получайте пожизненные отчисления с каждого привлеченного пользователя, пока он остается с нами. Мы обеспечиваем международные выплаты на ваши реквизиты и предоставляем все необходимые промо-материалы для быстрого старта.",
        detailsCards: [
          {
            title: "С каждой оплаты реферала",
            text: "Получайте 50% с каждой оплаты пожизненно на протяжении всего времени, пока ваш реферал пользуется сервисом.",
          },
          {
            title: "Выплаты на любые методы",
            text: "СБП, карта, крипта, электронные кошельки и вывод на зарубежные банки любых стран.",
          },
          {
            title: "Работаем по всему миру",
            text: "США, Европа, Азия. Geodema VPN доступен везде. Мы обеспечиваем бесперебойную работу из любой точки планеты, чтобы вы конвертировали трафик по максимуму.",
          },
          {
            title: "Предоставим промо-материалы",
            text: "Мы предоставляем все необходимые промо-материалы: от качественных видео и фото до кликабельных превью и готовых креативов под любые рекламные площадки.",
          },
          {
            title: "Повышенная ставка до 70%",
            text: "Для партнеров со стабильным качественным трафиком мы предлагаем особые условия. Растите в объемах, и мы пересмотрим вашу ставку вплоть до 70% от каждой продажи.",
          },
        ],
        ctaTitle: "Начните зарабатывать уже сегодня",
        ctaText:
          "Присоединяйтесь к программе и получите свою реферальную ссылку",
        ctaButton: "Стать партнёром",
      },
      docs: {
        heroBadge: "Документация",
        heroTitle: "Юридические документы",
        heroText:
          "Все необходимые документы для безопасного использования сервиса",
        items: [
          ["Публичная оферта", "Порядок заключения договора и оплаты"],
          ["Условия подписки", "Условия предоставления услуг VPN-сервиса"],
          [
            "Политика возвратов и отмены",
            "Условия возврата средств и отмены услуг",
          ],
          [
            "Правила допустимого использования (AUP)",
            "Ограничения, запреты и нормы использования",
          ],
          [
            "Политика конфиденциальности",
            "Порядок сбора, хранения и защиты данных",
          ],
          [
            "Политика обработки ПДн (152-ФЗ) + Согласие",
            "Обработка персональных данных и согласие",
          ],
          [
            "Политика безопасности и ответственного раскрытия",
            "Защита сервиса и порядок сообщения об уязвимостях",
          ],
          ["Политика жалоб", "Подача, рассмотрение и сроки обработки жалоб"],
          [
            "SLA (Уровень сервиса)",
            "Показатели доступности и поддержки сервиса",
          ],
        ],
      },
    },

    en: {
      shared: {
        switcherLabel: "Choose language",
        languageNames: {
          ru: "Russian",
          en: "English",
        },
        burgerAria: "Open menu",
        logoAria: "Geodema VPN",
        nav: ["Home", "Features", "Pricing", "Earn with Geodema"],
        login: "Log in",
        footerDescription:
          "Your access to privacy and a safer internet. Protect your confidentiality with a reliable VPN service.",
        footerTelegram: "Telegram support",
        footerCta: "Get started",
        footerCopyright: "© 2025-2026 Geodema Network. All rights reserved.",
        footerDocsTitle: "Legal documents",
        footerDocsLinks: [
          "Public offer",
          "Subscription terms",
          "Refund and cancellation policy",
          "Acceptable Use Policy (AUP)",
          "Privacy policy",
          "Personal data processing policy (152-FZ) + Consent",
          "Security and responsible disclosure policy",
          "Complaints policy",
          "SLA (Service level agreement)",
        ],
        footerRequisites: "Company details",
        footerAddress:
          "Legal address: 108826, Moscow, Kommunarka settlement, Potapovskaya Roshcha St., 4 bld. 4, premises 1/p",
        reviewPrev: "Previous review",
        reviewNext: "Next review",
        reviewDot: (index) => `Go to review ${index + 1}`,
        providerLabel: "Provider",
        serverPrev: "Previous server",
        serverNext: "Next server",
        markerAria: (country, count) => `${country}: ${count} server(s)`,
        docsDownload: "Download",
      },
      home: {
        heroTitle:
          'Your access to<br /><span class="hero-word" aria-live="polite">privacy</span>',
        heroWords: ["privacy", "freedom", "security", "speed", "scale"],
        heroText:
          "An affordable digital freedom tool — get rid of restrictions and surveillance in any country.",
        heroPrimary: "Connect now",
        heroSecondary: "View pricing",
        usersLabel: "Users",
        connectedLabel: "Connected",
        connectedCountry: "Germany",
        whyTitle: 'Why users choose <span class="highlight">Geodema VPN</span>',
        whyText:
          "We provide stable access to international services and a high level of security for every user.",
        whyTabs: [
          {
            title: "Military-grade AES-256 encryption",
            text: "The modern VLESS protocol delivers maximum privacy. Your traffic is encrypted at a military-grade level and looks like regular web browsing.",
          },
          {
            title: "High speed up to 40 Gbit/s",
            text: "Our servers are connected to dedicated channels up to 10 Gbit/s. That means instant downloads, smooth gaming, torrents, and flawless 4K streaming without delays.",
          },
          {
            title: "Support for all devices",
            text: "One layer of protection for all your devices. The service works with iOS, Android, Windows, macOS, Linux, Smart TV and even home routers.",
          },
          {
            title: "No-Logs policy",
            text: "We do not store your browsing history or IP addresses. Your online activity stays yours — we simply have nothing to hand over to third parties.",
          },
        ],
        aboutTitle: 'How <span class="highlight">our service</span> works',
        aboutUnprotected: "Unprotected",
        aboutProtected: "Protected",
        aboutUnlock: "Access to all services is unlocked",
        aboutServices: ["TikTok", "Discord", "YouTube", "Everything else"],
        mapAlt: "Map of server locations",
        devicesTitle:
          'Free internet access <span class="highlight">on any device</span>',
        devicesText:
          "Support for Android, iOS, Windows, macOS, Linux, Smart TV, browsers and routers.",
        devicesAlt: "Device connection illustration",
        pricesTitle: 'Choose the <span class="highlight">right plan</span>',
        pricesText: "30-day money-back guarantee",
        pricesButtons: ["Try now", "Connect", "Connect", "Connect", "Connect"],
        reviewsTitle: '<span class="highlight">Customer reviews</span>',
        reviewsTexts: [
          "One of the best VPNs I have seen. It helps a lot with blocks and restrictions. Highly recommended. Geodema is love.",
          "I tested the speed and it is much better than with other VPNs I use. Videos load fast even on mobile internet (YouTube, 2K/4K). There are many countries to connect through, so it works for many different tasks. Highly recommended.",
          "I bought a six-month discounted plan, thank you so much for your service and your work. I have been using it since September, back when Geodema was still fully free. It is the only VPN that has stayed stable and did not die after a couple of months, and they keep improving it all the time — you can really feel that. On my PC I use Clash Verge, on my tablet and iPhone I use Hарр, and I even connected it on my mom’s Smart TV. It is really convenient that there are options for every platform. I have never had installation issues. Please keep going, guys. Soon you may become the only connection to the outside world.",
        ],
        variantsTitle: 'Earn with <span class="highlight">Geodema</span>',
        variantsCards: [
          {
            title: "Referral program",
            text: "Earn subscription days",
            reward: "50% in days",
            line: "Your referral bought a monthly subscription",
            result: "→ You get 15 days for free",
          },
          {
            title: "Partner program",
            text: "Earn real money",
            reward: "50% in cash",
            line: "Your referral bought a monthly subscription",
            result: "→ You get 149 ₽ to your balance",
          },
        ],
        variantsButton: "Learn more",
        faqTitle: 'Frequently asked <span class="highlight">questions</span>',
        faqText: "Write to us on Telegram if you did not find the answer here.",
        faqQuestions: [
          "Does the VPN work in Russia?",
          "How many devices can I use with one subscription?",
          "Is it hard to set up for someone without experience?",
          "What should I do if I have connection issues?",
        ],
        faqAnswers: [
          "Yes. We use the VLESS protocol with military-grade encryption, which is currently one of the most resistant to blocking. Unlike regular VPNs, our traffic is disguised as normal access to a common foreign website. DPI filtering systems see it as a standard secure connection, so the service keeps working when others stop.",
          "Up to 10 devices. You can connect all household devices at once: smartphones, tablets, laptops, Smart TVs, and even configure VPN on your router to protect the whole network.",
          "Not at all. After payment you receive a simple step-by-step guide. Setup on a phone or PC takes less than 2 minutes: just install the app and paste your personal access key.",
          "Our support team works every day. If something goes wrong, open a ticket in your account and a real operator will reply within minutes and help you fix everything.",
        ],
        ctaTitle: "Start using a safer internet today",
        ctaText:
          "Registration and payment for the trial plan take less than 5 minutes — join us.",
        ctaButton: "Try now",
      },
      ref: {
        heroBadge: "Referral program",
        heroTitle: "<span>Earn</span> with Geodema VPN",
        heroText:
          "Get generous rewards for invited users — in subscription days or real money.",
        calcBadge: "Revenue calculator",
        calcTitle:
          'Estimate how much you can earn <span class="highlight">every month</span>',
        calcText:
          "The calculator is based on the monthly plan. If your referral buys a longer subscription, your payout increases, because the commission is a fixed 50% of any purchase amount.",
        calcStats: [
          "Subscription price",
          "Your share",
          "Paid from the 1st purchase",
        ],
        calcEyebrow: "How many people did you invite",
        calcYear: "Per year",
        calcIncome: "Your monthly income",
        calcAccruals: "Accruals",
        calcPill: "1 referral = 149 ₽ / month",
        variantsTitle:
          'Two systems <span class="highlight">to choose from</span>',
        variantsCards: [
          {
            badge: "For everyone",
            title: "Referral program",
            text: "Earn subscription days",
            reward: "50% in days",
            line: "Your referral bought a monthly subscription",
            result: "→ You get 15 days for free",
          },
          {
            badge: "For business",
            title: "Partner program",
            text: "Earn real money",
            reward: "50% in cash",
            line: "Your referral bought a monthly subscription",
            result: "→ You get 149 ₽ to your balance",
          },
        ],
        detailsBadge: "How the referral program works",
        detailsTitle:
          'Everything you need to know <span class="highlight">about the program</span>',
        detailsText:
          "Receive lifetime payouts from every user you bring in while they stay with us. We provide international payouts to your payment details and all the promo materials you need for a fast start.",
        detailsCards: [
          {
            title: "From every referral payment",
            text: "Get 50% from every payment for life for as long as your referral keeps using the service.",
          },
          {
            title: "Payouts to any methods",
            text: "SBP, bank card, crypto, e-wallets and payouts to foreign banks in any country.",
          },
          {
            title: "We work worldwide",
            text: "USA, Europe, Asia. Geodema VPN is available everywhere. We ensure stable operation from any point on the planet so you can maximize traffic conversion.",
          },
          {
            title: "We provide promo materials",
            text: "We provide all necessary promo materials: quality videos and images, clickable previews and ready-made creatives for any ad platforms.",
          },
          {
            title: "Higher rate up to 70%",
            text: "For partners with stable high-quality traffic we offer special terms. Grow your volumes and we will review your rate up to 70% of every sale.",
          },
        ],
        ctaTitle: "Start earning today",
        ctaText: "Join the program and get your referral link.",
        ctaButton: "Become a partner",
      },
      docs: {
        heroBadge: "Documentation",
        heroTitle: "Legal documents",
        heroText: "All the documents you need to use the service safely.",
        items: [
          ["Public offer", "Rules for contract conclusion and payment"],
          ["Subscription terms", "VPN service terms and conditions"],
          [
            "Refund and cancellation policy",
            "Rules for refunds and service cancellation",
          ],
          [
            "Acceptable Use Policy (AUP)",
            "Restrictions, prohibitions and usage rules",
          ],
          ["Privacy policy", "How we collect, store and protect data"],
          [
            "Personal data processing policy (152-FZ) + Consent",
            "Personal data processing and consent",
          ],
          [
            "Security and responsible disclosure policy",
            "Service security and vulnerability disclosure procedure",
          ],
          [
            "Complaints policy",
            "Complaint submission, review and processing timeframes",
          ],
          [
            "SLA (Service level agreement)",
            "Service availability and support metrics",
          ],
        ],
      },
    },
  };

  const getText = (value) => {
    if (typeof value === "string") return value;
    if (value && typeof value === "object") {
      return value[currentLanguage] || value.ru || "";
    }
    return "";
  };

  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) =>
    Array.from(scope.querySelectorAll(selector));

  const setText = (selector, value, scope = document) => {
    const node = typeof selector === "string" ? qs(selector, scope) : selector;
    if (!node) return;
    node.textContent = value;
  };

  const setHTML = (selector, value, scope = document) => {
    const node = typeof selector === "string" ? qs(selector, scope) : selector;
    if (!node) return;
    node.innerHTML = value;
  };

  const setAttr = (selector, attr, value, scope = document) => {
    const node = typeof selector === "string" ? qs(selector, scope) : selector;
    if (!node) return;
    node.setAttribute(attr, value);
  };

  const setAllText = (selector, values, scope = document) => {
    qsa(selector, scope).forEach((node, index) => {
      if (typeof values[index] === "undefined") return;
      node.textContent = values[index];
    });
  };

  function applySharedTranslations() {
    const t = TRANSLATIONS[currentLanguage].shared;

    document.documentElement.lang = currentLanguage;
    document.documentElement.setAttribute("data-lang", currentLanguage);

    setAttr(".logo", "aria-label", t.logoAria);
    setAttr(".burger", "aria-label", t.burgerAria);

    setAllText(".navbar .navbar__item", t.nav);
    setText(".header__actions .btn.main", t.login);

    const footerCols = qsa(".footer__container > div");
    const footerMain = footerCols[0];
    const footerDocs = footerCols[1];
    const footerReqs = footerCols[2];

    if (footerMain) {
      const directChildren = Array.from(footerMain.children);

      const description = directChildren.find((el) => el.tagName === "P");
      if (description) {
        description.textContent = t.footerDescription;
      }

      const footerCta = qs("footer .footer__cta");
      if (footerCta) {
        footerCta.textContent = t.footerCta;
      }

      const supportLink = directChildren.find(
        (el) =>
          el.tagName === "A" &&
          (el.getAttribute("href") || "").includes("t.me"),
      );
      if (supportLink) {
        supportLink.innerHTML = `${t.footerTelegram}<br /><span>@Geodema_support</span>`;
      }

      const copyright = directChildren.find((el) => el.tagName === "SPAN");
      if (copyright) {
        copyright.textContent = t.footerCopyright;
      }
    }

    if (footerDocs) {
      const docsTitle = footerDocs.firstElementChild;
      if (docsTitle) {
        docsTitle.textContent = t.footerDocsTitle;
      }

      const docsLinks = footerDocs.querySelectorAll("ul li a");
      docsLinks.forEach((link, index) => {
        if (typeof t.footerDocsLinks[index] !== "undefined") {
          link.textContent = t.footerDocsLinks[index];
        }
      });
    }

    if (footerReqs) {
      const reqsTitle = footerReqs.querySelector(":scope > span");
      if (reqsTitle) {
        reqsTitle.textContent = t.footerRequisites;
      }

      const addressItem = footerReqs.querySelector(
        "div > ul > li:nth-child(3)",
      );
      if (addressItem) {
        addressItem.textContent = t.footerAddress;
      }
    }

    setAttr(".reviews__arrow--prev", "aria-label", t.reviewPrev);
    setAttr(".reviews__arrow--next", "aria-label", t.reviewNext);
  }

  function applyHomeTranslations() {
    const t = TRANSLATIONS[currentLanguage].home;

    setHTML(".home h1", t.heroTitle);
    setText(".home > .container > p", t.heroText);
    setText(".home .buttons .btn.main", t.heroPrimary);
    setText(".home .buttons .btn:not(.main)", t.heroSecondary);
    setText(".users span:first-of-type", t.usersLabel);
    setText(".germany > span", t.connectedLabel);
    setText(".germany div span", t.connectedCountry);

    setHTML(".why header h2", t.whyTitle);
    setText(".why header p", t.whyText);

    qsa(".why__tab").forEach((tab, index) => {
      const item = t.whyTabs[index];
      if (!item) return;
      const title = tab.querySelector("h3");
      const text = tab.querySelector("p");
      if (title) title.textContent = item.title;
      if (text) text.textContent = item.text;
    });

    setHTML(".about h2", t.aboutTitle);
    setText("#aboutPacketDanger .flow-packet__badge", t.aboutUnprotected);
    setText("#aboutPacketSafe .flow-packet__badge", t.aboutProtected);
    setText("#aboutResult > span", t.aboutUnlock);

    qsa("#aboutResult .item").forEach((item, index) => {
      const label =
        item.querySelector("span:last-child") ||
        item.childNodes[item.childNodes.length - 1];
      if (!t.aboutServices || typeof t.aboutServices[index] === "undefined")
        return;

      if (label && label.nodeType === Node.ELEMENT_NODE) {
        label.textContent = t.aboutServices[index];
        return;
      }

      const textNode = Array.from(item.childNodes).find(
        (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
      );

      if (textNode) {
        textNode.textContent = ` ${t.aboutServices[index]}`;
      }
    });

    setAttr(".map__img", "alt", t.mapAlt);

    setHTML(".illustration h2", t.devicesTitle);
    setText(".illustration p", t.devicesText);
    setAttr(".illustration__image", "alt", t.devicesAlt);

    setHTML(".prices h2", t.pricesTitle);
    setText(".prices header p", t.pricesText);

    const priceItems =
      currentLanguage === "ru"
        ? [
            {
              term: "3 дня",
              price: "10₽",
              meta: "Пробный тариф",
              button: "Попробовать",
            },
            {
              term: "30 дней",
              price: "299₽",
              meta: "В месяц: 299₽",
              button: "Подключить",
            },
            {
              term: "90 дней",
              price: "799₽",
              meta: "В месяц: 266₽",
              button: "Подключить",
            },
            {
              term: "180 дней",
              price: "1299₽",
              meta: "В месяц: 216₽",
              button: "Подключить",
            },
            {
              term: "360 дней",
              price: "1999₽",
              meta: "В месяц: 166₽",
              button: "Подключить",
            },
          ]
        : [
            {
              term: "3 days",
              price: "10₽",
              meta: "Trial plan",
              button: "Try now",
            },
            {
              term: "30 days",
              price: "299₽",
              meta: "Per month: 299₽",
              button: "Connect",
            },
            {
              term: "90 days",
              price: "799₽",
              meta: "Per month: 266₽",
              button: "Connect",
            },
            {
              term: "180 days",
              price: "1299₽",
              meta: "Per month: 216₽",
              button: "Connect",
            },
            {
              term: "360 days",
              price: "1999₽",
              meta: "Per month: 166₽",
              button: "Connect",
            },
          ];

    qsa(".prices .item").forEach((card, index) => {
      const item = priceItems[index];
      if (!item) return;

      const term = card.querySelector(":scope > span");
      const metaSpans = card.querySelectorAll(":scope > div > span");
      const button = card.querySelector(".btn");

      if (term) term.textContent = item.term;
      if (metaSpans[0]) metaSpans[0].textContent = item.price;
      if (metaSpans[1]) metaSpans[1].textContent = item.meta;
      if (button) button.textContent = item.button;
    });

    setHTML(".reviews h2", t.reviewsTitle);
    qsa(".review-card p").forEach((node, index) => {
      if (t.reviewsTexts[index]) node.textContent = t.reviewsTexts[index];
    });

    setHTML(".variants h2", t.variantsTitle);
    qsa(".variants .variants__container > div > div").forEach((card, index) => {
      const item = t.variantsCards[index];
      if (!item) return;

      const children = Array.from(card.children);
      const contentBlock = children.find(
        (el) => el.tagName === "DIV" && el.querySelector("h3"),
      );
      const reward = card.querySelector(".reward");
      const resultBlock = children[children.length - 1];

      const title = contentBlock ? contentBlock.querySelector("h3") : null;
      const text = contentBlock ? contentBlock.querySelector("p") : null;
      const line = resultBlock ? resultBlock.querySelector("span") : null;
      const result = resultBlock ? resultBlock.querySelector("p") : null;

      if (title) title.textContent = item.title;
      if (text) text.textContent = item.text;
      if (reward) reward.textContent = item.reward;
      if (line) line.textContent = item.line;
      if (result) result.textContent = item.result;
    });
    setText(".variants .btn.main", t.variantsButton);

    setHTML(".faq h2", t.faqTitle);
    setText(".faq > .container > div:first-child > p", t.faqText);
    qsa(".faq-question > span:first-child").forEach((node, index) => {
      if (t.faqQuestions[index]) node.textContent = t.faqQuestions[index];
    });
    qsa(".faq .answer").forEach((node, index) => {
      if (t.faqAnswers[index]) node.textContent = t.faqAnswers[index];
    });

    setText(".cta h2", t.ctaTitle);
    setText(".cta p", t.ctaText);
    setText(".cta .btn.main", t.ctaButton);
  }

  function applyRefTranslations() {
    const t = TRANSLATIONS[currentLanguage].ref;

    setText(".ref__home .badge", t.heroBadge);
    setHTML(".ref__home h1", t.heroTitle);
    setText(".ref__home p", t.heroText);

    setText(".ref-profit .badge", t.calcBadge);
    setHTML(".ref-profit h2", t.calcTitle);
    setText(".ref-profit h2 + p", t.calcText);
    setAllText(
      ".ref-profit__stats .ref-profit__stat span:first-child",
      t.calcStats,
    );
    setText(".ref-profit__eyebrow", t.calcEyebrow);
    setText(".ref-profit__result > span", t.calcIncome);
    setText(".ref-profit__pill", t.calcPill);

    const range = qs("[data-ref-range]");
    if (range) {
      range.setAttribute(
        "aria-label",
        currentLanguage === "ru"
          ? "Количество приглашённых пользователей"
          : "Number of invited users",
      );
    }

    const fromLabels = qsa(".ref-profit__from");
    fromLabels.forEach((node) => {
      node.textContent = currentLanguage === "ru" ? "от" : "from";
    });

    const summaryBlocks = qsa(".ref-profit__summary > div");
    if (summaryBlocks[0]) {
      const title = summaryBlocks[0].querySelector("span");
      if (title) title.textContent = t.calcYear;
    }
    if (summaryBlocks[1]) {
      const title = summaryBlocks[1].querySelector("span");
      const value = summaryBlocks[1].querySelector("strong");
      if (title) title.textContent = t.calcAccruals;
      if (value) {
        value.textContent =
          currentLanguage === "ru" ? "пожизненно" : "lifetime";
      }
    }

    setHTML(".variants h2", t.variantsTitle);

    qsa(".variants .variants__container > div > div").forEach((card, index) => {
      const item = t.variantsCards[index];
      if (!item) return;

      const headerBadge = card.querySelector("header > span");
      if (headerBadge) headerBadge.textContent = item.badge;

      const title = card.querySelector("h3");
      if (title) title.textContent = item.title;

      const descriptionBlock = card.children[1];
      if (descriptionBlock) {
        const text = descriptionBlock.querySelector("p");
        if (text) text.textContent = item.text;
      }

      const reward = card.querySelector(".reward");
      if (reward) reward.textContent = item.reward;

      const resultBlock = card.lastElementChild;
      if (resultBlock) {
        const line = resultBlock.querySelector("span");
        const result = resultBlock.querySelector("p");
        if (line) line.textContent = item.line;
        if (result) result.textContent = item.result;
      }
    });

    setText(".ref-details .badge", t.detailsBadge);
    setHTML(".ref-details h2", t.detailsTitle);
    setText(".ref-details__intro > p", t.detailsText);

    qsa(".ref-details__card").forEach((card, index) => {
      const item = t.detailsCards[index];
      if (!item) return;
      setText("h3", item.title, card);
      setText("p", item.text, card);
    });

    setText(".cta h2", t.ctaTitle);
    setText(".cta p", t.ctaText);
    setText(".cta .btn.main", t.ctaButton);
  }

  function applyDocsTranslations() {
    const t = TRANSLATIONS[currentLanguage].docs;
    const shared = TRANSLATIONS[currentLanguage].shared;

    setText(".ref__home .badge", t.heroBadge);
    setText(".ref__home h1", t.heroTitle);
    setText(".ref__home p", t.heroText);

    qsa(".docs__list .item").forEach((item, index) => {
      const pair = t.items[index];
      if (!pair) return;

      const content = item.querySelector("header > div:last-child");
      if (content) {
        const spans = content.querySelectorAll("span");
        if (spans[0]) spans[0].textContent = pair[0];
        if (spans[1]) spans[1].textContent = pair[1];
      }

      const btn = item.querySelector(".btn.main");
      if (btn) {
        const icon = btn.querySelector("svg");
        btn.innerHTML = `${icon ? icon.outerHTML : ""} ${shared.docsDownload}`;
      }
    });
  }

  function syncLanguageSwitcher() {
    const switcher = qs(".language-switcher");
    if (!switcher) return;

    const trigger = qs(".language__trigger", switcher);
    const current = qs(".language__current", switcher);
    const options = qsa(".language__option", switcher);
    const shared = TRANSLATIONS[currentLanguage].shared;

    if (trigger) {
      trigger.setAttribute("aria-label", shared.switcherLabel);
    }

    if (current) {
      current.textContent = currentLanguage.toUpperCase();
    }

    options.forEach((option) => {
      const lang = option.dataset.lang;
      const checked = lang === currentLanguage;
      option.setAttribute("aria-checked", String(checked));
      const label = option.querySelector(".language__option-label");
      if (label) {
        label.textContent = shared.languageNames[lang];
      }
    });
  }

  function applyTranslations() {
    applySharedTranslations();

    if (PAGE_KEY === "home") applyHomeTranslations();
    if (PAGE_KEY === "ref") applyRefTranslations();
    if (PAGE_KEY === "docs") applyDocsTranslations();

    syncLanguageSwitcher();

    document.dispatchEvent(
      new CustomEvent("app:languagechange", {
        detail: { language: currentLanguage, page: PAGE_KEY },
      }),
    );
  }

  function setLanguage(nextLanguage) {
    if (!["ru", "en"].includes(nextLanguage)) return;
    currentLanguage = nextLanguage;
    localStorage.setItem(LANG_STORAGE_KEY, nextLanguage);
    applyTranslations();
  }

  function initLanguageSwitcher() {
    const switcher = qs(".language-switcher");
    if (!switcher) return;

    const trigger = qs(".language__trigger", switcher);
    const menu = qs(".language__menu", switcher);
    const options = qsa(".language__option", switcher);

    if (!trigger || !menu || !options.length) return;

    const open = () => {
      switcher.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    };

    const close = () => {
      switcher.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
    };

    const toggle = () => {
      if (switcher.classList.contains("is-open")) close();
      else open();
    };

    trigger.addEventListener("click", (event) => {
      event.stopPropagation();
      toggle();
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        setLanguage(option.dataset.lang);
        close();
      });
    });

    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Node)) return;
      if (!switcher.contains(event.target)) {
        close();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        close();
      }
    });
  }
  const onResize = debounce(() => {
    document.dispatchEvent(new CustomEvent("app:resize"));
  }, 120);

  window.addEventListener("resize", onResize);

  initLanguageSwitcher();
  applyTranslations();

  initBurgerMenu();
  initHeroWordRotator();
  initWhyFeatureTabs();
  initAboutFlowAnimation();
  initReviewsSlider();
  initFaqAccordion();
  initServerMap();
  initReferralCalculator();
  initCtaBackground();
  initScrollReveal();

  function initBurgerMenu() {
    const burger = document.querySelector(".burger");
    const mobileMenu = document.querySelector(".header__nav");
    const menuLinks = document.querySelectorAll(".header__nav a");
    const desktopBreakpoint = window.matchMedia("(min-width: 993px)");

    if (!burger || !mobileMenu) return;

    const setMenuState = (isOpen) => {
      burger.classList.toggle("active", isOpen);
      mobileMenu.classList.toggle("active", isOpen);
      burger.setAttribute("aria-expanded", String(isOpen));
      burger.setAttribute(
        "aria-label",
        currentLanguage === "ru"
          ? isOpen
            ? "Закрыть меню"
            : "Открыть меню"
          : isOpen
            ? "Close menu"
            : "Open menu",
      );
      document.body.classList.toggle("menu-open", isOpen);
    };

    const closeMenu = () => setMenuState(false);
    const toggleMenu = () => {
      const isOpen = mobileMenu.classList.contains("active");
      setMenuState(!isOpen);
    };

    burger.addEventListener("click", toggleMenu);

    menuLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      const target = event.target;

      if (!(target instanceof Node)) return;

      const clickedInsideMenu = mobileMenu.contains(target);
      const clickedBurger = burger.contains(target);

      if (!clickedInsideMenu && !clickedBurger) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    const handleDesktopChange = (event) => {
      if (event.matches) {
        closeMenu();
      }
    };

    if (typeof desktopBreakpoint.addEventListener === "function") {
      desktopBreakpoint.addEventListener("change", handleDesktopChange);
    } else {
      desktopBreakpoint.addListener(handleDesktopChange);
    }

    document.addEventListener("app:languagechange", () => {
      const isOpen = mobileMenu.classList.contains("active");
      burger.setAttribute(
        "aria-label",
        currentLanguage === "ru"
          ? isOpen
            ? "Закрыть меню"
            : "Открыть меню"
          : isOpen
            ? "Close menu"
            : "Open menu",
      );
    });
  }

  function initHeroWordRotator() {
    const getHeroWord = () => document.querySelector(".hero-word");
    const initialHeroWord = getHeroWord();

    if (!initialHeroWord) return;

    const scrambleChars = "^*#@&%$!?~+=/\\|<>[]{}_-";
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const getWords = () => TRANSLATIONS[currentLanguage].home.heroWords;

    let currentIndex = 0;
    let rotationStopped = false;
    let rotationToken = 0;

    const randomChar = () =>
      scrambleChars[Math.floor(Math.random() * scrambleChars.length)];

    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const setWordText = (value) => {
      const heroWord = getHeroWord();
      if (!heroWord) return;
      heroWord.textContent = value;
    };

    const setAnimating = (state) => {
      const heroWord = getHeroWord();
      if (!heroWord) return;
      heroWord.classList.toggle("is-animating", state);
    };

    const setMinWidth = () => {
      const heroWord = getHeroWord();
      if (!heroWord) return;

      const words = getWords();
      const maxWordLength = Math.max(...words.map((word) => word.length));
      heroWord.style.minWidth = `${maxWordLength}ch`;
    };

    function getNoise(length) {
      let noise = "";
      for (let i = 0; i < length; i += 1) {
        noise += randomChar();
      }
      return noise;
    }

    function buildFrame(targetWord, fixedCount, activeChar = null) {
      const revealedPart = targetWord.slice(0, fixedCount);
      const currentChar = activeChar !== null ? activeChar : "";
      const tailLength = Math.max(
        targetWord.length - fixedCount - (activeChar !== null ? 1 : 0),
        0,
      );
      const noisyTail = getNoise(tailLength);

      return revealedPart + currentChar + noisyTail;
    }

    async function scrambleToWord(nextWord, options = {}, token) {
      const {
        scrambleIterations = 5,
        scrambleSpeed = 55,
        revealDelay = 90,
        settleDelay = 320,
      } = options;

      if (prefersReducedMotion) {
        setWordText(nextWord);
        return;
      }

      setAnimating(true);

      setWordText(getNoise(nextWord.length));
      await wait(180);
      if (token !== rotationToken || rotationStopped) return;

      for (let fixedCount = 0; fixedCount < nextWord.length; fixedCount += 1) {
        if (rotationStopped || token !== rotationToken) return;

        for (let i = 0; i < scrambleIterations; i += 1) {
          if (rotationStopped || token !== rotationToken) return;

          setWordText(buildFrame(nextWord, fixedCount, randomChar()));
          await wait(scrambleSpeed);

          if (rotationStopped || token !== rotationToken) return;
        }

        setWordText(buildFrame(nextWord, fixedCount, nextWord[fixedCount]));
        await wait(revealDelay);

        if (rotationStopped || token !== rotationToken) return;
      }

      setWordText(nextWord);
      await wait(settleDelay);

      if (token !== rotationToken || rotationStopped) return;
      setAnimating(false);
    }

    async function scrambleOutWord(fromWord, toWord, options = {}, token) {
      const {
        scrambleOutIterations = 7,
        scrambleOutSpeed = 90,
        scrambleOutHold = 180,
      } = options;

      const noiseLength = Math.max(fromWord.length, toWord.length);

      if (prefersReducedMotion) {
        setWordText(getNoise(noiseLength));
        return;
      }

      setAnimating(true);

      for (let i = 0; i < scrambleOutIterations; i += 1) {
        if (rotationStopped || token !== rotationToken) return;

        setWordText(getNoise(noiseLength));
        await wait(scrambleOutSpeed);

        if (rotationStopped || token !== rotationToken) return;
      }

      setWordText(getNoise(noiseLength));
      await wait(scrambleOutHold);

      if (rotationStopped || token !== rotationToken) return;
    }

    async function runRotation(token) {
      const words = getWords();
      if (!words.length) return;

      let currentWord = words[0];
      currentIndex = 0;
      setMinWidth();
      setWordText(currentWord);

      await wait(1400);
      if (rotationStopped || token !== rotationToken) return;

      while (!rotationStopped && token === rotationToken) {
        const activeWords = getWords();
        currentIndex = (currentIndex + 1) % activeWords.length;
        const nextWord = activeWords[currentIndex];

        await scrambleOutWord(
          currentWord,
          nextWord,
          {
            scrambleOutIterations: 6,
            scrambleOutSpeed: 100,
            scrambleOutHold: 220,
          },
          token,
        );

        if (rotationStopped || token !== rotationToken) return;

        await scrambleToWord(
          nextWord,
          {
            scrambleIterations: 5,
            scrambleSpeed: 90,
            revealDelay: 120,
            settleDelay: 1450,
          },
          token,
        );

        if (rotationStopped || token !== rotationToken) return;

        currentWord = nextWord;
      }
    }

    const restartRotation = () => {
      if (document.body.dataset.page !== "home") return;

      rotationToken += 1;
      setAnimating(false);
      setMinWidth();

      const words = getWords();
      setWordText(words[0] || "");

      if (!prefersReducedMotion) {
        runRotation(rotationToken);
      }
    };

    document.addEventListener("app:languagechange", restartRotation);

    setMinWidth();
    setWordText(getWords()[0] || "");

    if (!prefersReducedMotion) {
      runRotation(rotationToken);
    }

    window.addEventListener("beforeunload", () => {
      rotationStopped = true;
      rotationToken += 1;
    });
  }

  function initWhyFeatureTabs() {
    const section = document.querySelector(".why");
    if (!section) return;

    const tabs = Array.from(section.querySelectorAll(".why__tab"));
    const panels = Array.from(section.querySelectorAll(".why__panel"));

    if (!tabs.length || !panels.length) return;

    const consolePanel = section.querySelector(
      '.why__panel[data-feature="encryption"]',
    );
    const speedPanel = section.querySelector(
      '.why__panel[data-feature="speed"]',
    );
    const devicesPanel = section.querySelector(
      '.why__panel[data-feature="devices"]',
    );
    const logsPanel = section.querySelector('.why__panel[data-feature="logs"]');

    let activeIndex = Math.max(
      0,
      tabs.findIndex((tab) => tab.classList.contains("is-active")),
    );

    let autoTimer = null;
    let speedRaf = null;
    let consoleInterval = null;
    let logsInterval = null;
    let pauseAutoUntil = 0;
    let consoleRunId = 0;

    const AUTO_DELAY = 5000;

    const encryptionSeeds = [
      "AES-256-GCM handshake",
      "x25519 key exchange",
      "TLS obfuscation layer",
      "ephemeral session key",
      "forward secrecy enabled",
      "secure tunnel established",
    ];

    const logsPool = [
      "browsing_history.db",
      "connections.log",
      "session_trace.tmp",
      "dns_cache.bin",
      "device_fingerprint.json",
      "geo_request.log",
      "traffic_dump.enc",
      "auth_attempts.txt",
      "route_table.cache",
      "resolver_debug.log",
    ];

    function stopAllAnimations() {
      if (consoleInterval) {
        clearInterval(consoleInterval);
        consoleInterval = null;
      }
      consoleRunId += 1;

      if (speedRaf) {
        cancelAnimationFrame(speedRaf);
        speedRaf = null;
      }

      if (logsInterval) {
        clearInterval(logsInterval);
        logsInterval = null;
      }

      if (devicesPanel) {
        devicesPanel.classList.remove("is-animating");
        const icons = devicesPanel.querySelectorAll(".icon");
        icons.forEach((icon) => {
          icon.style.animation = "none";
          icon.offsetHeight;
          icon.style.animation = "";
        });
      }

      if (logsPanel) {
        logsPanel
          .querySelectorAll(".logs__item")
          .forEach((item) => item.remove());
      }
    }

    function randomHexGroup(length) {
      const chars = "ABCDEF0123456789";
      return Array.from(
        { length },
        () => chars[Math.floor(Math.random() * chars.length)],
      ).join("");
    }

    function randomEncLine() {
      const templates = [
        `0x${randomHexGroup(8)}::${randomHexGroup(16)}::${randomHexGroup(8)}`,
        `enc:${randomHexGroup(12)}-${randomHexGroup(12)}-${randomHexGroup(8)}`,
        `key[${randomHexGroup(4)}] ${randomHexGroup(8)}:${randomHexGroup(8)}:${randomHexGroup(8)}`,
        `tls/${randomHexGroup(4)} aes256 ${randomHexGroup(6)} ${randomHexGroup(10)}`,
        `iv=${randomHexGroup(16)} tag=${randomHexGroup(16)}`,
        `seed:${randomHexGroup(10)} nonce:${randomHexGroup(12)}`,
      ];

      return templates[Math.floor(Math.random() * templates.length)];
    }

    function typeText(node, text, speed = 18, runId = 0) {
      if (!node) return Promise.resolve();

      return new Promise((resolve) => {
        let index = 0;
        node.textContent = "";

        const step = () => {
          if (runId !== consoleRunId) {
            resolve(false);
            return;
          }

          index += 1;
          node.textContent = text.slice(0, index);

          if (index < text.length) {
            setTimeout(step, speed);
            return;
          }

          resolve(true);
        };

        step();
      });
    }

    async function startConsoleAnimation() {
      if (!consolePanel) return;

      const rows = consolePanel.querySelectorAll(".main span");
      if (rows.length < 6) return;

      const middleRows = [rows[1], rows[2], rows[3], rows[4]];

      const resetRows = () => {
        rows.forEach((row) => {
          row.textContent = "";
        });
      };

      const runCycle = async (runId) => {
        if (runId !== consoleRunId) return;

        resetRows();

        rows[0].textContent =
          encryptionSeeds[Math.floor(Math.random() * encryptionSeeds.length)];

        for (const row of middleRows) {
          const completed = await typeText(row, randomEncLine(), 16, runId);
          if (!completed || runId !== consoleRunId) return;
          await wait(70);
          if (runId !== consoleRunId) return;
        }

        await typeText(rows[5], "secure channel established", 20, runId);
      };

      consoleRunId += 1;
      const runId = consoleRunId;

      await runCycle(runId);

      consoleInterval = setInterval(() => {
        if (runId !== consoleRunId) return;
        runCycle(runId);
      }, 3200);
    }

    function startSpeedAnimation() {
      if (!speedPanel) return;

      const track = speedPanel.querySelector(".speedometer__track");
      const arrow = speedPanel.querySelector(".speedometer__arrow");
      const value = speedPanel.querySelector(".speedometer__value");

      if (!track || !arrow || !value) return;

      let fill = speedPanel.querySelector(".speedometer__fill");

      if (!fill) {
        fill = track.cloneNode(true);
        fill.classList.remove("speedometer__track");
        fill.classList.add("speedometer__fill");
        track.parentNode.appendChild(fill);
      }

      const pathLength = fill.getTotalLength();
      fill.style.strokeDasharray = `${pathLength}`;
      fill.style.strokeDashoffset = `${pathLength}`;

      const minSpeed = 10;
      const maxSpeed = 40;
      const minAngle = -90;
      const maxAngle = 90;
      const cycleDuration = 2600;

      const easeInOut = (t) => {
        return 0.5 - Math.cos(Math.PI * t) / 2;
      };

      let cycleStart = null;
      let direction = 1;

      const tick = (time) => {
        if (cycleStart === null) cycleStart = time;

        let raw = (time - cycleStart) / cycleDuration;

        if (raw >= 1) {
          raw = 1;
        }

        const eased = easeInOut(raw);
        const progress = direction === 1 ? eased : 1 - eased;

        const currentSpeed = Math.round(
          minSpeed + (maxSpeed - minSpeed) * progress,
        );
        const currentAngle = minAngle + (maxAngle - minAngle) * progress;

        fill.style.strokeDashoffset = `${pathLength * (1 - progress)}`;
        arrow.style.transform = `translateX(-50%) rotate(${currentAngle}deg)`;
        value.textContent = String(currentSpeed);

        if (raw >= 1) {
          direction *= -1;
          cycleStart = time;
        }

        speedRaf = requestAnimationFrame(tick);
      };

      speedRaf = requestAnimationFrame(tick);
    }

    function startDevicesAnimation() {
      if (!devicesPanel) return;

      devicesPanel.classList.remove("is-animating");
      devicesPanel.offsetHeight;
      devicesPanel.classList.add("is-animating");
    }
    function createLogItem(text) {
      if (!logsPanel) return;

      const item = document.createElement("span");
      item.className = "logs__item";
      item.textContent = text;

      const x = Math.floor(Math.random() * 180) - 90;
      const y = Math.floor(Math.random() * 30) + 10;
      const r = Math.floor(Math.random() * 16) - 8;

      item.style.setProperty("--x", `${x}px`);
      item.style.setProperty("--y", `${y}px`);
      item.style.setProperty("--r", `${r}deg`);

      logsPanel.appendChild(item);

      item.addEventListener(
        "animationend",
        () => {
          item.remove();
        },
        { once: true },
      );
    }

    function startLogsAnimation() {
      if (!logsPanel) return;

      logsPanel.innerHTML = "";

      createLogItem("connections.log");
      createLogItem("dns_cache.bin");
      createLogItem("session_trace.tmp");

      logsInterval = setInterval(() => {
        const text = logsPool[Math.floor(Math.random() * logsPool.length)];
        createLogItem(text);
      }, 350);
    }

    function runPanelAnimation(feature) {
      stopAllAnimations();

      if (feature === "encryption") {
        startConsoleAnimation();
        return;
      }

      if (feature === "speed") {
        startSpeedAnimation();
        return;
      }

      if (feature === "devices") {
        startDevicesAnimation();
        return;
      }

      if (feature === "logs") {
        startLogsAnimation();
      }
    }

    function setActive(index, isUserAction = false) {
      activeIndex = index;

      tabs.forEach((tab, i) => {
        const isActive = i === index;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-pressed", String(isActive));
      });

      const feature = tabs[index]?.dataset.feature;

      panels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.feature === feature);
      });

      runPanelAnimation(feature);

      if (isUserAction) {
        pauseAutoUntil = Date.now() + 9000;
      }
    }

    function nextSlide() {
      const nextIndex = (activeIndex + 1) % tabs.length;
      setActive(nextIndex);
    }

    function startAutoRotate() {
      if (autoTimer) {
        clearInterval(autoTimer);
      }

      autoTimer = setInterval(() => {
        if (Date.now() < pauseAutoUntil) return;
        nextSlide();
      }, AUTO_DELAY);
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        setActive(index, true);
      });

      tab.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setActive(index, true);
        }

        if (event.key === "ArrowDown") {
          event.preventDefault();
          const nextIndex = (index + 1) % tabs.length;
          tabs[nextIndex].focus();
          setActive(nextIndex, true);
        }

        if (event.key === "ArrowUp") {
          event.preventDefault();
          const prevIndex = (index - 1 + tabs.length) % tabs.length;
          tabs[prevIndex].focus();
          setActive(prevIndex, true);
        }
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((entry) => entry.isIntersecting);
        if (!visible) return;

        setActive(activeIndex);
        startAutoRotate();
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(section);
  }

  function initAboutFlowAnimation() {
    const aboutFlow = document.querySelector("#aboutFlow");
    const aboutResult = document.querySelector("#aboutResult");

    if (!aboutFlow || !aboutResult) return;

    const svg = aboutFlow.querySelector(".flow-lines");
    const userIcon = aboutFlow.querySelector(".icon-user");
    const vpnIcon = aboutFlow.querySelector(".icon-vpn");
    const browserIcon = aboutFlow.querySelector(".icon-browser");
    const dangerPacket = aboutFlow.querySelector("#aboutPacketDanger");
    const safePacket = aboutFlow.querySelector("#aboutPacketSafe");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (
      !svg ||
      !userIcon ||
      !vpnIcon ||
      !browserIcon ||
      !dangerPacket ||
      !safePacket
    ) {
      return;
    }

    let animationStarted = false;
    let currentState = "idle";

    const DURATION_RED = 2400;
    const DURATION_GREEN = 2200;
    const HOLD_AT_VPN = 900;
    const SHAKE_TIME = 560;

    const createPath = (startX, startY, endX, endY, curveOffset = 0) => {
      const distance = endX - startX;
      const cp1X = startX + distance * 0.35;
      const cp2X = startX + distance * 0.65;

      return `M ${startX} ${startY} C ${cp1X} ${startY + curveOffset}, ${cp2X} ${endY + curveOffset}, ${endX} ${endY}`;
    };

    const clearSvg = () => {
      svg.innerHTML = "";
    };

    const createSvgNode = (tag, attrs = {}) => {
      const node = document.createElementNS("http://www.w3.org/2000/svg", tag);

      Object.entries(attrs).forEach(([key, value]) => {
        node.setAttribute(key, value);
      });

      return node;
    };

    const prepareAnimatedPath = (path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = String(length);
      path.style.strokeDashoffset = String(length);
      return length;
    };

    const showPacket = (packet) => {
      packet.classList.add("is-visible");
      packet.classList.remove("is-hiding");
    };

    const hidePacket = (packet, immediate = false) => {
      if (immediate) {
        packet.classList.remove("is-visible", "is-hiding");
        packet.style.transform = "translate3d(-999px, -999px, 0)";
        return;
      }

      packet.classList.remove("is-visible");
      packet.classList.add("is-hiding");

      window.setTimeout(() => {
        if (!packet.classList.contains("is-visible")) {
          packet.classList.remove("is-hiding");
          packet.style.transform = "translate3d(-999px, -999px, 0)";
        }
      }, 320);
    };

    const hidePacketBadge = (packet) => {
      packet.classList.add("is-badge-hidden");
    };

    const showPacketBadge = (packet) => {
      packet.classList.remove("is-badge-hidden");
    };

    const positionPacket = (packet, point) => {
      const orb = packet.querySelector(".flow-packet__orb");
      const orbSize = orb ? orb.offsetWidth : 20;
      const packetRect = packet.getBoundingClientRect();

      const x = point.x - orbSize / 2;
      const y = point.y - packetRect.height + orbSize;

      packet.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const resetVisualState = () => {
      aboutFlow.classList.remove("is-active", "is-complete");
      aboutResult.classList.remove("is-visible");

      [userIcon, vpnIcon, browserIcon].forEach((icon) => {
        icon.classList.remove(
          "is-accent-red",
          "is-accent-green",
          "is-pulse",
          "is-shake",
        );
      });
      showPacketBadge(dangerPacket);
      showPacketBadge(safePacket);
      hidePacket(dangerPacket, true);
      hidePacket(safePacket, true);
    };

    const buildFlow = () => {
      clearSvg();

      const stageRect = aboutFlow.getBoundingClientRect();
      const userRect = userIcon.getBoundingClientRect();
      const vpnRect = vpnIcon.getBoundingClientRect();
      const browserRect = browserIcon.getBoundingClientRect();

      if (!stageRect.width || !stageRect.height) return null;

      svg.setAttribute("viewBox", `0 0 ${stageRect.width} ${stageRect.height}`);
      svg.setAttribute("preserveAspectRatio", "none");

      const getCenter = (rect) => ({
        x: rect.left - stageRect.left + rect.width / 2,
        y: rect.top - stageRect.top + rect.height / 2,
      });

      const userPoint = getCenter(userRect);
      const vpnPoint = getCenter(vpnRect);
      const browserPoint = getCenter(browserRect);

      const curveOffset = stageRect.width < 640 ? 12 : 8;

      const redPathD = createPath(
        userPoint.x + userRect.width * 0.34,
        userPoint.y,
        vpnPoint.x - vpnRect.width * 0.34,
        vpnPoint.y,
        -curveOffset,
      );

      const greenPathD = createPath(
        vpnPoint.x + vpnRect.width * 0.34,
        vpnPoint.y,
        browserPoint.x - browserRect.width * 0.34,
        browserPoint.y,
        curveOffset,
      );

      const redBase = createSvgNode("path", {
        d: redPathD,
        class: "flow-line-base flow-line-red",
      });

      const redActive = createSvgNode("path", {
        d: redPathD,
        class: "flow-line-active flow-line-red",
      });

      const greenBase = createSvgNode("path", {
        d: greenPathD,
        class: "flow-line-base flow-line-green",
      });

      const greenActive = createSvgNode("path", {
        d: greenPathD,
        class: "flow-line-active flow-line-green",
      });

      svg.append(redBase, greenBase, redActive, greenActive);

      return {
        redActive,
        greenActive,
        redLength: prepareAnimatedPath(redActive),
        greenLength: prepareAnimatedPath(greenActive),
      };
    };

    const animatePath = (path, length, duration, onUpdate) =>
      new Promise((resolve) => {
        const startTime = performance.now();

        const step = (time) => {
          const progress = Math.min((time - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const drawLength = length * eased;

          path.style.strokeDashoffset = String(length - drawLength);

          if (typeof onUpdate === "function") {
            const point = path.getPointAtLength(drawLength);
            onUpdate(point, progress);
          }

          if (progress < 1) {
            requestAnimationFrame(step);
            return;
          }

          resolve();
        };

        requestAnimationFrame(step);
      });

    const showResult = () => {
      aboutFlow.classList.add("is-complete");
      aboutResult.classList.add("is-visible");
      browserIcon.classList.add("is-accent-green", "is-pulse");
      currentState = "completed";
    };

    const renderCompletedState = () => {
      const flow = buildFlow();
      if (!flow) return;

      aboutFlow.classList.add("is-active", "is-complete");
      aboutResult.classList.add("is-visible");
      vpnIcon.classList.add("is-accent-green");
      browserIcon.classList.add("is-accent-green", "is-pulse");

      flow.redActive.style.strokeDashoffset = "0";
      flow.greenActive.style.strokeDashoffset = "0";

      const greenEnd = flow.greenActive.getPointAtLength(flow.greenLength);

      hidePacket(dangerPacket, true);

      showPacket(safePacket);
      positionPacket(safePacket, greenEnd);
      hidePacketBadge(safePacket);
    };

    const redrawFlow = () => {
      if (currentState === "completed") {
        renderCompletedState();
        return;
      }

      buildFlow();
    };

    const startAnimation = async () => {
      if (animationStarted) return;

      resetVisualState();

      const flow = buildFlow();
      if (!flow) return;

      animationStarted = true;
      aboutFlow.classList.add("is-active");

      if (motionQuery.matches) {
        flow.redActive.style.strokeDashoffset = "0";
        flow.greenActive.style.strokeDashoffset = "0";
        vpnIcon.classList.add("is-accent-green");
        browserIcon.classList.add("is-accent-green", "is-pulse");
        const greenEnd = flow.greenActive.getPointAtLength(flow.greenLength);
        hidePacket(dangerPacket, true);
        showPacket(safePacket);
        positionPacket(safePacket, greenEnd);
        hidePacketBadge(safePacket);
        showResult();
        return;
      }

      currentState = "animating";
      userIcon.classList.add("is-accent-red", "is-pulse");

      showPacketBadge(dangerPacket);
      showPacket(dangerPacket);
      positionPacket(dangerPacket, flow.redActive.getPointAtLength(0));

      await animatePath(
        flow.redActive,
        flow.redLength,
        DURATION_RED,
        (point) => {
          positionPacket(dangerPacket, point);
        },
      );

      vpnIcon.classList.add("is-accent-red");
      userIcon.classList.remove("is-pulse");

      hidePacketBadge(dangerPacket);
      await wait(260);
      hidePacket(dangerPacket);

      await wait(HOLD_AT_VPN);

      vpnIcon.classList.add("is-shake");
      await wait(SHAKE_TIME);
      vpnIcon.classList.remove("is-shake", "is-accent-red");
      vpnIcon.classList.add("is-accent-green", "is-pulse");

      showPacketBadge(safePacket);
      showPacket(safePacket);
      positionPacket(safePacket, flow.greenActive.getPointAtLength(0));

      await animatePath(
        flow.greenActive,
        flow.greenLength,
        DURATION_GREEN,
        (point) => {
          positionPacket(safePacket, point);
        },
      );

      hidePacketBadge(safePacket);
      await wait(260);

      showResult();
    };

    resetVisualState();
    redrawFlow();

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);

        if (!isVisible) return;

        startAnimation();
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(aboutFlow);

    document.addEventListener("app:resize", redrawFlow);
  }

  function initReviewsSlider() {
    const reviewsSection = document.querySelector(".reviews");

    if (!reviewsSection) return;

    const reviewsTrack = reviewsSection.querySelector(".reviews__track");
    const prevButton = reviewsSection.querySelector(".reviews__arrow--prev");
    const nextButton = reviewsSection.querySelector(".reviews__arrow--next");
    const dotsContainer = reviewsSection.querySelector(".reviews__dots");

    if (!reviewsTrack || !dotsContainer) return;

    const slides = Array.from(reviewsTrack.querySelectorAll(".review-card"));

    if (!slides.length) return;

    let currentIndex = 0;
    let dots = [];

    const getSlideWidth = () => {
      const firstSlide = slides[0];
      const trackGap =
        parseFloat(window.getComputedStyle(reviewsTrack).gap) || 0;
      const slideStyles = window.getComputedStyle(firstSlide);
      const marginRight = parseFloat(slideStyles.marginRight) || 0;

      return firstSlide.offsetWidth + trackGap + marginRight;
    };

    const updateButtons = () => {
      if (prevButton) {
        prevButton.disabled = currentIndex === 0;
      }

      if (nextButton) {
        nextButton.disabled = currentIndex === slides.length - 1;
      }
    };

    const updateDots = () => {
      dots.forEach((dot, index) => {
        const isActive = index === currentIndex;
        dot.classList.toggle("active", isActive);
        dot.setAttribute("aria-current", isActive ? "true" : "false");
      });
    };

    const updateSlider = () => {
      reviewsTrack.style.transform = `translateX(-${currentIndex * getSlideWidth()}px)`;
      updateDots();
      updateButtons();
    };

    const createDots = () => {
      dotsContainer.innerHTML = "";

      slides.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "reviews__dot";
        dot.setAttribute(
          "aria-label",
          TRANSLATIONS[currentLanguage].shared.reviewDot(index),
        );
        dot.setAttribute(
          "aria-current",
          index === currentIndex ? "true" : "false",
        );

        dot.addEventListener("click", () => {
          currentIndex = index;
          updateSlider();
        });

        dotsContainer.appendChild(dot);
      });

      dots = Array.from(dotsContainer.querySelectorAll(".reviews__dot"));
    };

    prevButton?.addEventListener("click", () => {
      if (currentIndex === 0) return;
      currentIndex -= 1;
      updateSlider();
    });

    nextButton?.addEventListener("click", () => {
      if (currentIndex >= slides.length - 1) return;
      currentIndex += 1;
      updateSlider();
    });

    document.addEventListener("app:resize", updateSlider);

    document.addEventListener("app:languagechange", () => {
      createDots();
      updateSlider();
    });

    createDots();
    updateSlider();
  }

  function initFaqAccordion() {
    const faqItems = Array.from(document.querySelectorAll(".faq-item"));

    if (!faqItems.length) return;

    const setItemState = (item, isOpen) => {
      const button = item.querySelector(".faq-question");
      const content = item.querySelector(".faq-answer-wrap");

      if (!button || !content) return;

      item.classList.toggle("active", isOpen);
      button.setAttribute("aria-expanded", String(isOpen));
      content.style.maxHeight = isOpen ? `${content.scrollHeight}px` : "0px";
    };

    faqItems.forEach((item) => {
      setItemState(item, item.classList.contains("active"));

      const button = item.querySelector(".faq-question");
      if (!button) return;

      button.addEventListener("click", () => {
        const willOpen = !item.classList.contains("active");

        faqItems.forEach((faqItem) => {
          setItemState(faqItem, false);
        });

        if (willOpen) {
          setItemState(item, true);
        }
      });
    });

    document.addEventListener("app:resize", () => {
      const activeItem = document.querySelector(".faq-item.active");
      if (activeItem) {
        setItemState(activeItem, true);
      }
    });
  }

  function initServerMap() {
    const mapContainer = document.querySelector(".map__container");
    if (!mapContainer) return;

    const markersRoot = mapContainer.querySelector(".map__markers");
    if (!markersRoot) return;

    const translateCountry = (value) =>
      COUNTRY_TRANSLATIONS[value]?.[currentLanguage] || value;

    const translateCity = (value) =>
      CITY_TRANSLATIONS[value]?.[currentLanguage] || value;
    const iconSvg = `
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="15" height="15" rx="7.5" fill="#D1F701"/>
        <path d="M4.25 8.1C4.25 7.63 4.63 7.25 5.1 7.25C5.57 7.25 5.95 7.63 5.95 8.1V10.65C5.95 11.12 5.57 11.5 5.1 11.5C4.63 11.5 4.25 11.12 4.25 10.65V8.1Z" fill="#171717"/>
        <path d="M7.05 5.55C7.05 5.08 7.43 4.7 7.9 4.7C8.37 4.7 8.75 5.08 8.75 5.55V10.65C8.75 11.12 8.37 11.5 7.9 11.5C7.43 11.5 7.05 11.12 7.05 10.65V5.55Z" fill="#171717"/>
        <path d="M9.85 3.85C9.85 3.38 10.23 3 10.7 3C11.17 3 11.55 3.38 11.55 3.85V10.65C11.55 11.12 11.17 11.5 10.7 11.5C10.23 11.5 9.85 11.12 9.85 10.65V3.85Z" fill="#171717"/>
      </svg>
    `;

    const locations = [
      {
        country: "Германия",
        flag: "assets/img/flags/germany.png",
        fallback: "DE",
        top: 21,
        right: 44,
        tooltipAlign: "center",
        servers: [
          {
            city: "Франкфурт-на-Майне",
            speed: "10 Gbit/s (Shared Port)",
            provider: "Leaseweb Deutschland GmbH",
          },
          {
            city: "Франкфурт-на-Майне",
            speed: "1 Gbit/s (Full Duplex)",
            provider: "H2nexus LTD",
          },
        ],
      },
      {
        country: "Нидерланды",
        flag: "assets/img/flags/netherlands.png",
        fallback: "NL",
        top: 19,
        right: 47,
        tooltipAlign: "center",
        servers: [
          {
            city: "Амстердам",
            speed: "1 Gbit/s (Full Duplex)",
            provider: "LeaseWeb Netherlands B.V.",
          },
        ],
      },
      {
        country: "Польша",
        flag: "assets/img/flags/poland.png",
        fallback: "PL",
        top: 23,
        right: 41,
        tooltipAlign: "center",
        servers: [
          {
            city: "Варшава",
            speed: "1 Gbit/s (Full Duplex)",
            provider: "MEVSPACE sp. z o.o",
          },
        ],
      },
      {
        country: "Финляндия",
        flag: "assets/img/flags/finland.png",
        fallback: "FI",
        top: 16,
        right: 39,
        tooltipAlign: "center",
        servers: [
          {
            city: "Хельсинки",
            speed: "1 Gbit/s (Full Duplex)",
            provider: "Hetzner Online GmbH",
          },
        ],
      },
      {
        country: "Россия",
        flag: "assets/img/flags/russia.png",
        fallback: "RU",
        top: 20,
        right: 31,
        tooltipAlign: "center",
        servers: [
          {
            city: "Москва",
            speed: "10 Gbit/s (Shared Port)",
            provider: "Kviktel LLC",
          },
          {
            city: "Москва",
            speed: "10 Gbit/s (Shared Port)",
            provider: "VK Cloud",
          },
          {
            city: "Москва",
            speed: "1 Gbit/s (Full Duplex)",
            provider: "JSC Selectel",
          },
          {
            city: "Санкт-Петербург",
            speed: "1 Gbit/s (Full Duplex)",
            provider: "JSC Selectel",
          },
          {
            city: "Екатеринбург",
            speed: "10 Gbit/s (Shared Port)",
            provider: "Internet Pro LLC",
          },
          {
            city: "Новосибирск",
            speed: "1 Gbit/s (Shared Port)",
            provider: "Adman LLC",
          },
          {
            city: "Хабаровск",
            speed: "10 Gbit/s (Shared Port)",
            provider: "EdgeCenter LLC",
          },
          {
            city: "Самара",
            speed: "1 Gbit/s (Shared Port)",
            provider: "Domain names registrar REG.RU, Ltd",
          },
        ],
      },
      {
        country: "Великобритания",
        flag: "assets/img/flags/unitedkingdom.png",
        fallback: "UK",
        top: 21,
        right: 50,
        tooltipAlign: "center",
        servers: [
          {
            city: "Лондон",
            speed: "10 Gbit/s (Shared Port)",
            provider: "Leaseweb UK Limited",
          },
        ],
      },
      {
        country: "Швеция",
        flag: "assets/img/flags/sweden.png",
        fallback: "SE",
        top: 16,
        right: 42,
        tooltipAlign: "center",
        servers: [
          {
            city: "Стокгольм",
            speed: "10 Gbit/s (Shared Port)",
            provider: "Ultahost, Inc.",
          },
        ],
      },
      {
        country: "Франция",
        flag: "assets/img/flags/france.png",
        fallback: "FR",
        top: 29,
        right: 49,
        tooltipAlign: "center",
        servers: [
          {
            city: "Париж",
            speed: "10 Gbit/s (Shared Port)",
            provider: "Datacamp Limited",
          },
        ],
      },
      {
        country: "Австрия",
        flag: "assets/img/flags/austria.png",
        fallback: "AT",
        top: 28,
        right: 43,
        tooltipAlign: "center",
        servers: [
          {
            city: "Вена",
            speed: "10 Gbit/s (Shared Port)",
            provider: "powered by ANX (netcup GmbH)",
          },
        ],
      },
      {
        country: "Швейцария",
        flag: "assets/img/flags/switzerland.png",
        fallback: "CH",
        top: 25,
        right: 47,
        tooltipAlign: "center",
        servers: [
          {
            city: "Цюрих",
            speed: "1 Gbit/s (Shared Port)",
            provider: "Datacamp Limited",
          },
        ],
      },
      {
        country: "Испания",
        flag: "assets/img/flags/spain.png",
        fallback: "ES",
        top: 32,
        right: 54,
        tooltipAlign: "center",
        servers: [
          {
            city: "Мадрид",
            speed: "10 Gbit/s (Shared Port)",
            provider: "Ultahost, Inc.",
          },
        ],
      },
      {
        country: "Израиль",
        flag: "assets/img/flags/israel.png",
        fallback: "IL",
        top: 36,
        right: 37,
        tooltipAlign: "center",
        servers: [
          {
            city: "Петах-Тиква",
            speed: "1 Gbit/s (Shared Port)",
            provider: "WorkTitans B.V.",
          },
        ],
      },
      {
        country: "Канада",
        flag: "assets/img/flags/canada.png",
        fallback: "CA",
        top: 30,
        left: 15,
        tooltipAlign: "left",
        servers: [
          {
            city: "Монреаль",
            speed: "10 Gbit/s (Shared Port)",
            provider: "Leaseweb Canada Inc (IMuze)",
          },
        ],
      },
      {
        country: "США",
        flag: "assets/img/flags/usa.png",
        fallback: "US",
        top: 40,
        left: 15,
        tooltipAlign: "left",
        servers: [
          {
            city: "Майами",
            speed: "5 Gbit/s (Full Duplex)",
            provider: "ReliableSite.Net LLC (Jose Dieguez)",
          },
        ],
      },
      {
        country: "Сингапур",
        flag: "assets/img/flags/singapore.png",
        fallback: "SG",
        top: 53,
        right: 16,
        tooltipAlign: "right",
        tooltipPosition: "top",
        servers: [
          {
            city: "Сингапур",
            speed: "10 Gbit/s (Shared Port)",
            provider: "Leaseweb Singapore Pte. Ltd.",
          },
        ],
      },
      {
        country: "Япония",
        flag: "assets/img/flags/japan.png",
        fallback: "JP",
        top: 46,
        right: 13,
        tooltipAlign: "right",
        tooltipPosition: "top",
        servers: [
          {
            city: "Токио",
            speed: "10 Gbit/s (Shared Port)",
            provider: "Leaseweb Japan K.K.",
          },
        ],
      },
      {
        country: "Филиппины",
        flag: "assets/img/flags/philippines.png",
        fallback: "PH",
        top: 47,
        right: 9,
        tooltipAlign: "right",
        tooltipPosition: "top",
        servers: [
          {
            city: "Макати",
            speed: "1 Gbit/s (Shared Port)",
            provider: "R&R Managed Telecom Services",
          },
        ],
      },
      {
        country: "Казахстан",
        flag: "assets/img/flags/kazakhstan.png",
        fallback: "KZ",
        top: 30,
        right: 28,
        tooltipAlign: "center",
        servers: [
          {
            city: "Алматы",
            speed: "1 Gbit/s (Shared Port)",
            provider: "Newserverlife LLC",
          },
        ],
      },
      {
        country: "Армения",
        flag: "assets/img/flags/armenia.png",
        fallback: "AM",
        top: 33,
        right: 33,
        tooltipAlign: "center",
        servers: [
          {
            city: "Ереван",
            speed: "1 Gbit/s (Shared Port)",
            provider: "WorkTitans B.V.",
          },
        ],
      },
      {
        country: "Молдова",
        flag: "assets/img/flags/moldova.png",
        fallback: "MD",
        top: 28,
        right: 39,
        tooltipAlign: "center",
        servers: [
          {
            city: "Кишинев",
            speed: "1 Gbit/s (Shared Port)",
            provider: "Foxcloud Communications SRL",
          },
        ],
      },
      {
        country: "ОАЭ",
        flag: "assets/img/flags/uae.png",
        fallback: "AE",
        top: 40,
        right: 31,
        tooltipAlign: "center",
        tooltipPosition: "top",
        servers: [
          {
            city: "Дубай",
            speed: "1 Gbit/s (Shared Port)",
            provider: "Zenlayer Inc",
          },
        ],
      },
      {
        country: "Гонконг",
        flag: "assets/img/flags/hongkong.png",
        fallback: "HK",
        top: 41,
        right: 16,
        tooltipAlign: "right",
        tooltipPosition: "top",
        servers: [
          {
            city: "Гонконг",
            speed: "1 Gbit/s (Shared Port)",
            provider: "Datacamp Limited",
          },
        ],
      },
      {
        country: "Турция",
        flag: "assets/img/flags/turkey.png",
        fallback: "TR",
        top: 29,
        right: 36,
        tooltipAlign: "center",
        servers: [
          {
            city: "Стамбул",
            speed: "1 Gbit/s (Shared Port)",
            provider: "Datacamp Limited",
          },
        ],
      },
      {
        country: "Индия",
        flag: "assets/img/flags/india.png",
        fallback: "IN",
        top: 38,
        right: 23,
        tooltipAlign: "center",
        servers: [
          {
            city: "Мумбаи",
            speed: "1 Gbit/s (Shared Port)",
            provider: "Internet Utilities NA LLC",
          },
        ],
      },
      {
        country: "Италия",
        flag: "assets/img/flags/italy.png",
        fallback: "IT",
        top: 31,
        right: 45,
        tooltipAlign: "center",
        servers: [
          {
            city: "Милан",
            speed: "1 Gbit/s (Shared Port)",
            provider: "Datacamp Limited",
          },
        ],
      },
      {
        country: "Норвегия",
        flag: "assets/img/flags/norway.png",
        fallback: "NO",
        top: 12,
        right: 45,
        tooltipAlign: "center",
        servers: [
          {
            city: "Осло",
            speed: "1 Gbit/s (Shared Port)",
            provider: "Datacamp Limited",
          },
        ],
      },
    ];

    const closeAllMarkers = () => {
      markersRoot.querySelectorAll(".country.is-open").forEach((marker) => {
        marker.classList.remove("is-open");
      });
    };

    const createMarker = (location) => {
      const marker = document.createElement("div");
      marker.className = "country";
      marker.setAttribute("tabindex", "0");
      marker.setAttribute("role", "button");
      marker.setAttribute(
        "aria-label",
        TRANSLATIONS[currentLanguage].shared.markerAria(
          translateCountry(location.country),
          location.servers.length,
        ),
      );
      marker.dataset.tooltipAlign = location.tooltipAlign || "left";
      marker.dataset.tooltipPosition = location.tooltipPosition || "bottom";
      marker.style.top = `${location.top}%`;

      if (typeof location.left === "number") {
        marker.style.left = `${location.left}%`;
      } else {
        marker.style.right = `${location.right}%`;
      }

      const flag = document.createElement("img");
      flag.className = "country__flag";
      flag.alt = translateCountry(location.country);
      flag.src = location.flag;

      const fallback = document.createElement("span");
      fallback.className = "country__fallback";
      fallback.textContent =
        location.fallback || location.country.slice(0, 2).toUpperCase();

      flag.addEventListener("error", () => {
        flag.style.display = "none";
        fallback.classList.add("is-visible");
      });

      const info = document.createElement("div");
      info.className = "info";
      info.addEventListener("click", (event) => event.stopPropagation());

      let currentIndex = 0;

      const renderServer = () => {
        const server = location.servers[currentIndex];
        const hasPagination = location.servers.length > 1;

        info.innerHTML = `
          <header>
            <div class="icon">${iconSvg}</div>
            <span>${translateCountry(location.country)}</span>
          </header>

          <span class="server-city">${translateCity(server.city)}</span>
          <h3 class="server-speed">${server.speed}</h3>

          <div class="server-provider">
            <span class="server-provider__label">${TRANSLATIONS[currentLanguage].shared.providerLabel}</span>
            <span class="server-provider__value">${server.provider}</span>
          </div>

          ${
            hasPagination
              ? `
            <div class="server-pagination">
              <button
                type="button"
                class="server-pagination__btn"
                data-dir="prev"
                aria-label="${TRANSLATIONS[currentLanguage].shared.serverPrev}"
              >
                ‹
              </button>
              <span class="server-pagination__count">
                ${currentIndex + 1}/${location.servers.length}
              </span>
              <button
                type="button"
                class="server-pagination__btn"
                data-dir="next"
                aria-label="${TRANSLATIONS[currentLanguage].shared.serverNext}"
              >
                ›
              </button>
            </div>
          `
              : ""
          }
        `;

        if (hasPagination) {
          const prevBtn = info.querySelector('[data-dir="prev"]');
          const nextBtn = info.querySelector('[data-dir="next"]');

          prevBtn.disabled = currentIndex === 0;
          nextBtn.disabled = currentIndex === location.servers.length - 1;

          prevBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            if (currentIndex === 0) return;
            currentIndex -= 1;
            renderServer();
          });

          nextBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            if (currentIndex >= location.servers.length - 1) return;
            currentIndex += 1;
            renderServer();
          });
        }
      };

      renderServer();
      marker.append(flag, fallback, info);

      marker.addEventListener("click", (event) => {
        if (supportsHover) return;

        event.stopPropagation();
        const willOpen = !marker.classList.contains("is-open");
        closeAllMarkers();
        marker.classList.toggle("is-open", willOpen);
      });

      marker.addEventListener("keydown", (event) => {
        if (!location.servers.length) return;

        if ((event.key === "Enter" || event.key === " ") && !supportsHover) {
          event.preventDefault();
          marker.click();
        }

        if (event.key === "ArrowLeft" && currentIndex > 0) {
          event.preventDefault();
          currentIndex -= 1;
          renderServer();
        }

        if (
          event.key === "ArrowRight" &&
          currentIndex < location.servers.length - 1
        ) {
          event.preventDefault();
          currentIndex += 1;
          renderServer();
        }

        if (event.key === "Escape") {
          marker.classList.remove("is-open");
        }
      });

      return marker;
    };

    markersRoot.innerHTML = "";
    locations.forEach((location) => {
      markersRoot.appendChild(createMarker(location));
    });

    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Node)) return;
      if (!supportsHover && !mapContainer.contains(event.target)) {
        closeAllMarkers();
      }
    });
    document.addEventListener("app:languagechange", () => {
      markersRoot.innerHTML = "";
      locations.forEach((location) => {
        markersRoot.appendChild(createMarker(location));
      });
    });
  }

  function initReferralCalculator() {
    const calculator = document.querySelector(".ref-profit");
    if (!calculator) return;

    const range = calculator.querySelector("[data-ref-range]");
    const peopleOutput = calculator.querySelector("[data-ref-people]");
    const peopleLabel = calculator.querySelector("[data-ref-people-label]");
    const incomeOutput = calculator.querySelector("[data-ref-income]");
    const yearOutput = calculator.querySelector("[data-ref-year]");
    const formulaOutput = calculator.querySelector("[data-ref-formula]");

    if (
      !range ||
      !peopleOutput ||
      !peopleLabel ||
      !incomeOutput ||
      !yearOutput ||
      !formulaOutput
    ) {
      return;
    }

    const getFormatter = () =>
      new Intl.NumberFormat(currentLanguage === "ru" ? "ru-RU" : "en-US");
    const reward = Number(calculator.dataset.reward || 149);

    const pluralizePeople = (value) => {
      if (currentLanguage === "en") {
        return value === 1 ? "person" : "people";
      }

      const mod10 = value % 10;
      const mod100 = value % 100;

      if (mod10 === 1 && mod100 !== 11) return "человек";
      if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
        return "человека";
      }

      return "человек";
    };

    const updateCalculator = () => {
      const people = Number(range.value);
      const min = Number(range.min || 0);
      const max = Number(range.max || 100);
      const monthlyIncome = people * reward;
      const yearlyIncome = monthlyIncome * 12;
      const progress = max === min ? 0 : ((people - min) / (max - min)) * 100;

      const formatter = getFormatter();

      calculator.style.setProperty("--progress", `${progress}%`);
      peopleOutput.textContent = formatter.format(people);
      peopleLabel.textContent = pluralizePeople(people);
      incomeOutput.textContent = `${formatter.format(monthlyIncome)} ₽`;
      yearOutput.textContent = `${formatter.format(yearlyIncome)} ₽`;

      qsa(".ref-profit__from", calculator).forEach((node) => {
        node.textContent = currentLanguage === "ru" ? "от" : "from";
      });

      if (currentLanguage === "en") {
        formulaOutput.textContent = `${formatter.format(people)} ${pluralizePeople(people)} × ${formatter.format(reward)} ₽ for a monthly subscription purchase`;
      } else {
        formulaOutput.textContent = `${formatter.format(people)} ${pluralizePeople(people)} × ${formatter.format(reward)} ₽ при покупке подписки на месяц`;
      }
    };

    document.addEventListener("app:languagechange", updateCalculator);
    range.addEventListener("input", updateCalculator);
    updateCalculator();
  }

  function initCtaBackground() {
    const containers = Array.from(document.querySelectorAll(".cta__container"));
    if (!containers.length) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const random = (min, max) => Math.random() * (max - min) + min;

    const isVisible = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top < window.innerHeight * 0.9 &&
        rect.bottom > window.innerHeight * 0.15
      );
    };

    const getCellSize = () => {
      if (window.innerWidth <= 576) return 56;
      if (window.innerWidth <= 992) return 72;
      return 96;
    };

    const getGridHeight = () => {
      if (window.innerWidth <= 576) return 224;
      if (window.innerWidth <= 992) return 288;
      return 432;
    };

    const ensureBackground = (container) => {
      let bg = container.querySelector(".cta__bg");

      if (!bg) {
        bg = document.createElement("div");
        bg.className = "cta__bg";
        bg.setAttribute("aria-hidden", "true");
        bg.innerHTML = `
          <span class="cta__glow cta__glow--left"></span>
          <span class="cta__glow cta__glow--right"></span>
          <div class="cta__grid"></div>
          <span class="cta__sheen"></span>
        `;
        container.prepend(bg);
      }

      container.classList.add("cta--enhanced");
      return bg.querySelector(".cta__grid");
    };

    const buildGrid = (container) => {
      const grid = ensureBackground(container);
      const cellSize = getCellSize();
      const gridHeight = getGridHeight();
      const usableWidth = Math.min(container.clientWidth - 20, 1300);

      const cols = Math.max(6, Math.ceil(usableWidth / cellSize));
      const rows = Math.max(4, Math.ceil(gridHeight / cellSize));
      const total = cols * rows;

      grid.style.setProperty("--cta-cell-size", `${cellSize}px`);
      grid.style.setProperty("--cta-cols", cols);
      grid.style.setProperty("--cta-grid-width", `${cols * cellSize}px`);
      grid.style.setProperty("--cta-grid-height", `${rows * cellSize}px`);

      grid.innerHTML = "";
      const fragment = document.createDocumentFragment();

      for (let index = 0; index < total; index += 1) {
        const cell = document.createElement("span");
        cell.className = "cta__cell";

        cell.style.setProperty("--dur", `${random(4.8, 8.6).toFixed(2)}s`);
        cell.style.setProperty("--delay", `${random(-5, 0).toFixed(2)}s`);
        cell.style.setProperty("--float", `${random(-6, 6).toFixed(1)}px`);
        cell.style.setProperty("--alpha", random(0.28, 0.52).toFixed(2));
        cell.style.setProperty("--scale", random(0.985, 1.02).toFixed(3));

        if (Math.random() > 0.88) cell.classList.add("is-filled");
        if (Math.random() > 0.975) cell.classList.add("is-accent");

        fragment.appendChild(cell);
      }

      grid.appendChild(fragment);
    };

    const flashCells = (container) => {
      if (motionQuery.matches) return;

      const cells = container.querySelectorAll(".cta__cell");
      if (!cells.length) return;

      const burstSize = Math.min(
        7,
        Math.max(3, Math.round(cells.length * 0.04)),
      );

      for (let i = 0; i < burstSize; i += 1) {
        const cell = cells[Math.floor(Math.random() * cells.length)];
        const accent = Math.random() > 0.7;

        cell.classList.add(accent ? "is-accent-live" : "is-live");

        window.setTimeout(
          () => {
            cell.classList.remove("is-live", "is-accent-live");
          },
          accent ? 1800 : 1200,
        );
      }
    };

    const start = (container) => {
      if (container._ctaTimer || motionQuery.matches) return;
      flashCells(container);
      container._ctaTimer = window.setInterval(
        () => flashCells(container),
        1450,
      );
    };

    const stop = (container) => {
      if (!container._ctaTimer) return;
      window.clearInterval(container._ctaTimer);
      container._ctaTimer = null;
    };

    containers.forEach((container) => {
      buildGrid(container);
    });

    let observer = null;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) start(entry.target);
            else stop(entry.target);
          });
        },
        { threshold: 0.25 },
      );

      containers.forEach((container) => observer.observe(container));
    } else {
      containers.forEach((container) => start(container));
    }

    const rebuild = debounce(() => {
      containers.forEach((container) => {
        stop(container);
        buildGrid(container);
        if (isVisible(container)) start(container);
      });
    }, 160);

    document.addEventListener("app:resize", rebuild);

    const onMotionChange = () => {
      containers.forEach((container) => {
        stop(container);
        if (!motionQuery.matches && isVisible(container)) {
          start(container);
        }
      });
    };

    if (typeof motionQuery.addEventListener === "function") {
      motionQuery.addEventListener("change", onMotionChange);
    } else {
      motionQuery.addListener(onMotionChange);
    }
  }

  function initScrollReveal() {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const selectors = [
      // главная
      ".home h1",
      ".home p",
      ".home .buttons",
      ".home .users",
      ".home .phone",
      ".home .planet",

      ".why h2",
      ".why .why__tabs",
      ".why .why__panel",

      ".map h2",
      ".map p",
      ".map .map__img",

      ".illustration .illustration__image",

      ".prices h2",
      ".prices .item",

      ".reviews h2",
      ".reviews .reviews__top",
      ".reviews .review-card",
      ".reviews .reviews__nav",

      ".variants h2",
      ".variants .item",

      ".faq h2",
      ".faq .faq-item",

      ".cta h2",
      ".cta p",
      ".cta .btn",

      // ref
      ".ref__home .badge",
      ".ref__home h1",
      ".ref__home p",

      ".calc .ref-profit",

      ".ref-profit__stat",
      ".variants .item",

      ".ref-details .badge",
      ".ref-details h2",
      ".ref-details p",
      ".ref-details .ref-details__card",

      // docs
      ".docs__list .item",

      // footer
      ".footer",
    ];

    const elements = Array.from(
      new Set(document.querySelectorAll(selectors.join(","))),
    ).filter((el) => {
      if (!el) return false;
      if (el.closest(".header")) return false;
      if (el.classList.contains("blur__purp")) return false;
      if (el.classList.contains("blur__gr")) return false;
      return true;
    });

    if (!elements.length) return;

    const getSiblingIndex = (element) => {
      if (!element.parentElement) return 0;

      const siblings = Array.from(element.parentElement.children).filter(
        (child) =>
          child.matches(
            ".item, .review-card, .why__panel, .ref-details__card, .ref-profit__stat",
          ),
      );

      if (!siblings.length) return 0;
      return Math.max(0, siblings.indexOf(element));
    };

    const getRevealType = (element) => {
      const isMobile = window.innerWidth <= 768;

      if (isMobile) return "up";

      if (element.matches(".phone, .map__img, .illustration__image")) {
        return "right";
      }

      if (element.matches(".planet, .users")) {
        return "left";
      }

      if (
        element.matches(
          ".item, .review-card, .why__panel, .ref-details__card, .ref-profit__stat",
        )
      ) {
        return getSiblingIndex(element) % 2 === 0 ? "left" : "right";
      }

      if (element.matches(".ref-profit, .footer")) {
        return "zoom";
      }

      return "up";
    };

    const applySetup = () => {
      let staggerIndex = 0;

      elements.forEach((element) => {
        const revealType = getRevealType(element);

        element.setAttribute("data-reveal", revealType);
        element.style.setProperty(
          "--reveal-delay",
          `${Math.min((staggerIndex % 6) * 90, 450)}ms`,
        );

        staggerIndex += 1;
      });
    };

    const showAll = () => {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });
    };

    applySetup();

    if (motionQuery.matches || !("IntersectionObserver" in window)) {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    const onMotionChange = () => {
      if (motionQuery.matches) {
        showAll();
      }
    };

    if (typeof motionQuery.addEventListener === "function") {
      motionQuery.addEventListener("change", onMotionChange);
    } else {
      motionQuery.addListener(onMotionChange);
    }
  }

  function debounce(fn, delay = 100) {
    let timeoutId;

    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  }

  document.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");

    if (!href) return;

    // если это якорь (#faq, #about и т.д.)
    if (href.startsWith("#")) {
      return; // ничего не делаем
    }

    // всё остальное открываем в новой вкладке
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
});
