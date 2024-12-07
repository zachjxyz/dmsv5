import "./globals.css"; // Import your global CSS here
import { ReactNode } from "react";

export const metadata = {
  title: "Double M Studios",
  description: "Welcome to Double M Studios",
};

const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
