package com.bookshare.service;

import com.bookshare.model.User;
import com.bookshare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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

    public ResponseEntity<String> registerUser(String email, String password) {
        if (userRepository.findByEmail(email).isPresent()) {
            return ResponseEntity.badRequest().body("User with email " + email + " already exists");
        } else {
            User newUser = new User();
            newUser.setEmail(email);
            newUser.setHashedPassword(passwordEncoder.encode(password));
            userRepository.save(newUser);
            return ResponseEntity.ok("User registered successfully");
        }
    }
}
