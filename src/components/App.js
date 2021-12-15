import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (
      <div className='page'>
        <div className="page__content">
          <Header />
          <Main />
          <Footer />
        </div>

        <div class="popup popup_type_profile">
          <form class="popup__container popup__container_type_profile-form" name="profile" action="#" novalidate>
            <button class="popup__btn-close" type="button" aria-label="кнопка закрыть"></button>
            <h2 class="popup__title">Редактировать профиль</h2>
            <input class="popup__text popup__text_type_name" type="text" id="name" name="name" autocomplete="off"
              minlength="2" maxlength="40" required />
            <span class="popup__text-error popup__text-error_visible" id="name-error"></span>
            <input class="popup__text popup__text_type_about-self" type="text" id="about-self" name="about"
              autocomplete="off" minlength="2" maxlength="200" required />
            <span class="popup__text-error" id="about-self-error"></span>
            <button class="popup__btn-save" type="submit">Сохранить</button>
          </form>
        </div>

        <div class="popup popup_type_avatar">
          <form class="popup__container popup__container_type_avatar-form" name="card" action="#" novalidate>
            <button class="popup__btn-close" type="button" aria-label="кнопка закрыть"></button>
            <h2 class="popup__title">Обновить аватар</h2>
            <input class="popup__text popup__text_type_url" type="url" id="avatar" name="avatar" autocomplete="off"
              placeholder="Ссылка на картинку" required />
            <span class="popup__text-error" id="avatar-error"></span>
            <button class="popup__btn-save" type="submit">Сохранить</button>
          </form>
        </div>

        <div class="popup popup_type_card">
          <form class="popup__container popup__container_type_card-form" name="card" action="#" novalidate>
            <button class="popup__btn-close" type="button" aria-label="кнопка закрыть"></button>
            <h2 class="popup__title">Новое место</h2>
            <input class="popup__text popup__text_type_title" type="text" id="title" name="title" autocomplete="off"
              placeholder="Название" minlength="2" maxlength="30" required />
            <span class="popup__text-error" id="title-error"></span>
            <input class="popup__text popup__text_type_url" type="url" id="url" name="url" autocomplete="off"
              placeholder="Ссылка на картинку" required />
            <span class="popup__text-error" id="url-error"></span>
            <button class="popup__btn-save" type="submit">Создать</button>
          </form>
        </div>

        <div class="popup popup_type_delete-card">
          <form class="popup__container" name="card" action="#" novalidate>
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
