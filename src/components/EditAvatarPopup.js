import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

    const avatarRef = React.useRef();

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        avatarRef.current.value = '';
      }, [currentUser]);

    function handleSubmit(evt) {
        evt.preventDefault();
      
        onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
    } 
    
    return (
        <PopupWithForm name='avatar' title='Обновить аватар' buttonText='Сохранить' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <input className="popup__text popup__text_type_url" type="url" id="avatar" name="avatar" autoComplete="off" ref={avatarRef}
                placeholder="Ссылка на картинку" required />
            <span className="popup__text-error" id="avatar-error"></span>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;