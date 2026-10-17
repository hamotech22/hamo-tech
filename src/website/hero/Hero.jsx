import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Gauge,
  Layers,
  Palette,
  PanelsTopLeft,
  Server,
  ShoppingCart,
} from "lucide-react";
import useLanguage from "../../context/useLanguage";
import { getCollection } from "../../lib/api";
import { resolveGalleryImage } from "../../lib/projectImages";


const W = 1240, H = 530;   // أبعاد الكولاج
const OX = 150, OY = 435;  // نقطة بداية الكولاج في الصورة الأصلية
const R = 16;              // نصف قطر تدوير الزوايا

const RAW = [
  { id: "web", Icon: Code2, tone: "#fbd9bf,#c7a98f",
    chip: [162, 692], pts: [[150, 468], [465, 440], [432, 712], [158, 725]] },
  { id: "ui", Icon: Palette, tone: "#1e4fa8,#0b1a3d",
    chip: [480, 737], pts: [[512, 442], [815, 478], [815, 672], [1060, 680], [1058, 724], [500, 800], [452, 765]] },
  { id: "ecommerce", Icon: ShoppingCart, tone: "#dbeafe,#7ea6d9",
    chip: [860, 628], pts: [[838, 466], [1090, 440], [1072, 644], [850, 662]] },
  { id: "backend", Icon: Server, tone: "#14306e,#050b1e",
    chip: [1100, 700], pts: [[1115, 435], [1388, 457], [1378, 740], [1085, 722]] },
  { id: "wordpress", Icon: PanelsTopLeft, tone: "#0b3d91,#050d26",
    chip: [170, 915], pts: [[155, 752], [432, 742], [518, 958], [160, 958]] },
  { id: "fullstack", Icon: Layers, tone: "#e2e8f0,#7f93ad",
    chip: [582, 921], pts: [[500, 818], [985, 765], [975, 945], [548, 962]] },
  { id: "optimization", Icon: Gauge, tone: "#cbd5e1,#475569",
    chip: [1014, 920], pts: [[1010, 748], [1388, 770], [1388, 940], [995, 962]] },
];

const toward = (p, q, r) => {
  const dx = q[0] - p[0], dy = q[1] - p[1], len = Math.hypot(dx, dy);
  const k = Math.min(r, len / 2) / len;
  return [p[0] + dx * k, p[1] + dy * k];
};

const TILES = RAW.map((t) => {
  const xs = t.pts.map((p) => p[0]), ys = t.pts.map((p) => p[1]);
  const minx = Math.min(...xs), maxx = Math.max(...xs);
  const miny = Math.min(...ys), maxy = Math.max(...ys);
  const bw = maxx - minx, bh = maxy - miny, n = t.pts.length;
  const nx = (x) => ((x - minx) / bw).toFixed(4);
  const ny = (y) => ((y - miny) / bh).toFixed(4);
  let d = "";
  t.pts.forEach((p, i) => {
    const A = toward(p, t.pts[(i - 1 + n) % n], R);
    const B = toward(p, t.pts[(i + 1) % n], R);
    d += `${i ? "L" : "M"}${nx(A[0])} ${ny(A[1])}Q${nx(p[0])} ${ny(p[1])} ${nx(B[0])} ${ny(B[1])}`;
  });
  return {
    ...t, d: d + "Z",
    box: { l: ((minx - OX) / W) * 100, t: ((miny - OY) / H) * 100, w: (bw / W) * 100, h: (bh / H) * 100 },
    cp: { l: ((t.chip[0] - minx) / bw) * 100, t: ((t.chip[1] - miny) / bh) * 100 },
  };
});


export default function Hero() {
  const { lang, t } = useLanguage();
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    getCollection("/gallery")
      .then(setGallery)
      .catch((error) => {
        console.error("Failed to load hero gallery:", error);
      });
  }, []);

  return (
    <div className="hx" data-theme="light" dir={lang === "ar" ? "rtl" : "ltr"}>
      <svg className="hx-defs" width="0" height="0" aria-hidden="true">
        <defs>
          {TILES.map((t) => (
            <clipPath key={t.id} id={`hxc-${t.id}`} clipPathUnits="objectBoundingBox">
              <path d={t.d} />
            </clipPath>
          ))}
        </defs>
      </svg>

      {/* ===== Navbar ===== */}
 

      {/* ===== Text ===== */}
      <section className="hx-text">
        <span className="hx-badge"><i /> {t.hero.badge}</span>
        <h1>
          <span className="blue">{t.hero.title1}</span>
          <span>{t.hero.title2}</span>
        </h1>
        <p>
          {t.hero.desc}
        </p>
        <a href="#services" className="hx-btn">
          {t.hero.button} {lang === "ar" ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
        </a>

        <div className="hx-hint" aria-hidden="true">
          <span>{t.hero.hintLine1}<br />{t.hero.hintLine2}</span>
          <svg width="46" height="52" viewBox="0 0 46 52" fill="none">
            <path d="M34 2C40 14 36 30 14 44" stroke="var(--color-brand)" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M12 33l1 12 12-3" stroke="var(--color-brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ===== Collage ===== */}
      <section className="hx-collage">
        {TILES.map(({ id, Icon, tone, box, cp }, index) => {
          const label = t.hero.galleryLabels[index];

          return (
            <div
              key={id}
              data-id={id}
              role="img"
              aria-label={t.hero.galleryAlt(index + 1, gallery[index]?.alt || label)}
              className="hx-tile"
              style={{ "--l": `${box.l}%`, "--t": `${box.t}%`, "--w": `${box.w}%`, "--h": `${box.h}%` }}
            >
              <span
                className="hx-fill"
                style={{
                  "--clip": `url(#hxc-${id})`,
                  backgroundImage: gallery[index]?.image
                    ? `url("${resolveGalleryImage(gallery[index].image)}"), linear-gradient(135deg, ${tone})`
                    : `linear-gradient(135deg, ${tone})`,
                }}
              >
                <span className="hx-chip flex items-center gap-1 min-w-0 max-sm:max-w-[calc(100%-8px)] !start-[var(--cl)] max-sm:!start-[10px] rtl:![direction:rtl]" style={{ "--cl": `${cp.l}%`, "--ct": `${cp.t}%` }}>
                  <b className="shrink-0"><Icon /></b>
                  <em className="min-w-0 flex-1 truncate">{label}</em>
                  <ArrowRight className="shrink-0 rtl:-scale-x-100" />
                </span>
              </span>
            </div>
          );
        })}
      </section>
    </div>
  );
}