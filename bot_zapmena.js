// ==UserScript==
// @name         My search bot
// @namespace    http://tampermonkey.net/
// @version      2024-04-25
// @description  search bot
// @author       Kovrev Sergey
// @match        https://www.zapmeta.com/*
// @match        https://napli.ru/*
// @grant        none
// ==/UserScript==
//let ducktInput = document.getElementsByName("t")[0];
let zapInput = document.getElementsByName("q")[0];
let zapBtn = document.getElementsByClassName("search-header__field-button vsi search-header__field-button--background-mobile search-header__field-button--background-tablet search-header__field-button--background-desktop")[0];
let links = document.links;
let keywords = ["Базовые вещи про GIT", "10 самых популярных шрифтов от Google",
                "Отключение редакций и ревизий в WordPress", "Vite или Webpack?",
                "Вывод произвольных типов записей и полей"];

let keyword = keywords[getRandom(0, keywords.length)];
let mouseClick = new MouseEvent("click");

//Работаем на главной странице
if (zapBtn !== undefined) {
  let i = 0;
  zapInput.focus();
  zapInput.dispatchEvent(mouseClick);

 let timerId = setInterval(() => {
   zapInput.value += keyword[i];
   i++;
   if (i == keyword.length) {
     clearInterval(timerId);
     zapBtn.click();
   }
 },150)
  //Работаем на целевом сайте
  } else if (location.hostname == "napli.ru") {

    setInterval(() => {
      let linkIndex = getRandom(0, links.length);
      let localLink = links[linkIndex];

      if (getRandom(0, 101) > 50) {
        location.href = "https://www.zapmeta.com/";
      }
      if (links.length == 0) {
        location.href = "https://napli.ru";
      }

      if (localLink.href.includes("napli.ru")) {
        localLink.click();
      }
    }, getRandom(3000, 5000))

    console.log("Мы на целевом сайте");
  }

//Работаем на странице поисковой выдачи
else if (document.querySelector(".pagination--default") !== null){
  let nextPage = true;
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("napli.ru") != -1) {
      let link = links[i];
      let nextPage = false;
      console.log("Нашел строку " + link);
      setTimeout(() => {
        link.click();
      }, getRandom(2000, 3000));
      break;
    }
  }
  let elementExist = setInterval(() => {
    let elem = document.querySelector("pagination__link");

    if (elem !== null ) {
      if (elem.innerText == "5") {
        let nextPage = false;
        location.href = "https://www.zapmeta.com/";
      }
      clearInterval(elementExist);
    }
  }, 100)


  if (nextPage) {
    setTimeout(() => {
      document.querySelector(".pagination__link--chevron").click();
    }, getRandom(2500, 3500))

  }
}
//Работаем на странице поисковой выдачи
else if (document.querySelector(".pagination--default") !== null){
  let nextPage = true;
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("napli.ru") != -1) {
      let link = links[i];
      let nextPage = false;
      console.log("Нашел строку " + link);
      setTimeout(() => {
        link.click();
      }, getRandom(2000, 3000));
      break;
    }
  }
  let elementExist = setInterval(() => {
    let elem = document.querySelector("pagination__link");

    if (elem !== null ) {
      if (elem.innerText == "5") {
        let nextPage = false;
        location.href = "https://www.zapmeta.com/";
      }
      clearInterval(elementExist);
    }
  }, 100)


  if (nextPage) {
    setTimeout(() => {
      document.querySelector(".pagination__link--chevron").click();
    }, getRandom(2500, 3500))

  }
}



//funktions
function getRandom(min,max) {
  return Math.floor(Math.random() * (max - min) + min);
}

