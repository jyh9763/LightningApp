import './App.css';
import {useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Meet from "./pages/Meet";

export default function App() {
    const [user, setUser] = useState({userId: null, uuId: null});
    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                {/* 기본 경로 */}
                <Route path="/" element={<Navigate to="/login" replace />} />

                {/* 로그인 페이지 */}
                <Route path="/login" element={<Login setUser={setUser} />} />

                {/* 회원가입 페이지 */}
                <Route path="/signup" element={<Signup />} />

                {/* 메인 페이지 */}
                <Route path="/main" element={<Main user={user} />} />

                {/* 약속 잡는 페이지 */}
                <Route path="/meet" element={<Meet />} />
            </Routes>
        </BrowserRouter>
    </div>

    );
}
