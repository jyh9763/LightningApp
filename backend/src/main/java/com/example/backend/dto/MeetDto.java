package com.example.backend.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

public class MeetDto {

    @Getter
    @Setter
    public static class MeetRequest {
        private Long creatorId;
        private String title;
        private String meetAddress;
        private LocalDateTime meetStart;
        private LocalDateTime meetEnd;
    }
}
