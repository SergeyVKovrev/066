// ==UserScript==
// @name         My new bot nigma
// @namespace    http://tampermonkey.net/
// @version      1.00
// @description  bot for mail
// @author       Kovrev Sergey
// @match        https://nigma.net.ru/*
// @grant        none
// ==/UserScript==

let nigmaInput = document.getElementsByName("query")[0];
let nigmaBtn = document.getElementsByClassName("butt_big lite_green button")[0];
let links = document.links;
let keywords = ["Базовые вещи про GIT", "10 самых популярных шрифтов от Google",
                "Отключение редакций и ревизий в WordPress", "Vite — отличное решение для проектов"];
let keyword = keywords[getRandom(0, keywords.length)];

if (nigmaBtn !== undefined) {
  nigmaInput.value = keyword;
  nigmaBtn.click();
} else {
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("napli.ru") != -1) {
      let link = links[i];
      console.log("Нашел строку " + link);
      link.click();
      break;
    }
  }
}

function getRandom(min,max) {
  return Math.floor(Math.random() * (max - min) + min);
}
