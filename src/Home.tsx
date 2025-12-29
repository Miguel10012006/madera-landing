const WHATSAPP_LINK =
  "https://wa.me/573053067257?text=Hola,%20quiero%20cotizar%20un%20trabajo%20en%20madera";

export default function Home() {
  return (
    <div className="flex bg-white text-gray-800 overflow-x-hidden">
      {/* ============ SIDEBAR DESKTOP ============ */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-56 bg-black text-white flex-col justify-center px-6 z-40">
        <nav className="space-y-4 w-full">
          {[
            { label: "Inicio", href: "#inicio" },
            { label: "Servicios", href: "#servicios" },
            { label: "Contacto", href: "#contacto" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block w-full px-4 py-3 rounded-lg bg-neutral-900 hover:bg-green-500 transition font-semibold text-center text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* ============ TOPBAR MOBILE ============ */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-black text-white z-40">
        <nav className="flex h-full items-center justify-around text-sm font-semibold">
          <a
            href="#inicio"
            className="hover:text-green-400 transition"
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="hover:text-green-400 transition"
          >
            Servicios
          </a>
          <a
            href="#contacto"
            className="hover:text-green-400 transition"
          >
            Contacto
          </a>
        </nav>
      </header>

      {/* ============ CONTENIDO ============ */}
      <main className="w-full md:ml-56">
        {/* ================= HERO ================= */}
        <section
          id="inicio"
          className="
            relative flex items-center justify-center
            bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')]
            bg-cover bg-center
            min-h-[100svh] md:min-h-screen
            pt-16 md:pt-0
          "
        >
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-3xl text-center text-white px-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Closets y Muebles en Madera <br className="hidden md:block" />
              a Medida en Popayán
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200">
              Especialistas en closets, armarios y muebles personalizados en
              Popayán, fabricados en madera de alta calidad.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              className="inline-block bg-green-500 hover:bg-green-600 transition px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl text-white"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </section>

        {/* ================= SERVICIOS ================= */}
        <section
          id="servicios"
          className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Closets, Armarios y Muebles en Popayán
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Closets a Medida",
                img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
                desc: "Diseños personalizados que aprovechan cada espacio con acabados modernos y resistentes.",
              },
              {
                title: "Armarios en Madera",
                img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
                desc: "Armarios empotrados y modernos fabricados por carpinteros expertos en Popayán.",
              },
              {
                title: "Muebles Personalizados",
                img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
                desc: "Fabricamos muebles únicos en madera para hogares y oficinas en Popayán.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-8 flex flex-col h-full">
                  <h3 className="text-2xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    className="mt-auto inline-block text-center bg-green-500 hover:bg-green-600 transition text-white py-3 rounded-full font-semibold"
                  >
                    Contactar ahora
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CONTACTO ================= */}
        <section
          id="contacto"
          className="bg-neutral-900 text-white py-20 px-6 text-center scroll-mt-20"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Carpintería Profesional en Popayán
            </h2>
            <p className="text-gray-300 mb-8">
              📍 MaderaPopayan – Carpintería en Popayán, Cauca. Atendemos Popayán y
              alrededores.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              className="inline-block bg-green-500 hover:bg-green-600 transition px-10 py-4 rounded-full text-lg font-semibold shadow-lg text-white"
            >
              Contáctanos ahora
            </a>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="bg-black text-gray-400 text-center py-8 text-sm">
          <p>© 2025 MaderaPopayan – Carpintería en Popayán</p>
          <p>Closets • Armarios • Muebles personalizados en madera</p>
        </footer>

        {/* ================= BOTÓN WHATSAPP ================= */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 transition text-white px-5 py-4 rounded-full shadow-2xl font-semibold z-50"
        >
          WhatsApp
        </a>
      </main>
    </div>
  );
}
