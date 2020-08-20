import initTilt from "./js/tilt";
import initSr from "./js/sr";

import "./style/main.scss";
import { parseJSON } from "jquery";

$('a[href^="#"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
});

initSr();
initTilt();

console.log("test");
$(document).ready(function () {
  $(".submit").click(function (event) {
    console.log("clicked");

    let email = $("#email").val();
    let subject = $("#subject").val();
    let message = $("#message").val();
    let name = $("#name").val();
    let statusElement = $(".status");
    statusElement.empty();

    if (name.length > 2) {
      // statusElement.append("<div>val</div>");
    } else {
      statusElement.append("<div>Name not valid</div>");
      event.preventDefault();
    }

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      // statusElement.append("<div>email not valid</div>");
    } else {
      statusElement.append("<div>Email not valid</div>");
      event.preventDefault();
    }

    if (subject.length > 2) {
      // statusElement.append("<div>val</div>");
    } else {
      statusElement.append("<div>Subject not valid</div>");
      event.preventDefault();
    }

    if (message.length > 10) {
      // statusElement.append("<div>val</div>");
    } else {
      statusElement.append("<div>Message not valid</div>");
      event.preventDefault();
    }
  });
});
