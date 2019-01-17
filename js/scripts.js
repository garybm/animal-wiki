$(document).ready(function() {

  var animal = $("#animal").val();
  if (animal === "animal1") {
    $('#animal1').show();
    $('#animal2').hide()
    $('#animal3').hide()
  } else if (animal === "animal2") {
    $('#animal2').show();
    $('#animal1').hide()
    $('#animal3').hide()
  } else if (animal === "animal3") {
    $('#animal3').show();
    $('#animal1').hide()
    $('#animal2').hide()
  } else {}
}

});
