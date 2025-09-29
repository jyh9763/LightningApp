package com.example.backend.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.cglib.core.Local;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
public class Meet {
    @Id
    @Column(name="meet_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long meetId;

    @Column(name="creator_id", nullable = false)
    private Long creatorId;

    @Column(name="title", nullable = false)
    private String title;

    @Column(name="meet_address")
    private String meetAddress;

    @Column(name="meet_start")
    private LocalDateTime meetStart;

    @Column(name="meet_end")
    private LocalDateTime meetEnd;

    @Column(name="meet_create")
    @CreationTimestamp
    private LocalDateTime meetDate;

    public Long getMeetId() {
        return meetId;
    }

    public void setMeetId(Long meetId) {
        this.meetId = meetId;
    }

    public Long getCreatorId() {
        return creatorId;
    }

    public void setCreatorId(Long creatorId) {
        this.creatorId = creatorId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMeetAddress() {
        return meetAddress;
    }

    public void setMeetAddress(String meetAddress) {
        this.meetAddress = meetAddress;
    }

    public LocalDateTime getMeetStart() {
        return meetStart;
    }

    public void setMeetStart(LocalDateTime meetStart) {
        this.meetStart = meetStart;
    }

    public LocalDateTime getMeetEnd() {
        return meetEnd;
    }

    public void setMeetEnd(LocalDateTime meetEnd) {
        this.meetEnd = meetEnd;
    }

    public LocalDateTime getMeetDate() {
        return meetDate;
    }

    public void setMeetDate(LocalDateTime meetDate) {
        this.meetDate = meetDate;
    }
}
