import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const league = localFont({
  src: "./fonts/LeagueSpartan.ttf",
  variable: "--font-league",
  weight: "100 200 300 400 500 600 700 800 900",
});
const lakwa = localFont({
  src: "./fonts/Lakwa.ttf",
  variable: "--font-lakwa",
  weight: "100 200 300 400 500 600 700 800 900",
});
export const metadata: Metadata = {
  title: "Cook Fresh",
  description:
    "Your Ultimate Recipe Finder and Meal Planner! Welcome to Cook Fresh, the one-stop destination for food lovers seeking fresh, easy-to-follow recipes and meal inspiration. At Cook Fresh, you can search thousands of recipes across various cuisines, discover each dish's ingredients, and follow simple step-by-step instructions. Whether you're a beginner or a seasoned chef, Cook Fresh will guide you to create meals that delight. Plus, based on your preferences, Cook Fresh offers personalized dish recommendations, making it easier to discover new favorites. From quick dinners to gourmet dishes, Cook Fresh makes cooking enjoyable, fresh, and accessible!",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${league.variable} ${lakwa.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
