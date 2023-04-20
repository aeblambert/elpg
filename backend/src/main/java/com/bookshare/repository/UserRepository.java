package com.bookshare.repository;

import com.bookshare.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // You can add custom query methods if necessary
    Optional<User> findByEmail(String email);
}