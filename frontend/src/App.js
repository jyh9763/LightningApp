import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  // 첫 페이지
  const [page, setPage] = useState("login");

  // 로그인 변수
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // 회원가입 변수
  const [regId, setRegId] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regName, setRegName] = useState("");
  const [regAddress, setRegAddress] = useState("");

  function handleChangePage(page){
    setPage(page);
  }

  // 로그인 함수
  function handleSignup() {
    // Spring Boot 호출 및 연동
    const data = {
      userId: loginId,
      userPassword: loginPassword
    };

    axios
      .post("http://localhost:8080/api/users/login", data)
      .then((response) => {
        if (response.data === "main") {
          alert("로그인에 성공했습니다.");
          setPage("register");
        } else {
          alert("로그인에 실패했습니다.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("로그인 오류가 발생하였습니다.");
      })
  }

  // 회원가입 함수
  function handleRegister() {
    const data = {
      user_id: regId,
      password: regPassword,
      user_name: regName,
      user_address: regAddress
    };

    axios
      .post("http://localhost:8080/api/memebers/register", data)
      .then((response) => {
        alert("회원가입이 완료되었습니다.");
        setPage("login");
      })
      .catch((error) => {
        console.log(error);
        alert("회원가입 오류가 발생하였습니다.");
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{page === "register" ? "회원가입" : "어서오세요"}</h1>

        {/* 로그인 */}
        {page === "login" && (
            <div className="login-box">
                <div className="input-group">
                    <label htmlFor="login_id">아이디</label>
                    <input
                      type="text"
                      id="login_id"
                      placeholder="Id"
                      className="input-field"
                      value={loginId}
                      onChange={(e) => setLoginId(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="login_password">비밀번호</label>
                    <input
                      type="password"
                      id="login_password"
                      placeholder="Password"
                      className="input-field"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                </div>

                <div className="button-group">
                    {/* 로그인 버튼 클릭 시 메인 페이지로 이동*/}
                    <button
                      className="login-button"
                      onClick={handleSignup}
                    >
                      Login
                    </button>

                    {/* 버튼 클릭 시 회원가입 페이지로 이동 */}
                    <button
                      className="register-button"
                      onClick={() => setPage("register")}
                    >
                      회원가입
                    </button>
                </div>
            </div>
        )}

        {/* 회원가입 */}
        {page === "register" && (
            <div className="login-box">
                <div className="input-group">
                    <label htmlFor="reg_id">아이디</label>
                    <input
                      type="text"
                      id="reg_id"
                      placeholder="Id"
                      className="input-field"
                      value={regId}
                      onChange={(e) => setRegId(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="reg_password">비밀번호</label>
                    <input
                      type="password"
                      id="reg_password"
                      placeholder="Password"
                      className="input-field"
                      value={regPassword}
                      onChange={(e) => setRegPassword(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="reg_name">이름</label>
                    <input
                      type="text"
                      id="reg_name"
                      placeholder="Name"
                      className="input-field"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="reg_address">거주 지역</label>
                    <input
                      type="text"
                      id="reg_address"
                      placeholder="00시"
                      className="input-field"
                      value={regAddress}
                      onChange={(e) => setRegAddress(e.target.value)}
                    />
                </div>

                <div className="button-group">
                    {/* 회원가입이 정상적으로 되면 버튼 클릭 시 로그인 페이지로 이동 */}
                    <button
                      className="register-button"
                      onClick={() => handleRegister}
                    >
                      회원가입
                    </button>

                    <button
                      className="login-button"
                      onClick={() => setPage("login")}
                    >
                      로그인으로 돌아가기
                    </button>
                </div>
            </div>
        )}
      </header>
    </div>
  );
}

export default App;
