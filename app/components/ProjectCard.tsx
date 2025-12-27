// src/components/ProjectCard.tsx
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  period?: string;
  role?: string;
  description: string;
  tech: string[];
  href?: string; // 👉 เพิ่มตรงนี้
};

const ProjectCard = ({ title, period, role, description, tech, href }: ProjectCardProps) => {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    href ? (
      <Link href={href} className="block">
        {children}
      </Link>
    ) : (
      <>{children}</>
    );

  return (
    <Wrapper>
      <section className="group rounded-2xl border border-neutral-200 bg-white/70 px-4 py-4 md:px-5 md:py-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="font-space text-lg md:text-xl font-semibold text-neutral-900">
            {title}
          </h2>
          {period && (
            <span className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
              {period}
            </span>
          )}
        </div>

        {role && (
          <p className="mt-1 text-xs text-neutral-500">
            Role: <span className="font-medium text-neutral-700">{role}</span>
          </p>
        )}

        <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
          {description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[11px] text-neutral-700 group-hover:border-neutral-300"
            >
              {item}
            </span>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default ProjectCard;
