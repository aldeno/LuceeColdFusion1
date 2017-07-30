function loadBoatData() {
  $.get('/rest/app/restService/' + $('#ddlBoat').val(), function(data) {
    $("#priceWeekend").val(data.PRICEWEEKEND);
    $('#priceWeek').val(data.PRICEWEEK);
    $('#discount').val(data.DISCOUNTRATE);
    $('#discountAfter').val(data.DISCOUNTAFTER);
  });
}

function saveBoatTypeData() {
  var data = {};
  data.BoatTypeId = $('#ddlBoat').val();
  data.PriceWeek = $('#priceWeek').val();
  data.PriceWeekend = $("#priceWeekend").val();
  data.DiscountRate = $('#discount').val();
  data.DiscountAfter = $('#discountAfter').val();

  $.ajax({
    url: '/rest/app/restService',
    data: JSON.stringify(data),
    contentType: 'application/json',
    type: 'PUT',
    success: function(data) {
      alert('Data has been updated!');
    }
  });
}