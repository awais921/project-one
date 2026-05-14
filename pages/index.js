import { useState } from "react";

export default function Home() {
  const [preview, setPreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-extrabold">
              AI Fashion Generator
            </h2>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#features" className="hover:text-pink-500 transition">
              Features
            </a>

            <a href="#styles" className="hover:text-pink-500 transition">
              Styles
            </a>

            <a href="#faq" className="hover:text-pink-500 transition">
              FAQ
            </a>

            <a href="/about" className="hover:text-pink-500 transition">
              About
            </a>

            <a href="/contact" className="hover:text-pink-500 transition">
              Contact
            </a>
          </nav>

          <button className="bg-pink-600 hover:bg-pink-700 transition px-5 py-3 rounded-2xl font-semibold">
            Try AI Now
          </button>

        </div>
      </header>

      {/* HERO */}
      <section className="relative px-6 py-24 md:py-32">

        <div className="absolute inset-0 bg-pink-600/10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

          <div>

            <p className="uppercase tracking-[5px] text-pink-500 font-semibold mb-6">
              AI Celebrity Outfit Generator
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
              Create Viral
              <span className="text-pink-500"> Celebrity Outfit </span>
              Looks With AI
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-2xl">
              Upload your photo and generate realistic celebrity fashion styles,
              luxury outfits, influencer aesthetics, red carpet looks,
              streetwear trends, and premium AI-generated fashion transformations instantly.
            </p>

            <div className="flex flex-wrap gap-5 mb-12">

              <button className="bg-pink-600 hover:bg-pink-700 transition px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl">
                Upload Your Photo
              </button>

              <button className="border border-zinc-700 hover:border-pink-500 transition px-8 py-4 rounded-2xl text-lg font-semibold">
                Explore Styles
              </button>

            </div>

          </div>

          <div className="relative">

            <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
              alt="AI Fashion"
              className="relative rounded-[32px] border border-zinc-800 shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* AI GENERATOR */}
      <section className="px-6 py-24 border-t border-zinc-900">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI Outfit Generator
          </h2>

          <p className="text-zinc-400 text-lg max-w-3xl mx-auto mb-14">
            Upload your image, select a celebrity-inspired fashion style,
            and generate premium AI outfit transformations instantly.
          </p>

          <div className="bg-zinc-900 border-2 border-dashed border-zinc-700 rounded-[40px] p-16">

            <div className="text-7xl mb-6">
              📸
            </div>

            <h3 className="text-3xl font-bold mb-5">
              Upload Your Photo
            </h3>

            <p className="text-zinc-400 mb-8">
              JPG, PNG supported • AI fashion generation ready
            </p>

            <div className="flex flex-col items-center gap-6">

              <label
                htmlFor="imageUpload"
                className="bg-pink-600 hover:bg-pink-700 transition px-10 py-5 rounded-2xl text-lg font-bold cursor-pointer"
              >
                Choose Image
              </label>

              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />

              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-72 rounded-3xl border border-zinc-700 shadow-2xl"
                />
              )}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
    }
