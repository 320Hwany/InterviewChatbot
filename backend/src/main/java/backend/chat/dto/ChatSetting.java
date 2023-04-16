package backend.chat.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ChatSetting {

    private String fields;

    private int age;

    private String career;

    private String company;

    @Builder
    public ChatSetting(String fields, int age, String career, String company) {
        this.fields = fields;
        this.age = age;
        this.career = career;
        this.company = company;
    }
}
