
/*-----------------------------------------------------------------------------------*/
/*	FORM
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {
	$('#inputDate').DatePicker();
	
	$('input[title]').each(function() {
		if($(this).val() === '') {
			$(this).val($(this).attr('title'));	
		}
		
		$(this).focus(function() {
			if($(this).val() == $(this).attr('title')) {
				$(this).val('').addClass('focused');	
			}
		});
		$(this).blur(function() {
			if($(this).val() === '') {
				$(this).val($(this).attr('title')).removeClass('focused');	
			}
		});
	});
});

var departurePointCode;
var arrivalPointCode;

var dIsAirport = 0;
var aIsAirPort = 0;

$(function() {
  $("#departurePoint").autocomplete({
    source: function(request, response) {
      $.ajax({
        url: "http://autocomplete.travelpayouts.com/places2",
        dataType: "jsonp",
        data: {
          term: request.term,
          types: ["airport","city"],
          locale: "ru"
        },
        success: function (data) {
          response(
            $.map(data.slice(0, 5), function (item) {
              if (item.type == "city") {
                return {
                  label: item.name + ", " + item.country_name,
                  code: item.code,
                  type: 0,
                };
              }
              else{
                return {
                  label: item.name + ", " + item.country_name,
                  code: item.code,
                  type: 1,
                };
              }
            })
          );
        }
      });
    },
    minLength: 2,
    select: function(event, ui) {
      if (ui.item.type == 1)
      {
        dIsAirport = 1;
      }
      else{
        dIsAirport = 0;
      }
      departurePointCode = ui.item.code;
    }
  });
});

$(function() {
  $("#arrivalPoint").autocomplete({
    source: function(request, response) {
      $.ajax({
        url: "http://autocomplete.travelpayouts.com/places2",
        dataType: "jsonp",
        data: {
          term: request.term,
          types: ["airport","city"],
          locale: "ru"
        },
        success: function(data) {
          response(
            $.map(data.slice(0, 5), function (item) {
              if (item.type == "city") {
                return {
                  label: item.name + ", " + item.country_name,
                  code: item.code,
                  type: 0,
                };
              }
              else{
                return {
                  label: item.name + ", " + item.country_name,
                  code: item.code,
                  type: 1,
                };
              }
            })
          );
        }
      });
    },
    minLength: 2,
    select: function(event, ui) {
      if (ui.item.type == 1)
      {
        aIsAirport = 0;
      }
      else{
        aIsAirport = 1;
      }
      arrivalPointCode = ui.item.code;
    }
  });
});

function getTickets() {

  var preferenceVal = $("#selectPreference option:selected").val();
  var flightDate = $("#inputDate").val();
  var area = $("#ticketsDiv");
  area.load("TicketsTableCreater.php", {
    dAirport : dIsAirport,
    aAirport : aIsAirPort,
    dPoint: departurePointCode,
    aPoint: arrivalPointCode,
    fdate: flightDate,
    preference : preferenceVal,
  });
}


/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
ddsmoothmenu.init({
	mainmenuid: "menu",
	orientation: 'h',
	classname: 'menu',
	contentsource: "markup"
})

