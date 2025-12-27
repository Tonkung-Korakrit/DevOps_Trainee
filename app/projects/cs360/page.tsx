// app/projects/dormhub/page.tsx
import LightboxGallery from "@/app/components/LightboxGallery";
// import ProjectFlipbook from "@/app/components/ProjectFlipbook";
import Link from "next/link";

const CS360Page = () => {
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
            Cloud Infrastructure Case Study
          </p>
        </header>

        {/* Main Project Card */}
        <section className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/80 shadow-[0_18px_60px_rgba(0,0,0,0.8)]">
          <div className="h-1.5 w-full bg-gradient-to-r from-sky-500 via-blue-400 to-indigo-500" />

          <div className="p-6 md:p-8 space-y-6">
            {/* Title & Tags */}
            <div className="space-y-3">
              <h1 className="font-space text-2xl md:text-3xl font-semibold tracking-tight">
                CS360 Cloud Computing: Full-Scale Automated CI/CD
              </h1>
              <p className="text-sm text-neutral-400">
                การออกแบบ และวางโครงสร้างพื้นฐานบน AWS EC2 พร้อมระบบ CI/CD Pipeline แบบอัตโนมัติ 100% 
                เพื่อการทำ Zero-Manual Deployment
              </p>

              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-neutral-200">
                  Role: DevOps & Cloud Engineer
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-neutral-400">
                  2024 · Class Project
                </span>
                <span className="rounded-full border border-sky-500/70 bg-sky-500/10 px-3 py-1 text-sky-200">
                  AWS EC2 · Docker · Shell Scripting · React · Strapi
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
              <LightboxGallery
                images={[
                  "/images/projects/cs360/config_AWS_cloud.png",
                  "/images/projects/cs360/connect_AWS_cloud.png",
                  "/images/projects/cs360/setup_sh.png",
                  "/images/projects/cs360/setup_sh_2.png",
                  "/images/projects/cs360/docker_file_1.png",
                  "/images/projects/cs360/docker_file_2.png",
                  "/images/projects/cs360/docker_file_3.png",
                  "/images/projects/cs360/ci_cd_piepline.png",
                  "/images/projects/cs360/deploy_web.png",
                  "/images/projects/cs360/account_test_suites.png",
                  "/images/projects/cs360/register_test_suites.png",
                ]}
                ariaLabel="Screenshots of CS360 Cloud Computing CI/CD deployment project"
                altPrefix="CS360 Cloud Computing screen"
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
                    เป้าหมายหลักคือการเปลี่ยนกระบวนการ Deployment จากแบบ Manual ที่ใช้เวลานาน และเสี่ยงต่อความผิดพลาด 
                    ให้กลายเป็นระบบอัตโนมัติที่ทำงานผ่าน Shell Script ควบคุมทุกขั้นตอนบน AWS Cloud 
                    ช่วยให้การอัปเดตระบบ Production มีความรวดเร็ว แม่นยำ และสามารถตรวจสอบย้อนหลังได้ทุกขั้นตอน
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="flex gap-4">
                <div className="mt-1 h-fit w-1 rounded-full bg-gradient-to-b from-violet-400 to-fuchsia-500 py-4" />
                <div className="space-y-2">
                  <h2 className="font-space text-base font-semibold text-neutral-50">My Responsibilities</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-1 gap-x-4 gap-y-1 list-none">
                    <li>• Architected Deployment Workflow สำหรับ Full-stack App</li>
                    <li>• Engineered Automation Scripts (.sh) สำหรับ Git Orchestration</li>
                    <li>• Containerized ระบบด้วย Docker สำหรับ Frontend & Backend</li>
                    <li>• Configured AWS EC2 Security Groups และ Server Env</li>
                    <li>• Integrated Automated Test Suites เข้ากับ Deployment Cycle</li>
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
                      <strong>100% Automated Pipeline:</strong> ระบบลดขั้นตอนการ Deploy แบบเดิม 
                      ให้เหลือเพียงคำสั่งเดียวเพื่อทำ Git Pull, Build และ Restart Service ทั้งระบบ
                    </li>
                    <li>
                      <strong>Orchestrated Shell Scripting:</strong> สคริปต์จัดการระบบอัจฉริยะที่ดูแลเรื่อง 
                      Dependencies, DB Migrations และ Container Lifecycle
                    </li>
                    <li>
                      <strong>Dockerized Infrastructure:</strong> การจัดการ Environment ในรูปแบบ Container 
                      เพื่อให้มั่นใจว่าระบบจะทำงานได้เหมือนกันทั้งบน Dev และ Production
                    </li>
                    <li>
                      <strong>Quality Gate Integration:</strong> ระบบบังคับรัน Unit Test (Login/Register) 
                      ก่อนทำการ Deploy จริง เพื่อป้องกัน Code ที่มีข้อผิดพลาดขึ้นสู่ระบบ
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* [Image of CI/CD pipeline architecture] */}

              {/* Challenges & Learnings */}
              <div className="flex gap-4">
                <div className="mt-1 h-fit w-1 rounded-full bg-gradient-to-b from-amber-400 to-orange-500 py-4" />
                <div className="space-y-2">
                  <h2 className="font-space text-base font-semibold text-neutral-50">Challenges & Learnings</h2>
                  <div className="bg-neutral-800/40 rounded-xl p-4 border border-neutral-700/50 space-y-3">
                    <p>
                      <strong>Zero-Manual Deployment:</strong> ความท้าทายในการเขียนสคริปต์ให้ครอบคลุมกรณีที่หลากหลาย 
                      โดยเฉพาะการจัดการ Permissions, Docker Networking และ Environment Variables บน AWS EC2
                    </p>
                    <p>
                      <strong>Infrastructure as Process:</strong> ได้เรียนรู้ถึงความสำคัญของการทำ Pipeline ที่ดี 
                      ซึ่งช่วยประหยัดเวลาการ Deploy ในระยะยาว และลดความผิดพลาดจากปัจจัยมนุษย์ (Human Error)
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
                      href="https://github.com/techit6509650419/CS360_Project.git"
                      target="_blank"
                      className="flex items-center gap-2 rounded-lg bg-neutral-800 px-4 py-2 text-xs font-medium text-neutral-200 hover:bg-neutral-700 transition border border-neutral-700"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" /></svg>
                      View Code on GitHub
                    </a>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-2">
                    * Live Demo: AWS EC2 Instance offline due to quota limits.
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

export default CS360Page;
