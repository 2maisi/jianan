import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "建安",
  description: "建安装修",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = {
    token: {
      colorPrimary: 'red',
      colorBorder: 'red',
      colorPrimaryText: 'black',
      colorText: '#ff0000'
    },
  };
  return (
    <ConfigProvider theme={theme}>
      <html lang="zh-CN">
        <body className="w-screen h-screen bg-white">
          <AntdRegistry>{children}</AntdRegistry>
        </body>
      </html>
    </ConfigProvider>
  );
}
