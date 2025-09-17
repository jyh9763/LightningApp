import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Login from "./components/Login"

function App() {
  // 첫 페이지
  const [page, setPage] = useState("login");

  // 회원가입 변수
  const [regId, setRegId] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regName, setRegName] = useState("");
  const [regAddress, setRegAddress] = useState("");

  function handleChangePage(page){
    setPage(page);
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
          {page === "login" && <Login setPage={setPage}/>}

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
