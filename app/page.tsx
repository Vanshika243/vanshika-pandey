import Image from 'next/image';

type Project = {
    title: string;
    category: string;
    description: string;
    image: string | null;
    imageAlt: string | null;
    hoverImage: string | null;
};

const navLinks = [
    {
        label: 'Work',
        href: '#work',
    },
    {
        label: 'About',
        href: '#about',
    },
    {
        label: 'Contact',
        href: '#contact',
    },
];

const heroActions = [
    {
        label: 'See My Work',
        href: '#work',
        className: 'bg-cyan-500 text-slate-950 hover:bg-cyan-400',
    },
    {
        label: 'Let\'s connect',
        href: '#contact',
        className: 'border border-slate-700 text-slate-200 hover:border-slate-500 hover:text-white',
    },
];

const metrics = [
    { value: '30+', label: 'API Optimized' },
    { value: '3+', label: 'Projects' },
    { value: '7.77', label: 'CGPA' },
    { value: '100%', label: 'Pixel-perfect' },
    { value: '1+', label: 'Years' },

];

const services = [
    {
        title: 'Frontend Architecture',
        description: 'Build scalable, high-performance web applications using React.js, Redux Toolkit, and TypeScript.',
    },
    {
        title: 'Responsive UI Engineering',
        description: 'Develop mobile-first interfaces with HTML5, CSS3, Tailwind CSS, Flexbox, Grid, and reusable components.',
    },
    {
        title: 'API & State Integration',
        description: 'Integrate RESTful APIs, manage state with async thunks, and improve performance with optimized data handling.',
    },
];

const projects: Project[] = [
    {
        title: 'STABOR India Pvt Ltd',
        category: 'Software Developer (Frontend)',
        description: 'Designed and implemented scalable frontend architecture using React.js, Redux Toolkit, TypeScript, Tailwind CSS, Grid, and CS-in-JS from May 2025 to Present.',
        image: '/stabor-india-work.png',   
        hoverImage: '/tobor.png',       
        imageAlt: 'STABOR India frontend dashboard work',
    },

    {
        title: 'INFOZEB Consultancy Pvt Ltd',
        category: 'Frontend Consultant via STABOR',
        description: 'Developed responsive cross-browser modules, converted Figma designs into pixel-perfect UI, reduced UI bugs by 40%, and improved API handling from Jan 2025 to Apr 2025.',
        image: '/infozeb-backup-work.png',         
        hoverImage: '/Infozeb-Automated-backup.png', 
        imageAlt: 'Infozeb backup dashboard',
    },
    

    {
        title: 'Frontend Internship',
        category: 'STABOR India Pvt Ltd',
        description: 'Built responsive pages, interactive JavaScript components, and assisted in debugging, testing, performance optimization, semantic HTML, and accessibility from Oct 2024 to Dec 2024.',
        image: '/stabor-india-work.png', 
        hoverImage: '/tobor.png',         
        imageAlt: 'STABOR India frontend dashboard work',

    },
];

