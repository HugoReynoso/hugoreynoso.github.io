import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");
const exists = (path) => access(new URL(path, root)).then(() => true, () => false);

test("layout espone i metadati SEO principali", async () => {
  const layout = await read("app/layout.tsx");
  assert.match(layout, /canonical: canonicalUrl/);
  assert.match(layout, /const canonicalUrl = "https:\/\/hugoreynoso\.github\.io\/"/);
  assert.match(layout, /application\/ld\+json/);
  assert.match(layout, /"ProfilePage"/);
  assert.match(layout, /manifest: "\/manifest\.webmanifest"/);
});

test("la home ha un solo H1 con il nome", async () => {
  const page = await read("app/page.tsx");
  assert.equal(page.match(/<h1[\s>]/g)?.length, 1);
  assert.match(page, /<h1><span className="hero-name">Hugo Aldo Reynoso<\/span>/);
});

test("tutte le immagini usate dal sito esistono in public/", async () => {
  const sources = [await read("app/page.tsx"), await read("app/layout.tsx"), await read("public/progetti/index.html")].join("\n");
  const images = new Set([...sources.matchAll(/["'](\/[\w\-/]+\.(?:webp|jpg|png|svg))["']/g)].map((m) => m[1]));
  assert.ok(images.size > 10);
  for (const image of images) assert.ok(await exists(`public${image}`), `manca public${image}`);
});

test("ogni progetto ha le traduzioni in tutte le lingue", async () => {
  const page = await read("app/page.tsx");
  const count = page.match(/^\s+\{ name: "/gm)?.length ?? 0;
  const translations = await read("app/translations.ts");
  for (const key of ["descriptions", "types", "previewAlts"]) {
    const blocks = [...translations.matchAll(new RegExp(`${key}: \\[([\\s\\S]*?)\\]`, "g"))];
    assert.equal(blocks.length, 3, `${key} deve esistere per it, en, es`);
    for (const [, body] of blocks) assert.equal(body.match(/"(?:[^"\\]|\\.)*"/g)?.length, count, `${key} non ha ${count} voci`);
  }
});

test("sitemap, robots e verifica Google sono pubblicati", async () => {
  const sitemap = await read("public/sitemap.xml");
  assert.match(sitemap, /<loc>https:\/\/hugoreynoso\.github\.io\/<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/hugoreynoso\.github\.io\/progetti\/<\/loc>/);
  assert.match(await read("public/robots.txt"), /Sitemap: https:\/\/hugoreynoso\.github\.io\/sitemap\.xml/);
  assert.ok(await exists("public/google9c063baba1a86934.html"));
});
