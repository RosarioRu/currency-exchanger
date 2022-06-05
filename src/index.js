import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currencies from './currencies-service.js';

function clearFields() {
  $(".showAmount").text("");
  $(".showErrors").text("");
  $(".giveErrorComment").text("");
}


$(document).ready(function() {
  $("form#user-inputs").submit(function() {
    event.preventDefault();
    const amount = parseFloat($("#amount").val());
    $("#amount").val("");
    const changeTo = $("#currency-selected").val();
    $("#currency-selected").val("");

    clearFields();

    let promise = Currencies.getCurrency(amount, changeTo);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $(".display-box").show();
      if (body.conversion_result === undefined) {
        $(".showAmount").text("Please enter a non-zero amount.");
      } else {
        $(".showAmount").text(`The amount in ${changeTo} is ${body.conversion_result.toFixed(2)}`);
      }
    }, function (error) {
      const body = JSON.parse(error);
      const errorType = body["error-type"];
      $(".display-box").show();
      $(".showErrors").text("Oops, it appears there was an error: " + errorType);
      if (errorType === "malformed-request") {
        $(".giveErrorComment").text("Currency entered must be in the form of a three-letter code.");
      } else if (errorType === "unsupported-code") {
        $(".giveErrorComment").html("Please review which currencies are supported: " + "<a href='https://www.exchangerate-api.com/docs/supported-currencies'>Supported codes</a>");
      } else if (errorType === "invalid-key") {
        $(".giveErrorComment").text("Please double check your key and try again.");
      }
    });
  });
});

