package backend.chat.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Chat {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chat_id")
    private Long id;

    private String userMessage;

    private String gptMessage;

    private String feedbackMessage;

    @Builder
    public Chat(String userMessage, String gptMessage, String feedbackMessage) {
        this.userMessage = userMessage;
        this.gptMessage = gptMessage;
        this.feedbackMessage = feedbackMessage;
    }
}
