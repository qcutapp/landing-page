import $ from "jquery";

$("button").click(function () {
  // Hide status
  $("[id^='status']").hide();

  const email = $('input[type="email"]').val();

  // Check if empty email
  if (!email) return;

  // Send request
  $.ajax({
    url: `${process.env.API_ENDPOINT}/api/user/reset/password`,
    method: "POST",
    data: {
      email,
    },
    complete: function () {
      $("#status").show();
    },
    success: function (data, status, xhr) {
      $("#status-success").show();
    },
    error: function (xhr, status, error) {
      if (xhr.status === 403) {
        $("#status-error").text("Email not found! Please try again.");
      } else {
        $("#status-error").text("Server error!");
      }
      $("#status-error").show();
    },
  });
});
