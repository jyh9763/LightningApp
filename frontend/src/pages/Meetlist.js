import React from "react";
import './Meetlist.css';

export default function Meetlist(){
    // 로그인 정보 가져오기
    const uuId = sessionStorage.getItem("uuId");

    // 약속 데이터를 객체 배열로 관리
    const appointmentGroups = [
    {
      date: "2025년 9월 30일 (화)",
      appointments: [
        {
          id: 1,
          title: "안녕~~~ 우리 만날래?",
          place: "안성시",
          time: "10:00~11:00",
          author: "test123"
        },
        {
          id: 2,
          title: "시간 ㄱㅊ아?",
          place: "안성시",
          time: "10:00~11:00",
          author: "tamama12"
        }
      ]
    },
    {
      date: "2025년 10월 6일 (월)",
      appointments: [
        {
          id: 3,
          title: "ㅎㅇ 이 날 만나실?",
          place: "서울시",
          time: "19:00~21:00",
          author: "keroro12"
        }
      ]
    }
    ];

    // 사용자 정보 (예시)
    const user = {
      name: uuId,
      profileImage: "assets/keroro.jpg" // 프로필 이미지 URL
    };

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
                    <div className="menu-item active">
                        <span>나의 약속</span>
                    </div>
                </div>
            </div>

            {/* 메인 컨텐츠 영역 */}
            <div className="main-content">
                {/* 헤더 */}
                <div className="header">
                    <div className="page-title-main">나의 약속 현황</div>
                    <div className="user-profile">
                        <div className="profile-info">
                            <img src={user.profileImage} alt="프로필" className="profile-image" />
                            <span className="userid">{user.name}</span>
                        </div>
                        <button className="logout-btn">
                            로그아웃
                        </button>
                    </div>
                </div>

                {/* 약속 현황 컨텐츠 */}
                <div className="appointments-container">
                    {/* map 함수를 사용하여 날짜별 그룹 동적 생성 */}
                    {appointmentGroups.map((group, index) => (
                        <div key={index} className="date-group">
                            <h2 className="date-title">{group.date}</h2>
                            <div className="cards-wrapper">
                                {/* map 함수를 사용하여 약속 카드 동적 생성 */}
                                {group.appointments.map(card => (
                                    <div key={card.id} className="appointment-card">
                                        <h3 className="card-title">{card.title}</h3>
                                        <div className="card-details">
                                            <p>장소: {card.place}</p>
                                            <p>시간: {card.time}</p>
                                            <p>작성자: {card.author}</p>
                                        </div>
                                        <div className="card-buttons">
                                            <button className="btn-accept">수락</button>
                                            <button className="btn-decline">거절</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      );
}