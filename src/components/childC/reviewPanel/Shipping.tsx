import ShippingImage from "../../../../public/fast-shipping.svg";
export default function Shipping() {
  return (
    <div>
      <div>
        <img src={ShippingImage} alt="Fast Shipping" />
        <p>Fast Shipping</p>
      </div>
      <div>
        <p>$5.99</p>
        <p>Free</p>
      </div>
    </div>
  );
}
