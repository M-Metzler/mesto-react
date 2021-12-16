import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupEditProfile from './PopupEditProfile';
import PopupEditAvatar from './PopupEditAvatar';
import PopupAddCard from './PopupAddCard';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className='page'>
      <div className="page__content">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
        />
        <Footer />
      </div>
      <PopupEditProfile
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupEditAvatar
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <PopupAddCard
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />

      {/* <template class="card-template">
        <li class="card">
          <button class="card__btn-delete"></button>
          <img class="card__image" src="#" alt="фото" />
          <div class="card__info">
            <h2 class="card__header"></h2>
            <div class="card__container-like">
              <button class="card__btn-like" type="button" aria-label="кнопка лайк"></button>
              <span class="card__counter-like">0</span>
            </div>
          </div>
        </li>
      </template> */}

    </div>
  );
}

export default App;
