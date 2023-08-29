package backend.mbti.repository.post;


import backend.mbti.domain.member.Member;
import backend.mbti.domain.post.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllByOrderByCreateAtDesc();
}