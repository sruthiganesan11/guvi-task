package com.guvi.assignment.service;

import com.guvi.assignment.dto.UserDto;

import java.util.List;

public interface UserService {

    UserDto createUser(UserDto userDto);

    UserDto getUserById(int userId);

    List<UserDto> getAllUsers();

    UserDto updateUser(int userId , UserDto updatedUser);

    void deleteUser(int userId);
}
