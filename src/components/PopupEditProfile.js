import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupEditProfile({isOpen}) {
    return (
        <PopupWithForm name='profile' title='Редактировать профиль' buttonText='Сохранить' isOpen={isOpen}>
            <input className="popup__text popup__text_type_name" type="text" id="name" name="name" autoComplete="off"
                minLength="2" maxLength="40" required />
            <span className="popup__text-error popup__text-error_visible" id="name-error"></span>
            <input className="popup__text popup__text_type_about-self" type="text" id="about-self" name="about"
                autoComplete="off" minLength="2" maxLength="200" required />
            <span className="popup__text-error" id="about-self-error"></span>
        </PopupWithForm>
    );
}

export default PopupEditProfile;