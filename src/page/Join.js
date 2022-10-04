import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../component";
import { userActions, joinActions } from "../redux/Store";

const Join = () => {
  useEffect(() => {
    const container = document.getElementById("container");
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });

    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css";

    document.head.appendChild(css);

    return () => {
      document.head.removeChild(css);
    };
  }, []);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const joinInput = useSelector((state) => state.join);
  const joinInputIdHandler = (e) => {
    dispatch(joinActions.joinInputId(e.target.value));
  };
  const joinInputPwHandler = (e) => {
    dispatch(joinActions.joinInputPw(e.target.value));
  };
  const joinInputNameHandler = (e) => {
    dispatch(joinActions.joinInputName(e.target.value));
  };
  const joinSubmit = (e) => {
    const container = document.getElementById("container");
    dispatch(userActions.signUp(joinInput));
    e.preventDefault();
    container.classList.remove("right-panel-active");
  };
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <Header
        path_main="/"
        path_join="/join"
        path_board="/board"
        path_search="/search"
        path_user="/mypage"
      />
      <div className="contain">
        <div className="externalContainer" id="container">
          <div className="form-container sign-up-container">
            <form onSubmit={joinSubmit} className="externalForm">
              <h1 className="externalh1">회원가입</h1>
              <span className="externalSpan">
                아래 빈칸에 아이디와 이메일, <br />
                비밀번호를 입력해주세요!
              </span>
              <input
                className="externalInput"
                type="text"
                placeholder="ID"
                onChange={joinInputIdHandler}
              />
              <input
                className="externalInput"
                type="password"
                placeholder="Password"
                onChange={joinInputPwHandler}
              />
              <input
                className="externalInput"
                type="name"
                placeholder="닉네임"
                onChange={joinInputNameHandler}
              />
              <br />
              <button className="externalBtn">가입하기</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#" className="externalForm">
              <h1 className="externalh1">로그인</h1>
              <br />
              <span className="externalSpan">
                아이디와 비밀번호를 입력해주세요
              </span>
              <input className="externalInput" type="text" placeholder="ID" />
              <input
                className="externalInput"
                type="password"
                placeholder="Password"
              />
              <br />
              <button className="externalBtn">로그인</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="externalh1">헤이 Bro!</h1>
                <p className="externalP">
                  회원가입을 완료했다면 <br />
                  아래 버튼으로 로그인을 부탁해!
                </p>
                <button className="ghost externalBtn" id="signIn">
                  로그인
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="externalh1">안녕 친구들?</h1>
                <p className="externalP">
                  혹시 가입하지 않은 친구가 있다면 <br />
                  아래의 버튼을 눌러줘
                </p>
                <button className="ghost externalBtn" id="signUp">
                  회원가입
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
