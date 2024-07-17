package com.guvi.assignment.mapper;

import com.guvi.assignment.dto.UserDto;
import com.guvi.assignment.entities.User;

public class UserMapper {

    public static UserDto mapTouserDto(User user) {
        return new UserDto(
                user.getId(),
                user.getName(),
                user.getGender(),
                user.getAge(),
                user.getMobile(),
                user.getDob()
        );
    }

    public static User mapTouser(UserDto userDto) {
        return new User(
                userDto.getId(),
                userDto.getName(),
                userDto.getGender(),
                userDto.getAge(),
                userDto.getMobile(),
                userDto.getDob()
        );
    }
}
