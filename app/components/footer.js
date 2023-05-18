import { Courgette } from "next/font/google";

const courgette = Courgette({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer({ Component, pageProps }) {
  return (
    <div className={courgette.className}>
      <div class="p-2">
        <h1>VaiVerb Footer</h1>
      </div>{" "}
    </div>
  );
}
