import { Inter, Space_Grotesk } from "next/font/google";


 /* NOTE:
  - Inter, Grotesk は next/font で管理
  - Libre Barcode 系は next/font 未対応のため globals.css に記載
  → .font-barcode-128 というクラスを使って適用
 */


export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});




