import React from "react";

function Card({card}) {
    return (
        <li className="card">
            <button className="card__btn-delete"></button>
            <img className="card__image" src={card.link} alt={card.name} />
            <div className="card__info">
                <h2 className="card__header">{card.name}</h2>
                <div className="card__container-like">
                    <button className="card__btn-like" type="button" aria-label="кнопка лайк"></button>
                    <span className="card__counter-like">{card.likes.length}</span>
                </div>
            </div>
        </li>
    );
}

export default Card;