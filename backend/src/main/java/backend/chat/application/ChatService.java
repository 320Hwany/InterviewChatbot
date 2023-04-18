package backend.chat.application;

import backend.chat.domain.Chat;
import backend.chat.dto.ChatFeedback;
import backend.chat.dto.ChatReceive;
import backend.chat.dto.ChatRecord;
import backend.chat.dto.ChatSend;
import backend.chat.repository.ChatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class ChatService {

    private final ChatRepository chatRepository;

    @Transactional
    public void save(ChatSend chatSend, ChatReceive chatReceive) {
        ChatRecord chatRecord = ChatRecord.builder()
                .gptQuestion(chatSend.getGptQuestion())
                .userMessage(chatSend.getUserMessage())
                .gptMessage(chatReceive.getGptMessage())
                .feedbackMessage(chatReceive.getFeedbackMessage())
                .mixMessage(chatReceive.getMixMessage())
                .build();

        chatRepository.save(chatRecord.toEntity());
    }

    public List<ChatFeedback> findAllFeedback() {
        return chatRepository.findAllFeedback();
    }
}
