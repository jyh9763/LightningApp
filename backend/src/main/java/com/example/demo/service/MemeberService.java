package com.example.demo.service;

import com.example.demo.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemeberService {
    MemeberRepository memeberRepository;

    @Autowired
    public MemberService(MemberRepository memberRepository){
        this.memeberRepository = memberRepository;
    }

    // 회원가입
    public String signUp(){
        return "0";
    }
}
