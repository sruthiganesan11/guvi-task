package com.guvi.assignment.controller;

import com.guvi.assignment.dto.UserDto;
import com.guvi.assignment.repo.UserRepo;
import com.guvi.assignment.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {

    private UserRepo userRepo;
    private UserService userService;

    @PostMapping
    public ResponseEntity<UserDto> saveUser(@RequestBody UserDto userDto) {
        UserDto savedUser = userService.createUser(userDto);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable("id")int userId){
        UserDto userById = userService.getUserById(userId);
        return ResponseEntity.ok(userById);
    }

    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers() {
        List<UserDto> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @PutMapping("{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable("id") int userId,
                                                        @RequestBody UserDto updatedUser) {
        UserDto userDto = userService.updateUser(userId, updatedUser);
        return ResponseEntity.ok(userDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") int userId) {
        userService.deleteUser(userId);
        return ResponseEntity.ok("User deleted successfully!");
    }

}
