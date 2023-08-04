package com.example.demo.post;

import com.example.demo.post.domain.Hashtag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface HashtagRepository extends JpaRepository<Hashtag, Long> {
   // Hashtag findById();

}