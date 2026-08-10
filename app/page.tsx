"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { products, type Product } from "./products";
import { findProducts } from "./search";

const CATALOG_EMBED_URL =
  "https://www.canva.com/design/DAHQOK0v2Ms/KT2WQAB8vRfoJJGU_pTt1A/view?embed";
const WHATSAPP_URL =
  "https://wa.me/59176697191?text=Hola%2C%20revis%C3%A9%20el%20Cat%C3%A1logo%20BibeToys%202026%20y%20quiero%20recibir%20informaci%C3%B3n%20sobre%20la%20importaci%C3%B3n%20grupal.";
const ORDER_FORM_URL = "https://forms.gle/rVAusbXiD8r5QzPh8";

const faqs = [
  {
    question: "¿Cómo registro mi pedido?",
    answer:
      "Copia del buscador los códigos y nombres de los productos que te interesan. Luego abre el formulario oficial, completa tus datos, indica la cantidad de cajas y envía el registro. El formulario es el único canal para registrar pedidos.",
  },
  {
    question: "¿Cuál es el pedido mínimo?",
    answer:
      "El pedido mínimo es de una caja por producto. En cada ficha del catálogo se indica la cantidad de unidades contenidas en la caja y su precio final puesto en Cochabamba.",
  },
  {
    question: "¿Cómo se realizan los pagos?",
    answer:
      "El primer pago corresponde al 70% del valor total del pedido y el segundo al 30%. INTRAPROD comunicará el segundo pago con una semana de anticipación.",
  },
  {
    question: "¿Dónde se entregan los productos?",
    answer:
      "La entrega se realiza en el almacén de Cochabamba. También puede enviarse a otras ciudades de Bolivia; el cliente cubre únicamente el costo adicional de la transportadora.",
  },
  {
    question: "¿Cómo sabré en qué etapa está la importación?",
    answer:
      "Se informará el avance desde la fabricación hasta la desaduanización. Después de ese proceso, la organización, el embalaje y las pruebas de los productos pueden tomar entre 5 y 10 días antes de iniciar las entregas.",
  },
  {
    question: "¿La fecha estimada puede cambiar?",
    answer:
      "Sí. Puede variar por situaciones ajenas al control de la importadora, como tránsito marítimo o terrestre, desaduanización u otros casos de fuerza mayor.",
  },
  {
    question: "¿Existen reembolsos o garantías?",
    answer:
      "No se admiten reembolsos. Los reclamos o solicitudes de garantía deben presentarse dentro de los 10 días posteriores a la notificación para recoger los productos.",
  },
  {
    question: "¿Cuánto tiempo tengo para retirar mi pedido?",
    answer:
      "El pedido puede retirarse hasta tres días después de la notificación. Pasado ese plazo, se aplica un costo de almacenaje de Bs 70 por día.",
  },
  {
    question: "¿El costo final puede ajustarse?",
    answer:
      "Sí, únicamente si cambian leyes, normativas o disposiciones aplicables en Bolivia, o si varía el tipo de cambio oficial vigente. El ajuste puede aumentar o reducir el costo final.",
  },
];

