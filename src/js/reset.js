import $ from "jquery";

$("button").click(function () {
  // Hide state
  $("[id^='status']").hide();

  const password = $("#password").val();
  const repeatPassword = $("#repeat-password").val();
  const token = new URLSearchParams(window.location.search).get("token");

  // Check if empty passwords or token
  if (!password || !repeatPassword || !token) return;

  // Check if same password
  if (password !== repeatPassword) {
    $("#status").show();
    $("#status-error").text("Passwords do not match!");
    $("#status-error").show();
    return;
  }

  console.log("here");

  // Send request
  $.ajax({
    url: `${process.env.API_ENDPOINT}/api/user/update/password`,
    method: "PATCH",
    data: {
      newPassword: password,
      token,
    },
    complete: function () {
      $("#status").show();
    },
    success: function (data, status, xhr) {
      $("#status-success").show();
    },
    error: function (xhr, status, error) {
      switch (xhr.status) {
        case 400:
        case 401:
          $("#status-error").text(xhr.responseJSON["message"]);
          break;
        case 403:
          $("#status-error").text("Invalid token provided.");
          break;
        default:
          $("#status-error").text("Server error!");
          break;
      }

      $("#status-error").show();
    },
  });
});
