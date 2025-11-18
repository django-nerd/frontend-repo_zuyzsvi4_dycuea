import { useEffect, useMemo, useState } from "react";
import { MapPin, Users } from "lucide-react";

export default function Dashboard() {
  const [sessions, setSessions] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API = import.meta.env.VITE_BACKEND_URL || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sResp, lResp] = await Promise.all([
          fetch(`${API}/sessions`).then(r => r.json()),
          fetch(`${API}/track`).then(r => r.json()),
        ]);
        setSessions(Array.isArray(sResp) ? sResp : []);
        setLocations(Array.isArray(lResp) ? lResp : []);
      } catch (e) {
        setError("Unable to load data from the server.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    const i = setInterval(fetchData, 10000);
    return () => clearInterval(i);
  }, [API]);

  const totals = useMemo(() => {
    const children = sessions.reduce((a, s) => a + (s.attendees_children || 0), 0);
    const adults = sessions.reduce((a, s) => a + (s.attendees_adults || 0), 0);
    return { children, adults, sessions: sessions.length };
  }, [sessions]);

  return (
    <section id="dashboard" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#5b4636] mb-6">Live Dashboard</h2>
      {loading ? (
        <div className="text-[#6f5a49]">Loading...</div>
      ) : error ? (
        <div className="text-red-700">{error}</div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-[#d8c7a4] bg-[#f4e9d5] p-6 shadow-sm">
            <div className="text-sm text-[#6f5a49]">Total Sessions</div>
            <div className="text-3xl font-bold text-[#5b4636]">{totals.sessions}</div>
          </div>
          <div className="rounded-xl border border-[#d8c7a4] bg-[#f4e9d5] p-6 shadow-sm">
            <div className="text-sm text-[#6f5a49]">Children Reached</div>
            <div className="text-3xl font-bold text-[#5b4636]">{totals.children}</div>
          </div>
          <div className="rounded-xl border border-[#d8c7a4] bg-[#f4e9d5] p-6 shadow-sm">
            <div className="text-sm text-[#6f5a49]">Adults Reached</div>
            <div className="text-3xl font-bold text-[#5b4636]">{totals.adults}</div>
          </div>
        </div>
      )}

      <div className="mt-8 grid lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-[#d8c7a4] bg-[#f4e9d5] p-4">
          <div className="flex items-center gap-2 text-[#5b4636] mb-2"><MapPin className="w-4 h-4"/> Live Team Locations</div>
          <div className="space-y-2 max-h-72 overflow-auto pr-1">
            {locations.map((l, i) => (
              <div key={i} className="flex items-center justify-between text-sm text-[#6f5a49] bg-[#efe2c7] rounded-lg px-3 py-2">
                <div className="font-medium">{l.team_id}</div>
                <div>Lat {Number(l.lat).toFixed(4)}, Lng {Number(l.lng).toFixed(4)}</div>
              </div>
            ))}
            {locations.length === 0 && (
              <div className="text-[#6f5a49]">No locations yet. The app will refresh automatically.</div>
            )}
          </div>
        </div>
        <div className="rounded-xl border border-[#d8c7a4] bg-[#f4e9d5] p-4">
          <div className="flex items-center gap-2 text-[#5b4636] mb-2"><Users className="w-4 h-4"/> Recent Sessions</div>
          <div className="space-y-2 max-h-72 overflow-auto pr-1">
            {sessions.map((s, i) => (
              <div key={i} className="text-sm text-[#6f5a49] bg-[#efe2c7] rounded-lg px-3 py-2">
                <div className="font-semibold text-[#5b4636]">{s.village}, {s.mandal} • {s.topic}</div>
                <div>{(s.attendees_children||0) + (s.attendees_adults||0)} participants at {s.school || 'Govt School'}</div>
              </div>
            ))}
            {sessions.length === 0 && (
              <div className="text-[#6f5a49]">No sessions recorded yet.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
