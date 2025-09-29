package com.example.backend.dto;

import lombok.Getter;
import lombok.Setter;

public class UserDto {

    // 로그인 요청 DTO
    @Getter
    @Setter
    public static class LoginRequest{
        private String loginId;
        private String loginPassword;
    }

    // 로그인 반환 DTO
    @Getter
    @Setter
    public static class LoginResponse{
        private String status;
        private Long userId;
        private String uuId;
    }
}
