/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import { CartItem } from "./CartItems";

export const Cart = () => {
    return (
        <div>
          <div className="lg:grid grid-cols-3 lg:px-16 relative mt-5">
            <div className="col-span-2">
              {[1,1,1,1].map((item)=> <CartItem />)}
            </div>
            <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
              <div className="border ">
                <p className="uppercase font-bold opacity-60 pb-2 px-2">Price Details</p>
                <hr />
                <div className="space-y-3 font-semibold ">
                    <div className="flex justify-between pt-3 px-2 text-black ">
                        <span>Price</span>
                        <span>₹ 1455</span>
                    </div>
                    <div className="flex justify-between pt-3 px-2 text-black ">
                        <span>Discount</span>
                        <span className="text-green-600">₹ 1455</span>
                    </div>
                    <div className="flex justify-between pt-3 px-2 text-black ">
                        <span>Delivery Charge</span>
                        <span className="text-green-600">₹ 1455</span>
                    </div>
                    <div className="flex justify-between pt-3 px-2 text-black ">
                        <span className="font-bold">Total Amount</span>
                        <span className="text-green-600">₹ 12454</span>
                    </div>
                </div>
                <Button variant="contained" className="w-full mt-4"  sx={{px:"2.5rem",py:"1rem", bgcolor:"#9155fd"}}>Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      );
};
