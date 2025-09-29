import React, {useState} from "react";
import "./Meet.css";
import {useNavigate, useLocation} from "react-router-dom";
import axios from "axios";

export default function Meet(){
    const navigate = useNavigate();

    // main 페이지에서 추가하고 싶은 약속의 날짜를 받아오기 위한 변수
    const location = useLocation();
    const {year, month, day, weekday} = location.state || {};

    // Meet 변수
    //const [meetId, setMeetId] = useState("");
    const uuId = sessionStorage.getItem("uuId");
    const [title, setTitle] = useState("");
    const [meetAddress, setMeetAddress] = useState("서울시");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const meetStart = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T${startTime}:00`;
    const meetEnd = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T${endTime}:00`;

    // 약속 시간
    const times = [
        "00:00", "01:00", "02:00", "03:00", "04:00",
        "05:00", "06:00", "07:00", "08:00", "09:00",
        "10:00", "11:00", "12:00", "13:00", "14:00",
        "15:00", "16:00", "17:00", "18:00", "19:00",
        "20:00", "21:00", "22:00", "23:00"
    ];

    // 제출 작동
    function handleSubmit(){
        const creatorId = sessionStorage.getItem("userId");

        const data={
            creatorId: creatorId,
            title: title,
            meetAddress: meetAddress,
            meetStart: meetStart,
            meetEnd: meetEnd
        };

        axios
            .post("http://localhost:8080/api/meet", data)
            .then((response) =>{
                if(response.data === "success"){
                    alert("약속이 저장되었습니다.");
                    navigate("/main");
                } else{
                    alert("약속을 저장하지 못했습니다.");
                }
            })
            .catch((error) =>{
                console.error(error);
                alert("약속을 저장하는데 오류가 발생했습니다.");
            })
    }

    // html
    return (
            <div className="container">
                {/* 왼쪽 사이드바 */}
                <div className="sidebar">
                    <div className="sidebar-header">
                        <div className="notification-icon">
                            <span className="bell">🔔</span>
                        </div>
                    </div>

                    <div className="sidebar-menu">
                        <div className="menu-item">
                            <span>나의 친구</span>
                        </div>
                        <div className="menu-item">
                            <span>나의 약속</span>
                        </div>
                    </div>
                </div>

                {/* 메인 컨텐츠 영역 */}
                <div className="main-content">
                    {/* 헤더 */}
                    <div className="header">
                        <div className="page-title">약속 잡기</div>
                        {/* 프로필 영역 */}
                        <div className="user-profile">
                            <div className="profile-info">
                                <img
                                    src="assets/keroro.jpg"
                                    alt="프로필"
                                    className="profile-image"

                                />
                                <span className="username">{uuId}</span>
                            </div>
                            <button className="logout-btn">
                                로그아웃
                            </button>
                        </div>
                    </div>



                    {/* 약속 만들기 폼 */}
                    <div className="meet-form-container">
                        {/* 상단 날짜 박스 */}
                        <div className="date-box">
                            <div className="month">{month}월</div>
                            <div className="day">{day}</div>
                            <div className="weekday">({weekday})</div>
                        </div>

                        <div className="meet-form">
                            {/* 제목 입력 */}
                            <div className="form-group">
                                <label className="form-label">제목</label>
                                <input
                                    type="text"
                                    id="title"
                                    className="input-type"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            {/* 만나는 지역 */}
                            <div className="form-group">
                                <label className="form-label">만나는 지역</label>
                                <select
                                    name="country"
                                    id="country"
                                    className="form-select"
                                    value={meetAddress}
                                    onChange={(e) => setMeetAddress(e.target.value)}
                                >
                                    <option value="s1">서울시</option>
                                    <option value="a">안성시</option>
                                    <option value="s2">수원시</option>
                                    <option value="d">대전시</option>
                                </select>
                            </div>

                            {/* 약속 시간 */}
                            <div className="form-group">
                                <label className="form-label">약속 시간</label>
                            </div>
                            <div className="form-group">
                                <div className="time-selector">
                                    {/* 시작 시간 */}
                                    <select
                                        name="start"
                                        id="st"
                                        className="time-select"
                                        value={startTime}
                                        onChange={(e) => setStartTime(e.target.value)}
                                    >
                                        <option value="">-- 선택 --</option>
                                        {times.map((time) => (
                                            <option key={time} value={time}>
                                                {time}
                                            </option>
                                        ))}
                                    </select>

                                    <span className="time-separator"> ~ </span>

                                    {/* 끝나는 시간 */}
                                    <select
                                        name="end"
                                        id="et"
                                        className="time-select"
                                        value={endTime}
                                        onChange={(e) => setEndTime(e.target.value)}
                                    >
                                        <option value="">-- 선택 --</option>
                                        {times
                                            .filter((time) => !startTime || time>startTime) // 시작 시간이랑 같거나, 작으면 안됨
                                            .map((time) => (
                                                <option key={time} value={time}>
                                                    {time}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                            </div>


                            {/* 약속 내용 */}
                            <div className="form-group">
                                <label className="form-label">약속 내용</label>
                                <textarea
                                    className="content-textarea"
                                    placeholder="내용을 입력하세요."
                                />
                            </div>

                            {/* 버튼 영역 */}
                            <div className="button-group">
                                <button className="btn-save"
                                    onClick={() => handleSubmit()}
                                >
                                    저장
                                </button>
                                <button className="btn-cancel"
                                    onClick ={() => navigate("/main")}>
                                    취소
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

}