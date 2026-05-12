export default function About() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-extrabold mb-10">
          About AI Fashion Generator
        </h1>

        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
          AI Fashion Generator is a modern AI-powered platform designed to help users create celebrity-inspired outfit styles, luxury fashion looks, streetwear aesthetics, influencer trends, and viral AI fashion transformations instantly.
        </p>

        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
          Our platform combines artificial intelligence with modern fashion inspiration to generate realistic outfit ideas for creators, influencers, social media users, and fashion enthusiasts.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              AI Powered
            </h2>

            <p className="text-zinc-400">
              Advanced AI outfit transformation technology.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              Mobile Friendly
            </h2>

            <p className="text-zinc-400">
              Optimized for mobile and desktop devices.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              SEO Optimized
            </h2>

            <p className="text-zinc-400">
              Structured for future Google ranking growth.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
    }
