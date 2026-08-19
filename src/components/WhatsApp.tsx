export function WhatsApp() {
  const message = encodeURIComponent("Oi, S3! Quero saber mais sobre a academia.");
  return (
    <a
      className="whatsapp"
      href={`https://wa.me/558132283498?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a S3 pelo WhatsApp"
    >
      <span>WHATSAPP</span>
      <span>↗</span>
    </a>
  );
}