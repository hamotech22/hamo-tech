export default function BTN({ children, type = "button", disabled = false }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="mt-4 rounded-full bg-brand px-5 py-3 text-[14px] text-white transition hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-60"
    >
      {children} <span className="ms-2 rtl:inline-block rtl:rotate-180">→</span>
    </button>
  );
}
