import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupEditAvatar() {
    return (
        <PopupWithForm name='avatar' title='Обновить аватар' buttonText='Сохранить'>
            <input className="popup__text popup__text_type_url" type="url" id="avatar" name="avatar" autoComplete="off"
                placeholder="Ссылка на картинку" required />
            <span className="popup__text-error" id="avatar-error"></span>
        </PopupWithForm>
    );
}

export default PopupEditAvatar;