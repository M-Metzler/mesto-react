import React from 'react';
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {

  function handleCardLike(card) {
    // Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    const changeLike = isLiked ? api.removeLike(card._id) : api.addLike(card._id)
    changeLike.then((newCard) => {
      //Создаем новый массив на основе имеющегося и вставляем в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Обновляем стейт
      setCards(newCards);
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    })
  }

  // React.useEffect(() => {
  //   api.getUserInfo()
  //     .then((data) => {
  //       setUserName(data.name);
  //       setUserDescription(data.about);
  //       setUserAvatar(data.avatar)
  //     })
  //     .catch((err) =>
  //       console.log(`Ошибка: ${err}`))
  // }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then((cardList) => {
        setCards(cardList)
      })
      .catch((err) =>
        console.log(`Ошибка: ${err}`))
  }, []);


  // const [userName, setUserName] = React.useState('');
  // const [userDescription, setUserDescription] = React.useState('');
  // const [userAvatar, setUserAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile profile_box_position">
        <img className="profile__avatar" src={currentUser.avatar} alt="Аватар профиля" />
        <button className="profile__avatar-edit" onClick={onEditAvatar}></button>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__button-edit" type="button" onClick={onEditProfile}></button>
          <p className="profile__about-self">{currentUser.about}</p>
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
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />)
          )}
        </ul>
      </section>
    </main>
  );

}

export default Main;