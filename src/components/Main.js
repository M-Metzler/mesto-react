import React from 'react';
import api from '../utils/api';

function Main({ onEditProfile, onEditAvatar, onAddPlace }) {

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar)
    })
  }, []);

  const [userName, setUserName] = React.useState();
  const [userDescription , setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  return (
    <main className="content">
      <section className="profile profile_box_position">
        <img className="profile__avatar" src={`${userAvatar}`} alt="Жак-Ив Кусто" />
        <button className="profile__avatar-edit" onClick={onEditAvatar}></button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__button-edit" type="button" onClick={onEditProfile}></button>
          <p className="profile__about-self">{userDescription}</p>
        </div>
        <button className="profile__button-add" type="button" aria-label="кнопка добавить карточку" onClick={onAddPlace}></button>
      </section>

      <section className="cards cards_box_position">
        <ul className="cards__items">
        </ul>
      </section>
    </main>
  );

}

export default Main;