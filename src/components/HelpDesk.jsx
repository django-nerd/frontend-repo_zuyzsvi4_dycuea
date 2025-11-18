import { useState } from "react";

export default function HelpDesk() {
  const API = import.meta.env.VITE_BACKEND_URL || "";
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch(`${API}/help`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("Thanks! We received your message.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (e) {
      setStatus("Could not send. Please try again later.");
    }
  };

  return (
    <section id="help" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#5b4636] mb-6">Help Desk</h2>
      <form onSubmit={submit} className="grid md:grid-cols-2 gap-6">
        <input value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} placeholder="Your name" className="rounded-lg border border-[#d8c7a4] bg-[#f8f1e3] px-4 py-3 text-[#5b4636]" required />
        <input type="email" value={form.email} onChange={(e)=>setForm({ ...form, email: e.target.value })} placeholder="Your email" className="rounded-lg border border-[#d8c7a4] bg-[#f8f1e3] px-4 py-3 text-[#5b4636]" required />
        <input value={form.subject} onChange={(e)=>setForm({ ...form, subject: e.target.value })} placeholder="Subject" className="md:col-span-2 rounded-lg border border-[#d8c7a4] bg-[#f8f1e3] px-4 py-3 text-[#5b4636]" required />
        <textarea value={form.message} onChange={(e)=>setForm({ ...form, message: e.target.value })} placeholder="How can we help?" rows={4} className="md:col-span-2 rounded-lg border border-[#d8c7a4] bg-[#f8f1e3] px-4 py-3 text-[#5b4636]" required />
        <div className="md:col-span-2 flex items-center gap-4">
          <button className="rounded-lg bg-[#7c5f44] text-[#f4e9d5] px-6 py-3 hover:bg-[#6f533f]">Send</button>
          <span className="text-sm text-[#6f5a49]">{status}</span>
        </div>
      </form>
    </section>
  );
}
