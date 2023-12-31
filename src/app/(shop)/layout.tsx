export const revalidate = 60;

import { Footer, Sidebar, TopMenu } from "@/components";
import { inter } from "@/config/fonts";
import type { Metadata } from "next";
import "../globals.css";
import classes from "./Home.module.css";

export const metadata: Metadata = {
  title: { template: "%s - Teslo | Shop", default: "Home - Teslo | Shop" },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopMenu />

        <Sidebar />
        <main className={classes.wrapper}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
