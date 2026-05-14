export default function About() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-24">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-pink-500 font-semibold mb-6">
            About Our Platform
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
            AI Fashion Generator
          </h1>

          <p className="text-zinc-400 text-xl leading-relaxed max-w-4xl mx-auto">
            AI Fashion Generator helps users create celebrity-inspired outfits,
            viral fashion looks, luxury transformations,
            influencer aesthetics, and premium AI-generated fashion styles instantly.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="bg-zinc-900 border border-zinc-800 rounded-[35px] p-10">

            <h2 className="text-3xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-zinc-400 leading-relaxed text-lg">
              Our mission is to make AI fashion technology accessible for everyone.
              We help creators, influencers, and fashion lovers generate
              premium outfit inspiration using advanced AI tools.
            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-[35px] p-10">

            <h2 className="text-3xl font-bold mb-6">
              AI Technology
            </h2>

            <p className="text-zinc-400 leading-relaxed text-lg">
              Our AI engine analyzes modern fashion trends,
              celebrity outfit styles, luxury aesthetics,
              and viral social media fashion patterns to generate realistic results.
            </p>

          </div>

        </div>

        <div className="bg-gradient-to-r from-pink-600 to-purple-700 rounded-[40px] p-14 text-center">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Future of AI Fashion
          </h2>

          <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            We are building one of the most advanced AI-powered
            fashion transformation platforms for the next generation of creators.
          </p>

          <button className="bg-white text-black hover:scale-105 transition px-10 py-5 rounded-2xl text-lg font-bold">
            Explore AI Fashion
          </button>

        </div>

      </div>

    </main>
  );
    }
