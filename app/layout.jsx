import Footer from "@/components/layout/footer";
import Nav from "@/components/layout/nav";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import "@fontsource/varela-round";

export const metadata = {
  title: "Aitys battle",
  description: "Battle .",
  themeColor: "#FFF",
};

// iOS Safari viewport unit correction
const IOS_SAFARI_VIEWPORT_UNIT_CORRECTION = `
var customViewportCorrectionVariable = 'vh';

function setViewportProperty(doc) {
  var prevClientHeight;
  var customVar = '--' + ( customViewportCorrectionVariable || 'vh' );
  function handleResize() {
    var clientHeight = doc.clientHeight;
    if (clientHeight === prevClientHeight) return;
    requestAnimationFrame(function updateViewportHeight(){
      doc.style.setProperty(customVar, (clientHeight * 0.01) + 'px');
      prevClientHeight = clientHeight;
    });
  }
  handleResize();
  return handleResize;
}
window.addEventListener('resize', setViewportProperty(document.documentElement));
`;

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script id="safari-viewport-fix">
        {IOS_SAFARI_VIEWPORT_UNIT_CORRECTION}
      </Script>
      <body
        className="font-default"
        // {cx(sfPro.variable, inter.variable)}
      >
        <div className="fixed h-screen w-full bg-[#593440]" />
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <main className="relative flex min-h-screen w-full flex-col items-center justify-center pt-16">
          {children}
        </main>
        <Analytics />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
