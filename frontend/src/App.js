import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Meet from "./pages/Meet";
import Main2 from "./pages/Main2";

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
                <Route path="/main2" element={<Main2 />} />

                {/* 약속 잡는 페이지 */}
                <Route path="/meet" element={<Meet />} />
            </Routes>
        </BrowserRouter>
    </div>

  );
}
