export function ContactIcons({ type }: { type: "phone" | "whatsapp" }) {
  return type === "phone" ? (
    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7.1 3.5H5a1.5 1.5 0 0 0-1.5 1.6A15.4 15.4 0 0 0 18.9 20.5a1.5 1.5 0 0 0 1.6-1.5v-2.1l-4-1.5-1.5 2a12.3 12.3 0 0 1-8.4-8.4l2-1.5-1.5-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg className="contact-icon contact-icon--whatsapp" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.4 11.7a8.4 8.4 0 0 1-12.2 7.5L3 20.5l1.3-5A8.4 8.4 0 1 1 20.4 11.7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8.3 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4-.1.6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.3.4.5v.5c0 .3-.1.6-.4.7-.6.3-1.4.5-2.2.3-1.2-.3-2.6-1.1-3.8-2.3-1.2-1.2-2-2.6-2.2-3.8-.2-.8 0-1.5.7-2.2Z" fill="currentColor" />
    </svg>
  );
}
