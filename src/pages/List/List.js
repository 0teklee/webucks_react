import React from "react";
import "./List.scss";
import ProductCard from "./ProductCard";
import TopsNav from "../TopsNav/TopsNav";
import { Link } from "react-router-dom";

// const ImgCard = () => (
//   <div className={props.name}>
//     <Link to="/detail">
//       <div className="imgWrap">
//         <img src={props.img} alt={props.product.name}} />
//       </div>
//     </Link>
//     <p>
//       {props.product.name} <i className="fa-regular fa-heart"></i>
//     </p>
//   </div>
// );

function List() {
  const [heart, setHeart] = React.useState("fa-regular fa-heart");
  const ChangeHeart = (e) => {
    if (e.target.className.includes("fa-heart")) {
      if (e.target.className.includes("regular")) {
        setHeart("fa-solid fa-heart");
      } else {
        setHeart("fa-regular fa-heart");
      }
    } else {
      return;
    }
  };

  return (
    <body className="listBody">
      <TopsNav />
      <div className="content">
        <div className="title">
          <p>
            콜드 브루 커피 ☕
            <span>
              <strong>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</strong>
            </span>
          </p>
        </div>
        <div className="coldBrewSet" onClick={ChangeHeart}></div>
      </div>
      <div className="content">
        <div className="title">
          <p>
            브루드 커피 ☕
            <span>
              <strong>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</strong>
            </span>
          </p>
        </div>
        <div className="brewedSet" onClick={ChangeHeart}></div>
      </div>
    </body>
  );
}

export default List;
