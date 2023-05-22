import { Courgette } from "next/font/google";

const courgette = Courgette({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer({ Component, pageProps }) {
  return (
    <div className={courgette.className}>
      <div className="p-2">
        <h1>VaiVerb Footer</h1>
        <h6>Copyright 2023</h6>
      </div>{" "}
    </div>
  );
}
