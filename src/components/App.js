import React from 'react';
import { useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import PopupAddCard from './PopupAddCard';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
      .then(data => setCurrentUser(data))
      .catch((err) =>
        console.log(`Ошибка: ${err}`))
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: '', link: '' });
  }

  function handleUpdateUser({ name, about }) {
    api.editUserInfo({ name, about })
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) =>
        console.log(`Ошибка: ${err}`))
  }

  function handleUpdateAvatar({ avatar }) {
    api.editUserAvatar({ avatar })
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) =>
        console.log(`Ошибка: ${err}`))
  }


  useEffect(() => {
    function hadleEscClose(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    document.addEventListener('keydown', hadleEscClose);
    return () => {
      document.removeEventListener('keydown', hadleEscClose);
    }
  }, []);

  useEffect(() => {
    function hadleOverlayClose(evt) {
      if (evt.target.classList.contains('popup')) {
        closeAllPopups();
      }
    }
    document.addEventListener('mousedown', hadleOverlayClose);
    return () => {
      document.removeEventListener('mousedown', hadleOverlayClose);
    }
  }, []);



  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <div className="page__content">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
          <Footer />
        </div>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <PopupAddCard
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
