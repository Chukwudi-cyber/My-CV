export default function SectionTitle({ title, icon: Icon }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-[#28744B]">
        <Icon size={18} />
      </div>

      <h2 className="text-lg font-bold uppercase tracking-wider text-zinc-900">
        {title}
      </h2>
    </div>
  );
}