package com.example.backend.service;

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
    public String Signin(User user){
        Optional<User> byUserId = userRepository.findById(user.getUserId());

        // 로그인 시도한 id가 DB에 저장되어 있다면
        if(byUserId.isPresent()){
            User userid = byUserId.get();   // Optional에서 id를 꺼냄

            // 로그인 시도한 비밀번호가 일치하면
            if(userid.getUserPassword().equals(user.getUserPassword())){
                // main 페이지로 이동
                return "main";
            } else {
                // 비밀번호 틀리면 다시 로그인
                return "login";
            }
        } else {    // id가 DB에 없으면 다시 로그인
            return "login";
        }
    }
}
