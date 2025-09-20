package com.example.backend.service;

import com.example.backend.entity.Meet;
import com.example.backend.repository.MeetRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MeetService {
    private final MeetRepository meetRepository;

    // 약속 저장
    public String MeetSave(Meet meet){
        return "good";
    }
}
