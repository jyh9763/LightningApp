package com.example.backend.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
public class Attend {

    @Id
    @Column(name="attend_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long attend_id;

    @Column(name="attend_meet", nullable = false)
    private Long attend_meet;

    @Column(name = "attend_user", nullable = false)
    private Long attend_user;

    @Column(name = "attend_accepted")
    private Boolean attend_accepted;

    @Column(name = "attend_date")
    @CreationTimestamp
    private LocalDateTime attend_date;

    public Long getAttend_id() {
        return attend_id;
    }

    public void setAttend_id(Long attend_id) {
        this.attend_id = attend_id;
    }

    public Long getAttend_meet() {
        return attend_meet;
    }

    public void setAttend_meet(Long attend_meet) {
        this.attend_meet = attend_meet;
    }

    public Long getAttend_user() {
        return attend_user;
    }

    public void setAttend_user(Long attend_user) {
        this.attend_user = attend_user;
    }

    public Boolean getAttend_accepted() {
        return attend_accepted;
    }

    public void setAttend_accepted(Boolean attend_accepted) {
        this.attend_accepted = attend_accepted;
    }

    public LocalDateTime getAttend_date() {
        return attend_date;
    }

    public void setAttend_date(LocalDateTime attend_date) {
        this.attend_date = attend_date;
    }
}
