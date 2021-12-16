import React from "react";

function ImagePopup() {
    return (
        <div className="popup popup_view_opaque popup_type_fullscreen">
            <div className="popup__wrap">
                <button className="popup__btn-close" type="button" aria-label="кнопка закрыть"></button>
                <img className="popup__image" src="#" alt="фотография" />
                <p className="popup__caption"></p>
            </div>
        </div>
    );
}

export default ImagePopup;