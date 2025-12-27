// app/projects/dormhub/page.tsx
import LightboxGallery from "@/app/components/LightboxGallery";
import ProjectFlipbook from "@/app/components/ProjectFlipbook";
import Link from "next/link";

const CS367Page = () => {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 px-4 py-10 flex justify-center">
      {/* Background Effect */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.09),transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.32),transparent_60%)] opacity-70" />
      </div>

      <article className="w-full max-w-4xl space-y-8">
        {/* Header Area */}
        <header className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-xs text-neutral-400 hover:text-neutral-200 transition"
          >
            ← Back to portfolio
          </Link>
          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
            Full-Stack Web Service Case Study
          </p>
        </header>

        {/* Main Project Card */}
        <section className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/80 shadow-[0_18px_60px_rgba(0,0,0,0.8)]">
          <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-500" />

          <div className="p-6 md:p-8 space-y-6">
            {/* Title & Tags */}
            <div className="space-y-3">
              <h1 className="font-space text-2xl md:text-3xl font-semibold tracking-tight">
                CS367: Board Game Online Rental Platform
              </h1>
              <p className="text-sm text-neutral-400">
                แพลตฟอร์มให้บริการเช่าเกมกระดานแบบครบวงจร พัฒนาด้วยสถาปัตยกรรม RESTful Web Service 
                พร้อมระบบการจัดการสถานะแบบ Real-time และการ Deploy บนระบบคลาวด์
              </p>

              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-neutral-200">
                  Role: Full-stack Developer
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-neutral-400">
                  2024 · Class Project
                </span>
                <span className="rounded-full border border-teal-500/70 bg-teal-500/10 px-3 py-1 text-teal-200">
                  Spring Boot · MySQL · Azure · GitHub Actions · REST API
                </span>
              </div>
            </div>

            {/* ถ้ามี screenshot ภายหลัง เอาไว้ตรงนี้ */}
            <div className="mt-4">
              {/* <img
                src="/images/projects/cs360/config_AWS_cloud.png"
                className="(w-full)/2 rounded-2xl border border-neutral-800 object-cover"
                alt="DormHub preview"
              /> */}
              <ProjectFlipbook
                images={[
                  "/images/projects/cs367/boardgame_page_1.png",
                  "/images/projects/cs367/boardgame_page_2.png",
                  "/images/projects/cs367/rental_page_1.png",
                  "/images/projects/cs367/payment_confirmation.png",
                  "/images/projects/cs367/popup_success.png",
                  "/images/projects/cs367/rental_detail.png",
                  "/images/projects/cs367/stock_decreased.png",
                  "/images/projects/cs367/history_rental_1.png",
                  "/images/projects/cs367/history_rental_2.png",
                ]}
                ariaLabel="CS367 Project Screenshot Gallery"
                perPage={2}
              />
            </div>

            {/* Content Sections */}
            <div className="space-y-8 text-sm leading-relaxed text-neutral-200">
              
              {/* Overview */}
              <div className="flex gap-4">
                <div className="mt-1 h-fit w-2 rounded-full bg-gradient-to-b from-emerald-400 to-teal-500 py-4" />
                <div className="space-y-2">
                  <h2 className="font-space text-base font-semibold text-neutral-50">Overview</h2>
                  <p>
                    ออกแบบ และพัฒนาระบบนิเวศของเว็บเซอร์วิสสำหรับการเช่าเกมกระดานออนไลน์ 
                    มุ่งเน้นการแก้ปัญหาความซับซ้อนในการจอง และการจัดการสต็อกสินค้า 
                    โดยสร้างระบบที่เชื่อมโยงกันอย่างสมบูรณ์ตั้งแต่ฐานข้อมูลหลังบ้านไปจนถึงส่วนติดต่อผู้ใช้ที่เรียบง่าย
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="flex gap-4">
                <div className="mt-1 h-fit w-1 rounded-full bg-gradient-to-b from-violet-400 to-fuchsia-500 py-4" />
                <div className="space-y-2">
                  <h2 className="font-space text-base font-semibold text-neutral-50">My Responsibilities</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-1 gap-x-4 gap-y-1 list-none text-neutral-300">
                    <li>• ออกแบบ System Architecture และ Database Schema (MySQL)</li>
                    <li>• พัฒนา RESTful Backend Service ด้วย Spring Boot</li>
                    <li>• ออกแบบ และพัฒนา UI/UX ด้วย HTML, CSS และ JavaScript</li>
                    <li>• จัดการระบบ Automated Deployment ผ่าน GitHub Actions</li>
                    <li>• ปรับแต่งสภาพแวดล้อมบน Production Server (Azure Cloud)</li>
                  </ul>
                </div>
              </div>

              {/* Key Features */}
              <div className="flex gap-4">
                <div className="mt-1 h-fit w-1 rounded-full bg-gradient-to-b from-sky-400 to-blue-500 py-4" />
                <div className="space-y-2">
                  <h2 className="font-space text-base font-semibold text-neutral-50">Key Features</h2>
                  <ul className="list-disc pl-5 space-y-2 text-neutral-300">
                    <li>
                      <strong>Advanced Filtering System:</strong> ค้นหาเกมที่ต้องการได้ละเอียดตามประเภท, 
                      จำนวนผู้เล่น, และระดับความยาก เพื่อประสบการณ์การค้นหาที่รวดเร็ว
                    </li>
                    <li>
                      <strong>Live Availability Tracking:</strong> ระบบตรวจสอบสถานะความว่างของบอร์ดเกมแบบวินาทีต่อวินาที 
                      ลดปัญหาการจองซ้ำซ้อน (Concurrency Handling)
                    </li>
                    <li>
                      <strong>Comprehensive Admin Suite:</strong> ระบบจัดการ Inventory สำหรับแอดมิน 
                      ที่สามารถเพิ่ม/แก้ไขข้อมูลเกม และตรวจสอบประวัติการเช่าได้ทันที
                    </li>
                    <li>
                      <strong>Automated Workflow:</strong> ทุกการ Commit โค้ดจะถูกตรวจสอบ และ Deploy ขึ้น Azure 
                      โดยอัตโนมัติ ทำให้ระบบทันสมัยอยู่เสมอ
                    </li>
                  </ul>
                </div>
              </div>

              {/* Challenges & Learnings */}
              <div className="flex gap-4">
                <div className="mt-1 h-fit w-1 rounded-full bg-gradient-to-b from-amber-400 to-orange-500 py-4" />
                <div className="space-y-2">
                  <h2 className="font-space text-base font-semibold text-neutral-50">Challenges & Learnings</h2>
                  <div className="bg-neutral-800/40 rounded-xl p-4 border border-neutral-700/50 space-y-3">
                    <p>
                      <strong>Full-Stack Integration:</strong> ความท้าทายในการผสานรวมเทคโนโลยีที่ต่างกัน (Java, SQL, JS) 
                      ให้ทำงานสอดคล้องกันอย่างราบรื่น โดยเน้นการออกแบบ API ที่เป็นระเบียบตามมาตรฐาน REST
                    </p>
                    <p>
                      <strong>DevOps Culture:</strong> ได้เรียนรู้ความสำคัญของ CI/CD ในระดับปฏิบัติจริง 
                      การจัดการ Environment Variables และ Database Migration บน Cloud ช่วยลดเวลาทำงานได้มหาศาล
                    </p>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-neutral-800">
                <div className="mt-1 h-fit w-1 rounded-full bg-neutral-600 py-4" />
                <div className="space-y-2">
                  <h2 className="font-space text-base font-semibold text-neutral-50">Project Assets</h2>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://github.com/Korakrit6509650203/CS367_BoardGame.git"
                      target="_blank"
                      className="flex items-center gap-2 rounded-lg bg-neutral-800 px-4 py-2 text-xs font-medium text-neutral-200 hover:bg-neutral-700 transition border border-neutral-700"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" /></svg>
                      View Code on GitHub
                    </a>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-2 italic">
                    * Live Demo: Azure Cloud subscription expired. Demo available via documentation/screenshots.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default CS367Page;
