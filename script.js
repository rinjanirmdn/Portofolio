(() => {
    'use strict';

    /* ===== I18N Translations ===== */
    const translations = {
        en: {
            // Nav
            'nav.about': 'About',
            'nav.experience': 'Experience',
            'nav.projects': 'Projects',
            'nav.skills': 'Skills',
            'nav.certifications': 'Certifications',
            'nav.education': 'Education',
            'nav.contact': 'Contact',
            // Hero
            'hero.greeting': 'Hello, I\'m',
            'hero.tagline': 'An Informatics graduate optimizing physical operations through digital systems, specializing in warehouse digitalization, quality control, and process engineering.',
            'hero.cta1': 'View Projects',
            'hero.cta2': 'Contact Me',
            'hero.ctaCV': 'Curriculum Vitae',
            'hero.cvEn': 'English Version',
            'hero.cvId': 'Indonesian Version',
            'hero.profileRole': 'Informatics Graduate',
            'hero.ph.gpa': 'GPA 3.38',
            'hero.ph.certified': 'BNSP Certified',
            'hero.ph.location': 'Bekasi, Indonesia',
            // About
            'about.tag': 'About Me',
            'about.p1': 'Informatics graduate with hands-on experience spanning <strong>warehouse digitalization</strong>, <strong>software quality assurance</strong>, and production operations in manufacturing and logistics. My strength lies at the intersection of technology and real-world operations, bridging the gap between technical systems and boots-on-the-ground processes.',
            'about.p2': 'Having worked as a production operator in automotive cable manufacturing and as a warehouse admin, I understand operational pain points firsthand. Combined with my systems engineering background and B2B marketing experience, I build and optimize digital tools that truly empower operations and drive efficiency.',
            'about.certified': 'Certified SE',
            'about.certs': 'Certifications',
            // Experience
            'exp.tag': 'Experience',
            'exp.current': 'Current',
            'exp.job1.title': 'Warehouse Digitalization Intern',
            'exp.job1.date': '<i class=\"fas fa-calendar-alt\"></i> Nov 2025 - May 2026',
            'exp.job1.desc': 'Contributing to warehouse digitalization initiatives including system development, functional testing, system validation, and technical documentation for manufacturing operations.',
            'exp.job2.title': 'IT Support Intern',
            'exp.job2.date': '<i class=\"fas fa-calendar-alt\"></i> Oct 2024 - Dec 2024',
            'exp.job2.desc': 'Provided technical support, hardware/software troubleshooting, and IT infrastructure maintenance in a corporate environment.',
            'exp.job3.title': 'Production Operator',
            'exp.job3.date': '<i class=\"fas fa-calendar-alt\"></i> Aug 2022 - Apr 2023',
            'exp.job3.desc': 'Operated manufacturing production lines, ensuring quality standards and efficient output in automotive cable production.',
            'exp.job4.title': 'Admin & Warehouse Technician Intern',
            'exp.job4.date': '<i class=\"fas fa-calendar-alt\"></i> Jan 2020 - Mar 2020',
            'exp.job4.desc': 'Managed warehouse administration, inventory tracking, and documentation processes in a logistics and distribution environment.',
            // Timeline Tags
            'tag.digitalization': 'Digitalization',
            'tag.qaTesting': 'QA Testing',
            'tag.sysValidation': 'System Validation',
            'tag.documentation': 'Documentation',
            'tag.itSupport': 'IT Support',
            'tag.troubleshooting': 'Troubleshooting',
            'tag.infrastructure': 'Infrastructure',
            'tag.manufacturing': 'Manufacturing',
            'tag.qualityControl': 'Quality Control',
            'tag.production': 'Production',
            'tag.administration': 'Administration',
            'tag.warehouse': 'Warehouse',
            'tag.inventory': 'Inventory',
            // Projects
            'proj.tag': 'Projects',
            'proj.edcs.title': 'e-Docking Control System (e-DCS)',
            'proj.edcs.desc': 'A comprehensive docking control system with real-time monitoring via WebSocket, built during the warehouse digitalization internship at PT Oneject Indonesia.',
            'proj.warehouse.title': 'Warehouse Management App + QR Code',
            'proj.warehouse.desc': 'Warehouse management system with QR code integration using Reed-Solomon error correction and SHA-256 hashing. Built as a thesis project for PT Globalnine Indonesia.',
            'proj.mega.title': 'Google Ads Campaign - Mega Harmoni Adventure',
            'proj.mega.desc': 'Digital marketing campaign achieving an exceptional 15.55% CTR, leveraging Google Tag Manager for precise analytics tracking and conversion optimization.',
            'proj.bookshelf.title': 'Bookshelf Application',
            'proj.bookshelf.desc': 'Interactive bookshelf application for managing personal book collections with full CRUD functionality, built with vanilla web technologies.',
            'proj.tambun.title': 'Tambun Regional Profile Page',
            'proj.tambun.desc': 'A regional profile page built as part of web development coursework at Dicoding, applying HTML and CSS fundamentals for layout and design.',
            'proj.viewGithub': 'View on GitHub',
            'proj.viewReport': 'View Campaign Report',
            // Skills
            'skills.tag': 'Skills',
            'skills.technical': 'Systems & Digital Tools',
            'skills.operational': 'Operations & Quality Control',
            'skills.professional': 'Business & Professional',
            'skills.techDoc': 'Technical Documentation',
            'skills.processOpt': 'Process Optimization',
            'skills.warehouse': 'Warehouse Digitalization',
            'skills.crossFunc': 'Cross-Functional Teamwork',
            'skills.research': 'Research & Analysis',
            'skills.comm': 'English & Indonesian',
            // Certifications
            'cert.tag': 'Certifications',
            'cert.national': 'National Certification',
            'cert.dicoding1': 'Web Programming Fundamentals',
            'cert.dicoding2': 'JavaScript Programming Fundamentals',
            'cert.dicoding3': 'Front-End Web Development for Beginners',
            'cert.cisco': 'Networking & Cybersecurity',
            'cert.summary': 'Professional certifications across software engineering, cloud computing, web development, and networking.',
            // Education
            'edu.tag': 'Education',
            'edu.degree1': 'Bachelor of Computer Science',
            'edu.major1': 'Informatics',
            'edu.degree2': 'Vocational High School',
            'edu.major2': 'Light Vehicle Engineering',
            // Contact
            'contact.tag': 'Contact',
            'contact.subtitle': 'Have a project in mind or want to discuss opportunities? Feel free to reach out.',
            'contact.location': 'Location',
        },
        id: {
            // Nav
            'nav.about': 'Tentang',
            'nav.experience': 'Pengalaman',
            'nav.projects': 'Proyek',
            'nav.skills': 'Keahlian',
            'nav.certifications': 'Sertifikasi',
            'nav.education': 'Pendidikan',
            'nav.contact': 'Kontak',
            // Hero
            'hero.greeting': 'Halo, Saya',
            'hero.tagline': 'Lulusan Informatika yang mengoptimalkan operasional fisik melalui sistem digital, berspesialisasi dalam digitalisasi gudang, kontrol kualitas, dan rekayasa proses.',
            'hero.cta1': 'Lihat Proyek',
            'hero.cta2': 'Hubungi Saya',
            'hero.ctaCV': 'Curriculum Vitae',
            'hero.cvEn': 'Versi Inggris',
            'hero.cvId': 'Versi Indonesia',
            'hero.profileRole': 'Lulusan Informatika',
            'hero.ph.gpa': 'IPK 3.38',
            'hero.ph.certified': 'Sertifikasi BNSP',
            'hero.ph.location': 'Bekasi, Indonesia',
            // About
            'about.tag': 'Tentang Saya',
            'about.p1': 'Lulusan Informatika dengan pengalaman langsung yang mencakup <strong>digitalisasi gudang</strong>, <strong>quality assurance perangkat lunak</strong>, serta operasi produksi di lingkungan manufaktur dan logistik. Kekuatan saya terletak pada persimpangan teknologi dan operasional dunia nyata, menjembatani kesenjangan antara sistem teknis dan proses lapangan.',
            'about.p2': 'Pernah bekerja sebagai operator produksi dalam manufaktur kabel otomotif dan admin gudang, saya memahami kendala operasional secara langsung. Dikombinasikan dengan latar belakang teknik sistem dan pemasaran B2B, saya membangun dan mengoptimalkan alat digital yang benar-benar memberdayakan operasional dan meningkatkan efisiensi.',
            'about.certified': 'SE Tersertifikasi',
            'about.certs': 'Sertifikasi',
            // Experience
            'exp.tag': 'Pengalaman',
            'exp.current': 'Saat Ini',
            'exp.job1.title': 'Magang Digitalisasi Gudang',
            'exp.job1.date': '<i class=\"fas fa-calendar-alt\"></i> Nov 2025 - Mei 2026',
            'exp.job1.desc': 'Berkontribusi dalam inisiatif digitalisasi gudang meliputi pengembangan sistem, pengujian fungsional, validasi sistem, dan dokumentasi teknis untuk operasi manufaktur.',
            'exp.job2.title': 'Intern IT Support',
            'exp.job2.date': '<i class=\"fas fa-calendar-alt\"></i> Okt 2024 - Des 2024',
            'exp.job2.desc': 'Memberikan dukungan teknis, troubleshooting hardware/software, dan pemeliharaan infrastruktur IT di lingkungan korporat.',
            'exp.job3.title': 'Operator Produksi',
            'exp.job3.date': '<i class=\"fas fa-calendar-alt\"></i> Agt 2022 - Apr 2023',
            'exp.job3.desc': 'Mengoperasikan lini produksi manufaktur, memastikan standar kualitas dan output yang efisien dalam produksi kabel otomotif.',
            'exp.job4.title': 'Intern Admin & Teknisi Gudang',
            'exp.job4.date': '<i class=\"fas fa-calendar-alt\"></i> Jan 2020 - Mar 2020',
            'exp.job4.desc': 'Mengelola administrasi gudang, pelacakan inventaris, dan proses dokumentasi di lingkungan logistik dan distribusi.',
            // Timeline Tags
            'tag.digitalization': 'Digitalisasi',
            'tag.qaTesting': 'Pengujian QA',
            'tag.sysValidation': 'Validasi Sistem',
            'tag.documentation': 'Dokumentasi',
            'tag.itSupport': 'Dukungan IT',
            'tag.troubleshooting': 'Troubleshooting',
            'tag.infrastructure': 'Infrastruktur',
            'tag.manufacturing': 'Manufaktur',
            'tag.qualityControl': 'Kontrol Kualitas',
            'tag.production': 'Produksi',
            'tag.administration': 'Administrasi',
            'tag.warehouse': 'Gudang',
            'tag.inventory': 'Inventaris',
            // Projects
            'proj.tag': 'Proyek',
            'proj.edcs.title': 'e-Docking Control System (e-DCS)',
            'proj.edcs.desc': 'Sistem kontrol docking komprehensif dengan monitoring real-time via WebSocket, dibangun selama magang digitalisasi gudang di PT Oneject Indonesia.',
            'proj.warehouse.title': 'Aplikasi Manajemen Gudang + QR Code',
            'proj.warehouse.desc': 'Sistem manajemen gudang dengan integrasi QR code menggunakan error correction Reed-Solomon dan hashing SHA-256. Dibangun sebagai proyek skripsi untuk PT Globalnine Indonesia.',
            'proj.mega.title': 'Kampanye Google Ads - Mega Harmoni Adventure',
            'proj.mega.desc': 'Kampanye pemasaran digital yang mencapai CTR 15.55% yang luar biasa, memanfaatkan Google Tag Manager untuk pelacakan analitik dan optimasi konversi.',
            'proj.bookshelf.title': 'Aplikasi Rak Buku',
            'proj.bookshelf.desc': 'Aplikasi rak buku interaktif untuk mengelola koleksi buku pribadi dengan fungsionalitas CRUD lengkap, dibangun dengan teknologi web vanilla.',
            'proj.tambun.title': 'Halaman Profil Wilayah Tambun',
            'proj.tambun.desc': 'Halaman profil daerah yang dibangun sebagai bagian dari kursus pengembangan web di Dicoding, menerapkan dasar-dasar HTML dan CSS.',
            'proj.viewGithub': 'Lihat di GitHub',
            'proj.viewReport': 'Lihat Laporan Kampanye',
            // Skills
            'skills.tag': 'Keahlian',
            'skills.technical': 'Sistem & Alat Digital',
            'skills.operational': 'Operasional & Kontrol Kualitas',
            'skills.professional': 'Bisnis & Profesional',
            'skills.techDoc': 'Dokumentasi Teknis',
            'skills.processOpt': 'Optimasi Proses',
            'skills.warehouse': 'Digitalisasi Gudang',
            'skills.crossFunc': 'Kerja Tim Lintas Fungsi',
            'skills.research': 'Riset & Analisis',
            'skills.comm': 'Inggris & Indonesia',
            // Certifications
            'cert.tag': 'Sertifikasi',
            'cert.national': 'Sertifikasi Nasional',
            'cert.dicoding1': 'Dasar Pemrograman Web',
            'cert.dicoding2': 'Dasar Pemrograman JavaScript',
            'cert.dicoding3': 'Pengembangan Web Front-End untuk Pemula',
            'cert.cisco': 'Jaringan & Keamanan Siber',
            'cert.summary': 'Sertifikasi profesional di bidang rekayasa perangkat lunak, cloud computing, pengembangan web, dan jaringan.',
            // Education
            'edu.tag': 'Pendidikan',
            'edu.degree1': 'Sarjana Komputer (S.Kom.)',
            'edu.major1': 'Informatika',
            'edu.degree2': 'Sekolah Menengah Kejuruan',
            'edu.major2': 'Teknik Kendaraan Ringan (Otomotif)',
            // Contact
            'contact.tag': 'Kontak',
            'contact.subtitle': 'Punya proyek atau ingin berdiskusi tentang peluang? Jangan ragu untuk menghubungi saya.',
            'contact.location': 'Lokasi',
        }
    };

    const htmlTranslations = {
        en: {
            'about.title': 'Strategic Fusion of<br><span class="text-gradient">Tech &amp; Operations</span>',
            'exp.title': 'Professional<br><span class="text-gradient">Timeline</span>',
            'proj.title': 'Selected<br><span class="text-gradient">Projects</span>',
            'skills.title': 'Professional<br><span class="text-gradient">Capabilities</span>',
            'cert.title': 'Credentials &amp;<br><span class="text-gradient">Certifications</span>',
            'edu.title': 'Academic<br><span class="text-gradient">Background</span>',
            'contact.title': 'Connect with<br><span class="text-gradient">Rinjani</span>',
        },
        id: {
            'about.title': 'Sinergi Strategis<br><span class="text-gradient">Teknologi &amp; Operasional</span>',
            'exp.title': 'Garis Waktu<br><span class="text-gradient">Profesional</span>',
            'proj.title': 'Proyek<br><span class="text-gradient">Pilihan</span>',
            'skills.title': 'Kemampuan<br><span class="text-gradient">Profesional</span>',
            'cert.title': 'Kredensial &amp;<br><span class="text-gradient">Sertifikasi</span>',
            'edu.title': 'Latar Belakang<br><span class="text-gradient">Akademis</span>',
            'contact.title': 'Terhubung dengan<br><span class="text-gradient">Rinjani</span>',
        }
    };

    let currentLang = localStorage.getItem('lang') || 'en';

    /* ===== LANGUAGE SYSTEM ===== */
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.getElementById('langLabel').textContent = lang.toUpperCase();
        document.documentElement.lang = lang;

        // Text translations
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // HTML translations (section titles)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (htmlTranslations[lang] && htmlTranslations[lang][key]) {
                el.innerHTML = htmlTranslations[lang][key];
            }
        });
    }

    /* ===== THEME SYSTEM ===== */
    const themeOrder = ['system', 'light', 'dark'];
    const themeIcons = { system: 'fa-desktop', light: 'fa-sun', dark: 'fa-moon' };

    function getStoredTheme() {
        return localStorage.getItem('theme') || 'system';
    }

    function setTheme(theme) {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        const icon = document.getElementById('themeIcon');
        icon.className = 'fas ' + themeIcons[theme];
    }

    function cycleTheme() {
        const current = getStoredTheme();
        const idx = themeOrder.indexOf(current);
        const next = themeOrder[(idx + 1) % themeOrder.length];
        setTheme(next);
    }

    /* ===== NAVBAR ===== */
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    let navOverlay;

    function createOverlay() {
        navOverlay = document.createElement('div');
        navOverlay.className = 'nav-overlay';
        document.body.appendChild(navOverlay);
        navOverlay.addEventListener('click', closeMenu);
    }

    function closeMenu() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        if (navOverlay) navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function toggleMenu() {
        const isActive = navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        if (navOverlay) navOverlay.classList.toggle('active');
        document.body.style.overflow = isActive ? 'hidden' : '';
    }

    navToggle.addEventListener('click', toggleMenu);
    createOverlay();

    // Close on nav link click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Scroll effects
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        navbar.classList.toggle('scrolled', scrollY > 50);
        lastScroll = scrollY;

        // Active section highlighting
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link:not(.nav-link-cta)');
        let currentSection = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 120;
            if (scrollY >= top) currentSection = sec.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }, { passive: true });

    /* ===== SCROLL ANIMATIONS ===== */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    /* ===== SMOOTH SCROLL ===== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const id = anchor.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (target) {
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    /* ===== EVENT LISTENERS ===== */
    document.getElementById('themeToggle').addEventListener('click', cycleTheme);
    document.getElementById('langToggle').addEventListener('click', () => {
        setLanguage(currentLang === 'en' ? 'id' : 'en');
    });

    /* ===== CV DROPDOWN ===== */
    const cvDropdownContainer = document.getElementById('cvDropdownContainer');
    const cvDropdownBtn = document.getElementById('cvDropdownBtn');

    if (cvDropdownBtn && cvDropdownContainer) {
        cvDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            cvDropdownContainer.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!cvDropdownContainer.contains(e.target)) {
                cvDropdownContainer.classList.remove('active');
            }
        });
    }

    /* ===== INIT ===== */
    setTheme(getStoredTheme());
    setLanguage(currentLang);
})();
