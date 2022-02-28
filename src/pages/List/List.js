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
        <div className="coldBrewSet" onClick={ChangeHeart}>
          <div className="coldBrew">
            <div className="imgWrap">
              <Link to="/detail">
                <img src="/images/coldbrew (1).jpg" alt="coldbrew1" />
              </Link>
            </div>
            <p>
              콜드 브루 아이스크림 <i className={heart}></i>
            </p>
          </div>
          <div className="coldBrew">
            <div className="imgWrap">
              <Link to="/detail">
                <img src="/images/coldbrew (2).jpg" alt="coldbrew1" />
              </Link>
            </div>
            <p>
              콜드 브루 라떼 <i className={heart}></i>
            </p>
          </div>
          <div className="coldBrew">
            <Link to="/detail">
              <div className="imgWrap">
                <img src="/images/coldbrew (3).jpg" alt="coldbrew1" />
              </div>
            </Link>
            <p>
              콜드 브루 몰트 <i className={heart}></i>
            </p>
          </div>
          <div className="coldBrew">
            <Link to="/detail">
              <div className="imgWrap">
                <img src="/images/coldbrew (4).jpg" alt="coldbrew1" />
              </div>
            </Link>
            <p>
              KO 콜드 브루 오트 라떼 <i className={heart}></i>
            </p>
          </div>
          <div className="coldBrew">
            <Link to="/detail">
              <div className="imgWrap">
                <img src="/images/coldbrew (5).jpg" alt="coldbrew1" />
              </div>
            </Link>
            <p>
              시그니처 더 블랙 콜드 브루 <i className={heart}></i>
            </p>
          </div>
          <div className="coldBrew">
            <Link to="/detail">
              <div className="imgWrap">
                <img src="/images/coldbrew (1).jpg" alt="coldbrew1" />
              </div>
            </Link>
            <p>
              벨벳 다크 모카 나이트로 <i className={heart}></i>
            </p>
          </div>
          <div className="coldBrew">
            <Link to="/detail">
              <div className="imgWrap">
                <img src="/images/coldbrew (2).jpg" alt="coldbrew1" />
              </div>
            </Link>
            <p>
              콜드 브루 라떼 더블 <i className={heart}></i>
            </p>
          </div>
          <div className="coldBrew">
            <Link to="/detail">
              <div className="imgWrap">
                <img src="/images/coldbrew (3).jpg" alt="coldbrew1" />
              </div>
            </Link>
            <p>
              콜드 브루 오트 라떼 더블 <i className={heart}></i>
            </p>
          </div>
          <div className="coldBrew">
            <Link to="/detail">
              <div className="imgWrap">
                <img src="/images/coldbrew (4).jpg" alt="coldbrew1" />
              </div>
            </Link>
            <p>
              시그니처 더 블랙 콜드 브루 프리미엄
              <i className={heart}></i>
            </p>
          </div>
          <div className="coldBrew">
            <Link to="/detail">
              <div className="imgWrap">
                <img src="/images/coldbrew (5).jpg" alt="coldbrew1" />
              </div>
            </Link>
            <p>
              콜드 브루 라떼 더블 <i className={heart}></i>
            </p>
          </div>
        </div>
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
        <div className="brewedSet" onClick={ChangeHeart}>
          <div className="brewedCoffee">
            <Link to="/detail">
              <div className="imgWrap">
                <img src="/images/coldbrew (5).jpg" alt="coldbrew2" />
              </div>
            </Link>
            <p>
              오늘의 커피 : 블랙 커피 <i className={heart}></i>
            </p>
          </div>
          <div className="brewedCoffee">
            <Link to="/detail">
              <div className="imgWrap">
                <img src="/images/coldbrew (6).jpg" alt="coldbrew2" />
              </div>
            </Link>
            <p>
              헤이즐넛 더블 샷 <i className={heart}></i>
            </p>
          </div>
          <div className="brewedCoffee">
            <Link to="/detail">
              <div className="imgWrap">
                <img src="/images/coldbrew (7).jpg" alt="coldbrew2" />
              </div>
            </Link>
            <p>
              커피 위벅스 더블 샷 <i className={heart}></i>
            </p>
          </div>
          <div className="brewedCoffee">
            <Link to="/detail">
              <div className="imgWrap">
                <img src="/images/coldbrew (8).jpg" alt="coldbrew2" />
              </div>
            </Link>
            <p>
              아이스 카페 라떼 <i className={heart}></i>
            </p>
          </div>
          <div className="brewedCoffee">
            <Link to="/detail">
              <div className="imgWrap">
                <img src="/images/coldbrew (5).jpg" alt="coldbrew2" />
              </div>
            </Link>
            <p>
              플랫 화이트 <i className={heart}></i>
            </p>
          </div>
          <div className="brewedCoffee">
            <Link to="/detail">
              <div className="imgWrap">
                <img src="/images/coldbrew (6).jpg" alt="coldbrew2" />
              </div>
            </Link>
            <p>
              아이스 아메리카노 <i className={heart}></i>
            </p>
          </div>
          <div className="brewedCoffee">
            <Link to="/detail">
              <div className="imgWrap">
                <img src="/images/coldbrew (7).jpg" alt="coldbrew2" />
              </div>
            </Link>
            <p>
              아이스 카페 라떼 더블 샷 <i className={heart}></i>
            </p>
          </div>
          <div className="brewedCoffee">
            <Link to="/detail">
              <div className="imgWrap">
                <img src="/images/coldbrew (8).jpg" alt="coldbrew2" />
              </div>
            </Link>
            <p>
              오늘의 커피 <i className={heart}></i>
            </p>
          </div>
          <div className="brewedCoffee">
            <Link to="/detail">
              <div className="imgWrap">
                <img src="/images/coldbrew (8).jpg" alt="coldbrew2" />
              </div>
            </Link>
            <p>
              커피 위벅스 <i className={heart}></i>
            </p>
          </div>
          <div className="brewedCoffee">
            <Link to="/detail">
              <div className="imgWrap">
                <img src="/images/coldbrew (5).jpg" alt="coldbrew2" />
              </div>
            </Link>
            <p>
              헤이즐넛 라떼 <i className={heart}></i>
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}

export default List;
