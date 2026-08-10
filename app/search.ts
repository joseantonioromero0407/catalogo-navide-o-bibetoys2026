import type { Product } from "./products";

const aliasGroups = [
  ["muñeca", "muñecas", "muneca", "munecas", "bebé", "bebe", "reborn", "fashion", "baby"],
  ["dron", "drone", "drones", "vuelo", "volador", "voladora", "aereo", "aéreo"],
  ["robot", "robots", "roboy", "robto", "robotico", "robótico", "transformable", "transformer"],
  ["auto", "autos", "carro", "carros", "coche", "coches", "vehiculo", "vehículo", "vehiculos", "vehículos", "rc", "radiocontrol", "radiocontrolado"],
  ["camion", "camión", "camiones", "maquinaria", "excavadora", "grua", "grúa", "montacargas", "volquete"],
  ["perro", "gato", "mascota", "mascotas", "animal", "animales"],
  ["pistola", "blaster", "bláster", "cañon", "cañón", "burbujas", "agua"],
  ["educativo", "educativos", "didactico", "didáctico", "didacticos", "didácticos", "stem", "bloques", "mecano"],
  ["pizarra", "tablet", "dibujo", "dibujar", "lcd", "escritura"],
  ["kart", "gokart", "go kart", "scooter", "movilidad", "electrico", "eléctrico", "electricos", "eléctricos"],
];

export const normalizeSearchText = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const compact = (value: string) => normalizeSearchText(value).replace(/\s+/g, "");
const normalizedAliasGroups = aliasGroups.map((group) => group.map(normalizeSearchText));

function tokenForms(token: string) {
  const forms = new Set([token]);
  if (token.length > 4 && token.endsWith("es")) forms.add(token.slice(0, -2));
  if (token.length > 3 && token.endsWith("s")) forms.add(token.slice(0, -1));
  return forms;
}

function relatedTerms(token: string) {
  const forms = tokenForms(token);
  const group = normalizedAliasGroups.find((items) =>
    items.some((item) => {
      const itemForms = tokenForms(item);
      return [...forms].some((form) => itemForms.has(form));
    }),
  );
  return group ?? [...forms];
}

function scoreProduct(product: Product, rawQuery: string) {
  const query = normalizeSearchText(rawQuery);
  if (!query) return 1;

  const queryCode = compact(rawQuery);
  const productCode = compact(product.code);
  let score = 0;

  if (productCode === queryCode) score += 1000;
  else if (queryCode.length >= 3 && productCode.startsWith(queryCode)) score += 500;
  else if (queryCode.length >= 3 && productCode.includes(queryCode)) score += 300;

  const looksLikeCode = /\d/.test(queryCode) && queryCode.length >= 3;
  if (looksLikeCode) return score;

  const haystack = normalizeSearchText(`${product.name} ${product.category} ${product.code}`);
  const words = haystack.split(" ").filter(Boolean);
  const tokens = query.split(" ").filter(Boolean);

  for (const token of tokens) {
    const candidates = relatedTerms(token);
    let best = 0;

    for (const [candidateIndex, candidate] of candidates.entries()) {
      for (const form of tokenForms(candidate)) {
        const canonicalBoost = candidateIndex === 0 ? 55 : 0;
        if (words.includes(form)) best = Math.max(best, 120 + canonicalBoost);
        else if (words.some((word) => word.startsWith(form) || form.startsWith(word)))
          best = Math.max(best, 80 + canonicalBoost);
        else if (haystack.includes(form)) best = Math.max(best, 45 + canonicalBoost);
      }
    }

    if (best === 0 && score === 0) return 0;
    score += best;
  }

  if (haystack.includes(query)) score += 180;
  return score;
}

export function findProducts(productList: Product[], query: string, category: string) {
  return productList
    .map((product) => ({ product, score: scoreProduct(product, query) }))
    .filter(
      ({ product, score }) =>
        score > 0 && (category === "Todos" || product.category === category),
    )
    .sort((a, b) => b.score - a.score || a.product.page - b.product.page)
    .map(({ product }) => product);
}
