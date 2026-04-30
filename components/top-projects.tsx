type Project = {
  name: string;
  category: string;
  description: string;
  maintainer: { name: string; handle: string; initials: string };
  raised: string;
  backers: string;
  rank: number;
};

const projects: Project[] = [
  {
    name: "deltabase",
    category: "Database",
    description:
      "Real-time sync for SQLite. Embed it once, get multi-device replication and offline-first writes for free.",
    maintainer: { name: "Maya Chen", handle: "mayachen", initials: "MC" },
    raised: "$48,200",
    backers: "1,234",
    rank: 1,
  },
  {
    name: "rivet-cli",
    category: "Devtools",
    description:
      "Type-safe CLI builder for Bun. Compose subcommands, flags, and prompts with end-to-end TypeScript inference.",
    maintainer: {
      name: "Idris Aboubakar",
      handle: "iaboubakar",
      initials: "IA",
    },
    raised: "$32,150",
    backers: "891",
    rank: 2,
  },
  {
    name: "glaze-icons",
    category: "Design",
    description:
      "Hand-crafted icon system for design engineers. 1,400 icons, monoline and duotone, MIT-licensed.",
    maintainer: { name: "Sofia Reyes", handle: "sofreyes", initials: "SR" },
    raised: "$27,800",
    backers: "2,107",
    rank: 3,
  },
  {
    name: "sourcebrew",
    category: "Security",
    description:
      "Dependency-tree scanner that flags unmaintained, abandoned, and bus-factor-of-one packages before they bite.",
    maintainer: { name: "Daniel Kim", handle: "dkim", initials: "DK" },
    raised: "$19,650",
    backers: "543",
    rank: 4,
  },
];

export default function TopProjects() {
  return (
    <section className="pt-12 pb-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#028537] mb-2">
              Top funded this month
            </p>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#1A1A1A]">
              Open source the world depends on.
            </h2>
          </div>
          <a
            href="#explore"
            className="text-sm font-semibold text-[#1A1A1A] hover:text-[#028537] transition-colors"
          >
            Explore all projects →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href="#"
      className="group bg-white border border-black/10 rounded-2xl p-6 flex flex-col gap-5 hover:border-[#028537] hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
    >
      {/* Header row: name + rank badge */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-black text-[#1A1A1A] truncate">
              {project.name}
            </h3>
            <span className="text-xs font-semibold text-[#1A1A1A]/30">
              #{project.rank}
            </span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#1A1A1A]/40">
            {project.category}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[#1A1A1A]/70 leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Footer row: maintainer + funding */}
      <div className="flex items-center justify-between pt-4 border-t border-black/5">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 shrink-0 rounded-full bg-[#1A1A1A] text-[#5BD478] flex items-center justify-center text-[10px] font-black">
            {project.maintainer.initials}
          </div>
          <span className="text-xs font-semibold text-[#1A1A1A]/70 truncate">
            {project.maintainer.name}
          </span>
        </div>
        <div className="text-right shrink-0">
          <div className="text-sm font-black text-[#028537]">
            {project.raised}
          </div>
          <div className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/40 font-bold">
            {project.backers} backers
          </div>
        </div>
      </div>
    </a>
  );
}
