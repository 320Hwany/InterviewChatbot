package backend.chat.dto;

import jakarta.persistence.Lob;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ChatReceive {

    @Lob
    private String gptQuestion;

    @Lob
    private String gptMessage;

    @Lob
    private String feedbackMessage;

    @Lob
    private String mixMessage;

    @Builder
    public ChatReceive(String gptQuestion, String gptMessage, String feedbackMessage, String mixMessage) {
        this.gptQuestion = gptQuestion;
        this.gptMessage = gptMessage;
        this.feedbackMessage = feedbackMessage;
        this.mixMessage = mixMessage;
    }
}
