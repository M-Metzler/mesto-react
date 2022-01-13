import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    const [name, setName] = React.useState('');
    function handleNameChange(evt) {
        setName(evt.target.value);
    }

    const [description, setDescription] = React.useState('');
    function handleDescriptionChange(evt) {
        setDescription(evt.target.value);
    }

    function handleSubmit(evt) {
        // Запрещаем браузеру переходить по адресу формы
        evt.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name: name,
            about: description,
        });
    }


    return (
        <PopupWithForm name='profile' title='Редактировать профиль' buttonText='Сохранить' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <input className="popup__text popup__text_type_name" type="text" id="name" name="name" placeholder="Имя" autoComplete="off"
                minLength="2" maxLength="40" value={name || ''} onChange={handleNameChange} required />
            <span className="popup__text-error popup__text-error_visible" id="name-error"></span>
            <input className="popup__text popup__text_type_about-self" type="text" id="about-self" name="about" placeholder="Занятие"
                autoComplete="off" minLength="2" maxLength="200" value={description || ''} onChange={handleDescriptionChange} required />
            <span className="popup__text-error" id="about-self-error"></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup;