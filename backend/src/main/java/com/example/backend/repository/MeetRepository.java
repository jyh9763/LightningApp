package com.example.backend.repository;

import com.example.backend.entity.Meet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MeetRepository extends JpaRepository<Meet, Long> {

}
