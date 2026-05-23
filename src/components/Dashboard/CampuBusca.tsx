type Props = {
  placeholder: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

export default function CampoBusca({
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-slate-900 border border-slate-700 text-white rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
      />
    </div>
  );
}