// LoginModal.js
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginModal.module.css";
import logo from "../assets/logo.png";
import kakao from "../assets/kakao_login.png";
import HorizonLine from "./HorizonLine";
import useInput from "../hook/useInput";

function LoginModal() {
  const navigate = useNavigate();
  const userId = useInput("");
  const password = useInput("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("User ID:", userId.value);
    console.log("Password:", password.value);
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <form id="form" className={styles.form} onSubmit={handleLogin}>
          <img src={logo} alt="We-ing" className={styles.logo} />
          <img src={kakao} className={styles.kakao_image} alt="kakao" />
          <HorizonLine text="   or  " />
          <div className={styles.form_down}>
            <div className={styles.form_control}>
              <input
                type="text"
                id="username"
                placeholder="아이디"
                {...userId}
                required
              />
            </div>
            <div className={styles.form_control}>
              <input
                type="password"
                id="password"
                placeholder="비밀번호"
                {...password}
                required
              />
            </div>
            <button className={styles.login_button}>로그인</button>
            <div className={styles.login_signup}>
              <div className={styles.login_signup_desc}>계정이 없으신가요?</div>
              <button
                className={styles.login_signup_link}
                onClick={handleSignUp}
              >
                가입하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
