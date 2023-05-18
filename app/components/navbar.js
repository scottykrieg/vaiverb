import { Lato } from "next/font/google";
import { GoTriangleDown } from "react-icons/go";

const lato = Lato({
  weight: "300",
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <>
      <div className={lato.className}>
        <div class="flex">
          <div class="flex">
            <p class="m-2">Guitars</p>
            <p class="m-2">Pedals and Amplifiers</p>
            <p class="m-2">Keyboards and Synths</p>
            <p class="m-2">Recording Gear</p>
            <p class="m-2">Drums</p>
            <p class="m-2">DJ and Audio Gear</p>
            <p class="m-2">More Categories</p>
          </div>
          <div class="flex mx-2">
            <p class="m-2">Brands</p>
            <div class="flex">
              <p class="m-2">News</p>
              <GoTriangleDown />
            </div>
            <div class="flex">
              <p class="m-2">Explore</p>
              <GoTriangleDown />
            </div>{" "}
            <p class="m-2">Shops</p>
            <p class="m-2">Reverb Gives</p>
            <p class="m-2">Help Center</p>
          </div>
        </div>
      </div>
    </>
  );
}
