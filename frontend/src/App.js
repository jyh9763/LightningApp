import './App.css';
import {useState} from "react";
import axios from "axios";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  // 첫 페이지
  const [page, setPage] = useState("login");

  return (
    <div className="App">
      <header className="App-header">
        <h1>{page === "register" ? "회원가입" : "어서오세요"}</h1>

          {/* 로그인 */}
          {page === "login" && <Login setPage={setPage}/>}

          {/* 회원가입 */}
          {page === "register" && <Register setPage={setPage}/>}
      </header>
    </div>
  );
}
