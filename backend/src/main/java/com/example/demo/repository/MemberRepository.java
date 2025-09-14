package com.example.demo.repository;

import com.example.demo.dto.Member;
import org.springframework.stereotype.Repository;

@Repository
public class MemberRepository {

    public String insert(Member member){
        return "0";
    }
}
