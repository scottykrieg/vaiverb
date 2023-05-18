import { Courgette, Lato } from "next/font/google";
import { SlBasket, SlHeart } from "react-icons/sl";

const courgette = Courgette({
  weight: "400",
  subsets: ["latin"],
});

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export default function Header({ Component, pageProps }) {
  return (
    <div className={courgette.className}>
      <div class="flex p-2 justify-around ">
        <h1 class="text-6xl">VaiVerb</h1>{" "}
        <div className={lato.className}>
          <input
            placeholder="Shop for used & new music gear..."
            class="mx-2 border-2 border-black w-96"
          ></input>
        </div>
        <div className={lato.className}>
          <div class="flex">
            <button className="border-2 rounded-full border-black p-1">
              Sell Your Gear
            </button>
            <div class="m-2">
              <SlHeart />
              <p>Favorites</p>
            </div>
            <div class="m-2">
              <SlBasket />
              <p>Cart</p>
            </div>
            <p class="m-2">Sign Up</p>
            <p class="m-2">Log In</p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
