package com.guvi.hospitalManagementSystem.controller;


import com.guvi.hospitalManagementSystem.dto.PasswordRequestUtil;
import com.guvi.hospitalManagementSystem.entity.User;
import com.guvi.hospitalManagementSystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    //Get User Based On userName
    @GetMapping("/{Name}")
    public ResponseEntity<User> getPassengerByName(@PathVariable("Name") String name) {
        User getUser = userService.getUser(name);
        return new ResponseEntity<User>(getUser, HttpStatus.OK);
    }

    //Post Mapping to Check for Old Password and New Password changed if old password entered is matched withDB
    @PostMapping
    public String passwordChange(@RequestBody PasswordRequestUtil passwordRequestUtil) {
        User user = userService.getUser(passwordRequestUtil.getUsername());
        if (!userService.oldPasswordIsValid(user
                , passwordRequestUtil.getOldPassword())) {
            return "Incorrect Old Password";
        } else {
            userService.changePassword(user, passwordRequestUtil.getNewPassword());
            return "Password changed Successfully";
        }
    }
}

