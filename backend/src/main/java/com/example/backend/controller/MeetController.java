package com.example.backend.controller;

import com.example.backend.dto.MeetDto;
import com.example.backend.entity.Meet;
import com.example.backend.service.MeetService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class MeetController {

    private final MeetService meetService;

    @PostMapping("/meet")
    // 약속 저장
    public String MeetSubmit(@RequestBody MeetDto.MeetRequest mreq){

        // 디버깅
        System.out.println(mreq.getCreatorId());
        System.out.println(mreq.getTitle());
        System.out.println(mreq.getMeetAddress());
        System.out.println(mreq.getMeetStart());
        System.out.println(mreq.getMeetEnd());

        return meetService.MeetSave(mreq);
    }
}
