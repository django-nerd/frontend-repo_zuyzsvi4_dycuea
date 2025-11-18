import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

export default function OfficesMap() {
  const API = import.meta.env.VITE_BACKEND_URL || "";
  const [offices, setOffices] = useState([]);

  useEffect(() => {
    fetch(`${API}/offices`).then(r => r.json()).then(setOffices).catch(()=>{});
  }, [API]);

  return (
    <section id="offices" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#5b4636] mb-6">Mandal Offices</h2>
      <div className="grid gap-4">
        {offices.length === 0 && (
          <p className="text-[#6f5a49]">No offices yet. We operate across Guntur and will list each mandal office here with a map link.</p>
        )}
        {offices.map((o, i) => (
          <a key={i} className="flex items-center justify-between rounded-xl border border-[#d8c7a4] bg-[#f4e9d5] px-5 py-4 hover:bg-[#efe2c7]" href={`https://www.google.com/maps?q=${o.lat},${o.lng}`} target="_blank" rel="noreferrer">
            <div>
              <div className="font-semibold text-[#5b4636]">{o.mandal}</div>
              <div className="text-sm text-[#6f5a49]">{o.address}</div>
              <div className="text-sm text-[#7c5f44] underline">{o.email}</div>
            </div>
            <MapPin className="w-5 h-5 text-[#7c5f44]" />
          </a>
        ))}
      </div>
    </section>
  );
}
