import './App.css';
import axios from "axios";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                {/* 기본 경로 */}
                <Route path="/" element={<Navigate to="/login" replace />} />

                {/* 로그인 페이지 */}
                <Route path="/login" element={<Login />} />

                {/* 회원가입 페이지 */}
                <Route path="/signup" element={<Signup />} />

                {/* 메인 페이지 */}
                <Route path="/main" element={<Main />} />
            </Routes>
        </BrowserRouter>
    </div>

  );
}
