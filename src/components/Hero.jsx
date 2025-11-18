import { Play } from "lucide-react";

export default function Hero({ onWatch }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,#7c5f44,transparent_30%),radial-gradient(circle_at_70%_60%,#e7d5b1,transparent_30%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#5b4636]">
          Naithika Foundations
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#6f5a49] max-w-2xl mx-auto">
          Taking ethics and human values education to every village school in Guntur, every day.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={onWatch} className="inline-flex items-center gap-2 rounded-full bg-[#7c5f44] text-[#f4e9d5] px-6 py-3 hover:bg-[#6f533f] transition"> 
            <Play className="w-5 h-5" /> Watch a lesson
          </button>
          <a href="#help" className="rounded-full border border-[#7c5f44] text-[#7c5f44] px-6 py-3 hover:bg-[#f2e6cf] transition">Need help?</a>
        </div>
      </div>
    </section>
  );
}
