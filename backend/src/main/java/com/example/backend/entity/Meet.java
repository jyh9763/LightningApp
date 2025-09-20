package com.example.backend.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
public class Meet {
    @Id
    @Column(name="meet_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long meetId;

    @Column(name="title")
    private String title;

    @Column(name="meet_address")
    private String meetAddress;

    @Column(name="meet_start")
    private String meetStart;

    @Column(name="meet_end")
    private String meetEnd;

    @Column(name="meet_date")
    @CreationTimestamp
    private LocalDateTime meetDate;

    public Long getMeetId() {
        return meetId;
    }

    public void setMeetId(Long meetId) {
        this.meetId = meetId;
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

    public String getMeetStart() {
        return meetStart;
    }

    public void setMeetStart(String meetStart) {
        this.meetStart = meetStart;
    }

    public String getMeetEnd() {
        return meetEnd;
    }

    public void setMeetEnd(String meetEnd) {
        this.meetEnd = meetEnd;
    }

    public LocalDateTime getMeetDate() {
        return meetDate;
    }

    public void setMeetDate(LocalDateTime meetDate) {
        this.meetDate = meetDate;
    }
}
