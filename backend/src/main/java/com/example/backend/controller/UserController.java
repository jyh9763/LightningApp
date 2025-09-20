package com.example.backend.controller;

import com.example.backend.entity.User;
import com.example.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    // 로그인
    @PostMapping("/users/login")
    public String UserLogin(@RequestBody User user){

        // 디버깅
        System.out.println(user.getUserId());
        System.out.println(user.getUserPassword());

        return userService.SignIn(user);
    }

    // 회원가입
    @PostMapping("/users/signup")
    public String UserRegister(@RequestBody User user){

        // 디버깅
        System.out.println(user.getUserId());
        System.out.println(user.getUserPassword());
        System.out.println(user.getUserName());
        System.out.println(user.getUserAddress());

        return userService.SignUp(user);
    }
    
    // 로그아웃
    //@PostMapping("/users/logout")
}