const testimonials = [
    {
        quote: 'Designed and implemented scalable frontend architecture with strong attention to maintainability, performance, and responsive UI quality.',
        author: 'Experience highlight',
    },
    {
        quote: 'Improved API efficiency, reduced UI bugs, and collaborated effectively with Agile/Scrum teams on cross-functional product delivery.',
        author: 'Work impact',
    },
];

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <section className="relative overflow-hidden bg-slate-950 px-6 py-16 sm:px-10 lg:px-16">
                <div className="pointer-events-none absolute right-[-10%] top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
                <div className="pointer-events-none absolute left-[-5%] top-44 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

                <div className="relative mx-auto max-w-6xl">
                    <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                                Frontend developer portfolio
                            </p>
                        </div>
                        <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300 sm:text-base">
                            {navLinks.map((link) => (
                                <a key={link.href} href={link.href} className="transition hover:text-white">
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </header>

                    <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                        <div className="max-w-2xl">
                            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">Hello, I am Vanshika Pandey</p>
                            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                                Frontend developer building scalable, high-performance web applications.
                            </h1>
                            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                                I develop production-ready interfaces using React.js, Redux Toolkit, TypeScript, HTML5, CSS3, and Tailwind CSS with a focus on responsive design, API integration, accessibility, and cross-browser compatibility.
                            </p>

                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                {heroActions.map((action) => (
                                    <a
                                        key={action.href}
                                        href={action.href}
                                        className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${action.className}`}
                                    >
                                        {action.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Featured metrics</p>
                                    <h2 className="text-2xl font-semibold text-white">Resume highlights</h2>
                                </div>
                                <div className="grid gap-4 sm:grid-cols-3">
                                    {metrics.map((metric) => (
                                        <div key={metric.label} className="rounded-3xl bg-slate-900/80 p-5 text-center">
                                            <p className="text-3xl font-semibold text-white">{metric.value}</p>
                                            <p className="mt-2 text-sm text-slate-400">{metric.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div> */}

                        <div className="relative flex items-center justify-center">

                            <div className="absolute h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] lg:h-[440px] lg:w-[440px] rounded-full bg-cyan-500/20 blur-3xl" />

                    
<div className="relative z-10 h-[220px] w-[220px] sm:h-[260px] sm:w-[260px] lg:h-[300px] lg:w-[300px] rounded-full overflow-hidden border border-white/10">
                                {/* <Image
                                    src="/your-profile.png"
                                    alt="Profile"
                                    fill
                                    className="object-cover"
                                /> */}
                            </div>
                            {metrics.map((item, i) => {
                                const angle = (360 / metrics.length) * i; // 72° spacing

                                return (
                                    <div
                                        key={i}
                                        className="absolute"
                                        style={{
                                            transform: `
                        rotate(${angle}deg)
                        translate(180px)
                        rotate(-${angle}deg)
                    `,
                                        }}
                                    >
                                        <div className="rounded-xl sm:rounded-2xl bg-white/10 px-3 py-2 sm:px-5 sm:py-3 backdrop-blur-md border border-white/10 text-center">
                                            <p className="text-sm sm:text-lg font-semibold text-white">{item.value}</p>
                                            <p className="text-[10px] sm:text-xs text-slate-300">{item.label}</p>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </section>

            <section id="work" className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-16">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 max-w-2xl">
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Work</p>
                        <h2 className="mt-4 text-4xl font-semibold text-white">Experience and projects</h2>
                        <p className="mt-4 text-slate-400">Frontend roles focused on scalable architecture, state management, dashboards, reusable components, and production-ready UI delivery.</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {projects.map((project) => (
                            //   <article key={project.title} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 transition hover:-translate-y-1 hover:border-cyan-400/30">
                            //     <div className="relative mb-4 h-52 overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-slate-900">
                            //       {project.image ? (
                            //         <Image
                            //           src={project.image}
                            //           alt={project.imageAlt ?? project.title}
                            //           fill
                            //           className="object-cover object-top"
                            //           sizes="(min-width: 768px) 33vw, 100vw"
                            //         />
                            //       ) : (
                            //         <div className="h-full w-full bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-slate-900 p-4" />
                            //       )}
                            //     </div>
                            //     <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{project.category}</p>
                            //     <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
                            //     <p className="mt-3 text-slate-400">{project.description}</p>
                            //   </article>


                            <article key={project.title} className="group rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 transition hover:-translate-y-1 hover:border-cyan-400/30">
                                <div className="relative mb-4 h-52 overflow-hidden rounded-3xl">

                                    {/* Default Image */}
                                    {project.image && (
                                        <Image
                                            src={project.image}
                                            alt={project.imageAlt ?? project.title}
                                            fill
                                            className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                                        />
                                    )}

                                    {/* Hover Image */}
                                    {project.hoverImage && (
                                        <Image
                                            src={project.hoverImage}
                                            alt={project.imageAlt ?? project.title}
                                            fill
                                            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                        />
                                    )}
                                </div>

                                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                                    {project.category}
                                </p>
                                <h3 className="mt-4 text-xl font-semibold text-white">
                                    {project.title}
                                </h3>
                                <p className="mt-3 text-slate-400">{project.description}</p>
                            </article>

                        ))}
                    </div>
                </div>
            </section>

            <section id="about" className="relative overflow-hidden bg-slate-950 px-6 py-16 sm:px-10 lg:px-16">
                <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">About</p>
                            <h2 className="mt-4 text-4xl font-semibold text-white">React, Redux, TypeScript, and accessible frontend systems.</h2>
                            <p className="mt-4 max-w-xl text-slate-400">B.Tech in Electronics and Communication Engineering from The NorthCap University, Gurugram. Skilled in RESTful API integration, state management, DOM manipulation, performance optimization, WCAG accessibility, Agile/Scrum, GitHub, VS Code, Figma, and Chrome DevTools.</p>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-3">
                            {services.map((service) => (
                                <div key={service.title} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-glow">
                                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                                    <p className="mt-3 text-slate-400">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 py-16 sm:px-10 lg:px-16">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 max-w-2xl">
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Testimonials</p>
                        <h2 className="mt-4 text-4xl font-semibold text-white">Work strengths</h2>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                        {testimonials.map((item) => (
                            <div key={item.author} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow">
                                <p className="text-lg leading-8 text-slate-300">“{item.quote}”</p>
                                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">{item.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-gradient-to-r from-cyan-500/15 via-slate-950 to-violet-500/15 px-6 py-16 sm:px-10 lg:px-16">
                <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-slate-900/90 p-10 shadow-glow backdrop-blur-xl">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Open to frontend opportunities</p>
                            <h2 className="mt-3 text-3xl font-semibold text-white">Let’s build responsive, accessible, and scalable web products.</h2>
                        </div>
                        <a href="mailto:vanshikapandey243@gmail.com" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
                            vanshikapandey243@gmail.com
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
