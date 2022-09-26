/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let quien = Math.floor(Math.random() * who.length);
  let que = Math.floor(Math.random() * what.length);
  let cuando = Math.floor(Math.random() * when.length);

  console.log(who[quien] + " " + what[que] + " " + when[cuando]);

  return (document.getElementById("excuse").innerHTML =
    who[quien] + " " + what[que] + " " + when[cuando]);
};
