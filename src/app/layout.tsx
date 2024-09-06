import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "eLearning",
  description: "Learning made easy",
   // Adding meta tags to suggest no caching
   viewport: "width=device-width, initial-scale=1",
   robots: "noindex, nofollow",
   other: {
     "Cache-Control": "no-cache, no-store, must-revalidate",
     "Pragma": "no-cache",
     "Expires": "0",
   },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
