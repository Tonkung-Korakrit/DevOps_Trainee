"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import BookPage from "./BookPage";
import SkillIcon from "../SkillIcon";
import ProjectCard from "../ProjectCard";

const PAGES_CONFIG = [
  { id: "cover", label: "Cover" },
  { id: "contents", label: "Contents" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const pageVariants: Variants = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
    rotateY: direction > 0 ? 30 : -30,
    filter: "blur(8px)",
  }),
  animate: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -100 : 100,
    rotateY: direction > 0 ? -30 : 30,
    filter: "blur(8px)",
    transition: { duration: 0.3, ease: "easeIn" },
  }),
};

const BookLayout: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const goNext = () => {
    if (currentIndex < PAGES_CONFIG.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const jumpToPage = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const renderPageContent = () => {
    const pageId = PAGES_CONFIG[currentIndex].id;

    switch (pageId) {
      case "cover":
        return (
          <div className="relative flex h-full flex-col items-center justify-center text-center px-4 min-h-[400px]">
            <div className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 border-t-2 border-l-2 border-neutral-200" />
            <div className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 border-b-2 border-r-2 border-neutral-200" />
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-neutral-400 font-medium">Digital Portfolio • 2025</p>
            <h1 className="mt-4 md:mt-6 text-4xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-neutral-950 via-neutral-800 to-neutral-500 font-space uppercase">Ton Kung</h1>
            <div className="mt-3 md:mt-4 h-px w-16 md:w-24 bg-neutral-900" />
            <p className="mt-4 md:mt-6 text-xs md:text-lg font-medium text-neutral-700 max-w-[280px] md:max-w-sm leading-relaxed">
              Dev-Ops & Full-Stack Developer Specializing in Crafting <span className="italic text-sky-600 font-serif text-xl md:text-2xl underline decoration-sky-200 underline-offset-4">Elegant Digital Experiences</span>
            </p>
            <button onClick={goNext} className="mt-8 md:mt-12 group flex flex-col items-center gap-2 animate-bounce transition-all">
              <span className="text-[9px] md:text-[10px] uppercase tracking-tighter text-neutral-400 font-bold">Open Book</span>
              <div className="w-px h-6 md:h-8 bg-neutral-200" />
            </button>
          </div>
        );

      case "contents":
        return (
          <BookPage title="Index" subtitle="Table of Contents">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-4 font-inter h-full">
              <div className="space-y-4 md:space-y-6">
                {[
                  { id: 2, no: "01", title: "My Profile", desc: "My conclusion and core philosophy." },
                  { id: 3, no: "02", title: "Tech-Stack & Tool", desc: "Languages, Frameworks, and Infrastructure" },
                  { id: 4, no: "03", title: "Projects in My Portfolio", desc: "Full-Stack, DevOps and QA Case Studies" },
                  { id: 5, no: "04", title: "My connection", desc: "Digital presence and contact channels" },
                ].map((item) => (
                  <div key={item.no} onClick={() => jumpToPage(item.id)} className="group cursor-pointer border-b border-neutral-100 pb-2 active:bg-neutral-50 md:hover:border-neutral-900 transition-all">
                    <div className="flex items-baseline gap-3 md:gap-4">
                      <span className="font-mono text-[10px] md:text-xs text-neutral-300 group-hover:text-sky-500 transition">{item.no}</span>
                      <h3 className="text-base md:text-lg font-bold text-neutral-900 group-active:translate-x-1 md:group-hover:translate-x-2 transition-transform duration-300">{item.title}</h3>
                    </div>
                    <p className="mt-0.5 ml-6 md:ml-8 text-[9px] text-neutral-400 uppercase tracking-widest">{item.desc}</p>
                  </div>
                ))}
              </div>
              {/* Expertise Matrix - แสดงผลบนคอม และจัดลงมาข้างล่างบนมือถือ */}
              <div className="flex bg-neutral-50 border border-neutral-200 rounded-2xl p-6 flex-col justify-between shadow-sm min-h-[250px] md:min-h-0">
                <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold">Expertise Matrix</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-semibold"><span className="text-neutral-500 uppercase">UX/UI</span><span className="text-neutral-900">70%</span></div>
                    <div className="h-1 w-full bg-neutral-200 rounded-full overflow-hidden"><div className="h-full w-[70%] bg-sky-500" /></div>
                    <div className="flex justify-between text-[10px] font-semibold"><span className="text-neutral-500 uppercase">Mobile Engineering</span><span className="text-neutral-900">80%</span></div>
                    <div className="h-1 w-full bg-neutral-200 rounded-full overflow-hidden"><div className="h-full w-[80%] bg-emerald-300" /></div>
                    <div className="flex justify-between text-[10px] font-semibold"><span className="text-neutral-500 uppercase">Web Engineering</span><span className="text-neutral-900">90%</span></div>
                    <div className="h-1 w-full bg-neutral-200 rounded-full overflow-hidden"><div className="h-full w-[90%] bg-fuchsia-400" /></div>
                    <div className="flex justify-between text-[10px] font-semibold pt-2"><span className="text-neutral-500 uppercase">Cloud & Automation</span><span className="text-neutral-900">75%</span></div>
                    <div className="h-1 w-full bg-neutral-200 rounded-full overflow-hidden"><div className="h-full w-[75%] bg-violet-500" /></div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200">
                  <p className="text-[10px] leading-relaxed text-neutral-400 italic font-medium">"Dedicated to engineering stable, scalable, and user-centric solutions through modern automated workflows."</p>
                </div>
              </div>
            </div>
          </BookPage>
        );

      case "about":
        return (
          <BookPage title="My Profile" subtitle="Chapter 1: Me">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-12 items-center lg:items-start text-center lg:text-left font-inter h-full">
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-tr from-sky-500 to-violet-500 rounded-2xl blur opacity-20" />
                <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-xl overflow-hidden border border-neutral-200 shadow-xl bg-white">
                  <img src="/images/me.png" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" alt="Korakrit" />
                </div>
              </div>
              <div className="flex-1 space-y-4 md:space-y-6 text-neutral-900">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-4xl font-bold tracking-tight font-space text-neutral-950 uppercase">Korakrit Pongpanjasil</h3>
                  <p className="inline-block px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Software Engineer Intern @ DevX</p>
                </div>
                <div className="prose prose-sm text-neutral-600 leading-relaxed font-medium text-xs md:text-sm">
                  <p>ผมหลงใหลในการเปลี่ยน "โจทย์ที่ซับซ้อน" ให้เป็น "โค้ดที่เรียบง่าย" โดยให้ความสำคัญกับทั้ง UI ที่ลื่นไหล และความเสถียรของระบบหลังบ้าน ผ่านประสบการณ์การพัฒนาแบบ Full-Stack Integration</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100 text-[10px] md:text-xs text-left">
                  <div><h4 className="uppercase text-neutral-400 font-bold tracking-widest mb-1">Philosophy</h4><p className="italic text-neutral-700 font-medium font-space">"Scalability is standard."</p></div>
                  <div><h4 className="uppercase text-neutral-400 font-bold tracking-widest mb-1">Education</h4><p className="text-neutral-700 font-medium">Computer Engineering</p></div>
                </div>
              </div>
            </div>
          </BookPage>
        );

      case "skills":
        return (
          <BookPage title="Tech-Stack & Other Tool" subtitle="Chapter 2: Tech Stack">
             <div className="space-y-6 md:space-y-8 font-inter pb-10">
                <div>
                  <h2 className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-3 md:mb-4">Front-end Development</h2>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    <SkillIcon src="/icons/react.png" label="React" /><SkillIcon src="/icons/nextjs.png" label="Next.js" /><SkillIcon src="/icons/tailwind.png" label="Tailwind" /><SkillIcon src="/icons/figma.jpg" label="Figma" />
                  </div>
                </div>
                <div>
                  <h2 className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-3 md:mb-4">Back-end & Infra</h2>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    <SkillIcon src="/icons/node.png" label="Node.js" /><SkillIcon src="/icons/prisma.png" label="Prisma" /><SkillIcon src="/icons/aws.png" label="AWS" /><SkillIcon src="/icons/docker.png" label="Docker" /><SkillIcon src="/icons/azure.png" label="Azure" /><SkillIcon src="/icons/mysql.jpg" label="MySQL" /><SkillIcon src="/icons/postgresql.png" label="PostgreSQL" />
                  </div>
                </div>
                <div>
                  <h2 className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-3 md:mb-4">Mobile & Others</h2>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    <SkillIcon src="/icons/flutter.png" label="Flutter" /><SkillIcon src="/icons/github.jpg" label="GitHub" />
                  </div>
                </div>
             </div>
          </BookPage>
        );

      case "projects":
        return (
          <BookPage title="Projects in My Portfolio" subtitle="Chapter 3: Showcase">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20 scroll-smooth">
              <ProjectCard title="Project China – ข่าว & วิดีโอ" period="2025 · Internship @ DevX" role="Backend & Mobile Integration" description="แพลตฟอร์มคอนเทนต์รองรับแอปพลิเคชัน Flutter พร้อมระบบเก็บสถิติ Real-time." tech={["Flutter", "Node.js", "Prisma"]} href="/projects/app_jrn_group" />
              <ProjectCard title="Project Gaysorn" period="2025 · Internship @ DevX" role="Frontend Developer" description="ระบบจัดการงานแจ้งซ่อมดิจิทัลเพื่อเพิ่มประสิทธิภาพองค์กร." tech={["React", "Tailwind CSS"]} href="/projects/gaysorn" />
              <ProjectCard title="CS360 Cloud Computing" period="2024 · Class Project" role="Dev-Ops Cloud Engineer" description="Automated CI/CD pipeline 100% บน AWS EC2 ด้วย Shell Script." tech={["AWS", "Docker", "ShellScript"]} href="/projects/cs360" />
              <ProjectCard title="DormHub – ระบบจองหอพัก" period="2025 · University Project" role="Full-stack Developer" description="ระบบจองหอพักพร้อมแดชบอร์ดแอดมินและสถานะห้อง Real-time." tech={["Next.js", "Prisma"]} href="/projects/dormhub" />
              <ProjectCard title="CS367 Web Service Development" period="2024 · Class Project" role="Full-stack Developer" description="ออกแบบและพัฒนาเว็บแอปพลิเคชันสำหรับการเช่าเกมกระดานออนไลน์." tech={["Spring Boot", "MySQL"]} href="/projects/cs367" />
              <ProjectCard title="CS262 Software Engineer Testing" period="2023 · Class Project" role="QA Engineering" description="สคริปต์ทดสอบอัตโนมัติครบ 4 ระดับ เพื่อประกันคุณภาพซอฟต์แวร์." tech={["Selenium", "Jasmine"]} href="/projects/cs262" />
              {/* <ProjectCard title="CS361 Mobile Application" period="2024 · Class Project" role="Full-stack Developer" description="พัฒนาแอปพลิเคชันขาย Steam game key สำหรับแพลตฟอร์มมือถือ." tech={["React Native", "Firebase"]} /> */}
              {/* <ProjectCard title="CS264 Software Engineering" period="2023 · Class Project" role="Full-stack Developer" description="ระบบจัดการคำร้องขอเพิ่ม/ถอนรายวิชาล่าช้าอัตโนมัติ." tech={["React", "Strapi"]} /> */}
              {/* <ProjectCard title="CS251 Database for Web" period="2023 · Class Project" role="Database Administrator" description="จัดการโครงสร้างฐานข้อมูล MySQL เพื่อเชื่อมต่อกับแอปพลิเคชัน." tech={["MySQL", "Spring Boot"]} /> */}
            </div>
          </BookPage>
        );

      case "contact":
        return (
          <BookPage title="My connection" subtitle="Chapter 4: Connection">
            <div className="flex flex-col items-center justify-center h-full text-center space-y-6 md:space-y-8 font-inter min-h-[300px]">
              <div className="space-y-2 px-2">
                <p className="text-[10px] md:text-sm text-neutral-500 font-medium uppercase tracking-widest">Available for collaboration</p>
                <h3 className="text-lg md:text-3xl font-bold text-neutral-900 tracking-tight break-all">korakrit.pongpanjasil@gmail.com</h3>
              </div>
              <div className="flex gap-6 md:gap-8 justify-center text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 pt-4">
                <a href="https://github.com/Tonkung-Korakrit" target="_blank" className="hover:text-sky-500 transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/korakrit-pongpanjasil-588645354/" target="_blank" className="hover:text-sky-500 transition-colors border-l border-neutral-200 pl-6 md:pl-8">LinkedIn</a>
              </div>
              <div className="pt-8 md:pt-12"><p className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-neutral-300 font-black">© 2025 Designed & Built by Ton Kung</p></div>
            </div>
          </BookPage>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-0 md:p-10 selection:bg-sky-100 selection:text-sky-900">
      <div className="relative w-full max-w-5xl h-screen md:h-[680px] bg-neutral-50 md:rounded-[2.5rem] shadow-[0_35px_100px_rgba(0,0,0,0.5)] overflow-hidden flex ring-1 ring-white/10">
        
        {/* Sidebar (Desktop Only) */}
        <aside className="hidden md:flex w-52 flex-col border-r border-neutral-200 bg-neutral-100/50 backdrop-blur-xl shrink-0">
          <div className="px-6 py-10 border-b border-neutral-200">
            <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-black">Portfolio</p>
            <p className="mt-2 text-xl font-black text-neutral-900 font-space tracking-tighter uppercase italic">Ton Kung</p>
          </div>
          <nav className="flex-1 py-6 overflow-y-auto">
            <ul className="space-y-1">
              {PAGES_CONFIG.map((p, index) => (
                <li key={p.id}>
                  <button
                    onClick={() => jumpToPage(index)}
                    className={`w-full text-left px-6 py-3 text-[10px] uppercase tracking-widest font-bold transition-all ${
                      index === currentIndex ? "bg-neutral-950 text-white shadow-lg" : "text-neutral-500 hover:bg-neutral-200/50 hover:text-neutral-900"
                    }`}
                  >
                    {p.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col bg-white min-w-0 h-full">
          {/* Header */}
          <header className="flex items-center justify-between px-6 md:px-8 py-4 md:py-6 border-b border-neutral-50 bg-white/80 backdrop-blur-sm z-20 shrink-0">
            <div className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-neutral-300 font-black truncate max-w-[120px] md:max-w-none">
              Chapter {currentIndex} — Page {currentIndex + 1}
            </div>
            <div className="flex gap-2 md:gap-4">
              <button onClick={goPrev} disabled={currentIndex === 0} className="text-[10px] font-black uppercase tracking-widest disabled:opacity-10 hover:text-sky-500 transition-all px-3 py-2 bg-neutral-50 rounded-lg">Prev</button>
              <button onClick={goNext} disabled={currentIndex === PAGES_CONFIG.length - 1} className="text-[10px] font-black uppercase tracking-widest disabled:opacity-10 hover:text-sky-500 transition-all px-3 py-2 bg-neutral-950 text-white rounded-lg shadow-sm">Next</button>
            </div>
          </header>

          {/* Page Viewport with Scrolling for Mobile */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden relative custom-scrollbar bg-white" style={{ perspective: "1500px" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full h-full px-5 md:px-12 py-6 md:py-10 origin-center"
              >
                {renderPageContent()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation Indicator */}
          <div className="flex md:hidden items-center justify-center gap-1.5 py-4 bg-white border-t border-neutral-50 shrink-0">
            {PAGES_CONFIG.map((_, index) => (
              <div 
                key={index} 
                className={`h-1 rounded-full transition-all duration-300 ${index === currentIndex ? "w-6 bg-neutral-900" : "w-1.5 bg-neutral-200"}`}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default BookLayout;