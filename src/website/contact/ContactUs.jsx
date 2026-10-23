import { useState } from "react";
import toast from "react-hot-toast";
import BTN from "../../components/button/BTN";
import useLanguage from "../../context/useLanguage";
import { whatsappNumber, whatsappUrl } from "../../lib/contact";

const ACCESS_KEY = "434a21b1-bb51-4b1e-add2-f9f375b66b0a";

const contactEmail = (import.meta.env.VITE_CONTACT_EMAIL || "").trim();

// text-base على الموبايل (16px) عشان Safari ميعملش zoom، و text-sm من sm وطالع
const inputClasses =
  "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-base text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-brand focus:ring-2 focus:ring-brand/15 sm:text-sm";

export default function ContactUs() {
  const { t } = useLanguage();
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    setSending(true);

    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);
    formData.append("from_name", "hamotech");
    formData.append("subject", `طلب جديد من ${formData.get("name")} | hamotech`);

    const toastId = toast.loading(t.contact.sending);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        toast.success(t.contact.success, { id: toastId });
        form.reset();
      } else {
        toast.error(t.contact.error, { id: toastId });
      }
    } catch (error) {
      console.error(t.contact.sendError, error);
      toast.error(t.contact.error, { id: toastId });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-zinc-50 px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-950 after:mx-auto after:mt-4 after:block after:h-1 after:w-14 after:rounded-full after:bg-brand sm:text-4xl lg:text-5xl">
          {t.contact.title}
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-zinc-600 sm:text-lg">{t.contact.description}</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1.35fr_0.85fr] lg:gap-16">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              name="name"
              placeholder={t.contact.name}
              aria-label={t.contact.name}
              className={inputClasses}
              autoComplete="name"
              required
            />

            <input
              name="email"
              type="email"
              placeholder={t.contact.email}
              aria-label={t.contact.email}
              className={inputClasses}
              autoComplete="email"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder={t.contact.message}
            aria-label={t.contact.message}
            rows={5}
            className={`${inputClasses} min-h-36 resize-y`}
            required
          />

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <BTN type="submit" disabled={sending}>
              {sending ? t.contact.sending : t.contact.send}
            </BTN>
          </div>
        </form>

        <div className="flex flex-col justify-center border-t border-zinc-200 pt-8 lg:border-s lg:border-t-0 lg:ps-10 lg:pt-0">
          {/* واتساب */}
          {whatsappNumber && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 border-b border-zinc-200 py-6 first:pt-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" className="size-5">
                  <path d="M128 24a103.4 103.4 0 0 0-88.6 156.7L24 232l53.2-14A104 104 0 1 0 128 24Zm0 184a79.6 79.6 0 0 1-40.6-11.1l-3.2-1.9-31.5 8.3 8.4-30.7-2.1-3.3A80 80 0 1 1 128 208Zm44-59.8c-2.4-1.2-14.2-7-16.4-7.8s-3.8-1.2-5.4 1.2-6.2 7.8-7.6 9.4-2.8 1.8-5.2.6a65.4 65.4 0 0 1-19.3-11.9 72.2 72.2 0 0 1-13.3-16.6c-1.4-2.4-.1-3.7 1-4.9s2.4-2.8 3.6-4.2a16.5 16.5 0 0 0 2.4-4 4.4 4.4 0 0 0-.2-4.2c-.6-1.2-5.4-13-7.4-17.8s-4-4-5.4-4h-4.6a8.8 8.8 0 0 0-6.4 3 26.8 26.8 0 0 0-8.4 19.9c0 11.8 8.6 23.2 9.8 24.8s16.9 25.8 41 36.2a137 137 0 0 0 13.7 5.1 33 33 0 0 0 15.1 1 24.7 24.7 0 0 0 16.2-11.4c2-4 2-7.4 1.4-8.2s-2.2-1.4-4.6-2.6Z" />
                </svg>
              </span>

              <span className="min-w-0 pt-0.5">
                <span className="block text-sm font-semibold text-zinc-950">{t.contact.whatsappLabel}</span>
                <span className="mt-1 block text-sm text-zinc-600">{t.contact.whatsapp}</span>
                <span className="mt-1 block text-xs text-zinc-500" dir="ltr">
                  {whatsappNumber}
                </span>
              </span>
            </a>
          )}

          {/* الإيميل */}
          {contactEmail && (
            <a
              href={`mailto:${contactEmail}`}
              className="group flex items-start gap-4 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" className="size-5">
                  <path d="M3.75 6.75h16.5v10.5H3.75z" strokeLinejoin="round" />
                  <path d="m4.5 7.5 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>

              <span className="min-w-0 pt-0.5">
                <span className="block text-sm font-semibold text-zinc-950">{t.contact.emailLabel}</span>
                <span className="mt-1 block break-all text-sm text-zinc-600">{contactEmail}</span>
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}