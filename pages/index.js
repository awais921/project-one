export default function Home() {
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

            <a href="#contact" className="hover:text-pink-500 transition">
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

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
                <h3 className="font-bold text-lg mb-2">
                  Viral AI Fashion
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  Generate trending celebrity outfit styles instantly.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
                <h3 className="font-bold text-lg mb-2">
                  Luxury Looks
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  Create premium fashion transformations using AI.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
                <h3 className="font-bold text-lg mb-2">
                  TikTok Ready
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  Perfect for social media and influencer content.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
                <h3 className="font-bold text-lg mb-2">
                  Fast AI Results
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  Generate outfit results in seconds.
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
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

            <button className="bg-pink-600 hover:bg-pink-700 transition px-10 py-5 rounded-2xl text-lg font-bold">
              Choose Image
            </button>

          </div>

        </div>

      </section>

      {/* TRENDING STYLES */}
      <section
        id="styles"
        className="px-6 py-24 border-t border-zinc-900"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trending AI Outfit Styles
            </h2>

            <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
              Discover viral celebrity fashion trends powered by AI.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-900 rounded-[30px] overflow-hidden border border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
                alt="Luxury Fashion"
                className="h-80 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  Luxury Celebrity Style
                </h3>

                <p className="text-zinc-400">
                  Premium red carpet AI fashion transformations.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-[30px] overflow-hidden border border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
                alt="Streetwear"
                className="h-80 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  Viral Streetwear
                </h3>

                <p className="text-zinc-400">
                  TikTok and influencer-inspired AI looks.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-[30px] overflow-hidden border border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
                alt="Modern Fashion"
                className="h-80 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  Modern AI Fashion
                </h3>

                <p className="text-zinc-400">
                  Generate modern fashion aesthetics instantly.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="px-6 py-24 border-t border-zinc-900"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Use Our AI Fashion Generator
            </h2>

            <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
              Professional AI fashion transformation platform designed for creators.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-2xl font-bold mb-4">
                AI Powered
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Advanced AI outfit generation technology.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-2xl font-bold mb-4">
                Mobile Friendly
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Fully optimized for mobile and desktop users.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-2xl font-bold mb-4">
                Fast Results
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Generate realistic fashion styles instantly.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-2xl font-bold mb-4">
                SEO Optimized
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Structured for future Google ranking growth.
              </p>
            </div>

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

            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Generate celebrity outfit transformations in 3 easy steps.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="text-pink-500 text-5xl font-bold mb-6">
                01
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Upload Image
              </h3>

              <p className="text-zinc-400">
                Upload your selfie or portrait securely.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="text-pink-500 text-5xl font-bold mb-6">
                02
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Choose Style
              </h3>

              <p className="text-zinc-400">
                Pick celebrity, luxury, or streetwear fashion styles.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="text-pink-500 text-5xl font-bold mb-6">
                03
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Generate Look
              </h3>

              <p className="text-zinc-400">
                Receive AI-generated outfit transformations instantly.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="px-6 py-24 border-t border-zinc-900"
      >

        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>

            <p className="text-zinc-400 text-lg">
              Everything about our AI fashion generator.
            </p>

          </div>

          <div className="space-y-6">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7">
              <h3 className="text-2xl font-bold mb-4">
                Is the AI fashion generator free?
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Yes, users can generate AI outfit transformations online.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7">
              <h3 className="text-2xl font-bold mb-4">
                Can I upload my own image?
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Yes, you can upload selfies and portraits securely.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7">
              <h3 className="text-2xl font-bold mb-4">
                Does it work on mobile devices?
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Yes, the platform is fully mobile responsive.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 py-24 border-t border-zinc-900">

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-pink-600 to-purple-700 rounded-[40px] p-14 text-center">

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Start Your AI Fashion Transformation
          </h2>

          <p className="text-lg md:text-xl mb-10 text-white/80 max-w-3xl mx-auto">
            Create viral celebrity outfit styles and premium AI fashion looks today.
          </p>

          <button className="bg-white text-black hover:scale-105 transition px-10 py-5 rounded-2xl text-lg font-bold">
            Upload Your Photo
          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="border-t border-zinc-900 px-6 py-14"
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

          <div>

            <h2 className="text-3xl font-bold mb-5">
              AI Fashion Generator
            </h2>

            <p className="text-zinc-500 leading-relaxed">
              AI-powered celebrity outfit and fashion transformation platform.
            </p>

          </div>

          <div>

            <h3 className="font-bold text-lg mb-5">
              Navigation
            </h3>

            <ul className="space-y-3 text-zinc-400">

  <li>
    <a
      href="/"
      className="hover:text-pink-500 transition"
    >
      Home
    </a>
  </li>

  <li>
    <a
      href="#features"
      className="hover:text-pink-500 transition"
    >
      Features
    </a>
  </li>

  <li>
    <a
      href="#styles"
      className="hover:text-pink-500 transition"
    >
      Styles
    </a>
  </li>

  <li>
    <a
      href="#faq"
      className="hover:text-pink-500 transition"
    >
      FAQ
    </a>
  </li>

</ul>

          </div>

          <div>

            <h3 className="font-bold text-lg mb-5">
              Legal
            </h3>

            <ul className="space-y-3 text-zinc-400">

  <li>
    <a
      href="/privacy-policy"
      className="hover:text-pink-500 transition"
    >
      Privacy Policy
    </a>
  </li>

  <li>
    <a
      href="/terms-and-conditions"
      className="hover:text-pink-500 transition"
    >
      Terms & Conditions
    </a>
  </li>

  <li>
    <a
      href="#"
      className="hover:text-pink-500 transition"
    >
      Cookies Policy
    </a>
  </li>

</ul>

          </div>

          <div>

            <h3 className="font-bold text-lg mb-5">
              Contact
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li>support@aifashion.com</li>
              <li>Business Inquiries</li>
              <li>Advertising</li>
            </ul>

          </div>

        </div>

        <div className="border-t border-zinc-900 mt-12 pt-8 text-center text-zinc-500">
          © 2026 AI Fashion Generator. All rights reserved.
        </div>

      </footer>

    </main>
  );
    }
