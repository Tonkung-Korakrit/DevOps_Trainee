// app/projects/gaysorn/page.tsx
import ProjectFlipbook from "@/app/components/ProjectFlipbook";
import Link from "next/link";

const GaysornPage = () => {
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
            Corporate Infrastructure Case Study
          </p>
        </header>

        {/* Main Project Card */}
        <section className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/80 shadow-[0_18px_60px_rgba(0,0,0,0.8)]">
          <div className="h-1.5 w-full bg-gradient-to-r from-violet-500 via-purple-400 to-fuchsia-500" />

          <div className="p-6 md:p-8 space-y-6">
            {/* Title & Tags */}
            <div className="space-y-3">
              <h1 className="font-space text-2xl md:text-3xl font-semibold tracking-tight">
                Gaysorn Village: Smart Maintenance System
              </h1>
              <p className="text-sm text-neutral-400">
                ระบบบริหารจัดการงานวิศวกรรมอาคาร และแจ้งซ่อมดิจิทัล สำหรับกลุ่มอาคาร Gaysorn Village 
                เพื่อเพิ่มประสิทธิภาพการทำงาน และลดการใช้กระดาษ (Paperless Operation)
              </p>

              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-neutral-200">
                  Role: Frontend Developer
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-neutral-400">
                  2025 · Internship @ DevX
                </span>
                <span className="rounded-full border border-purple-500/70 bg-purple-500/10 px-3 py-1 text-purple-200">
                  React · Tailwind CSS · Component-Driven Development
                </span>
              </div>
            </div>

            {/* Showcase: Admin Panel */}
            <div className="space-y-4">
              <h3 className="inline-flex items-center rounded-full border border-purple-500/70 bg-purple-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-purple-200">
                Admin Control Center
              </h3>

              <ProjectFlipbook
                images={[
                  "/images/projects/gaysorn/login_cloudflare2.png",
                  // "/images/projects/gaysorn/dashboard.png",
                  "/images/projects/gaysorn/pie_chart.png",
                  "/images/projects/gaysorn/card_filter_job1.png",
                  "/images/projects/gaysorn/card_filter_job2.png",
                  "/images/projects/gaysorn/filter_job.png",
                  "/images/projects/gaysorn/bar_graph.png",
                  "/images/projects/gaysorn/card_user_later.png",
                  "/images/projects/gaysorn/user_page.png",
                  "/images/projects/gaysorn/add_user_page.png",
                  "/images/projects/gaysorn/add_tech_page.png",
                  "/images/projects/gaysorn/add_admin_page.png",
                  "/images/projects/gaysorn/manage_building.png",
                  "/images/projects/gaysorn/manage_floor1.png",
                  "/images/projects/gaysorn/manage_floor2.png",
                ]}
                ariaLabel="Gaysorn Admin Panel Screenshots"
                perPage={2}
              />
            </div>

            {/* Showcase: Technician App */}
            <div className="space-y-4">
              <h3 className="inline-flex items-center rounded-full border border-sky-500/70 bg-sky-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-sky-200">
                Technician Mobility App
              </h3>
              <ProjectFlipbook
                images={[
                  "/images/projects/gaysorn/home_page.png",
                  "/images/projects/gaysorn/filter_job_id.png",
                  "/images/projects/gaysorn/filter_type_job.png",
                  "/images/projects/gaysorn/select_filter_tech_job1.png",
                  "/images/projects/gaysorn/select_filter_tech_job2.png",
                  "/images/projects/gaysorn/alert_tech_job1.png",
                  "/images/projects/gaysorn/alert_tech_job2.png",
                  "/images/projects/gaysorn/alert_tech_job3.png",
                  "/images/projects/gaysorn/popup_confirm.png",
                ]}
                perPage={2}
              />
            </div>

            {/* Content Sections */}
            <div className="space-y-8 text-sm leading-relaxed text-neutral-200">
              
              {/* Overview */}
              <div className="flex gap-4">
                <div className="mt-1 h-fit w-2 rounded-full bg-gradient-to-b from-purple-400 to-fuchsia-500 py-4" />
                <div className="space-y-2">
                  <h2 className="font-space text-base font-semibold text-neutral-50">Overview</h2>
                  <p>
                    เปลี่ยนผ่านระบบงานแจ้งซ่อมแบบดั้งเดิมของ Gaysorn Village (Gaysorn Tower, Centre, Amarin และ Village) 
                    สู่ระบบดิจิทัลเต็มรูปแบบ เพื่อรองรับปริมาณงานจำนวนมากในแต่ละวัน 
                    ช่วยให้การประสานงานระหว่างฝ่ายบริหาร และเจ้าหน้าที่เทคนิคเป็นไปได้อย่างรวดเร็ว แม่นยำ และตรวจสอบย้อนหลังได้ 100%
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="flex gap-4">
                <div className="mt-1 h-fit w-1 rounded-full bg-gradient-to-b from-violet-400 to-indigo-500 py-4" />
                <div className="space-y-2">
                  <h2 className="font-space text-base font-semibold text-neutral-50">My Responsibilities</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-1 gap-x-4 gap-y-1 list-none">
                    <li>• พัฒนา UI Components ด้วย React และ Tailwind CSS</li>
                    <li>• เปลี่ยนงานดีไซน์จากทีม UX/UI ให้เป็นหน้าเว็บที่ใช้งานได้จริง (Pixel Perfect)</li>
                    <li>• ออกแบบ Flow การกรอกฟอร์มแบบ Step-by-step เพื่อลด Error ของผู้ใช้</li>
                    <li>• เชื่อมต่อ API ร่วมกับทีม Backend เพื่อจัดการข้อมูลโครงสร้างอาคาร</li>
                    <li>• ปรับแต่ง Usability ให้เหมาะสมกับสภาพแวดล้อมการทำงานของช่างหน้างาน</li>
                  </ul>
                </div>
              </div>

              {/* Key Features */}
              <div className="flex gap-4">
                <div className="mt-1 h-fit w-1 rounded-full bg-gradient-to-b from-emerald-400 to-teal-500 py-4" />
                <div className="space-y-2">
                  <h2 className="font-space text-base font-semibold text-neutral-50">Key Features</h2>
                  <ul className="list-disc pl-5 space-y-2 text-neutral-300">
                    <li>
                      <strong>Advanced Job Filtering:</strong> ระบบกรองงานแจ้งซ่อมตามประเภท, สถานะ, ผู้รับผิดชอบ และสังกัดอาคาร 
                      ช่วยให้แอดมินติดตามงานที่คั่งค้างได้ทันที
                    </li>
                    <li>
                      <strong>Data Visualization:</strong> แดชบอร์ดแสดงสถิติงานซ่อมในรูปแบบ Pie Chart และ Bar Graph 
                      เพื่อนำข้อมูลไปวิเคราะห์ประสิทธิภาพการซ่อมบำรุง
                    </li>
                    <li>
                      <strong>Role-Based Dashboard:</strong> แยกหน้าการใช้งานชัดเจนระหว่าง Admin และ Technician 
                      เพื่อให้แต่ละฝ่ายโฟกัสกับข้อมูลที่จำเป็นต่อการปฏิบัติงาน
                    </li>
                    <li>
                      <strong>Infrastructure Mapping:</strong> ระบบจัดการตึก, ชั้น และโซน ที่ยืดหยุ่น 
                      รองรับการขยายตัวหรือปรับเปลี่ยนพื้นที่ภายในโครงการในอนาคต
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
                      <strong>From Theory to Practice:</strong> เป็นโปรเจกต์แรกที่ได้ประยุกต์ใช้ React ในระดับโปรดักชัน 
                      ต้องเรียนรู้การจัดการ State และ Component Lifecycle เพื่อรองรับข้อมูลจำนวนมาก
                    </p>
                    <p>
                      <strong>User-Centric Design:</strong> ได้เรียนรู้ความสำคัญของการออกแบบ UI สำหรับผู้ใช้ที่ไม่ได้เป็นสายเทคโนโลยี (ช่างหน้างาน) 
                      การทำให้แอป "เรียบง่าย และทำงานได้เร็ว" คือหัวใจสำคัญของการแก้ปัญหา
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Links */}
              <div className="flex gap-4 pt-4 border-t border-neutral-800">
                <div className="mt-1 h-fit w-1 rounded-full bg-neutral-600 py-4" />
                <div className="space-y-2 text-neutral-400">
                  <h2 className="font-space text-base font-semibold text-neutral-50">Project Status</h2>
                  <p>
                    สิทธิ์ในการเข้าถึงซอร์สโค้ด และลิงก์สาธิตเป็นทรัพย์สินของบริษัท และทางเกษรวิลเลจ 
                    ผู้สนใจสามารถสอบถามข้อมูลเพิ่มเติมเกี่ยวกับกระบวนการพัฒนา และ Tech Stack ได้โดยตรงระหว่างการสัมภาษณ์
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

export default GaysornPage;
