import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [page, setPage] = useState("login");

  function handleChangePage(page){
    setPage(page);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>어서오세요</h1>

        {/* 로그인 */}
        {page === "login" && (
            <div className="login-box">
                <div className="input-group">
                    <label htmlFor="id">아이디</label>
                    <input type="text" id="id" placeholder="Id" className="input-field"/>
                </div>

                <div className="input-group">
                    <label htmlFor="password">비밀번호</label>
                    <input type="password" id="password" placeholder="Password" className="input-field"/>
                </div>

                <div className="button-group">
                    <button className="login-button">Login</button>

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

        {/* 회원가임 */}
        {page === "register" && (
            <h2>회원가입</h2>
        )}
      </header>
    </div>
  );
}

/* 로그인 컴포넌트 */
function Login(props) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup() {
    // Spring Boot 호출 및 연동
    const data = {
      id: id,
      password: password
    };

    axios
      .post("http://localhost:8080/api/members/register", data)
      .then((response) => {
        if (response.data !== 0) {
          alert("회원가입이 완료되었습니다!");
          props.handleChangePage("login");
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

export default App;
