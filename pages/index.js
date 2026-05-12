export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>
            <p className="text-pink-500 uppercase tracking-[4px] font-semibold mb-5">
              AI Celebrity Outfit Generator
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
              Create Viral
              <span className="text-pink-500"> AI Fashion </span>
              Looks Instantly
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Upload your image and generate luxury celebrity outfits,
              influencer fashion styles, red carpet looks, trending TikTok
              fashion transformations, and premium AI clothing designs in
              seconds.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-pink-600 hover:bg-pink-700 transition-all px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg">
                Upload Your Photo
              </button>

              <button className="border border-zinc-700 hover:border-pink-500 transition-all px-8 py-4 rounded-2xl text-lg font-semibold">
                Explore Styles
              </button>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-12">

              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-3xl">
                <h3 className="font-bold text-lg mb-2">
                  AI Fashion Styles
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  Generate realistic celebrity fashion transformations instantly.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-3xl">
                <h3 className="font-bold text-lg mb-2">
                  Viral Social Looks
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  Create Instagram and TikTok ready fashion content.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-3xl">
                <h3 className="font-bold text-lg mb-2">
                  Premium Outfits
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  Experience luxury AI outfit generation with modern styles.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-3xl">
                <h3 className="font-bold text-lg mb-2">
                  Fast AI Results
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  Generate AI fashion results within seconds.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative">

            <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
              alt="AI Fashion Generator"
              className="relative rounded-[32px] border border-zinc-800 shadow-2xl"
            />

          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-24 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h2>

            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Generate AI celebrity outfit styles in three simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
              <div className="text-pink-500 text-5xl font-bold mb-5">01</div>

              <h3 className="text-2xl font-bold mb-4">
                Upload Photo
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Upload your selfie or portrait image securely.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
              <div className="text-pink-500 text-5xl font-bold mb-5">02</div>

              <h3 className="text-2xl font-bold mb-4">
                Select Style
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Choose celebrity fashion, luxury, casual, or viral styles.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
              <div className="text-pink-500 text-5xl font-bold mb-5">03</div>

              <h3 className="text-2xl font-bold mb-4">
                Generate AI Look
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Instantly receive realistic AI-generated outfit designs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="px-6 py-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Is this AI fashion generator free?
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Yes, users can generate AI celebrity fashion looks online.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Can I upload my own image?
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Yes, you can upload selfies and portraits for AI outfit generation.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Does it work on mobile?
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Yes, the website is fully mobile responsive.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

          <h2 className="text-2xl font-bold">
            AI Fashion Generator
          </h2>

          <p className="text-zinc-500 text-sm">
            © 2026 AI Fashion Generator. All rights reserved.
          </p>

        </div>
      </footer>

    </main>
  );
                }
