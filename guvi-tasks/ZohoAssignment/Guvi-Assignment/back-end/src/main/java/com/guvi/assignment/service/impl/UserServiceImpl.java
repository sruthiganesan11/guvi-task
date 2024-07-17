package com.guvi.assignment.service.impl;

import com.guvi.assignment.dto.UserDto;
import com.guvi.assignment.entities.User;
import com.guvi.assignment.exception.ResourceNotFoundException;
import com.guvi.assignment.mapper.UserMapper;
import com.guvi.assignment.repo.UserRepo;
import com.guvi.assignment.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDto createUser(UserDto userDto) {
        User user = UserMapper.mapTouser(userDto);
        User savedUser = userRepo.save(user);
        return UserMapper.mapTouserDto(savedUser);
    }

    @Override
    public UserDto getUserById(int userId) {
        User user = userRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException
                ("User", " id", userId));
        return UserMapper.mapTouserDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepo.findAll();
        return users.stream().map(UserMapper::mapTouserDto).collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(int userId, UserDto updatedUser) {
        User user = userRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException
                ("User", " id", userId));

        user.setName(updatedUser.getName());
        user.setGender(updatedUser.getGender());
        user.setAge(updatedUser.getAge());
        user.setMobile(updatedUser.getMobile());
        user.setDob(updatedUser.getDob());

        User updatedUserObj = userRepo.save(user);

        return UserMapper.mapTouserDto(updatedUserObj);
    }

    @Override
    public void deleteUser(int userId) {
        User user = userRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException
                ("User", " id", userId));

        userRepo.deleteById(userId);
    }
}
