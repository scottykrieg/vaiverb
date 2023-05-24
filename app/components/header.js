import { Courgette, Lato } from "next/font/google";
import { SlBasket, SlHeart } from "react-icons/sl";
import Link from "next/link";

const courgette = Courgette({
  weight: "400",
  subsets: ["latin"],
});

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <div>
      <div className={courgette.className}>
        <div className="flex p-2 justify-around ">
          <Link href="/">
            {" "}
            <h1 className="text-6xl">VaiVerb</h1>{" "}
          </Link>
          <div className={lato.className}>
            <input
              placeholder="Shop for used & new music gear..."
              className="mx-2 border-2 border-black w-96"
            ></input>
          </div>
          <div className={lato.className}>
            <div className="flex">
              <button className="border-2 rounded-full border-black p-1">
                Sell Your Gear
              </button>
              <div className="m-2">
                <button>
                  <SlHeart />
                  <p>Favorites</p>
                </button>
              </div>
              <div className="m-2">
                {" "}
                <button>
                  <SlBasket />
                  <p>Cart</p>
                </button>
              </div>
              <button>
                <p className="m-2">Sign Up</p>
              </button>
              <button>
                <p className="m-2">Log In</p>
              </button>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
