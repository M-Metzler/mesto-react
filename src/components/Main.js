import React from 'react';
import avatarCusto from '../images/Cousteau.jpg';

function Main() {
  return (
    <main className="content">
      <section className="profile profile_box_position">
        <img className="profile__avatar" src={avatarCusto} alt="Жак-Ив Кусто" />
        <button className="profile__avatar-edit" onClick={namhandleEditAvatarClicke}></button>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button className="profile__button-edit" type="button" onClick={handleEditProfileClick}></button>
          <p className="profile__about-self">Исследователь океана</p>
        </div>
        <button className="profile__button-add" type="button" aria-label="кнопка добавить карточку" onClick={handleAddPlaceClick}></button>
      </section>

      <section className="cards cards_box_position">
        <ul className="cards__items">
        </ul>
      </section>
    </main>
  );

  function handleEditProfileClick() {
    document.querySelector('.popup_type_profile').classList.add('popup_opened');
  }

  function namhandleEditAvatarClicke() {
    document.querySelector('.popup_type_avatar').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_card').classList.add('popup_opened');
  }
}

export default Main;