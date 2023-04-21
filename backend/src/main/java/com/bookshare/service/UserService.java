package com.bookshare.service;

import java.util.HashMap;
import java.util.Map;
import com.bookshare.model.User;
import com.bookshare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Implement methods for user-related operations, e.g., registration, finding users, etc.

    public HashMap<String, String> registerUser(String email, String password) {
        if (userRepository.findByEmail(email).isPresent()) {
            HashMap<String, String> response = new HashMap<>();
            response.put("message", "User " + email + " already exists.  Please log in!");
            return response;
        } else {
            User newUser = new User();
            newUser.setEmail(email);
            newUser.setHashedPassword(passwordEncoder.encode(password));
            userRepository.save(newUser);
            HashMap<String, String> response = new HashMap<>();
            response.put("message", "User " + email + " registered successfully.  Please log in!");
            return response;
        }
    }
}
