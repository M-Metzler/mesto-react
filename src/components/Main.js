import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar)
      })
      .catch((err) =>
        console.log(`Ошибка: ${err}`))
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then((cardList) => {
        setCards(cardList)
      })
      .catch((err) =>
        console.log(`Ошибка: ${err}`))
  }, []);


  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);

  return (
    <main className="content">
      <section className="profile profile_box_position">
        <img className="profile__avatar" src={`${userAvatar}`} alt="Аватар профиля" />
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
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
            />)
          )}
        </ul>
      </section>
    </main>
  );

}

export default Main;