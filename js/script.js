let profileName = document.querySelector('.profile__name'); //создать переменную
let profileActivity = document.querySelector('.profile__activity');//создать переменную
let fieldName = document.querySelector('.popup__field_name');//создать переменную
let fieldActivity = document.querySelector('.popup__field_activity');//создать переменную
let popup = document.querySelector('.popup');//создать переменную
let editButton = document.querySelector('.profile__edit-button'); // получить кнопку редактировать
let closeButton = document.querySelector('.popup__close-button'); // получить кнопку закрыть
let formElement = document.querySelector('.popup__container');

function popupOpen(event){//создать функцию для открытия формы редактирования
  event.preventDefault();// отменить стандартное поведение
  fieldName.value = profileName.textContent; // получить значение value для поля имя
  fieldActivity.value = profileActivity.textContent;// получить значение value для поля род деятельности
  popup.classList.add('popup_opened');// добавить модификатор классу
}

function popupClose(event){//создать функцию для закрытия формы редактирования
  event.preventDefault();// отменить стандартное поведение
  popup.classList.remove('popup_opened');// удалить модификатор у класса
}

function formSubmitHandler (evt) {//создать функцию для сохранения значений в полях ввода
    evt.preventDefault(); // отменить стандартную отправку формы.
     profileName.textContent = fieldName.value;// использовать ранее созданную переменную и сохранить текст из поля  
     profileActivity.textContent = fieldActivity.value;// использовать ранее созданную переменную и сохранить текст из поля 
     popup.classList.remove('popup_opened');// закрыть форму
}

editButton.addEventListener("click", popupOpen);// повесить слушатель событий
closeButton.addEventListener("click", popupClose);// повесить слушатель событий
formElement.addEventListener('submit', formSubmitHandler);// Прикрепить слушатель событий к форме
