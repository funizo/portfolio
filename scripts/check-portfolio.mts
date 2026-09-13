import assert from "node:assert/strict";

// Run with the site running: npm run check:portfolio -- [base URL]
const base = process.argv[2] || "http://localhost:3000";
const response = await fetch(base);
assert.equal(response.status, 200);
const html = await response.text();
for (const text of ["㈜삼광랩트리", "바탈 (Batal)", "20~30분 → 1~5분 이내", "2023.08 ~ 2023.12", "2017.09 ~ 2018.02", "tel:01024587985", "mailto:k4160621@naver.com"]) {
    assert.ok(html.includes(text), `Missing content: ${text}`);
}
const anchors = [...html.matchAll(/href="#([^"]+)"/g)];
assert.equal(anchors.length, 6);
for (const [, id] of anchors) assert.ok(html.includes(`id="${id}"`), `Missing destination: ${id}`);
assert.ok(!/010-0000-0000|신입 프론트엔드|현대백화점/.test(html));
console.log("Portfolio content, card destinations, and contacts passed.");
