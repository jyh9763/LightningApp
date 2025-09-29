package com.example.backend.service;

import com.example.backend.dto.MeetDto;
import com.example.backend.entity.Meet;
import com.example.backend.repository.MeetRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MeetService {
    private final MeetRepository meetRepository;

    // 약속 저장
    public String MeetSave(MeetDto.MeetRequest mreq){

        Meet meet = new Meet();
        meet.setCreatorId(mreq.getCreatorId());
        meet.setTitle(mreq.getTitle());
        meet.setMeetAddress(mreq.getMeetAddress());
        meet.setMeetStart(mreq.getMeetStart());
        meet.setMeetEnd(mreq.getMeetEnd());

        meetRepository.save(meet);

        return "success";
    }
}
