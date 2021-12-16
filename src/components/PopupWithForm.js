function PopupWithForm({name, title}) {
    return (
        <div className={`popup popup_type_${name}`}>
          <form className={`popup__container popup__container_type_${name}-form`} name={name} action="#" novalidate>
            <button className="popup__btn-close" type="button" aria-label="кнопка закрыть"></button>
            <h2 className="popup__title popup__title_type_margin">{title}</h2>
            <button className="popup__btn-save" type="submit">Да</button>
          </form>
        </div>
    );
}