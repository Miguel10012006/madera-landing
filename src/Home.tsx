import { useState } from "react";

type CatalogKey = "closets" | "muebles" | "armarios";

const WHATSAPP_LINK =
  "https://wa.me/573053067257?text=Hola,%20quiero%20cotizar%20un%20trabajo%20en%20madera";

export default function Home() {
  const [selectedCatalog, setSelectedCatalog] = useState<null | {
    title: string;
    items: {
      title: string;
      img: string;
      desc: string;
    }[];
  }>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const GALLERY_IMAGES = [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
    "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
    "https://images.unsplash.com/photo-1556912173-3bb406ef7e77",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
  ];

  const CATALOG_DATA: Record<
    CatalogKey,
    {
      title: string;
      items: {
        title: string;
        img: string;
        desc: string;
      }[];
    }
  > = {
    closets: {
      title: "Closets a Medida",
      items: Array.from({ length: 6 }).map((_, i) => ({
        title: `Closet Moderno ${i + 1}`,
        img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
        desc:
          "Closet personalizado con divisiones inteligentes y acabados premium.",
      })),
    },
    muebles: {
      title: "Muebles Personalizados",
      items: Array.from({ length: 6 }).map((_, i) => ({
        title: `Mueble en Madera ${i + 1}`,
        img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
        desc:
          "Mueble diseñado a medida para maximizar funcionalidad y estilo.",
      })),
    },
    armarios: {
      title: "Puertas y Armarios",
      items: Array.from({ length: 6 }).map((_, i) => ({
        title: `Armario Premium ${i + 1}`,
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        desc:
          "Armario robusto, elegante y adaptable a cualquier espacio.",
      })),
    },
  };

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-56 bg-black text-white flex-col justify-center px-6 z-40">
        <nav className="space-y-4 w-full">
          {[
            { label: "Inicio", href: "#inicio" },
            { label: "Así Trabajamos", href: "#asi-trabajamos" },
            { label: "Trabajos", href: "#galeria" },
            { label: "Catálogo", href: "#catalogo" },
            { label: "Contacto", href: "#contacto" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-4 py-3 rounded-xl bg-neutral-900 hover:bg-green-500 transition font-semibold text-center text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      <header className="md:hidden fixed top-0 left-0 right-0 bg-black text-white z-40 px-4 py-3">
        <nav className="flex flex-wrap gap-2 justify-center text-sm font-semibold">
          {[
            { label: "Inicio", href: "#inicio" },
            { label: "Así Trabajamos", href: "#asi-trabajamos" },
            { label: "Trabajos", href: "#galeria" },
            { label: "Catálogo", href: "#catalogo" },
            { label: "Contacto", href: "#contacto" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-green-500 transition text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="md:ml-56 pt-20 md:pt-0">
        <section
          id="inicio"
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 max-w-4xl text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Carpintería Premium en Popayán
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Diseñamos y fabricamos closets, cocinas y muebles en madera a medida.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              className="inline-block bg-green-500 hover:bg-green-600 transition px-10 py-4 rounded-full text-lg font-bold shadow-xl text-white"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </section>

        <section
          id="asi-trabajamos"
          className="bg-neutral-100 py-20 px-6 scroll-mt-20"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Así Trabajamos
            </h2>
            <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/HMSULJZ8dzM"
                title="Nuestro trabajo en carpintería"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section
          id="galeria"
          className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Trabajos Realizados
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {GALLERY_IMAGES.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className="rounded-2xl overflow-hidden bg-transparent p-0 border-0"
              >
                <img
                  src={`${img}?w=800&auto=format&fit=crop`}
                  alt="Trabajo en madera"
                  loading="lazy"
                  className="object-cover h-64 w-full hover:scale-105 transition"
                />
              </button>
            ))}
          </div>
        </section>

        <section
          id="catalogo"
          className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Nuestro Catálogo
          </h2>

          <div className="grid gap-10 md:grid-cols-4">
            {[
              {
                title: "Closets a Medida",
                img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
                key: "closets" as CatalogKey,
                desc: "Diseñados según tu espacio y estilo.",
              },
              {
                title: "Cocinas en Madera",
                img: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77",
                key: "muebles" as CatalogKey,
                desc: "Funcionales, modernas y duraderas.",
              },
              {
                title: "Muebles Personalizados",
                img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
                key: "muebles" as CatalogKey,
                desc: "Para hogares y oficinas.",
              },
              {
                title: "Puertas y Armarios",
                img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
                key: "armarios" as CatalogKey,
                desc: "Acabados profesionales.",
              },
            ].map((item) => (
              <button
                key={item.title}
                onClick={() =>
                  setSelectedCatalog(CATALOG_DATA[item.key])
                }
                className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition text-left bg-transparent p-0 border-0"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <span className="inline-block w-full text-center bg-green-500 text-white py-3 rounded-full font-semibold">
                    Ver trabajos
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section
          id="contacto"
          className="bg-black text-white py-20 px-6 text-center scroll-mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para tu Proyecto?
          </h2>
          <p className="text-gray-300 mb-8">
            Atendemos Popayán y alrededores. Calidad garantizada.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            className="inline-block bg-green-500 hover:bg-green-600 transition px-10 py-4 rounded-full text-lg font-bold text-white"
          >
            Escríbenos por WhatsApp
          </a>
        </section>

        <footer className="bg-neutral-900 text-gray-400 text-center py-6 text-sm">
          © 2025 MaderaPopayán · Carpintería Profesional
        </footer>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl font-semibold z-50"
        >
          WhatsApp
        </a>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={`${selectedImage}?w=1600&auto=format`}
              alt="Trabajo en madera ampliado"
              className="max-h-[90vh] max-w-full rounded-2xl shadow-2xl"
            />
            <button
              className="absolute top-6 right-6 text-white text-4xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        )}

        {selectedCatalog && (
          <div
            className="fixed inset-0 bg-black/90 z-50 overflow-y-auto px-6 py-10"
            onClick={() => setSelectedCatalog(null)}
          >
            <button
              onClick={() => setSelectedCatalog(null)}
              className="fixed top-6 right-6 text-white text-4xl font-bold z-50 hover:scale-110 transition"
            >
              ×
            </button>

            <div
              className="max-w-6xl mx-auto bg-white rounded-3xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-3xl font-bold">
                  {selectedCatalog.title}
                </h3>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {selectedCatalog.items.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden shadow-lg"
                  >
                    <button
                      onClick={() => setSelectedImage(item.img)}
                      className="bg-transparent p-0 border-0 w-full"
                    >
                      <img
                        src={`${item.img}?w=800&auto=format`}
                        alt={item.title}
                        className="h-48 w-full object-cover hover:scale-105 transition"
                      />
                    </button>

                    <div className="p-4">
                      <h4 className="font-semibold text-lg mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4">
                        {item.desc}
                      </p>
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        className="block text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-full font-semibold"
                      >
                        Cotizar
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
