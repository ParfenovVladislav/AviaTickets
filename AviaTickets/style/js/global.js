
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

var dIsAirport = false;
var aIsAirport = false;

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
        dIsAirport = true;
      }
      else{
        dIsAirport = false;
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
        aIsAirport = true;
      }
      else{
        aIsAirport = false;
      }
      arrivalPointCode = ui.item.code;
    }
  });
});

function getTickets() {

  var preferenceVal = $("#select-box1 option:selected").val();
  var flightDate = $("#inputDate").val();
  var area = $("#ticketsDiv");

  if (departurePointCode == null){
    alert("Укажите пункт отправления");
    return;
  }

  if (arrivalPointCode == null){
    alert("Укажитп пункт назначения");
    return;
  }

  if (flightDate == null){
    alert("Выберите дату");
    return;
  }
  var preferenceVal = $("#select-box1 option:selected").val();
  var flightDate = $("#inputDate").val();
  var area = $("#ticketsDiv");

  var a = "no";
  var d = "no";

  if(dIsAirport)
  {
    d = "yes";
  }

  if(aIsAirport)
  {
    a = "yes";
  }
  
  area.load("TicketsTableCreater.php", {
    dAirport : d,
    aAirport : a,
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

