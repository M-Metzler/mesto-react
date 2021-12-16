import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupAddCard() {
    return (
        <PopupWithForm name='card' title='Новое место' buttonText='Создать'>
            <input className="popup__text popup__text_type_title" type="text" id="title" name="title" autoComplete="off"
                placeholder="Название" minlength="2" maxlength="30" required />
            <span className="popup__text-error" id="title-error"></span>
            <input className="popup__text popup__text_type_url" type="url" id="url" name="url" autoComplete="off"
                placeholder="Ссылка на картинку" required />
            <span className="popup__text-error" id="url-error"></span>
        </PopupWithForm>
    );
}

export default PopupAddCard;