import { Lato } from "next/font/google";
import { GoTriangleDown } from "react-icons/go";
import Link from "next/link";

const lato = Lato({
  weight: "300",
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <>
      <div className={lato.className}>
        <div className="flex">
          <div className="flex">
            <Link href="/">
              {" "}
              <p className="m-2">Guitars </p>
            </Link>
            <p className="m-2">Pedals and Amplifiers</p>
            <p className="m-2">Keyboards and Synths</p>
            <p className="m-2">Recording Gear</p>
            <p className="m-2">Drums</p>
            <p className="m-2">DJ and Audio Gear</p>
            <p className="m-2">More Categories</p>
          </div>
          <div className="flex mx-2">
            <p className="m-2">Brands</p>
            <div className="flex">
              <p className="m-2">News</p>
              <GoTriangleDown />
            </div>
            <div className="flex">
              <p className="m-2">Explore</p>
              <GoTriangleDown />
            </div>{" "}
            <p className="m-2">Shops</p>
            <p className="m-2">Reverb Gives</p>
            <p className="m-2">Help Center</p>
          </div>
        </div>
      </div>
    </>
  );
}
