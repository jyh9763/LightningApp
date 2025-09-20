import React from "react";
import "./Meet.css";
import {useNavigate} from "react-router-dom";

export default function Meet(){

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
                    {/* 상단 날짜 박스 */}
                    <div className="date-box">
                        <div className="month">9월</div>
                        <div className="day">20</div>
                        <div className="weekday">(토)</div>
                    </div>

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
                                <span className="username">나</span>
                            </div>
                            <button className="logout-btn">
                                로그아웃
                            </button>
                        </div>
                    </div>

                    {/* 약속 만들기 폼 */}
                    <div className="meet-form-container">
                        <div className="meet-form">
                            {/* 제목 입력 */}
                            <div className="form-group">
                                <label className="form-label">제목</label>
                                <input
                                    type="text"
                                    id="title"
                                    className="input-type"
                                />
                            </div>

                            {/* 만나는 지역 */}
                            <div className="form-group">
                                <label className="form-label">만나는 지역</label>
                                <select name="country" id="count">
                                    <option value="a">안성시</option>
                                    <option value="s">수원시</option>
                                    <option value="d">대전시</option>
                                </select>
                            </div>

                            {/* 약속 시간 */}
                            <div className="form-group">
                                <label className="form-label">약속 시간</label>
                            </div>

                            {/* 시작/끝 시간 */}
                            <div className="form-group">
                                <label className="form-label">시작 시간</label>
                                <select name="start" id="st">
                                    <option value="1100">11:00</option>
                                    <option value="1200">12:00</option>
                                    <option value="1300">13:00</option>
                                </select>

                                <label className="form-label">끝나는 시간</label>
                                <select name="end" id="et">
                                    <option value="1200">12:00</option>
                                    <option value="1300">13:00</option>
                                    <option value="1400">14:00</option>
                                </select>
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
                                <button className="btn-save">
                                    저장
                                </button>
                                <button className="btn-cancel">
                                    취소
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

}