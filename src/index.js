import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currencies from './currencies-service.js';

$(document).ready(function() {
  $("form#user-inputs").submit(function() {
    event.preventDefault();
    const amount = parseFloat($("#amount").val());
    $("#amount").val("");
    const changeTo = $("#currency-selected").val();
    $("#currency-selected").val("");

    console.log("the amount entered is " + amount);
    console.log("data type is " + typeof amount);

    let promise = Currencies.getCurrency(amount, changeTo);
    promise.then(function(response) {
      const body = JSON.parse(response);
      
      $(".showAmount").text(`The amount in ${changeTo} is ${body.conversion_result.toFixed(2)}`);
      $(".showErrors").text("");
    }, function (error) {
      const body = JSON.parse(error);
      const errorType = body["error-type"];
      // const currencyList = "https://www.exchangerate-api.com/docs/supported-currencies";
      $(".showErrors").text("Oops, it appears there was an error: " + errorType);
      if (errorType === "malformed-request") {
        $(".giveErrorComment").text("Currency entered must be in the form of a three-letter code.");
      } else if (errorType === "unsupported-code") {
        $(".giveErrorComment").html("Please review which currencies are supported: " + "<a href='https://www.exchangerate-api.com/docs/supported-currencies'>Supported codes</a>");
      } else if (errorType === "invalid-key") {
        $(".giveErrorComment").text("Please double check your key and try again.");
      }
      $(".showAmount").text("");
    });
  });
});


// ${body["error-type"]}


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