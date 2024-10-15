import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
  let oldPrices = ["12,000", "11,000", "1500", "600"];
  let newPrices = ["9,000", "9500", "900", "300"];
  let description = [
    ["8,000 DPI", "5 Programmable buttons"],
    ["intuitive surface", "designed for iPad pro"],
    ["designed for iPad pro", "intuitive surface"],
    ["wireless", "optical orientation"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
