package com.example.backend.controller;

import com.example.backend.service.MeetService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class MeetController {

    private final MeetService meetService;

    // 약속 저장
}
