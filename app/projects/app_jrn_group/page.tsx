// app/projects/app_jrn_group/page.tsx
import ProjectFlipbook from "@/app/components/ProjectFlipbook";
import Link from "next/link";

const JrnGroupPage = () => {
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
            Professional Internship Case Study
          </p>
        </header>

        {/* Main Project Card */}
        <section className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/80 shadow-[0_18px_60px_rgba(0,0,0,0.8)]">
          <div className="h-1.5 w-full bg-gradient-to-r from-sky-500 via-blue-400 to-indigo-500" />

          <div className="p-6 md:p-8 space-y-6">
            {/* Title & Tags */}
            <div className="space-y-3">
              <h1 className="font-space text-2xl md:text-3xl font-semibold tracking-tight">
                Project China: Integrated Content Ecosystem
              </h1>
              <p className="text-sm text-neutral-400">
                แพลตฟอร์มคอนเทนต์แบบครบวงจร (ข่าว, วิดีโอ, แมกกาซีน) ที่ออกแบบเพื่อตลาดจีน รองรับการวิเคราะห์ข้อมูลผู้ใช้งานแบบ Real-time
              </p>

              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-neutral-200">
                  Role: Backend & Mobile Integration
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-neutral-400">
                  2025 · Internship @ DevX
                </span>
                <span className="rounded-full border border-sky-500/70 bg-sky-500/10 px-3 py-1 text-sky-200">
                  Flutter · Node.js · Prisma · PostgreSQL · Cloudflare R2
                </span>
              </div>
            </div>

            {/* ถ้ามี screenshot ภายหลัง เอาไว้ตรงนี้ */}
            <div className="mt-4">
              {/* <h3 className="inline-flex items-center rounded-full border border-purple-500/70 bg-purple-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-purple-200">
                Admin Panel
              </h3> */}

              <ProjectFlipbook
                images={[
                  "/images/projects/app_pjn/ads_home.png",
                  "/images/projects/app_pjn/home_page_1.png",
                  "/images/projects/app_pjn/home_page_2.png",
                  "/images/projects/app_pjn/home_page_3.png",
                  "/images/projects/app_pjn/profile_page.jpg",
                  "/images/projects/app_pjn/sign_in_page.png",
                  "/images/projects/app_pjn/sign_up_page.png",
                  "/images/projects/app_pjn/setting_page.png",
                  "/images/projects/app_pjn/support_page.png",
                  "/images/projects/app_pjn/general_page_1.png",
                  "/images/projects/app_pjn/general_page_2.png",
                  "/images/projects/app_pjn/news_page.png",
                  "/images/projects/app_pjn/news_page_filter.png",
                  "/images/projects/app_pjn/news_detail_1.png",
                  "/images/projects/app_pjn/news_detail_2.png",
                  "/images/projects/app_pjn/news_detail_3.png",
                  "/images/projects/app_pjn/magazine_page_1.png",
                  "/images/projects/app_pjn/magazine_page_2.png",
                  "/images/projects/app_pjn/magazine_page_3.png",
                  "/images/projects/app_pjn/magazine_detail_1.png",
                  "/images/projects/app_pjn/magazine_detail_2.png",
                  "/images/projects/app_pjn/magazine_detail_3.png",
                  "/images/projects/app_pjn/magazine_detail_4.png",
                  "/images/projects/app_pjn/magazine_detail_5.png",
                  "/images/projects/app_pjn/magazine_detail_6.png",
                  "/images/projects/app_pjn/series_page_1.jpg",
                  "/images/projects/app_pjn/series_page_2.jpg",
                  "/images/projects/app_pjn/series_detail_1.jpg",
                  "/images/projects/app_pjn/series_scrolling.jpg",
                  "/images/projects/app_pjn/series_detail_2.jpg",
                  "/images/projects/app_pjn/series_comment.jpg",
                  "/images/projects/app_pjn/menu_bar.png",
                  "/images/projects/app_pjn/profile_signin.jpg",
                  "/images/projects/app_pjn/home_signin.png",
                  "/images/projects/app_pjn/dark_theme_1.png",
                  "/images/projects/app_pjn/dark_theme_2.png",
                  "/images/projects/app_pjn/dark_theme_3.png",
                  "/images/projects/app_pjn/dark_theme_4.png",
                  "/images/projects/app_pjn/dark_theme_5.png",
                ]}
                ariaLabel="Screenshots of Project China Flutter application for news, magazines, series, and local life"
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
                    โปรเจกต์พัฒนาระบบ Content Delivery และ User Engagement สำหรับผู้ใช้งานในประเทศจีน 
                    โดยรวบรวมคอนเทนต์หลากหลายรูปแบบไว้ในแอปเดียว (Super App Concept) 
                    เพื่อสร้างประสบการณ์การใช้งานที่ไร้รอยต่อ และมีระบบหลังบ้านที่ช่วยให้ทีม Content สามารถจัดการข้อมูลได้อย่างมีประสิทธิภาพ
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="flex gap-4">
                <div className="mt-1 h-fit w-1 rounded-full bg-gradient-to-b from-violet-400 to-fuchsia-500 py-4" />
                <div className="space-y-2">
                  <h2 className="font-space text-base font-semibold text-neutral-50">My Responsibilities</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 list-none">
                    <li>• ออกแบบ ER Diagram และโครงสร้างฐานข้อมูล PostgreSQL</li>
                    <li>• พัฒนา Backend API ด้วย Node.js และ Prisma ORM</li>
                    <li>• พัฒนา UI Mobile Application ด้วย Flutter (Cross-platform)</li>
                    <li>• จัดการระบบสื่อ (Media) ผ่าน Cloudflare R2 Storage</li>
                    <li>• พัฒนาระบบ Tracking สถิติยอดวิว และ Interaction แบบ Real-time</li>
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
                      <strong>Multi-Format Content:</strong> รองรับการแสดงผลข่าว (HTML), 
                      วิดีโอซีรีส์สั้น (Short Drama), และแมกกาซีนออนไลน์ (PDF/E-book)
                    </li>
                    <li>
                      <strong>Engagement Suite:</strong> ฟีเจอร์ไลก์, คอมเมนต์, แชร์ และบุ๊กมาร์ก 
                      ที่เชื่อมโยงกับระบบ Analytics เพื่อวัดความนิยมของคอนเทนต์
                    </li>
                    <li>
                      <strong>Intelligent Filtering:</strong> ระบบกรอง และจัดหมวดหมู่คอนเทนต์ตามความสนใจ 
                      ช่วยเพิ่มยอด Reach และ Engagement ของแอป
                    </li>
                    {/* <li>
                      <strong>Admin & Statistics:</strong> แดชบอร์ดวิเคราะห์ยอดวิว และพฤติกรรมผู้ใช้ 
                      เพื่อช่วยให้ฝ่ายโฆษณาสามารถวางแผนกลยุทธ์ได้อย่างแม่นยำ
                    </li> */}
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
                      <strong>Learning Curve:</strong> 
                       โปรเจกต์นี้เป็นครั้งแรกที่ผมได้ศึกษาการพัฒนา Mobile Application ด้วย Flutter 
                        รวมถึงต้องออกแบบ และสร้างระบบ Full-stack ด้วยตนเองเกือบทั้งหมด 
                        ตั้งแต่การวางโครงสร้างฐานข้อมูล, พัฒนา API, ไปจนถึงการนำข้อมูลมาแสดงผลบน UI
                        แม้จะเป็นเทคโนโลยีใหม่สำหรับผม แต่ด้วยการเรียนรู้ด้วยตนเองภายในเวลาจำกัด (โปรเจคนี้ใช้เวลา 3 เดือนก่อนจะฝึกงานจบ)
                      {/* เริ่มต้นศึกษา Flutter จากศูนย์ และพัฒนาแอปที่ใช้งานจริงได้ภายในระยะเวลาฝึกงาน (โปรเจคนี้ใช้เวลา 3 เดือน) */}
                      {/* รวมถึงการทำความเข้าใจสถาปัตยกรรมแบบ Full-stack ตั้งแต่การวาง DB จนถึงการ Build แอป */}
                    </p>
                    <p>
                      <strong>Scalability:</strong> ออกแบบระบบที่รองรับคอนเทนต์หลายประเภทที่มีโครงสร้างข้อมูลต่างกัน 
                      (Polymorphic content handling) และการเชื่อมต่อ API ที่ต้องมีความเสถียรสูง
                    </p>
                   
                    {/* ผมสามารถสร้างระบบที่ใช้งานได้จริง และสอดคล้องกับความต้องการของลูกค้า 
                    ซึ่งทำให้เข้าใจภาพรวมการพัฒนาซอฟต์แวร์มากขึ้น 
                    รวมถึงการออกแบบระบบที่รองรับผู้ใช้จำนวนมาก และหลากหลายประเภทคอนเทนต์ */}
                    
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4">
                <div className="mt-1 h-fit w-1 rounded-full bg-neutral-600 py-4" />
                <div className="space-y-2 text-neutral-400">
                  <h2 className="font-space text-base font-semibold text-neutral-50">Project Assets</h2>
                  <p>
                    เนื่องจากโปรเจกต์นี้เป็นระบบภายในของบริษัท (Confidential Project) 
                    จึงไม่สามารถเผยแพร่ซอร์สโค้ดสู่สาธารณะได้ อย่างไรก็ตาม ผมมีความยินดีอย่างยิ่งที่จะนำเสนอโครงสร้างระบบ 
                    สถาปัตยกรรมเทคโนโลยี และกระบวนการแก้ปัญหาในเชิงลึกระหว่างการสัมภาษณ์
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

export default JrnGroupPage;
