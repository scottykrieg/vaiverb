import { Lato } from "next/font/google";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
} from "react-icons/tb";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export default function Anyone() {
  return (
    <>
      <div>
        <div className={lato.className}>
          <div>Anyone can sell on VaiVerb!</div>
          <div className="flex ">
            <div className="m-4 bg-amber-100 w-96 h-28">
              <TbCircleNumber1 />
              <h3>Be Steve Vai.</h3>
            </div>
            <div className="m-4 bg-amber-100 w-96 h-28">
              <TbCircleNumber2 />
              <h3>Have a guitar to sell.</h3>
            </div>
            <div className="m-4 bg-amber-100 w-96 h-28">
              <TbCircleNumber3 />
              <h3>List it here!</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
