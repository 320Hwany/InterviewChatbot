package backend.chat.repository;

import backend.chat.domain.Chat;
import backend.chat.dto.ChatFeedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ChatRepository extends JpaRepository<Chat, Long> {

    @Query("SELECT new backend.chat.dto.ChatFeedback(c.userMessage, c.feedbackMessage) FROM Chat c")
    List<ChatFeedback> findAllFeedback();
}
