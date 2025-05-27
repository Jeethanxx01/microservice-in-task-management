package com.zosh.tasksubmitionservice.repository;

import com.zosh.tasksubmitionservice.model.Submission;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubmissionRepository extends JpaRepository<Submission,Long> {
    List<Submission> findByTaskId(Long taskId);
}
