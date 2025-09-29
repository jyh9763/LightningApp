import React, {useState, useEffect} from "react";
import './Main.css';
import {useNavigate} from "react-router-dom";

export default function Main(){

    // nagivate 객체
    const navigate = useNavigate();

    // 로그인 정보 받아오기
    const [user, setUser] = useState({userId: null, uuId: null});

    useEffect(() => {
        // 새로고침 시 sessionStorage에서 읽기
        const userId = sessionStorage.getItem("userId");
        const uuId = sessionStorage.getItem("uuId");

        if (userId && uuId) {
            setUser({userId, uuId});
        } else {
            // 로그인 안된 상태면 로그인 페이지로 이동
            window.location.href = "/login";
        }
    }, []);

    // 현재 날짜 객체
    const today = new Date();

    // 현재 년,월 정보
    const currentY = today.getFullYear();
    const currentM = today.getMonth();

    // 오늘 날짜 정보
    const todayY = today.getFullYear();
    const todayM = today.getMonth();
    const todayD = today.getDate();

    // 요일 이름
    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

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
                            <span className="userid">{user.uuId}</span>
                        </div>
                        <button className="logout-btn">
                            로그아웃
                        </button>
                    </div>
                </div>

                {/* 달력 영역 */}
                <div className="calendar-container">
                    <h2 className="calendar-month">{currentY}년 {currentM+1}월</h2>
                    <div className="calendar">
                        <div className="calendar-header">
                            <div className="weekdays">
                                {weekdays.map((weekday, wdi) => (
                                    <div key={wdi} className="main-weekday">{weekday}</div>
                                ))}
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
                                                {day && (() => {
                                                    const selectedDate = new Date(currentY, currentM, day);
                                                    const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                                                        return(
                                                            <>  {/* 버튼과 날짜 두 개를 동시에 렌더링하려면 하나의 부모로 묶는 작업 필요
                                                                -> dom 쓰고싶지 않은데 하나로 묶고싶을 때 사용 */}
                                                                <div className={`date-number ${
                                                                   day === todayD && currentM === todayM && currentY === todayY
                                                                   ? "today": ""
                                                                }`}>
                                                                    {day}
                                                                </div>

                                                                {selectedDate >= todayDate && (
                                                                    <button
                                                                        className='appointment-add'
                                                                        onClick={() => navigate("/meet",
                                                                        // 페이지 이동 시 데이터 보내기
                                                                        {state: {year: currentY, month: currentM+1, day: day, weekday: weekdays[di]}})}
                                                                    >
                                                                        +
                                                                    </button>
                                                                )}
                                                            </>
                                                        );
                                                })()}
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