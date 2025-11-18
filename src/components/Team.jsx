export default function Team() {
  const people = [
    { name: "Nithin", role: "CEO", email: "naithikafoundations@edu.in" },
    { name: "Aishwarya", role: "Technical Lead", email: "aishwarya@naithika.edu.in" },
    { name: "Sunandha", role: "Marketing Lead", email: "sunandha@naithika.edu.in" },
    { name: "Mohan Teja", role: "Community Manager", email: "mohanteja@naithika.edu.in" },
    { name: "Sahith", role: "Operations Manager", email: "sahith@naithika.edu.in" },
  ];

  return (
    <section id="team" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#5b4636] mb-6">Our Team</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {people.map((p) => (
          <div key={p.name} className="rounded-xl border border-[#d8c7a4] bg-[#f4e9d5] px-6 py-5 shadow-sm">
            <div className="text-lg font-semibold text-[#5b4636]">{p.name}</div>
            <div className="text-sm text-[#6f5a49]">{p.role}</div>
            <a href={`mailto:${p.email}`} className="mt-2 inline-block text-[#7c5f44] underline">{p.email}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
