import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  copy,
  pageSlugs,
  routeFor,
  siteConfig,
  type Locale,
} from "@/lib/site-content";

describe("localized public content", () => {
  it("provides a page record for every public route in both locales", () => {
    for (const locale of ["id", "en"] satisfies Locale[]) {
      assert.deepEqual(Object.keys(copy[locale].pages).sort(), [...pageSlugs].sort());
      for (const slug of pageSlugs) {
        const page = copy[locale].pages[slug];
        assert.ok(page.title.trim(), `${locale}/${slug} should have a title`);
        assert.ok(page.description.trim(), `${locale}/${slug} should have a description`);
        assert.ok(page.pendingItems.length > 0, `${locale}/${slug} should explain pending content`);
      }
    }
  });

  it("maps shared page slugs to Indonesian and English URL conventions", () => {
    assert.equal(routeFor("id", "home"), "/");
    assert.equal(routeFor("en", "home"), "/en");

    for (const slug of pageSlugs) {
      assert.equal(routeFor("id", slug), `/${slug}`);
      assert.equal(routeFor("en", slug), `/en/${slug}`);
    }
  });

  it("does not invent contact channels before approved company data is provided", () => {
    assert.equal(siteConfig.companyName, "PT Pelita Anugrah Perkasa");
    assert.deepEqual(siteConfig.contact, {
      person: null,
      email: null,
      phone: null,
      whatsapp: null,
      address: null,
    });
  });
});
