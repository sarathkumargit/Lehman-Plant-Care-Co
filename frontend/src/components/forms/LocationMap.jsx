export default function LocationMap() {
  return (
    <div className="rounded-3xl overflow-hidden border border-[var(--color-text)]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.4452516069505!2d-78.6197583!3d43.032062499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d39d0776e95339%3A0xbec122180da5e487!2s9950%20County%20Rd%2C%20Clarence%20Center%2C%20NY%2014032%2C%20USA!5e0!3m2!1sen!2slk!4v1786386236863!5m2!1sen!2slk"
        width="100%"
        height={500}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        decoding="async"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Our service area map"
      />
    </div>
  )
}
