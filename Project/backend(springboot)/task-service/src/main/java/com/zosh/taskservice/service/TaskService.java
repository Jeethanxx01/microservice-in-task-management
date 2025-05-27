package com.zosh.taskservice.service;

import com.zosh.taskservice.dtos.UserDto;
import com.zosh.taskservice.enums.TaskStatus;
import com.zosh.taskservice.model.Task;

import java.util.List;


public interface TaskService {


    Task createTask(Task task, String requesterRole) throws Exception;

    Task getTaskById(Long id) throws Exception;

    List<Task> getAllTasks(TaskStatus status, String sortByDeadline, String sortByCreatedAt);

    Task updateTask(Long id, Task updatedTask, Long userId) throws Exception;

    void deleteTask(Long id);

    Task assignedToUser(Long userId,Long taksId) throws Exception;

    List<Task> assignedUsersTask(Long userId,TaskStatus status, String sortByDeadline, String sortByCreatedAt);

    Task completeTask(Long taskId) throws Exception;

}