function formatPrice(price: number | null) {
  if (price === null) return null;
  return new Intl.NumberFormat("es-BO", { maximumFractionDigits: 0 }).format(price);
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedPage, setSelectedPage] = useState<number | null>(null);
  const catalogRef = useRef<HTMLElement>(null);

  const categories = useMemo(
    () => ["Todos", ...Array.from(new Set(products.map((product) => product.category)))],
    [],
  );

  const productOptions = useMemo(
    () => [...products].sort((a, b) => a.page - b.page || a.name.localeCompare(b.name, "es")),
    [],
  );

  const filtered = useMemo(() => findProducts(products, query, category), [query, category]);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8%" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  async function copyProduct(product: Product) {
    const value = `${product.code} — ${product.name}`;
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopiedId(product.id);
    window.setTimeout(() => setCopiedId(null), 1800);
  }

  function showInCatalog(page: number) {
    setSelectedPage(page);
    catalogRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function updateQuery(value: string) {
    setQuery(value);
    setSelectedProduct("");
    setCategory("Todos");
    setVisibleCount(12);
  }

  function updateCategory(value: string) {
    setCategory(value);
    setVisibleCount(12);
  }

  function chooseProduct(value: string) {
    setSelectedProduct(value);
    const product = products.find((item) => item.id === value);
    if (!product) return;
    setCategory("Todos");
    setQuery(product.code);
    setVisibleCount(12);
  }

  return (
    <main>
      <nav className="site-nav" aria-label="Navegación principal">
        <a href="#inicio" className="brand-lockup" aria-label="BibeToys, inicio">
          <Image src="/bibetoys-logo.png" alt="BibeToys" width={58} height={58} priority unoptimized />
          <span>
            <strong>BibeToys</strong>
            <small>Importación grupal 2026</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#catalogo">Catálogo</a>
          <a href="#buscar">Buscar</a>
          <a href="#preguntas">Preguntas</a>
          <a className="nav-cta" href={ORDER_FORM_URL} target="_blank" rel="noreferrer">
            Registrar pedido
          </a>
        </div>
      </nav>

      <header id="inicio" className="hero">
        <div className="hero-orb orb-one" aria-hidden="true" />
        <div className="hero-orb orb-two" aria-hidden="true" />
        <div className="hero-content reveal">
          <p className="eyebrow">Catálogo oficial · Navidad 2026</p>
          <h1>Encuentra el juguete ideal para tu negocio.</h1>
          <p className="hero-copy">
            Explora el catálogo final, busca por nombre o código y registra tu pedido mediante el formulario oficial.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#catalogo">Ver catálogo</a>
            <a className="button button-secondary" href="#buscar">Buscar productos</a>
            <a className="button button-form" href={ORDER_FORM_URL} target="_blank" rel="noreferrer">
              Registrar pedido
            </a>
          </div>
          <ul className="trust-row" aria-label="Condiciones principales">
            <li><strong>98</strong><span>productos</span></li>
            <li><strong>1 caja</strong><span>pedido mínimo</span></li>
            <li><strong>Cochabamba</strong><span>precios puestos</span></li>
          </ul>
        </div>
        <div className="hero-visual reveal delay-one">
          <div className="logo-stage">
            <Image src="/bibetoys-logo.png" alt="BibeToys" width={360} height={360} priority unoptimized />
          </div>
          <div className="backed-by">
            <span>Respaldado por</span>
            <Image src="/intraprod-logo.png" alt="INTRAPROD Importadora" width={74} height={74} unoptimized />
            <strong>INTRAPROD</strong>
          </div>
        </div>
      </header>

      <section id="catalogo" className="section catalog-section" ref={catalogRef}>
        <div className="catalog-copy scroll-reveal" data-reveal>
          <p className="eyebrow dark">Catálogo completo en alta calidad</p>
          <h2>Explora la colección página por página.</h2>
          <p>
            Revisa cada producto, código, precio por caja y detalle directamente en el visor.
          </p>
          {selectedPage && (
            <div className="page-cue" role="status">
              El producto elegido está en la <strong>página {selectedPage}</strong> del catálogo.
            </div>
          )}
        </div>

        <div className="catalog-frame scroll-reveal delay-one" data-reveal>
          <iframe
            loading="lazy"
            title="Catálogo BibeToys 2026"
            src={CATALOG_EMBED_URL}
            allowFullScreen
          />
        </div>
        <a className="open-catalog" href={CATALOG_EMBED_URL.replace("?embed", "")} target="_blank" rel="noreferrer">
          Abrir catálogo en pantalla completa
        </a>
      </section>

      <section id="buscar" className="section search-section">
        <div className="section-heading scroll-reveal" data-reveal>
          <p className="eyebrow dark">Buscador inteligente</p>
          <h2>Busca como lo dirías normalmente.</h2>
          <p>
            Reconoce tildes, palabras relacionadas, errores comunes como “roboy” y códigos con o sin guiones.
          </p>
        </div>

        <div className="search-panel scroll-reveal delay-one" data-reveal>
          <label className="search-box">
            <span className="search-label">Nombre, tipo o código</span>
            <input
              type="search"
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
              placeholder="Ej.: muñeca, dron, roboy o CJ4211056"
              autoComplete="off"
            />
            {query && (
              <button type="button" onClick={() => updateQuery("")} aria-label="Limpiar búsqueda">
                Limpiar
              </button>
            )}
          </label>

          <label className="product-filter">
            <span>Elegir un producto</span>
            <select value={selectedProduct} onChange={(event) => chooseProduct(event.target.value)}>
              <option value="">Selecciona por nombre o código</option>
              {productOptions.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.code} — {product.name}
                </option>
              ))}
            </select>
          </label>

          <div className="quick-searches" aria-label="Búsquedas sugeridas">
            {["Muñecas", "Drones", "Robots", "Autos RC", "Scooters"].map((term) => (
              <button key={term} type="button" onClick={() => updateQuery(term)}>{term}</button>
            ))}
          </div>

          <label className="category-filter">
            <span>Categoría</span>
            <select value={category} onChange={(event) => updateCategory(event.target.value)}>
              {categories.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>

        <div className="results-header scroll-reveal" data-reveal>
          <p><strong>{filtered.length}</strong> {filtered.length === 1 ? "producto encontrado" : "productos encontrados"}</p>
          <span>Datos visibles tomados del catálogo final</span>
        </div>

        {filtered.length > 0 ? (
          <div className="product-grid">
            {filtered.slice(0, visibleCount).map((product, index) => (
              <article className="product-card" key={product.id} style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}>
                <div className="card-topline">
                  <span>Página {product.page}</span>
                  {product.price !== null && <strong>Bs {formatPrice(product.price)}.- / caja</strong>}
                </div>
                <p className="product-category">{product.category}</p>
                <h3>{product.name}</h3>
                <code>{product.code}</code>
                <div className="card-actions">
                  <button className="copy-button" type="button" onClick={() => copyProduct(product)}>
                    {copiedId === product.id ? "Copiado ✓" : "Copiar código y producto"}
                  </button>
                  <button className="page-button" type="button" onClick={() => showInCatalog(product.page)}>
                    Ver pág. {product.page}
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <strong>No encontramos esa búsqueda.</strong>
            <p>Prueba con una palabra más general o escribe solo una parte del código.</p>
            <button type="button" onClick={() => { updateQuery(""); updateCategory("Todos"); }}>Ver todos</button>
          </div>
        )}

        {visibleCount < filtered.length && (
          <button className="load-more" type="button" onClick={() => setVisibleCount((count) => count + 12)}>
            Mostrar 12 productos más
          </button>
        )}
      </section>

      <section id="preguntas" className="section faq-section">
        <div className="faq-layout">
          <div className="faq-intro scroll-reveal" data-reveal>
            <p className="eyebrow dark">Antes de registrar</p>
            <h2>Preguntas frecuentes y condiciones claras.</h2>
            <p>
              Aquí resumimos los puntos más importantes. Los términos completos también están publicados
              en el catálogo y su aceptación se confirma al enviar el formulario.
            </p>
            <div className="faq-contact">
              <strong>¿Necesitas orientación?</strong>
              <span>WhatsApp queda disponible solo para consultas generales, no para registrar pedidos.</span>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Consultar por WhatsApp</a>
            </div>
          </div>

          <div className="faq-list scroll-reveal delay-one" data-reveal>
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {faq.question}
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="pedido" className="order-strip scroll-reveal" data-reveal>
        <div className="order-copy">
          <p className="eyebrow">Pedido oficial</p>
          <h2>Ya tienes tus códigos. Ahora registra tu pedido.</h2>
          <p>
            El formulario centraliza todos los pedidos para evitar confusiones y retrasos. Revisa tus códigos,
            indica el número de cajas y acepta las condiciones antes de enviar.
          </p>
          <ol className="order-steps" aria-label="Pasos para registrar el pedido">
            <li><span>1</span>Copia tus códigos</li>
            <li><span>2</span>Completa el formulario</li>
            <li><span>3</span>Envía tu registro</li>
          </ol>
        </div>
        <div className="order-action">
          <span>Canal oficial de pedidos</span>
          <a className="button button-light" href={ORDER_FORM_URL} target="_blank" rel="noreferrer">
            Abrir formulario de pedido
          </a>
          <small>Se abrirá en una pestaña nueva para que no pierdas tu búsqueda.</small>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <Image src="/bibetoys-logo.png" alt="BibeToys" width={54} height={54} unoptimized />
          <div><strong>BibeToys</strong><span>Respaldado por INTRAPROD</span></div>
        </div>
        <p>Importación grupal · Precios puestos en Cochabamba · 2026</p>
      </footer>

      <div className={`copy-toast ${copiedId ? "show" : ""}`} role="status" aria-live="polite">
        Código y producto copiados
      </div>

      <a className="mobile-order-cta" href={ORDER_FORM_URL} target="_blank" rel="noreferrer">
        Registrar pedido
      </a>
    </main>
  );
}
