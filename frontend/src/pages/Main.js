import React from "react";
import './Main.css';
import {useNavigate} from "react-router-dom";

export default function Main(){

    // nagivate 객체
    const navigate = useNavigate();

    // 현재 날짜 객체
    const today = new Date();

    // 현재 년,월 정보
    const currentY = today.getFullYear();
    const currentM = today.getMonth();

    // 오늘 날짜 정보
    const todayY = today.getFullYear();
    const todayM = today.getMonth();
    const todayD = today.getDate();

    // 현재 월 1일의 요일
    const firstWeek = new Date(currentY, currentM, 1).getDay();
    // 현재 월의 마지막 날짜(다음 달의 0일)
    const lastDay = new Date(currentY, currentM+1, 0).getDate();
    // 달력에 표시할 셀 배열
    const cells = [];

    // 저번 달
    for(let b=0; b<firstWeek; b++){
        cells.push(null);
    }

    // 현재 달의 날짜
    for(let d=1; d<lastDay+1;  d++){
        cells.push(d);
    }

    // 다음 달
    while(cells.length % 7 !== 0){
        cells.push(null);
    }

    // 7개씩 끊어서 배열 생성
    const weeks = [];
    for(let i=0; i<cells.length; i+=7){
        weeks.push(cells.slice(i, i+7));
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
                    <div className="page-title">마이페이지</div>
                    <div className="user-profile">
                        <div className="profile-info">
                            <img
                                src="assets/keroro.jpg"
                                alt="프로필"
                                className="profile-image"

                            />
                            <span className="username">나</span>
                        </div>
                        <button className="logout-btn">
                            로그아웃
                        </button>
                    </div>
                </div>

                {/* 달력 영역 */}
                <div className="calendar-container">
                    <h2>{currentY}년 {currentM+1}월</h2>
                    <div className="calendar">
                        <div className="calendar-header">
                            <div className="weekdays">
                                <div className="weekday">일</div>
                                <div className="weekday">월</div>
                                <div className="weekday">화</div>
                                <div className="weekday">수</div>
                                <div className="weekday">목</div>
                                <div className="weekday">금</div>
                                <div className="weekday">토</div>
                            </div>
                        </div>

                        {/* 날짜 */}
                        <div className="calendar-body">
                            {weeks.map((week, wi) =>(
                                <div key={wi} className="calendar-row">
                                    {week.map((day, di) =>(
                                        <div
                                            key={di}
                                            className={`calendar-cell ${day ? "": "empty"}`}
                                        >
                                            <div className="date-row">
                                                <button className='appointment-add' onClick={() => navigate("/meet")}>
                                                    +
                                                </button>
                                                {day &&
                                                <div className={`date-number ${
                                                   day === todayD && currentM === todayM && currentY === todayY
                                                   ? "today": ""
                                                }`}>
                                                    {day}
                                                </div>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}