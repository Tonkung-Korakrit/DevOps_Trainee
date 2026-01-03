// app/projects/dormhub/page.tsx
import ProjectFlipbook from "@/app/components/ProjectFlipbook";
import Link from "next/link";

const DormHubPage = () => {
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
            Selected University Project
          </p>
        </header>

        {/* Main Project Card */}
        <section className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/80 shadow-[0_18px_60px_rgba(0,0,0,0.8)]">
          <div className="h-1.5 w-full bg-gradient-to-r from-sky-500 via-blue-400 to-indigo-500" />

          <div className="p-6 md:p-8 space-y-6">
            {/* Title & Tags */}
            <div className="space-y-3">
              <h1 className="font-space text-2xl md:text-3xl font-semibold tracking-tight text-white">
                DormHub – Smart Management Ecosystem
              </h1>
              <p className="text-sm text-neutral-400">
                ระบบจัดการจองหอพักแบบครบวงจร ที่มาพร้อมผังอาคารจำลองสถานะแบบ Real-time และระบบจัดการหลังบ้านสำหรับแอดมิน
              </p>

              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-neutral-200 font-medium">
                  Role: Full-stack Developer
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-neutral-400">
                  2025 · Class Project
                </span>
                <span className="rounded-full border border-sky-500/70 bg-sky-500/10 px-3 py-1 text-sky-200">
                  Next.js · Prisma · MySQL · Tailwind CSS · Node.js
                </span>
              </div>
            </div>

            {/* Showcase Gallery */}
            <div className="mt-4">
              <ProjectFlipbook
                images={[
                  "/images/projects/dormhub/hero_preview.png", // เปลี่ยนพาธเป็นรูปจริงของคุณ
                  "/images/projects/dormhub/building_map.png",
                  "/images/projects/dormhub/admin_dashboard.png",
                  "/images/projects/dormhub/mobile_view.png",
                ]}
                ariaLabel="DormHub Project Screenshot Gallery"
                perPage={2}
              />
            </div>

            {/* Content Sections */}
            <div className="space-y-8 text-sm leading-relaxed text-neutral-200">
              
              {/* Overview */}
              <div className="flex gap-4">
                <div className="mt-1 h-fit w-2 rounded-full bg-gradient-to-b from-sky-400 to-blue-500 py-4" />
                <div className="space-y-2">
                  <h2 className="font-space text-base font-semibold text-neutral-50">Overview</h2>
                  <p>
                    พัฒนาระบบเพื่อแก้ปัญหาความไม่โปร่งใสและกระบวนการจองหอพักที่ล่าช้า 
                    โดยออกแบบให้รองรับการทำงานแบบ End-to-End ตั้งแต่การเลือกโซนพักอาศัยผ่าน UI แบบ Visual Map 
                    ไปจนถึงขั้นตอนการอนุมัติผ่านแผงควบคุมของเจ้าหน้าที่ (Admin Panel) เพื่อให้เกิดความคล่องตัวในการบริหารจัดการอาคาร
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="flex gap-4">
                <div className="mt-1 h-fit w-1 rounded-full bg-gradient-to-b from-violet-400 to-fuchsia-500 py-4" />
                <div className="space-y-2">
                  <h2 className="font-space text-base font-semibold text-neutral-50">My Responsibilities</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-1 gap-x-4 gap-y-1 list-none text-neutral-300">
                    <li>• ออกแบบ Database Schema และ ER Diagram ด้วย MySQL</li>
                    <li>• พัฒนา Serverless API ผ่าน Next.js และ Prisma ORM</li>
                    <li>• ออกแบบ UX/UI ด้วย Figma โดยเน้นความง่ายในการใช้งาน (Usability)</li>
                    <li>• พัฒนา Frontend แบบ Responsive ด้วย Tailwind CSS</li>
                    <li>• จัดการสถานะห้องพัก (State Management) เพื่อป้องกันการจองซ้ำ</li>
                  </ul>
                </div>
              </div>

              {/* Key Features */}
              <div className="flex gap-4">
                <div className="mt-1 h-fit w-1 rounded-full bg-gradient-to-b from-emerald-400 to-teal-500 py-4" />
                <div className="space-y-2">
                  <h2 className="font-space text-base font-semibold text-neutral-50">Key Features</h2>
                  <ul className="list-disc pl-5 space-y-2 text-neutral-300 font-medium">
                    <li>
                      <strong>Interactive Building Map:</strong> เลือกห้องพักผ่านผังจำลองอาคาร 
                      แสดงสถานะ ว่าง/กำลังจอง/เต็ม ด้วยสีที่ชัดเจน
                    </li>
                    <li>
                      <strong>Real-time Status Tracking:</strong> ระบบติดตามสถานะคำขอการจอง 
                      ที่อัปเดตข้อมูลทันทีเมื่อผ่านการอนุมัติ
                    </li>
                    <li>
                      <strong>Admin Analytics Dashboard:</strong> ระบบหลังบ้านสำหรับสรุปสถิติผู้พักอาศัย 
                      จัดการการคืนห้อง และยืนยันการจองในที่เดียว
                    </li>
                    <li>
                      <strong>Secure Authentication:</strong> ระบบจัดการสิทธิ์ผู้ใช้งานแยกตามบทบาท (User/Admin)
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
                      <strong>Concurrency Handling:</strong> ความท้าทายหลักคือการจัดการข้อมูลเมื่อมีผู้ใช้พยายามจองห้องเดียวกันในเวลาพร้อมกัน 
                      ซึ่งแก้ปัญหาด้วยการใช้ Database Transaction และความสามารถของ Prisma
                    </p>
                    <p>
                      <strong>UI Visualization:</strong> การเปลี่ยนข้อมูลตัวเลขใน DB ให้เป็นผังอาคารที่คนทั่วไปเข้าใจได้ง่าย 
                      ช่วยเพิ่มประสิทธิภาพการใช้งานให้กับทั้งนักศึกษาและเจ้าหน้าที่
                    </p>
                  </div>
                </div>
              </div>

              {/* Links Area */}
              <div className="flex gap-4 pt-4 border-t border-neutral-800">
                <div className="mt-1 h-fit w-1 rounded-full bg-neutral-600 py-4" />
                <div className="space-y-2">
                  <h2 className="font-space text-base font-semibold text-neutral-50">Project Assets</h2>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://github.com/Tonkung-Korakrit/DormHub.git"
                      target="_blank"
                      className="flex items-center gap-2 rounded-lg bg-neutral-800 px-4 py-2 text-xs font-medium text-neutral-200 hover:bg-neutral-700 transition border border-neutral-700"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" /></svg>
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default DormHubPage;