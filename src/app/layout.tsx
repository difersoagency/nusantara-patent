import './globals.css'
export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="overflow-x-hidden scroll-smooth">
      <body >
        {children}
      </body>
    </html>
  );
}
