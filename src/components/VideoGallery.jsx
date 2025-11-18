export default function VideoGallery({ videos }) {
  return (
    <section id="videos" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#5b4636] mb-6">Lesson Videos</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((url, idx) => (
          <div key={idx} className="aspect-video rounded-xl overflow-hidden bg-[#e9dcc3] border border-[#d8c7a4] shadow-sm">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${extractId(url)}`}
              title={`Lesson ${idx + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function extractId(url) {
  const m = url.match(/[?&]v=([^&#]+)/) || url.match(/youtu\.be\/(^[?\s]+)/) || url.split("/ ");
  // Robust extraction: handle youtu.be/ID and youtube.com/watch?v=ID
  const short = url.match(/youtu\.be\/([a-zA-Z0-9_-]{6,})/);
  if (short) return short[1];
  const long = url.match(/[?&]v=([a-zA-Z0-9_-]{6,})/);
  if (long) return long[1];
  // Fallback: last segment
  return url.split("/").pop();
}
