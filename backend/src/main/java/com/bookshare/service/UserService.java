package com.bookshare.service;

import com.bookshare.model.User;
import com.bookshare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    public void registerUser(String email, String password) {

        if (userRepository.findByEmail(email).isPresent()) {
            throw new RuntimeException("User with email " + email + " already exists");
        }
        User newUser = new User();
        newUser.setEmail(email);
        newUser.setHashedPassword(passwordEncoder.encode(password));
        userRepository.save(newUser);
    }

}
