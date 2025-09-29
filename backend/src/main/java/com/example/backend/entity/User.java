package com.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;                // DB의 고유(?) 아이디

    @Column(name = "user_id", nullable = false)
    private String userId;          // 회원 아이디
    
    @Column(name = "password", nullable = false)
    private String userPassword;    // 비밀번호
    
    @Column(name = "user_name")
    private String userName;        // 이름
    
    @Column(name = "user_address")
    private String userAddress;     // 거주 지역

    @CreationTimestamp
    @Column(name = "user_date")
    private LocalDateTime userDate;        // 가입일자

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }

    public LocalDateTime getUserDate() {
        return userDate;
    }

    public void setUserDate(LocalDateTime userDate) {
        this.userDate = userDate;
    }
}
