import React from "react";
import './Main.css';

export default function Main(){

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

                        <div className="calendar-body">
                            {/* 첫 번째 주 */}
                            <div className="calendar-row">
                                <div className="calendar-cell">
                                    <div className="date-number">31</div>
                                    <div className="schedule-item">10:00 일정</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">1</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">2</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">3</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">4</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">5</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">6</div>
                                </div>
                            </div>

                            {/* 두 번째 주 */}
                            <div className="calendar-row">
                                <div className="calendar-cell">
                                    <div className="date-number">7</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">8</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">9</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">10</div>
                                    <div
                                        className="schedule-item clickable"

                                    >
                                        10:00 일정
                                    </div>
                                    <div
                                        className="appointment-item clickable"

                                    >
                                        10:00 약속
                                    </div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">11</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">12</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">13</div>
                                </div>
                            </div>

                            {/* 세 번째 주 */}
                            <div className="calendar-row">
                                <div className="calendar-cell">
                                    <div className="date-number">14</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">15</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">16</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">17</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">18</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">19</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">20</div>
                                </div>
                            </div>

                            {/* 네 번째 주 */}
                            <div className="calendar-row">
                                <div className="calendar-cell">
                                    <div className="date-number">21</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">22</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">23</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">24</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">25</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">26</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">27</div>
                                </div>
                            </div>

                            {/* 다섯 번째 주 */}
                            <div className="calendar-row">
                                <div className="calendar-cell">
                                    <div className="date-number">28</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">29</div>
                                </div>
                                <div className="calendar-cell">
                                    <div className="date-number">30</div>
                                </div>
                                <div className="calendar-cell empty"></div>
                                <div className="calendar-cell empty"></div>
                                <div className="calendar-cell empty"></div>
                                <div className="calendar-cell empty"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}