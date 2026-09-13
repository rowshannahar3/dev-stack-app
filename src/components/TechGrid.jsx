import TechCard from "./TechCard";

export default function TechGrid({ technologies, stack, onAdd }) {
  return (
    // 1 column on mobile, 2 on tablet, 3 on desktop.
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isAdded={stack.some((item) => item.id === tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
