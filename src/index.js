import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currencies from './currencies-service.js';

$(document).ready(function() {
  $("form#user-inputs").submit(function() {
    event.preventDefault();
    const amount = $("#amount").val();
    $("#amount").val("");
    const changeTo = $("#currency-selected").val();
    $("#currency-selected").val("");

    let promise = Currencies.getCurrency(amount, changeTo);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $(".showAmount").text(`The amount in ${changeTo} is ${body.conversion_result}`);
    }, function (error) {
      $(".showErrors").text("oops");
    });
  });
});



// $('#weatherLocation').click(function() {
//   let city = $('#location').val();
//   $('#location').val("");

//   let promise = new Promise(function(resolve, reject) {
//     let request = new XMLHttpRequest();
//     const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
//     request.onload = function() {
//       if (this.status === 200) {
//         resolve(request.response);
//       } else {
//         reject(request.response);
//       }
//     }
//     request.open("GET", url, true);
//     request.send();
//   });