package com.example.demo.controller;

import com.example.demo.dto.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class MemberController {

    MemberService memberService;

    // 생성자를 이용한 느슨한 결합
    @Autowired
    public MemberController(MemberService memberService){
        this.memberService = memberService;
    }

    // React --> 회원가입
    @PostMapping("/members/register")
    public String MemeberRegister(@RequestBody Member member){
        return "0";
    }
}
