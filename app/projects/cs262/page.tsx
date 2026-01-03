// app/projects/cs262-tester/page.tsx
import ProjectFlipbook from "@/app/components/ProjectFlipbook";
import Link from "next/link";

const CS262Page = () => {
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
            QA Automation Case Study
          </p>
        </header>

        {/* Main Project Card */}
        <section className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/80 shadow-[0_18px_60px_rgba(0,0,0,0.8)]">
          <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />

          <div className="p-6 md:p-8 space-y-6">
            {/* Title & Tags */}
            <div className="space-y-3">
              <h1 className="font-space text-2xl md:text-3xl font-semibold tracking-tight">
                CS262 Software Engineer Testing
              </h1>
              <p className="text-sm text-neutral-400">
                Automated End-to-End Testing Suite สำหรับระบบทดสอบบริการทางการเงิน เครื่องคิดเลข และการเสิร์ซค้นหา
              </p>

              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-neutral-200">
                  Role: QA Automation Engineer
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-neutral-400">
                  2025 · Class Project
                </span>
                <span className="rounded-full border border-emerald-500/70 bg-emerald-500/10 px-3 py-1 text-emerald-200">
                  Protractor · Jasmine · Selenium · JavaScript · Chrome DevTools
                </span>
              </div>
            </div>

            {/* Showcase Gallery (แนะนำให้ใช้ไฟล์ GIF ที่แสดงการรันเทส) */}
            <div className="mt-4">
              <ProjectFlipbook
                images={[
                  "/images/projects/cs262/test-running-demo.gif", // วิดีโอ/GIF ตอนรันเทส
                  "/images/projects/cs262/custom-reporter-t.png", // รูปผลลัพธ์ตัว T ใน Terminal
                  "/images/projects/cs262/banking-test-case.png", // รูปตอนเทสหน้า Bank
                  "/images/projects/cs262/calculator-test-case.png", // รูปตอนเทสหน้า Bank
                  "/images/projects/cs262/google-search-case.png", // รูปตอนเทส Google
                ]}
                ariaLabel="QA Project Test Execution Gallery"
                perPage={2}
              />
            </div>

            {/* Content Sections */}
            <div className="space-y-8 text-sm leading-relaxed text-neutral-200">
              
              {/* Overview */}
              <div className="flex gap-4">
                <div className="mt-1 h-fit w-2 rounded-full bg-gradient-to-b from-emerald-400 to-cyan-500 py-4" />
                <div className="space-y-2">
                  <h2 className="font-space text-base font-semibold text-neutral-50">Overview</h2>
                  <p>
                    พัฒนาระบบทดสอบอัตโนมัติ (Automated Testing) เพื่อตรวจสอบความถูกต้องของระบบทดสอบต่างๆ 
                    จำลองพฤติกรรมผู้ใช้บนเว็บแอปพลิเคชันที่มีความซับซ้อน โดยเน้นความแม่นยำในการทำ Data Validation 
                    และการจัดการกับ Dynamic Elements
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="flex gap-4">
                <div className="mt-1 h-fit w-1 rounded-full bg-gradient-to-b from-violet-400 to-fuchsia-500 py-4" />
                <div className="space-y-2">
                  <h2 className="font-space text-base font-semibold text-neutral-50">My Responsibilities</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-1 gap-x-4 gap-y-1 list-none">
                    <li>• ออกแบบ Test Scenarios (Positive & Negative Testing)</li>
                    <li>• เขียนสคริปต์ควบคุม Browser ด้วย Protractor & JavaScript</li>
                    <li>• จัดการระบบ Synchronization ด้วย ExpectedConditions</li>
                    <li>• พัฒนา Custom Reporter เพื่อสรุปผลการเทสใน Terminal</li>
                    <li>• ทำการ Debug และแก้ไข Driver Compatibility Issues</li>
                  </ul>
                </div>
              </div>

              {/* Key Features */}
              <div className="flex gap-4">
                <div className="mt-1 h-fit w-1 rounded-full bg-gradient-to-b from-blue-400 to-indigo-500 py-4" />
                <div className="space-y-2">
                  <h2 className="font-space text-base font-semibold text-neutral-50">Key Features & Test Cases</h2>
                  <ul className="list-disc pl-5 space-y-2 text-neutral-300">
                    <li>
                      <strong>E-Banking Automation:</strong> จำลองการเลือกบัญชี (Hermoine Granger) 
                      และตรวจสอบความถูกต้องของ Account Number (1003) และหน่วยเงิน (Dollar)
                    </li>
                    <li>
                      <strong>Super Calculator Integration:</strong> ทดสอบ Logic การคำนวณหลังบ้าน 
                      โดยการสั่งงานผ่าน UI และดึงค่าจากตาราง History มาเปรียบเทียบ
                    </li>
                    <li>
                      <strong>Search by Google:</strong> ทดสอบการค้นหาความหมายของคำว่า 
                      Jasmine และ Selenium ว่าตรงกับที่บทเรียนใน class สอน หรือไม่
                    </li>
                    <li>
                      <strong>Visual Feedback System:</strong> ปรับแต่งผลลัพธ์ใน Terminal 
                      ให้แสดงตัว <span className="text-emerald-400 font-bold">"T"</span> เมื่อผ่าน 
                      และ <span className="text-red-400 font-bold">"F"</span> เมื่อตก เพื่อให้อ่านง่าย
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
                      <strong>Technich skill:</strong> ศึกษาวิธีการใช้งาน Jasmine และเขียน automation by Selenium เบื้องต้น
                    </p>
                    <p>
                      <strong>Driver Compatibility:</strong> แก้ปัญหาหน้างานเมื่อ Chrome เวอร์ชันล่าสุด (v143) 
                      ไม่รองรับ Driver มาตรฐาน โดยการทำ Manual Path Configuration ในไฟล์คอนฟิก
                    </p>
                    <p>
                      <strong>Bot Detection:</strong> ศึกษา และนำเทคนิค Stealth WebDriver มาใช้เพื่อหลบเลี่ยง 
                      Automation Detection ของ Google ในขณะรันเทสบนระบบ Search Engine
                    </p>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4">
                <div className="mt-1 h-fit w-1 rounded-full bg-neutral-600 py-4" />
                <div className="space-y-2">
                  <h2 className="font-space text-base font-semibold text-neutral-50">Project Assets</h2>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://github.com/Tonkung-Korakrit/CS262_Software_Engineer_Testing.git"
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

export default CS262Page;