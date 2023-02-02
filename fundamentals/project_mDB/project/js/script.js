/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const adv = document.querySelectorAll(".promo__adv img");
  const genre = document.querySelector(".promo__genre");
  const bg = document.querySelector(".promo__bg");
  const movieList = document.querySelector(".promo__interactive-list");
  const addForm = document.querySelector("form.add");
  const addInput = addForm.querySelector(".adding__input");
  const checkbox = addForm.querySelector('[type="checkbox"]');

  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };
  //функция за изтриване на реклами
  function deleteAdv(arr) {
    arr.forEach((item) => {
      item.remove();
    });
  }
  //функция за сортиране на масив
  function sortArr(arr) {
    arr.sort();
  }
  const makeChanges = () => {
    genre.textContent = "драма";
    bg.style.backgroundImage = 'url("img/bg.jpg")';
  };

  //функция за създаване на списък с филми
  function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(movieDB.movies);

    films.forEach((film, i) => {
      parent.innerHTML += `
          <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
            </li>`;
    });

    const deleteBtn = document.querySelectorAll(".delete");
    deleteBtn.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMovieList(films, parent);
      });
    });
  }
  //добавяме на евент при натискане на бутон
  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }

      if (favorite) {
        console.log("Добавляем любимый фильм");
      }

      movieDB.movies.push(newFilm);

      sortArr(movieDB.movies);
      createMovieList(movieDB.movies, movieList);
    }
    event.target.reset();
  });

  createMovieList(movieDB.movies, movieList);
  deleteAdv(adv);
  makeChanges();
});
