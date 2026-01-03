// app/projects/dormhub/page.tsx
import LightboxGallery from "@/app/components/LightboxGallery";
import ProjectFlipbook from "@/app/components/ProjectFlipbook";
import Link from "next/link";

const CS361Page = () => {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 px-4 py-10 flex justify-center">
      {/* ชั้นพื้นหลังเอฟเฟกต์เบา ๆ */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* dot/grid background เบาๆ */}
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.09),transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.32),transparent_60%)] opacity-70" />
      </div>

      <article className="w-full max-w-4xl space-y-8">
        {/* แถบบน: back + small breadcrumb */}
        <header className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-xs text-neutral-400 hover:text-neutral-200 transition"
          >
            ← Back to portfolio
          </Link>
          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
            Selected Project
          </p>
        </header>

        {/* การ์ดหลักของโปรเจกต์ */}
        <section className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/80 shadow-[0_18px_60px_rgba(0,0,0,0.8)]">
          {/* แถบ gradient ด้านบน */}
          <div className="h-1.5 w-full bg-gradient-to-r from-sky-500 via-blue-400 to-violet-500" />

          <div className="p-6 md:p-8 space-y-6">
            {/* Title block */}
            <div className="space-y-3">
              <h1 className="font-space text-2xl md:text-3xl font-semibold tracking-tight">
                CS361 Mobile Application Development
              </h1>
              <p className="text-sm text-neutral-400">
                โปรเจกต์นี้
              </p>

              {/* chips */}
              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-neutral-200">
                  Role: Full-stack Developer
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-neutral-400">
                  2024 · Class Project
                </span>
                <span className="rounded-full border border-sky-500/70 bg-sky-500/10 px-3 py-1 text-sky-200">
                  - · - · - 
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
                ]}
                ariaLabel="CS367 Project Screenshot Gallery"
                perPage={2}
              />
            </div>

            {/* Sections ด้านล่าง */}
            <div className="space-y-6 text-sm leading-relaxed text-neutral-200">
              {/* Overview */}
              <div className="flex gap-3">
                <div className="mt-1 h-full w-1 rounded-full bg-gradient-to-b from-sky-400 to-blue-500" />
                <div className="space-y-1.5">
                  <h2 className="font-space text-base font-semibold text-neutral-50">
                    Overview
                  </h2>
                  <p>
                    โปรเจกต์นี้เป็นส่วนหนึ่งของรายวิชา CS361 Mobile Application Development
                    โดยมีเป้าหมายเพื่อสร้างระบบ
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="flex gap-3">
                <div className="mt-1 h-full w-1 rounded-full bg-gradient-to-b from-violet-400 to-fuchsia-500" />
                <div className="space-y-1.5">
                  <h2 className="font-space text-base font-semibold text-neutral-50">
                    My Responsibilities
                  </h2>
                  <ul className="list-disc pl-5 space-y-1 text-neutral-200">
                    <li>
                        -
                    </li>
                    <li>
                        -
                    </li>
                    <li>
                        -
                    </li>
                    <li>
                        -
                    </li>
                    <li>
                        -
                    </li>
                    <li>
                        -
                    </li>
                  </ul>
                </div>
              </div>

              {/* Key Features */}
              <div className="flex gap-3">
                <div className="mt-1 h-full w-1 rounded-full bg-gradient-to-b from-emerald-400 to-teal-500" />
                <div className="space-y-1.5">
                  <h2 className="font-space text-base font-semibold text-neutral-50">
                    Key Features
                  </h2>
                  <ul className="list-disc pl-5 space-y-1 text-neutral-200">
                    <li>
                        -
                    </li>
                    <li>
                        -
                    </li>
                    <li>
                        -
                    </li>
                    <li>
                        -
                    </li>
                  </ul>
                </div>
              </div>

              {/* Challenges & Learnings */}
              <div className="flex gap-3">
                <div className="mt-1 h-full w-1 rounded-full bg-gradient-to-b from-amber-400 to-orange-500" />
                <div className="space-y-1.5">
                  <h2 className="font-space text-base font-semibold text-neutral-50">
                    Challenges & Learnings
                  </h2>
                  <p>
                    โปรเจกต์นี้เป็นหนึ่งในงานที่ทำให้ผมได้
                  </p>

                  <p className="mt-1.5">
                    ความท้าทายหลักคือ
                  </p>

                  <p className="mt-1.5">
                    สุดท้าย โปรเจกต์นี้ช่วยเสริมทักษะการทำงาน
                  </p>
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <div className="mt-1 h-full w-1 rounded-full bg-gradient-to-b from-neutral-400 to-neutral-600" />
                <div className="space-y-1.5">
                  <h2 className="font-space text-base font-semibold text-neutral-50">
                    Links
                  </h2>
                  <ul className="space-y-1 text-neutral-300 text-sm">
                    <li>
                      GitHub (DormHub Project used in this CI/CD pipeline):{" "}
                      <a
                        href="https://github.com/Haritch-6509650757/CS361_Project.git"
                        target="_blank"
                        className="text-sky-400 hover:underline"
                      >
                        github.com/CS361_Project
                      </a>
                    </li>
                    <li>
                      Live Demo:{" "}
                      <span className="text-neutral-500">
                        -
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default CS361Page;
