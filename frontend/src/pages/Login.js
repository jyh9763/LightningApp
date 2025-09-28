import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "./Login.css";

export default function Login(){

    const navigate = useNavigate();

    const [loginId, setLoginId] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    function handleLogin(){
        const data = {
            userId: loginId,
            userPassword: loginPassword
        };

        axios
            .post("http://localhost:8080/api/users/login", data)
            .then((response) => {
                if(response.data === "success"){
                    alert("로그인에 성공하였습니다.");
                    navigate("/main");
                } else{
                    if (response.data === "idFail"){
                        alert("아이디가 틀렸습니다.");
                    } else if (response.data === "passwordFail"){
                        alert("비밀번호가 틀렸습니다.");
                    }
                }
            })
            .catch((error) => {
                console.error(error);
                alert("로그인 오류가 발생하였습니다.");
            })
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>어서오세요</h2>
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
                        onClick={handleLogin}
                    >
                        로그인
                    </button>

                    {/* 버튼 클릭 시 회원가입 페이지로 이동 */}
                    <button
                        className="register-button"
                        onClick={() => navigate("/signup")}
                    >
                        회원가입
                    </button>
                </div>
            </div>
        </div>
    );
}