import "./globals.css";

export const metadata = {
  title: "EcoRuta Startup",
  description: "Logística ecológica inteligente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}