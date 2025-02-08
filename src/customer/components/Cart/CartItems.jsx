import { Button,IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const CartItem = () => {
    return (
        <div className="p-5 mt-3 shadow-lg border rounded-md ">
          <div className="flex items-center">
            <div className="w-[5rem] h-[5rem] lg:h-[9rem]">
              <img
                className="w-full h-full object-cover object-top"
                src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                alt=""
              />
            </div>
            <div className="ml-5 space-y-1">
              <p className="font-semibold">
                Men Printed Pure Cotton Straight Kurta
              </p>
              <p className="opacity-70">Size : L,white</p>
              <p className="opacity-70 mt-2">Seller: Majestic men </p>
    
              <div className="flex space-x-5 items-center text-lg text-gray-900 pt-3">
                <p className="font-semibold"> ₹ 199</p>
                <p className="opacity-50 line-through"> ₹ 1999</p>
                <p className="text-green-600 font-semibold"> 70% Off</p>
              </div>
            </div>
          </div>
            <div className="lg:flex lg:items-center lg:space-x-10 pt-4">
                <div className="flex items-center space-x-2">
                    <IconButton>
                        <RemoveCircleOutlineIcon/>
                    </IconButton>
                    <span className="py-1 px-7 border rounded-sm">1</span>
                    <IconButton sx={{color:"RGB(145,85,253)"}}>
                        <AddCircleOutlineIcon/> 
                    </IconButton>
                </div>
                <div>
                    <Button sx={{color:"RGB(145,85,253)"}}>Remove</Button>
                </div>
            </div>
        </div>
      );
    
};
