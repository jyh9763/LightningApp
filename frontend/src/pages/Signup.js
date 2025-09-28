import axios from "axios";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Login.css";

export default function Signup(){

    const navigate = useNavigate();

    // 회원가입 변수
    const [registerId, setRegisterId] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [registerAddress, setRegisterAddress] = useState("");

    // 회원가입 함수
    function handleRegister(){
        const data = {
            userId: registerId,
            userPassword: registerPassword,
            userName: registerName,
            userAddress: registerAddress
        };

        axios
            .post("http://localhost:8080/api/users/signup", data)
            .then((response) =>{
                if(response.data === "success"){
                    alert("회원가입에 성공하였습니다.");
                    navigate("/login");
                } else {
                    if (response.data === "IDexist"){
                        alert("이미 존재하는 아이디입니다.");
                    } else if (response.data === "IDempty"){
                        alert("아이디를 입력해주세요.");
                    }
                }
            })
            .catch((error) => {
                console.error(error);
                alert("회원가입에 오류가 발생하였습니다.");
            })
    }

    return (
        <div className="register-container">
            <div className="register-box">
                <div className="input-group">
                    <label htmlFor="reg_id">아이디</label>
                    <input
                      type="text"
                      id="reg_id"
                      placeholder="Id"
                      className="input-field"
                      value={registerId}
                      onChange={(e) => setRegisterId(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="reg_password">비밀번호</label>
                    <input
                      type="password"
                      id="reg_password"
                      placeholder="Password"
                      className="input-field"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="reg_name">이름</label>
                    <input
                      type="text"
                      id="reg_name"
                      placeholder="Name"
                      className="input-field"
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="reg_address">거주 지역</label>
                    <input
                      type="text"
                      id="reg_address"
                      placeholder="country"
                      className="input-field"
                      value={registerAddress}
                      onChange={(e) => setRegisterAddress(e.target.value)}
                    />
                </div>

                <div className="button-group">
                    {/* 회원가입이 정상적으로 되면 버튼 클릭 시 로그인 페이지로 이동 */}
                    <button
                      className="register-button"
                      onClick={() => handleRegister()}
                    >
                      회원가입
                    </button>

                    <button
                      className="login-button"
                      onClick={() => navigate("/login")}
                    >
                      로그인
                    </button>
                </div>
            </div>
        </div>
    );
}