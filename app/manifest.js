export default function manifest() {
  return {
    name: "WhatsApp Dialer",
    short_name: "WapDialer",
    description:
      "WapDialer is a simple, fast, and secure PWA that lets you message anyone on WhatsApp without the hassle of saving their number. Just enter the phone number, hit Chat, and you're instantly redirected to the WhatsApp chat window. Perfect for quick one-time messages, business inquiries, or anyone who values a clutter-free contact list. Try it now - no installs, no fuss.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#21c063",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
