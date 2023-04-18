package backend.chat.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ChatFeedback {

    private String userMessage;

    private String gptMessage;

    private String feedbackMessage;

    private String mixMessage;

    @Builder
    public ChatFeedback(String userMessage, String gptMessage, String feedbackMessage, String mixMessage) {
        this.userMessage = userMessage;
        this.gptMessage = gptMessage;
        this.feedbackMessage = feedbackMessage;
        this.mixMessage = mixMessage;
    }
}
