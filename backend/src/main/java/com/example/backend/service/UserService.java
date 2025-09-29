package com.example.backend.service;

import com.example.backend.dto.UserDto;
import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    // 로그인
    public UserDto.LoginResponse SignIn(String loginId, String loginPassword){

        UserDto.LoginResponse res = new UserDto.LoginResponse();
        Optional<User> byUserId = userRepository.findByUserId(loginId);

        // 로그인 시도한 id가 DB에 저장되어 있다면
        if(byUserId.isPresent()){
            User userid = byUserId.get();   // Optional에서 id를 꺼냄

            // 로그인 시도한 비밀번호가 일치하면
            if(userid.getUserPassword().equals(loginPassword)){
                // 성공
                res.setStatus("success");
                res.setUserId(userid.getId());
                res.setUuId(userid.getUserId());

                return res;
            } else {
                // 비밀번호 틀리면 실패
                res.setStatus("passwordFail");
                return res;
            }
        } else {    // id가 DB에 없으면 실패
            res.setStatus("idFail");
            return res;
        }
    }

    // 회원가입
    public String SignUp(User user) {
        Optional<User> byRegisterId = userRepository.findByUserId(user.getUserId());

        // id가 비어있으면
        if (user.getUserId().isEmpty()) {
            return "IDempty";
        } else {
            // 생성하려는 id가 DB에 존재한다면
            if (byRegisterId.isPresent()) {
                return "IDexist";
            } else {
                userRepository.save(user);
                return "success";
            }
        }
    }
}
