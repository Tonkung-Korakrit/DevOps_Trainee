"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import BookPage from "./BookPage";
import SkillIcon from "../SkillIcon";
import ProjectCard from "../ProjectCard";

// 1. กำหนดลำดับหน้าทั้งหมด
const PAGES_CONFIG = [
  { id: "cover", label: "Cover" },
  { id: "contents", label: "Contents" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// 2. Variants สำหรับการเปิดหน้าหนังสือแบบ 3D (แก้ไข Error TypeScript แล้ว)
const pageVariants: Variants = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 150 : -150,
    rotateY: direction > 0 ? 45 : -45,
    filter: "blur(10px)",
  }),
  animate: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut" as const, 
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -150 : 150,
    rotateY: direction > 0 ? -45 : 45,
    filter: "blur(10px)",
    transition: {
      duration: 0.4,
      ease: "easeIn" as const,
    },
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
          <div className="relative flex h-full flex-col items-center justify-center text-center px-6">
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-neutral-200" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-neutral-200" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 font-medium">Digital Portfolio • {new Date().getFullYear()}</p>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-neutral-950 via-neutral-800 to-neutral-500 font-space">Ton Kung</h1>
            <div className="mt-4 h-px w-24 bg-neutral-900" />
            <p className="mt-6 text-sm md:text-lg font-medium text-neutral-700 max-w-sm">Dev-Ops & Full-Stack Developer Specializing in Crafting <span className="italic text-sky-600 font-serif text-2xl">Elegant Experiences</span></p>
            <button onClick={goNext} className="mt-12 group flex flex-col items-center gap-2 animate-bounce transition-all">
              <span className="text-[10px] uppercase tracking-tighter text-neutral-400 group-hover:text-neutral-900">Open Book</span>
              <div className="w-px h-8 bg-neutral-200 group-hover:bg-neutral-900" />
            </button>
          </div>
        );

      case "contents":
        return (
          <BookPage title="Index" subtitle="Table of Contents">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6 font-inter">
              <div className="space-y-6">
                {[
                  { id: 2, no: "01", title: "The Narrative", desc: "Biography and core philosophy" },
                  { id: 3, no: "02", title: "Arsenal", desc: "Languages and Cloud Infrastructure" },
                  { id: 4, no: "03", title: "Selected Works", desc: "Full-Stack, DevOps and QA Case Studies" },
                  { id: 5, no: "04", title: "Connection", desc: "Digital presence and contact" },
                ].map((item) => (
                  <div key={item.no} onClick={() => jumpToPage(item.id)} className="group cursor-pointer border-b border-neutral-100 pb-2 hover:border-neutral-900 transition-all">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-neutral-300 group-hover:text-sky-500 transition">{item.no}</span>
                      <h3 className="text-lg font-bold text-neutral-900 group-hover:translate-x-2 transition-transform duration-300">{item.title}</h3>
                    </div>
                    <p className="mt-1 ml-8 text-[10px] text-neutral-400 uppercase tracking-widest leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold">Quick Intelligence</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px]"><span className="text-neutral-500 uppercase">Frontend / Flutter</span><span className="text-neutral-900 font-bold">90%</span></div>
                    <div className="h-1 w-full bg-neutral-200 rounded-full overflow-hidden"><div className="h-full w-[90%] bg-sky-500" /></div>
                    <div className="flex justify-between text-[10px] pt-2"><span className="text-neutral-500 uppercase">Cloud / DevOps</span><span className="text-neutral-900 font-bold">75%</span></div>
                    <div className="h-1 w-full bg-neutral-200 rounded-full overflow-hidden"><div className="h-full w-[75%] bg-violet-500" /></div>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-neutral-200">
                  <p className="text-[10px] leading-relaxed text-neutral-400 italic font-medium">"Focusing on stability, scalability, and user-centric design through automated workflows."</p>
                </div>
              </div>
            </div>
          </BookPage>
        );

      case "about":
        return (
          <BookPage title="The Architect" subtitle="Chapter 1: Narrative">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start font-inter">
              <div className="relative group mx-auto lg:mx-0">
                <div className="absolute -inset-2 bg-gradient-to-tr from-sky-500 to-violet-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-xl overflow-hidden border border-neutral-200 shadow-xl bg-white">
                  <img src="/images/me.png" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" alt="Korakrit" />
                </div>
              </div>
              <div className="flex-1 space-y-6 text-neutral-900">
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight font-space text-neutral-950 uppercase">Korakrit Pongpanjasil</h3>
                  <p className="inline-block px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-[10px] font-bold uppercase tracking-widest">Software Engineer Intern @ DevX</p>
                </div>
                <div className="prose prose-sm text-neutral-600 leading-relaxed font-medium">
                  <p>ผมหลงใหลในการเปลี่ยน "โจทย์ที่ซับซ้อน" ให้เป็น "โค้ดที่เรียบง่าย" โดยให้ความสำคัญกับทั้ง UI ที่ลื่นไหล และความเสถียรของระบบหลังบ้าน ผ่านประสบการณ์การพัฒนาแบบ Full-Stack Integration</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100 text-xs">
                  <div><h4 className="text-[10px] uppercase text-neutral-400 font-bold tracking-widest mb-1">Philosophy</h4><p className="italic text-neutral-700 font-medium font-space">"Scalability is standard."</p></div>
                  <div><h4 className="text-[10px] uppercase text-neutral-400 font-bold tracking-widest mb-1">Education</h4><p className="text-neutral-700 font-medium">Computer Engineering</p></div>
                </div>
              </div>
            </div>
          </BookPage>
        );

      case "skills":
        return (
          <BookPage title="Arsenal" subtitle="Chapter 2: Tech Stack">
             <div className="space-y-8 font-inter">
                <div>
                  <h2 className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-4">Front-end Development</h2>
                  <div className="flex flex-wrap gap-4"><SkillIcon src="/icons/react.png" label="React" /><SkillIcon src="/icons/nextjs.png" label="Next.js" /><SkillIcon src="/icons/tailwind.png" label="Tailwind CSS" /><SkillIcon src="/icons/figma.jpg" label="Figma" /></div>
                </div>
                <div>
                  <h2 className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-4">Back-end & Infra</h2>
                  <div className="flex flex-wrap gap-4"><SkillIcon src="/icons/node.png" label="Node.js" /><SkillIcon src="/icons/prisma.png" label="Prisma" /><SkillIcon src="/icons/aws.png" label="AWS Cloud" /><SkillIcon src="/icons/docker.png" label="Docker" /><SkillIcon src="/icons/azure.png" label="Azure Cloud" /></div>
                </div>
                <div>
                  <h2 className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-4">Other Mobile & Tech</h2>
                  <div className="flex flex-wrap gap-4"><SkillIcon src="/icons/flutter.png" label="Flutter/Dart" /><SkillIcon src="/icons/github.jpg" label="GitHub" /></div>
                </div>
             </div>
          </BookPage>
        );

      case "projects":
        return (
          <BookPage title="Showcase" subtitle="Chapter 3: Portfolio">
            <div className="space-y-5 max-h-[480px] overflow-y-auto pr-4 custom-scrollbar scroll-smooth">
              <ProjectCard title="Project China – ข่าว & วิดีโอ" period="2025 · Internship @ DevX" role="Backend & Mobile Integration" description="แพลตฟอร์มคอนเทนต์รองรับแอปพลิเคชัน Flutter พร้อมระบบเก็บสถิติคอนเทนต์อย่างละเอียด." tech={["Flutter", "Node.js", "Prisma", "MySQL"]} href="/projects/app_jrn_group" />
              <ProjectCard title="Project Gaysorn" period="2025 · Internship @ DevX" role="Frontend Developer" description="ระบบจัดการงานแจ้งซ่อมดิจิทัลของเจ้าหน้าที่ช่างภายในอาคารเกษรวิลเลจ เพื่อลดการใช้กระดาษ." tech={["React", "Tailwind CSS"]} href="/projects/gaysorn" />
              <ProjectCard title="CS360 Cloud Computing" period="2024 · Class Project" role="Dev-Ops Cloud Engineer" description="Deploy ระบบบน AWS EC2 พร้อม Automate CI/CD pipeline 100% ด้วย Shell Script." tech={["Docker", "AWS", "Shell Script", "GitHub Actions"]} href="/projects/cs360" />
              <ProjectCard title="DormHub – ระบบจองหอพัก" period="2025 · University Project" role="Full-stack Developer" description="ระบบจองหอพักพร้อมแดชบอร์ดจัดการผู้ใช้และสถานะห้องแบบ Real-time." tech={["Next.js", "Node.js", "Prisma", "MySQL"]} href="/projects/dormhub" />
              <ProjectCard title="CS367 Web Service Development" period="2024 · Class Project" role="Full-stack Developer" description="ออกแบบและพัฒนาเว็บแอปพลิเคชันสำหรับการเช่าเกมกระดานออนไลน์." tech={["Spring Boot", "MySQL", "JavaScript"]} href="/projects/cs367" />
              <ProjectCard title="CS262 Software Engineer Testing" period="2023 · Class Project" role="QA Engineering" description="เรียนรู้การเขียน Automated Test ครบ 4 ระดับ เพื่อผลลัพธ์ Code Coverage 100%." tech={["Selenium", "JavaScript", "QA"]} href="/projects/cs262" />
              <ProjectCard title="CS361 Mobile Application" period="2024 · Class Project" role="Full-stack Developer" description="พัฒนาแอปพลิเคชันขาย Steam game key สำหรับแพลตฟอร์มมือถือ." tech={["React Native", "Firebase"]} />
              <ProjectCard title="CS264 Software Engineering" period="2023 · Class Project" role="Full-stack Developer" description="ระบบจัดการคำร้องขอเพิ่ม/ถอนรายวิชาล่าช้าอัตโนมัติ." tech={["React", "Strapi"]} />
              <ProjectCard title="CS251 Database for Web" period="2023 · Class Project" role="Database Administrator" description="จัดการโครงสร้างฐานข้อมูล MySQL เพื่อเชื่อมต่อกับแอปพลิเคชัน." tech={["MySQL", "Spring Boot"]} />
            </div>
          </BookPage>
        );

      case "contact":
        return (
          <BookPage title="Connection" subtitle="Chapter 4: Contact">
            <div className="flex flex-col items-center justify-center h-full text-center space-y-8 font-inter">
              <div className="space-y-2">
                <p className="text-neutral-500 font-medium">หากสนใจร่วมงานหรือแลกเปลี่ยนความรู้ ติดต่อได้ที่:</p>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight">korakrit.pongpanjasil@gmail.com</h3>
              </div>
              <div className="flex gap-8 justify-center text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 pt-6">
                <a href="https://github.com/Tonkung-Korakrit" target="_blank" className="hover:text-sky-500 transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/korakrit-pongpanjasil-588645354/" target="_blank" className="hover:text-sky-500 transition-colors border-l border-neutral-200 pl-8">LinkedIn</a>
              </div>
              <div className="pt-10"><p className="text-[9px] uppercase tracking-widest text-neutral-300">© 2025 Designed & Built by Ton Kung</p></div>
            </div>
          </BookPage>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center px-4 py-10 selection:bg-sky-100 selection:text-sky-900">
      <div className="relative w-full max-w-5xl h-[580px] md:h-[680px] bg-neutral-50 rounded-[2.5rem] shadow-[0_35px_100px_rgba(0,0,0,0.5)] overflow-hidden flex ring-1 ring-white/10">
        
        {/* Sidebar (สันหนังสือ) */}
        <aside className="hidden md:flex w-52 flex-col border-r border-neutral-200 bg-neutral-100/50 backdrop-blur-xl">
          <div className="px-6 py-10 border-b border-neutral-200">
            <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-black">Portfolio</p>
            <p className="mt-2 text-xl font-black text-neutral-900 font-space tracking-tighter">Ton Kung</p>
          </div>
          <nav className="flex-1 py-6">
            <ul className="space-y-1">
              {PAGES_CONFIG.map((p, index) => (
                <li key={p.id}>
                  <button
                    onClick={() => jumpToPage(index)}
                    className={`w-full text-left px-6 py-3 text-[10px] uppercase tracking-widest font-bold transition-all ${
                      index === currentIndex ? "bg-neutral-950 text-white shadow-lg" : "text-neutral-400 hover:bg-neutral-200/50 hover:text-neutral-900"
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
        <main className="flex-1 flex flex-col bg-white">
          <header className="flex items-center justify-between px-8 py-6 border-b border-neutral-50 bg-white/80 backdrop-blur-sm z-20">
            <div className="text-[9px] uppercase tracking-[0.3em] text-neutral-300 font-black">
              Chapter {currentIndex} — Page {currentIndex + 1}
            </div>
            <div className="flex gap-4">
              <button onClick={goPrev} disabled={currentIndex === 0} className="text-[10px] font-black uppercase tracking-widest disabled:opacity-10 hover:text-sky-500 transition-all p-2 bg-neutral-50 rounded-lg">Prev</button>
              <button onClick={goNext} disabled={currentIndex === PAGES_CONFIG.length - 1} className="text-[10px] font-black uppercase tracking-widest disabled:opacity-10 hover:text-sky-500 transition-all p-2 bg-neutral-950 text-white rounded-lg">Next</button>
            </div>
          </header>

          <div className="flex-1 px-8 md:px-12 py-10 overflow-hidden relative" style={{ perspective: "1500px" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full h-full origin-center"
              >
                {renderPageContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BookLayout;