export default function FurGoneWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 border">
              <div className="text-3xl leading-none">🐾</div>
              <div className="absolute -top-1 -right-1 text-sky-300 text-sm">✦</div>
            </div>
            <div>
              <div className="text-3xl font-bold tracking-tight text-slate-900">FurGone</div>
              <div className="text-xs text-slate-500">Launching soon on Amazon</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
            <a href="#home" className="hover:text-slate-900">Home</a>
            <a href="#product" className="hover:text-slate-900">Product</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="bg-gradient-to-b from-slate-50 to-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-slate-600 mb-6">
              FurGone • Reusable Pet Hair Remover
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Launching Soon <br /> on Amazon
            </h1>
            <p className="mt-8 text-2xl text-slate-700 leading-relaxed max-w-xl">
              Reusable pet hair remover for a fur-free home.
            </p>
            <p className="mt-4 text-2xl text-slate-700">Say goodbye to the mess.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#notify"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-300 px-8 py-4 text-white text-xl font-semibold shadow-lg hover:bg-blue-400 transition"
              >
                Get Launch Updates
              </a>
              <a
                href="#product"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-8 py-4 text-slate-800 text-xl font-semibold hover:bg-slate-50 transition"
              >
                View Product
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-center rounded-[2rem] bg-white border shadow-sm p-10 w-full max-w-lg">
              <div className="relative inline-block">
                <div className="text-[10rem] leading-none">🐾</div>
                <div className="absolute -top-2 right-1 text-sky-300 text-4xl">✦</div>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-slate-900 -mt-2">FurGone</div>
              <p className="mt-3 text-slate-500">Replace this symbol with your final uploaded logo before launch.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Meet FurGone Pet Hair Remover</h2>
          <p className="mt-6 text-2xl text-slate-700 leading-relaxed">
            Tired of pet hair on your couch, carpet, or car seats? FurGone removes it all in seconds.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl bg-slate-50 border shadow-sm min-h-[340px] flex items-center justify-center p-8 text-center">
            <div>
              <div className="text-7xl mb-4">📦</div>
              <div className="text-2xl font-semibold text-slate-900">Product Image Placeholder</div>
              <p className="mt-3 text-slate-500 max-w-md">
                Add your real product or supplier image here before publishing widely.
              </p>
            </div>
          </div>

          <div>
            <ul className="space-y-6 text-2xl text-slate-700">
              <li className="flex items-start gap-4">
                <span className="text-blue-300 text-3xl">✓</span>
                <span><strong className="text-slate-900">Reusable</strong>, eco-friendly</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-blue-300 text-3xl">✓</span>
                <span><strong className="text-slate-900">Easy to use</strong> and clean</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-blue-300 text-3xl">✓</span>
                <span><strong className="text-slate-900">No refills</strong> needed</span>
              </li>
            </ul>

            <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-800 text-sm">
              Amazon listing link not added yet. Update this button when your listing goes live.
            </div>

            <div className="mt-6">
              <button
                type="button"
                disabled
                className="inline-flex items-center justify-center rounded-2xl bg-slate-300 px-8 py-4 text-white text-xl font-semibold cursor-not-allowed"
              >
                Amazon Listing Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-xl text-slate-600">
          FurGone is preparing for launch. This page is ready to publish as a coming-soon website.
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Problem: Pet Hair Everywhere?</h2>
          <p className="mt-6 text-2xl text-slate-700 leading-relaxed">
            Solution: FurGone cleans it up in seconds — no sticky tape, no waste.
          </p>
        </div>

        <div id="notify" className="mt-12 rounded-[2rem] bg-gradient-to-b from-slate-50 to-slate-100 border shadow-sm p-10 md:p-14 text-center max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Get Notified</h3>
          <p className="mt-4 text-slate-600 text-lg">
            This form is currently a visual placeholder. Connect it to your email platform before collecting real addresses.
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-0 max-w-3xl mx-auto overflow-hidden rounded-2xl border bg-white shadow-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-5 text-xl outline-none"
            />
            <button
              type="submit"
              className="bg-blue-300 px-8 py-5 text-white text-2xl font-semibold hover:bg-blue-400 transition"
            >
              Notify Me
            </button>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 border">
              <div className="text-3xl leading-none">🐾</div>
              <div className="absolute -top-1 -right-1 text-sky-300 text-xs">✦</div>
            </div>
            <div className="text-3xl font-bold text-slate-900">FurGone</div>
          </div>
          <p className="mt-4 text-slate-500">© 2026 FurGone · All rights reserved.</p>
          <div className="mt-4 flex items-center justify-center gap-6 text-slate-600">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="mailto:hello@furgone.com" className="hover:text-slate-900">hello@furgone.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
