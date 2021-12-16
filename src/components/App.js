import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupEditProfile from './PopupEditProfile';
import PopupEditAvatar from './PopupEditAvatar';
import PopupAddCard from './PopupAddCard';

function App() {
  return (
    <div className='page'>
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
      </div>
      <PopupEditProfile />
      <PopupEditAvatar />
      <PopupAddCard />

      <div class="popup popup_type_delete-card">
        <form class="popup__container" name="card" action="#" noValidate>
          <button class="popup__btn-close" type="button" aria-label="кнопка закрыть"></button>
          <h2 class="popup__title popup__title_type_margin">Вы уверены?</h2>
          <button class="popup__btn-save" type="submit">Да</button>
        </form>
      </div>

      <div class="popup popup_view_opaque popup_type_fullscreen">
        <div class="popup__wrap">
          <button class="popup__btn-close" type="button" aria-label="кнопка закрыть"></button>
          <img class="popup__image" src="#" alt="фотография" />
          <p class="popup__caption"></p>
        </div>
      </div>

      <template class="card-template">
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
      </template>

    </div>
  );
}

export default App;
