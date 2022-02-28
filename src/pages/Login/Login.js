import React from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [logActive, setLog] = React.useState(false);
  const [idValue, setidValue] = React.useState();
  const [pwValue, setpwValue] = React.useState();
  const btnOff = {
    opacity: 0.5,
    cursor: "initial",
  };
  const btnOn = {
    opacity: 1,
    cursor: "pointer",
  };
  const [Btn, setBtn] = React.useState(btnOff);

  const handleIdInput = (e) => {
    setidValue(e.target.value);
  };

  const handlePwInput = (e) => {
    setpwValue(e.target.value);
  };

  const setLogin = () => {
    idValue.includes("@") && 5 <= pwValue.length ? setLog(true) : setLog(false);
    idValue.includes("@") && 5 <= pwValue.length
      ? setBtn(btnOn)
      : setBtn(btnOff);
  };

  const goToList = () => {
    if (logActive) {
      navigate("/list");
    }
  };

  const goToSignup = () => {
    if (logActive) {
      navigate("/signup");
    }
    return;
  };

  return (
    <body className="bodyLogin">
      <div className="backgroundLogin">
        <section className="containerLogin">
          <img src="/images/webucksLogo.jpg" alt="logo" />
          <form className="containLogin">
            <input
              type="text"
              className="Input id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              maxLength="50"
              onChange={handleIdInput}
              onKeyUp={setLogin}
              value={idValue}
            />
            <input
              type="password"
              className="Input pw"
              placeholder="비밀번호"
              maxLength="24"
              onChange={handlePwInput}
              onKeyUp={setLogin}
              value={pwValue}
            />
            <i className="fa-regular fa-eye"></i>
            <button className="loginButton" style={Btn} onClick={goToList}>
              로그인
            </button>
            <div className="searchPw" onClick={goToSignup}>
              비밀번호를 잊으셨나요?
            </div>
          </form>
        </section>
      </div>
    </body>
  );
}

export default Login;
