import Image from "next/image";
import { Courgette, Lato } from "next/font/google";

const courgette = Courgette({
  weight: "400",
  subsets: ["latin"],
});

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export default function WinHydra() {
  return (
    <>
      <div className={lato.className}>
        <div className="flex bg-amber-50 m-4 justify-evenly">
          <div className="grid">
            <h1>Win the Hydra!</h1>
            <h3>Click here to find out more</h3>
          </div>
          <Image
            src="https://www.vai.com/guitarimg/SV423/SV423-01.jpg"
            width={250}
            height={250}
            alt="The Hydra"
          />
        </div>
      </div>
    </>
  );
}
