import { AddressCard } from "../AddressCard/AddressCard";
import { Cart } from "../Cart/Cart";

export const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard />
      </div>
      <Cart />
    </div>
  );
};
