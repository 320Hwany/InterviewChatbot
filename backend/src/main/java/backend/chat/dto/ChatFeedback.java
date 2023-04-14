package backend.chat.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ChatFeedback {

    private String userMessage;

    private String feedbackMessage;

    @Builder
    public ChatFeedback(String userMessage, String feedbackMessage) {
        this.userMessage = userMessage;
        this.feedbackMessage = feedbackMessage;
    }
}
