import "./globals.css";
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "Speed Paving",
  description: "Speed Paving has been providing high-quality commercial and residential paving services since 1987. Family-owned and trusted, we specialize in asphalt, concrete, pavers, seal coating, Belgian block, and retaining walls. Get durable and reliable paving services today!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}