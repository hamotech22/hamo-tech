const texts = {
  en: {
    siteTitle: "Mohammed Yahya | Portfolio",
    nav: {
      home: "Home",
      services: "Services",
      servicesOverview: "All services",
      projects: "Projects",
      about: "About",
      blog: "Blog",
      servicePolicy: "Service policy",
      contact: "Contact",
      cta: "Resume",
      logo: "Mohammed Yahya",
      changeLanguage: "Change language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mainLabel: "Main",
    },
    hero: {
      badge: "Front-end designer & full-stack developer",
      title1: "Mohammed Yahya",
      title2: "Interactive websites, built for people",
      desc: "I design responsive interfaces and build full-stack web applications with Angular, React, and Laravel.",
      button: "Explore my services",
      hintLine1: "Discover more of",
      hintLine2: "our services",
      galleryLabels: [
        "Website Development",
        "UI/UX Design",
        "E-commerce Stores",
        "Systems & Backend Development",
        "WordPress Development",
        "Web Applications & Admin Dashboards",
        "Website Optimization & UX",
      ],
      galleryAlt: (_index, fallback) => fallback,
    },
    about: {
      title: "A little about me",
      intro: "I’m a freelance front-end designer and developer creating interactive, fast, and responsive websites and web applications.",
      storyTitle: "Front-end & full-stack development",
      story1: "I build engaging interfaces with Angular and React, and develop full-stack applications with Laravel. I combine clean code, thoughtful UI/UX, and modern web technologies to help brands establish a professional online presence.",
      story2: "Every project is tailored to its goals and audience. My focus is to deliver real value through smooth experiences, strong visual identity, and careful attention to detail.",
      imageAlt: "A creative workspace",
    },
    projects: {
      homeTitle: "Web projects, made for people",
      homeDescription: "Explore websites and web applications that combine thoughtful interfaces, responsive design, and dependable functionality.",
      viewAll: "View all projects",
      listTitle: "Selected web projects",
      listDescription: "A selection of websites and web applications built around each project’s goals and audience.",
      more: "More projects",
      categories: {
        "Car rental": "Car rental",
        "Security system": "Security system",
        "E-commerce": "E-commerce",
      },
      descriptions: {
        1: "A web platform for browsing and managing car rentals.",
        2: "A website for a guards and security management system.",
        3: "A website presenting SecureVision's security solution.",
        4: "An online store website.",
      },
      back: "Back to projects",
      loading: "Loading project...",
      loadError: "Projects could not be loaded. Please try again later.",
      prev: "Previous",
      next: "Next",
      page: "Page",
    },
    services: {
      title: "Web design and development, end to end",
      intro1: "I help businesses and individuals turn their ideas into effective websites and web applications.",
      intro2: "From planning and interface design to frontend implementation and backend functionality, I shape each solution around your goals and audience.",
      items: [
        {
          title: "Web Design",
          description: "Plan and design clear, modern website experiences that reflect your brand and work smoothly across screen sizes.",
          skills: ["Responsive Design", "Tailwind CSS", "Bootstrap"],
        },
        {
          title: "Frontend Development",
          description: "Build interactive, responsive interfaces for modern web applications.",
          skills: ["Angular", "React.js", "Material UI (MUI)"],
        },
        {
          title: "Backend Development",
          description: "Develop server-side features and reliable data storage for web applications.",
          skills: ["PHP", "Laravel MVC", "MySQL & Databases"],
        },
        {
          title: "Full-Stack & Web Platforms",
          description: "Combine frontend and backend development with practical engineering workflows and content platforms.",
          skills: ["React", "Angular + Laravel", "WordPress", "Web Development", "Software Engineering"],
        },
        {
          title: "Additional Skills",
          description: "Practical experience beyond web development.",
          skills: ["Git & GitHub", "Node.js", "Composer", "Data Entry"],
        },
        {
          title: "Website Optimization & UX",
          description: "Improve website usability, accessibility, visibility, and loading performance.",
          skills: ["UI/UX", "Accessibility", "SEO Basics", "Performance Optimization"],
        },
      ],
    },
    blog: {
      homeTitle: "Notes on web design and development",
      homeDescription: "Practical ideas on responsive design, frontend development, Laravel, and building better web experiences.",
      viewAll: "View all articles",
      listTitle: "Web development notes",
      listDescription: "Guides and ideas on designing, building, and improving websites and web applications.",
      back: "Back to all articles",
      loading: "Loading article...",
      loadError: "Articles could not be loaded. Please try again later.",
      prev: "Previous",
      next: "Next",
      page: "Page",
      posts: {
        1: {
          title: "How to plan a website project",
          excerpt: "A practical starting point for turning a website idea into clear goals, useful pages, and a realistic project plan.",
          content: "<p>A successful website starts with a clear purpose. Identify who the site is for, what visitors need to do, and which pages support those goals.</p><p>Once the content and priorities are clear, it is easier to plan the interface, choose suitable technologies, and build in focused steps.</p>",
          authorRole: "Web designer and full-stack developer",
        },
        2: {
          title: "Why responsive web design matters",
          excerpt: "Learn how flexible layouts and thoughtful breakpoints help websites work across phones, tablets, and desktops.",
          content: "<p>People visit websites on screens of many sizes. Responsive layouts adapt content and navigation so the experience stays clear and usable on each device.</p>",
        },
        3: {
          title: "Building responsive interfaces with Angular",
          excerpt: "Practical considerations for creating clear, responsive user interfaces with Angular and Bootstrap.",
          content: "<p>A useful interface starts with clear content and predictable navigation. Combine responsive layouts with reusable Angular components to keep a website easier to use and maintain.</p>",
        },
        4: {
          title: "Connecting a Laravel backend to a web app",
          excerpt: "Understand the role of APIs and backend logic when a frontend needs to work with application data.",
          content: "<p>A backend can manage application data and business rules while an API gives the frontend a clear way to request and update that data.</p>",
        },
        5: {
          title: "Small improvements for a better user experience",
          excerpt: "Explore how accessible controls, clear feedback, and consistent navigation make websites easier to use.",
          content: "<p>Useful details often make the biggest difference: descriptive labels, visible focus states, helpful feedback, and consistent navigation all support a smoother experience.</p>",
        },
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      description: "Have another question about your website project? Get in touch and tell me what you’re planning.",
      questions: [
        ["What web services do you offer?", "Web design, responsive frontend development, backend development with Laravel, and full-stack website and web application development."],
        ["Which technologies do you work with?", "I work with Angular, PHP, Laravel, MySQL, WordPress, Bootstrap, Git, and GitHub."],
        ["How long does a project take?", "It depends on the scope, features, and content. We’ll agree on deliverables and a clear timeline before development begins."],
        ["What do you need to get started?", "A short description of your goals, intended audience, required features, and any references or deadlines is a great start."],
      ],
      emailPrompt: "Share a few details, and let’s talk about how to bring your idea to life.",
      consultationTitle: "Have a project in mind?",
      consultation: "Plan a consultation",
      email: "Send an email",
    },
    designPartner: {
      badge: "Ongoing development",
      title: "Your partner for ongoing web development",
      description: "Get reliable design and development support as your website grows, with solutions shaped around your changing needs.",
      action: "Contact me on WhatsApp",
      tailored: "Solutions for your project",
      grows: "Built to grow",
      imageAlt: "Web development collaboration",
    },
    cta: {
      title: "Have a website idea in mind?",
      description: "Let’s turn it into a responsive, well-built website or web application that supports your goals.",
      action: "Start a project",
    },
    contact: {
      title: "Let’s build your next web project",
      description: "Tell me what you’re looking to build, or reach out directly by WhatsApp or email.",
      name: "Your name",
      email: "Your email",
      message: "Tell me about your website or app...",
      sending: "Sending...",
      send: "Send message",
      success: "Your message was sent successfully!",
      error: "Something went wrong. Please try again.",
      whatsapp: "Usually replies within minutes",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      loadError: "Failed to load contact information:",
      sendError: "Failed to send message:",
    },
    legal: {
      label: "Project information",
      servicePolicy: {
        title: "Service Policy",
        introduction: "This policy explains how website and web application projects are planned, delivered, and supported. The written proposal or agreement for a specific project takes precedence if it differs from this general policy.",
        sections: [
          {
            title: "1. Project scope",
            paragraphs: [
              "Each project begins with an agreed proposal describing its goals, deliverables, schedule, and fees. Work is limited to the items included in that proposal.",
              "A project is considered ready to begin once the proposal is approved and any agreed initial payment and required materials or access have been provided.",
            ],
          },
          {
            title: "2. Project process and timing",
            paragraphs: [
              "Projects may include planning, design, development, review, and handover. The specific stages and milestones are agreed with the client before work starts.",
              "Timelines depend on receiving content, access, decisions, and feedback on time. If any of these are delayed, delivery dates may need to be adjusted.",
            ],
          },
          {
            title: "3. Client responsibilities",
            paragraphs: [
              "The client is responsible for providing accurate content, necessary account access, and timely feedback and approvals. The client must have permission to use any text, images, branding, or other materials they provide.",
              "The client should keep copies of important content and data they provide. Unless specifically included in the proposal, content writing, data entry, and third-party account fees are not part of the service.",
            ],
          },
          {
            title: "4. Revisions and changes",
            paragraphs: [
              "The proposal will describe any included review or revision rounds. Requests that change the agreed scope, add features, or require additional work may affect the fee and schedule.",
              "Additional work will be discussed and approved by the client before it begins.",
            ],
          },
          {
            title: "5. Fees and payment",
            paragraphs: [
              "Fees, payment dates, and any milestone payments are set out in the project proposal. Work may be paused if an agreed payment is overdue, with the schedule adjusted accordingly.",
              "Hosting, domain registration, paid software, stock assets, and other third-party charges are separate unless the proposal says otherwise. Any applicable taxes or additional costs will be discussed with the client.",
            ],
          },
          {
            title: "6. Delivery and ongoing support",
            paragraphs: [
              "The agreed deliverables will be handed over after the project is completed and outstanding project fees have been paid. Deployment, source files, or training are included only when specified in the proposal.",
              "Hosting, maintenance, updates, security monitoring, and ongoing technical support are not included after handover unless agreed separately in writing.",
            ],
          },
          {
            title: "7. Pausing or ending a project",
            paragraphs: [
              "Either party should give written notice if they need to pause or end a project. The client remains responsible for fees for work completed and any costs or commitments already made for the project, as set out in the proposal and applicable law.",
              "Any handover of completed work and treatment of payments on cancellation will follow the project agreement and applicable law.",
            ],
          },
          {
            title: "Our approach",
            paragraphs: [
              "A successful project comes from clear communication, careful implementation, and a focus on the people using the final product.",
            ],
            subsections: [
              {
                title: "Project planning",
                paragraph: "The project starts with clear goals, a practical plan, and an understanding of what the website needs to achieve.",
              },
              {
                title: "Design and development",
                paragraph: "Design and development work together to create a responsive experience that is easy to use.",
              },
              {
                title: "Delivery and support",
                paragraph: "The finished website is built around the project’s needs, with clear communication throughout the process.",
              },
            ],
          },
        ],
      },
      terms: {
        title: "Terms & Conditions",
        introduction: "These terms apply to use of this website and provide general terms for working together on a web project. A project-specific written proposal or agreement may add to or replace these terms for that project. This text is general information, not legal advice.",
        sections: [
          {
            title: "1. Using this website",
            paragraphs: [
              "You may browse this website for personal and informational purposes. You agree not to misuse the website, attempt to disrupt its operation, or use its content in a way that violates another person’s rights or applicable law.",
              "Website content is provided for general information and may be updated or removed without notice.",
            ],
          },
          {
            title: "2. Project proposals and agreements",
            paragraphs: [
              "A project begins when its scope, deliverables, schedule, and fees have been agreed in writing. Any project-specific agreement should be read together with these terms; where they conflict, the project-specific agreement takes precedence for that project.",
              "Requests outside the agreed scope may require a revised estimate, schedule, or written approval before additional work begins.",
            ],
          },
          {
            title: "3. Fees and payments",
            paragraphs: [
              "Fees and payment milestones are agreed in the project proposal. The client agrees to make payments by the stated due dates. Work or delivery may be paused when an agreed payment is overdue, subject to the project agreement and applicable law.",
              "Third-party services and expenses, such as hosting, domains, and paid software, are the client’s responsibility unless the project proposal explicitly includes them.",
            ],
          },
          {
            title: "4. Intellectual property",
            paragraphs: [
              "Each party retains ownership of materials they owned or created before the project. The client is responsible for having the rights to materials they supply.",
              "Once all project fees have been paid, ownership or usage rights for the specific deliverables will follow the written project agreement. Third-party software, fonts, images, and other licensed materials remain subject to their own license terms.",
            ],
          },
          {
            title: "5. Confidentiality and client materials",
            paragraphs: [
              "Both parties should use reasonable care to protect non-public project information shared with them and use it only as needed for the project, except where disclosure is required by law.",
              "The client confirms they are permitted to provide any content, data, credentials, or other materials needed for the work. Credentials should be shared securely and access can be revoked after the project.",
            ],
          },
          {
            title: "6. Third-party services",
            paragraphs: [
              "A project may rely on hosting providers, platforms, plugins, APIs, or other third-party services. Those services are governed by their own terms and availability, which are outside direct control of the developer.",
              "Changes, outages, fees, or discontinuation by a third-party provider may affect a project. Any extra work needed to address them will be discussed with the client.",
            ],
          },
          {
            title: "7. Warranties and liability",
            paragraphs: [
              "The work will be carried out with reasonable care and skill and according to the agreed project scope. No particular business result, search ranking, or uninterrupted availability is guaranteed.",
              "To the extent permitted by applicable law, neither party will be liable to the other for indirect or consequential losses arising from a project. Nothing in these terms excludes rights or liability that cannot lawfully be excluded.",
            ],
          },
          {
            title: "8. Contact and updates",
            paragraphs: [
              "Questions about these terms or a project can be sent to hamotech22@gmail.com. These terms may be updated from time to time; the version published on this website applies to website use from the date it is posted.",
            ],
          },
        ],
      },
    },
    footer: {
      servicePolicy: "Service policy",
      terms: "Terms & Conditions",
      copyright: "Copyright © 2026 Mohammed Yahya. All rights reserved.",
      credit: "Designed and developed by",
      backToTop: "Back to top",
      navigation: "Site navigation",
    },
    metrics: {
      labels: ["Frontend frameworks", "Backend development", "CSS frameworks", "UI library"],
      values: ["Angular", "PHP / Laravel", "MySQL", "WordPress"],
      title: "Thoughtful design. Reliable development.",
      description: "I bring design and development together to create responsive websites and web applications that serve real goals and make a lasting impression.",
      action: "View projects",
    },
  },

  ar: {
    siteTitle: "محمد يحيى | معرض الأعمال",
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      servicesOverview: "كل الخدمات",
      projects: "المشاريع",
      about: "من أنا",
      blog: "المدونة",
      servicePolicy: "سياسة تقديم الخدمات",
      contact: "تواصل معي",
      cta: "السيرة الذاتية",
      logo: "محمد يحيى",
      changeLanguage: "تغيير اللغة",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      mainLabel: "القائمة الرئيسية",
    },
    hero: {
      badge: "مصمم واجهات أمامية ومطور Full-stack",
      title1: "محمد يحيى",
      title2: "مواقع تفاعلية تصنع فرقًا",
      desc: "أصمم واجهات متجاوبة وأطوّر تطبيقات ويب متكاملة باستخدام رياكت وأنجولار ولارافيل.",
      button: "اكتشف خدماتي",
      hintLine1: "اكتشف المزيد من",
      hintLine2: "خدماتنا",
      galleryLabels: [
        "تطوير مواقع الويب",
        "تصميم واجهات المستخدم",
        "متاجر إلكترونية",
        "تطوير الأنظمة والـBackend",
        "تطوير مواقع ووردبريس",
        "تطبيقات ويب متكاملة ولوحات تحكم",
        "تحسين المواقع وتجربة المستخدم",
      ],
      galleryAlt: (index) => `مشروع ويب رقم ${new Intl.NumberFormat("ar").format(index)}`,
    },
    about: {
      title: "نبذة عني",
      intro: "أنا مصمم ومطور واجهات أمامية مستقل، أُنشئ مواقع وتطبيقات ويب تفاعلية وسريعة ومتجاوبة.",
      storyTitle: "تطوير الواجهات الأمامية وFull-stack",
      story1: "أطوّر واجهات تفاعلية باستخدام Angular وReact، وأنشئ تطبيقات متكاملة باستخدام Laravel. أجمع بين الشيفرة النظيفة وتصميم تجربة المستخدم والتقنيات الحديثة لمساعدة العلامات التجارية على بناء حضور احترافي عبر الإنترنت.",
      story2: "أصمم كل مشروع بما يناسب أهدافه وجمهوره، مع التركيز على تقديم قيمة حقيقية من خلال تجربة سلسة وهوية بصرية واضحة واهتمام دقيق بالتفاصيل.",
      imageAlt: "مساحة عمل إبداعية",
    },
    projects: {
      homeTitle: "مشاريع ويب صُممت لخدمة الناس",
      homeDescription: "تعرّف على مواقع وتطبيقات ويب تجمع بين واجهات مدروسة وتصميم متجاوب ووظائف عملية وموثوقة.",
      viewAll: "عرض كل المشاريع",
      listTitle: "مشاريع ويب مختارة",
      listDescription: "مجموعة من المواقع وتطبيقات الويب المصممة وفق أهداف كل مشروع واحتياجات جمهوره.",
      more: "مشاريع أخرى",
      categories: {
        "Car rental": "تأجير السيارات",
        "Security system": "أنظمة الأمن",
        "E-commerce": "التجارة الإلكترونية",
      },
      descriptions: {
        1: "منصة ويب لاستعراض خدمات تأجير السيارات وإدارتها.",
        2: "موقع إلكتروني لنظام إدارة الحراسة والأمن.",
        3: "موقع إلكتروني يعرض حلول SecureVision الأمنية.",
        4: "موقع متجر إلكتروني.",
      },
      back: "العودة إلى المشاريع",
      loading: "جارٍ تحميل المشروع...",
      loadError: "تعذّر تحميل المشاريع. يُرجى المحاولة مرة أخرى لاحقًا.",
      prev: "السابق",
      next: "التالي",
      page: "صفحة",
    },
    services: {
      title: "تصميم وتطوير مواقع من البداية إلى النهاية",
      intro1: "أساعد الشركات والأفراد على تحويل أفكارهم إلى مواقع وتطبيقات ويب تحقق أهدافهم.",
      intro2: "من التخطيط وتصميم الواجهات إلى تطوير الواجهة الأمامية ووظائف الخلفية، أبني كل حل بما يناسب أهدافك وجمهورك.",
      items: [
        {
          title: "تصميم المواقع",
          description: "تصميم تجارب ويب عصرية وواضحة تعبّر عن علامتك وتعمل بسلاسة على مختلف أحجام الشاشات.",
          skills: ["التصميم المتجاوب", "Tailwind CSS", "Bootstrap"],
        },
        {
          title: "تطوير الواجهات الأمامية",
          description: "بناء واجهات تفاعلية ومتجاوبة لتطبيقات الويب الحديثة.",
          skills: ["Angular", "React.js", "Material UI (MUI)"],
        },
        {
          title: "تطوير الخلفية",
          description: "تطوير وظائف الخادم وتخزين البيانات بشكل موثوق لتطبيقات الويب.",
          skills: ["PHP", "Laravel MVC", "MySQL وقواعد البيانات"],
        },
        {
          title: "تطوير Full-stack ومنصات الويب",
          description: "دمج تطوير الواجهات والخلفية مع أساليب هندسية عملية ومنصات إدارة المحتوى.",
          skills: ["React", "Angular وLaravel", "WordPress", "تطوير الويب", "هندسة البرمجيات"],
        },
        {
          title: "مهارات إضافية",
          description: "خبرات عملية متنوعة إلى جانب تطوير الويب.",
          skills: ["Git وGitHub", "Node.js", "Composer", "إدخال البيانات"],
        },
        {
          title: "تحسين المواقع وتجربة المستخدم",
          description: "تحسين سهولة استخدام الموقع وإمكانية الوصول والظهور وسرعة التحميل.",
          skills: ["UI/UX", "إمكانية الوصول", "أساسيات SEO", "تحسين الأداء"],
        },
      ],
    },
    blog: {
      homeTitle: "ملاحظات عن تصميم وتطوير الويب",
      homeDescription: "أفكار عملية عن التصميم المتجاوب وتطوير الواجهات وLaravel وبناء تجارب ويب أفضل.",
      viewAll: "عرض كل المقالات",
      listTitle: "مقالات عن تطوير الويب",
      listDescription: "أفكار وإرشادات لتصميم المواقع وتطويرها وتحسين تطبيقات الويب.",
      back: "العودة إلى المقالات",
      loading: "جارٍ تحميل المقال...",
      loadError: "تعذّر تحميل المقالات. يُرجى المحاولة مرة أخرى لاحقًا.",
      prev: "السابق",
      next: "التالي",
      page: "صفحة",
      posts: {
        1: {
          title: "كيف تخطط لمشروع موقع إلكتروني",
          excerpt: "خطوات عملية لتحويل فكرة موقع إلى أهداف واضحة وصفحات مفيدة وخطة تنفيذ واقعية.",
          content: "<p>يبدأ الموقع الناجح بهدف واضح. حدّد الفئة التي يخدمها الموقع، وما الذي يحتاج الزائر إلى إنجازه، والصفحات التي تساعد على تحقيق ذلك.</p><p>عندما يتضح المحتوى والأولويات، يصبح تخطيط الواجهة واختيار التقنيات المناسبة وتقسيم التنفيذ إلى خطوات أسهل.</p>",
          authorRole: "مصمم ومطور مواقع Full-stack",
        },
        2: {
          title: "لماذا يُعد التصميم المتجاوب مهمًا؟",
          excerpt: "اكتشف كيف تساعد التخطيطات المرنة ونقاط التوقف المناسبة على عمل الموقع على الهاتف واللوحي والحاسوب.",
          content: "<p>يتصفح الناس المواقع من شاشات مختلفة. يكيّف التصميم المتجاوب المحتوى والتنقل ليحافظ على وضوح التجربة وسهولة استخدامها على كل جهاز.</p>",
        },
        3: {
          title: "بناء واجهات متجاوبة باستخدام Angular",
          excerpt: "نصائح عملية لإنشاء واجهات واضحة ومتجاوبة باستخدام Angular وBootstrap.",
          content: "<p>تبدأ الواجهة المفيدة بمحتوى واضح وتنقل متوقع. يساعد الجمع بين التخطيطات المتجاوبة ومكونات Angular القابلة لإعادة الاستخدام على إنشاء موقع أسهل استخدامًا وصيانة.</p>",
        },
        4: {
          title: "ربط Laravel بتطبيق الويب",
          excerpt: "تعرّف على دور واجهات API ووظائف الخادم عند ربط الواجهة الأمامية ببيانات التطبيق.",
          content: "<p>يمكن للخلفية إدارة بيانات التطبيق وقواعد العمل، بينما تتيح API للواجهة الأمامية طريقة واضحة لطلب البيانات وتحديثها.</p>",
        },
        5: {
          title: "تحسينات صغيرة لتجربة استخدام أفضل",
          excerpt: "كيف تجعل عناصر التحكم الواضحة والتنبيهات المفيدة والتنقل المتناسق المواقع أسهل استخدامًا.",
          content: "<p>غالبًا ما تصنع التفاصيل المفيدة فرقًا كبيرًا: تسميات واضحة وحالات تركيز مرئية ورسائل مفهومة وتنقل متناسق، كلها تدعم تجربة استخدام أفضل.</p>",
        },
      },
    },
    faq: {
      title: "الأسئلة الشائعة",
      description: "هل لديك سؤال عن مشروع موقعك؟ تواصل معي وأخبرني بما تخطط لتنفيذه.",
      questions: [
        ["ما خدمات الويب التي تقدمها؟", "تصميم المواقع وتطوير الواجهات المتجاوبة وبرمجة الواجهة الخلفية باستخدام Laravel وتطوير مواقع وتطبيقات ويب متكاملة."],
        ["ما التقنيات التي تعمل بها؟", "أعمل باستخدام Angular وPHP وLaravel وMySQL وWordPress وBootstrap وGit وGitHub."],
        ["كم يستغرق تنفيذ المشروع؟", "يعتمد ذلك على حجم المشروع والميزات والمحتوى. نتفق على نطاق العمل والجدول الزمني قبل بدء التطوير."],
        ["ما المعلومات المطلوبة للبدء؟", "وصف مختصر لأهدافك والجمهور المستهدف والميزات المطلوبة وأي أمثلة أو مواعيد نهائية؛ ستكون بداية مناسبة."],
      ],
      emailPrompt: "أخبرني ببعض التفاصيل، ولنتحدث عن كيفية تحويل فكرتك إلى واقع.",
      consultationTitle: "هل لديك مشروع في ذهنك؟",
      consultation: "احجز استشارة",
      email: "أرسل بريدًا إلكترونيًا",
    },
    designPartner: {
      badge: "تطوير مستمر",
      title: "شريكك في تطوير الويب",
      description: "احصل على دعم موثوق في التصميم والتطوير مع نمو موقعك، وحلول تتشكل وفق احتياجاتك المتغيرة.",
      action: "تواصل عبر واتساب",
      tailored: "حلول تناسب مشروعك",
      grows: "قابل للتوسع",
      imageAlt: "تعاون في تطوير الويب",
    },
    cta: {
      title: "هل لديك فكرة لموقع إلكتروني؟",
      description: "لنعمل معًا على تحويلها إلى موقع أو تطبيق ويب متجاوب ومتقن يدعم أهدافك.",
      action: "ابدأ مشروعك",
    },
    contact: {
      title: "لنبنِ مشروعك القادم على الويب",
      description: "أخبرني بما ترغب في تنفيذه، أو تواصل معي مباشرة عبر واتساب أو البريد الإلكتروني.",
      name: "اسمك",
      email: "بريدك الإلكتروني",
      message: "أخبرني عن موقعك أو تطبيقك...",
      sending: "جارٍ الإرسال...",
      send: "إرسال الرسالة",
      success: "تم إرسال رسالتك بنجاح!",
      error: "حدث خطأ. يُرجى المحاولة مرة أخرى.",
      whatsapp: "أرد عادةً خلال دقائق",
      whatsappLabel: "واتساب",
      emailLabel: "البريد الإلكتروني",
      loadError: "تعذّر تحميل بيانات التواصل:",
      sendError: "تعذّر إرسال الرسالة:",
    },
    legal: {
      label: "معلومات المشاريع",
      servicePolicy: {
        title: "سياسة تقديم الخدمات",
        introduction: "توضح هذه السياسة كيفية تخطيط مشاريع المواقع وتطبيقات الويب وتنفيذها ودعمها. إذا اختلفت هذه السياسة العامة مع العرض أو الاتفاق المكتوب لمشروع محدد، فتُقدَّم شروط الاتفاق الخاص بذلك المشروع.",
        sections: [
          {
            title: "١. نطاق المشروع",
            paragraphs: [
              "يبدأ كل مشروع بعرض متفق عليه يوضح أهدافه ومخرجاته وجدوله الزمني وتكلفته. يقتصر العمل على البنود المذكورة في ذلك العرض.",
              "يكون المشروع جاهزًا للبدء بعد الموافقة على العرض وتقديم الدفعة الأولية المتفق عليها والمواد أو الصلاحيات اللازمة.",
            ],
          },
          {
            title: "٢. مراحل العمل والجدول الزمني",
            paragraphs: [
              "قد يشمل المشروع التخطيط والتصميم والتطوير والمراجعة والتسليم. تُحدد المراحل والمعالم المناسبة مع العميل قبل بدء العمل.",
              "يعتمد الجدول الزمني على استلام المحتوى والصلاحيات والقرارات والملاحظات في مواعيدها. وقد تتغير مواعيد التسليم عند تأخر أي منها.",
            ],
          },
          {
            title: "٣. مسؤوليات العميل",
            paragraphs: [
              "يتولى العميل تقديم محتوى صحيح والصلاحيات اللازمة للحسابات، وإرسال الملاحظات والموافقات في الوقت المناسب. كما يجب أن يمتلك حق استخدام أي نصوص أو صور أو شعارات أو مواد أخرى يقدّمها.",
              "على العميل الاحتفاظ بنسخ من المحتوى والبيانات المهمة التي يقدّمها. لا تشمل الخدمة كتابة المحتوى أو إدخال البيانات أو رسوم الحسابات الخارجية إلا إذا ورد ذلك صراحةً في العرض.",
            ],
          },
          {
            title: "٤. التعديلات والتغييرات",
            paragraphs: [
              "يوضح العرض جولات المراجعة أو التعديل المشمولة. وقد تؤثر الطلبات التي تغيّر نطاق العمل المتفق عليه أو تضيف ميزات أو تتطلب جهدًا إضافيًا في التكلفة والجدول الزمني.",
              "تُناقش الأعمال الإضافية ويوافق عليها العميل قبل البدء فيها.",
            ],
          },
          {
            title: "٥. التكلفة والدفع",
            paragraphs: [
              "تُحدد التكلفة ومواعيد الدفع والدفعات المرتبطة بمراحل العمل في عرض المشروع. قد يتوقف العمل مؤقتًا عند تأخر دفعة مستحقة، مع تعديل الجدول الزمني بما يناسب ذلك.",
              "لا تشمل التكلفة الاستضافة أو النطاقات أو البرامج المدفوعة أو الصور المرخصة أو رسوم الأطراف الخارجية، إلا إذا نص العرض على خلاف ذلك. وتُناقش أي ضرائب أو تكاليف إضافية واجبة مع العميل.",
            ],
          },
          {
            title: "٦. التسليم والدعم المستمر",
            paragraphs: [
              "تُسلّم المخرجات المتفق عليها بعد اكتمال المشروع وسداد مستحقاته. ولا يشمل النشر أو ملفات المصدر أو التدريب إلا إذا ورد ذلك في عرض المشروع.",
              "لا تشمل الخدمة بعد التسليم الاستضافة أو الصيانة أو التحديثات أو مراقبة الأمان أو الدعم الفني المستمر، ما لم يتم الاتفاق على ذلك كتابةً بشكل منفصل.",
            ],
          },
          {
            title: "٧. إيقاف المشروع أو إنهاؤه",
            paragraphs: [
              "على أي طرف يرغب في إيقاف المشروع مؤقتًا أو إنهائه إرسال إشعار مكتوب. ويظل العميل مسؤولًا عن تكلفة الأعمال المنجزة والمصروفات أو الالتزامات التي تم التعهد بها للمشروع وفق العرض والقانون واجب التطبيق.",
              "يخضع تسليم الأعمال المنجزة وتسوية المدفوعات عند الإلغاء لاتفاق المشروع والقانون واجب التطبيق.",
            ],
          },
          {
            title: "منهجية العمل",
            paragraphs: [
              "يعتمد نجاح المشروع على التواصل الواضح والتنفيذ المتقن والتركيز على احتياجات الأشخاص الذين سيستخدمون الموقع.",
            ],
            subsections: [
              {
                title: "تخطيط المشروع",
                paragraph: "نبدأ بتحديد أهداف واضحة وخطة عملية وفهم ما يحتاج الموقع إلى تحقيقه.",
              },
              {
                title: "التصميم والتطوير",
                paragraph: "يتكامل التصميم والتطوير لتقديم تجربة متجاوبة وسهلة الاستخدام.",
              },
              {
                title: "التسليم والدعم",
                paragraph: "يُبنى الموقع النهائي وفق احتياجات المشروع مع تواصل واضح في كل مرحلة.",
              },
            ],
          },
        ],
      },
      terms: {
        title: "الشروط والأحكام",
        introduction: "تسري هذه الشروط على استخدام هذا الموقع، وتوضح القواعد العامة للعمل على مشاريع الويب. يجوز للعرض أو الاتفاق المكتوب الخاص بالمشروع أن يضيف إلى هذه الشروط أو يستبدلها فيما يخص ذلك المشروع. هذا النص معلومات عامة وليس استشارة قانونية.",
        sections: [
          {
            title: "١. استخدام الموقع",
            paragraphs: [
              "يمكنك تصفح الموقع لأغراض شخصية ومعلوماتية. توافق على عدم إساءة استخدامه أو محاولة تعطيل عمله أو استخدام محتواه بما ينتهك حقوق الآخرين أو القوانين واجبة التطبيق.",
              "يُقدَّم محتوى الموقع لأغراض عامة، وقد يتم تحديثه أو حذفه دون إشعار مسبق.",
            ],
          },
          {
            title: "٢. عروض المشاريع والاتفاقات",
            paragraphs: [
              "يبدأ المشروع بعد الاتفاق كتابةً على نطاق العمل والمخرجات والجدول الزمني والتكلفة. يُقرأ الاتفاق الخاص بالمشروع إلى جانب هذه الشروط، وعند التعارض تكون الأولوية للاتفاق الخاص بذلك المشروع.",
              "قد تتطلب الطلبات الخارجة عن النطاق المتفق عليه تقديرًا للتكلفة أو جدولًا زمنيًا محدثًا أو موافقة مكتوبة قبل تنفيذ أي عمل إضافي.",
            ],
          },
          {
            title: "٣. التكلفة والمدفوعات",
            paragraphs: [
              "تُحدد التكلفة ومواعيد الدفعات في عرض المشروع، ويلتزم العميل بالسداد في المواعيد المحددة. قد يتوقف العمل أو التسليم عند تأخر دفعة مستحقة، وفق اتفاق المشروع والقانون واجب التطبيق.",
              "يتحمل العميل تكاليف خدمات الأطراف الخارجية مثل الاستضافة والنطاقات والبرامج المدفوعة، ما لم يشملها عرض المشروع صراحةً.",
            ],
          },
          {
            title: "٤. الملكية الفكرية",
            paragraphs: [
              "يحتفظ كل طرف بملكية المواد التي امتلكها أو أنشأها قبل المشروع. ويكون العميل مسؤولًا عن امتلاك حقوق استخدام المواد التي يقدّمها.",
              "بعد سداد كامل مستحقات المشروع، تخضع ملكية المخرجات المحددة أو حقوق استخدامها لما ورد في الاتفاق المكتوب للمشروع. وتظل البرامج والخطوط والصور والمواد المرخصة من أطراف خارجية خاضعة لشروط تراخيصها.",
            ],
          },
          {
            title: "٥. السرية ومواد العميل",
            paragraphs: [
              "يحرص الطرفان على حماية معلومات المشروع غير المتاحة للعامة، واستخدامها بالقدر اللازم لتنفيذ المشروع، ما لم يتطلب القانون الإفصاح عنها.",
              "يؤكد العميل أن لديه صلاحية تقديم المحتوى والبيانات وبيانات الدخول والمواد اللازمة للعمل. وينبغي مشاركة بيانات الدخول بطريقة آمنة، ويمكن إلغاء الصلاحيات بعد انتهاء المشروع.",
            ],
          },
          {
            title: "٦. خدمات الأطراف الخارجية",
            paragraphs: [
              "قد يعتمد المشروع على الاستضافة أو المنصات أو الإضافات أو واجهات API أو خدمات أخرى تابعة لأطراف خارجية. وتخضع هذه الخدمات لشروطها ومدى توفرها، وهي أمور لا تخضع للسيطرة المباشرة للمطوّر.",
              "قد تؤثر تغييرات مزوّد الخدمة الخارجي أو انقطاعه أو رسومه أو إيقافه في المشروع. وتُناقش أي أعمال إضافية لمعالجة ذلك مع العميل.",
            ],
          },
          {
            title: "٧. الضمانات والمسؤولية",
            paragraphs: [
              "يُنفذ العمل بعناية ومهارة معقولة ووفق نطاق المشروع المتفق عليه. ولا يوجد ضمان لنتيجة تجارية معينة أو ترتيب محدد في محركات البحث أو توفر الخدمة دون انقطاع.",
              "بالقدر الذي يسمح به القانون واجب التطبيق، لا يكون أي من الطرفين مسؤولًا تجاه الآخر عن الأضرار غير المباشرة أو التبعية الناشئة عن المشروع. ولا تستبعد هذه الشروط أي حقوق أو مسؤولية لا يسمح القانون باستبعادها.",
            ],
          },
          {
            title: "٨. التواصل والتحديثات",
            paragraphs: [
              "للاستفسارات حول هذه الشروط أو أي مشروع، يمكنك مراسلتي على hamotech22@gmail.com. قد يتم تحديث هذه الشروط من وقت لآخر، وتسري النسخة المنشورة على استخدام الموقع من تاريخ نشرها.",
            ],
          },
        ],
      },
    },
    footer: {
      servicePolicy: "سياسة تقديم الخدمات",
      terms: "الشروط والأحكام",
      copyright: "© 2026 محمد يحيى. جميع الحقوق محفوظة.",
      credit: "تصميم وتطوير",
      backToTop: "العودة إلى الأعلى",
      navigation: "روابط الموقع",
    },
    metrics: {
      labels: ["أطر الواجهة الأمامية", "تطوير الواجهة الخلفية", "أطر CSS", "مكتبة واجهات المستخدم"],
      values: ["Angular", "PHP / Laravel", "MySQL", "WordPress"],
      title: "تصميم مدروس وتطوير يعتمد عليه",
      description: "أجمع بين التصميم والتطوير لإنشاء مواقع وتطبيقات ويب متجاوبة تخدم أهدافًا حقيقية وتترك انطباعًا جيدًا.",
      action: "استعرض المشاريع",
    },
  },
};

export default texts;