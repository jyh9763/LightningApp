package com.example.backend.controller;

import com.example.backend.entity.User;
import com.example.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3001")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/users/login")
    public String UserLogin(@RequestBody User user){

        // 디버깅
        System.out.println(user.getUserId());
        System.out.println(user.getUserPassword());

        return userService.Signin(user);
    }
}
