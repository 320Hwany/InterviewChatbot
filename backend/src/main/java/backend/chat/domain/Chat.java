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

    @Lob
    private String gptQuestion;

    @Lob
    private String userMessage;

    @Lob
    private String gptMessage;

    @Lob
    private String feedbackMessage;

    @Lob
    private String mixMessage;

    @Builder
    public Chat(String gptQuestion, String userMessage, String gptMessage,
                String feedbackMessage, String mixMessage) {
        this.gptQuestion = gptQuestion;
        this.userMessage = userMessage;
        this.gptMessage = gptMessage;
        this.feedbackMessage = feedbackMessage;
        this.mixMessage = mixMessage;
    }
}
