import { Courgette, Lato } from "next/font/google";

const courgette = Courgette({
  weight: "400",
  subsets: ["latin"],
});

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer({ Component, pageProps }) {
  return (
    <div className={lato.className}>
      <div className="p-2">
        <h1>VaiVerb Footer</h1>
        <h6>© 2023 Vaiverb.com LLC</h6>
      </div>{" "}
    </div>
  );
}
