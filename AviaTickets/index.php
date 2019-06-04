<?php 
include_once($_SERVER['DOCUMENT_ROOT'].'/includes/core.php');
include_once($_SERVER['DOCUMENT_ROOT'].'/includes/header.php');
?>

<div id="main">

    <div id="primary">
        <div id="content" role="main">
            <div class="form-container">
                <div class="forms">
                    <fieldset>
                        <table align="center" width="100%" border="1">
                            <tr>
                                <td>
                                    <section>
                                        <div><b>Откуда:</b></div>
                                        <input type="text" name="leaving" id ="departurePoint" class="text-input"
                                            title="Введите город" />
                                    </section>
                                </td>
                                <td>
                                    <section>
                                        <div><b>Куда:</b></div>
                                        <input type="text" name="going" id ="arrivalPoint" class="text-input"
                                            title="Введите город" />
                                    </section>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <section>
                                        <div><b>Дата отправления:</b></div>
                                        <input type="text" id="inputDate" class="text-input"
                                            title="Выберите дату" />
                                    </section>
									
                                </td>

<!--	                                <td>
                                    <section>
                                        <div><b>Предпочтение:</b></div>

								<div class="select-box">
									<label for="select-box1" class="label select-box1"><span class="label-desc">Нет предпочтений</span></label>
										<select id="select-box1" class="select">
										<option value="">Нет предпочтений</option>
                                                <option value="cost">Девешле</option>
                                                <option value="duration">Быстрее</option>
									</select>
									</div>
									
                                    </section>
                                </td> -->
                            </tr>
                        </table>
						<br>
                        <input type="submit" id="Search" class="btn-submit" value="Подобрать" onclick='getTickets();'/>
                    </fieldset>
                </div>


            </div>

            <div id="ticketsDiv">
            </div>

        </div><!-- #content -->
    </div><!-- #primary -->


</div><!-- #main -->

<footer id="colophon" role="contentinfo">
    <div id="site-generator">
        Copyright 2019 - Парфенов & Некрут
    </div>

</footer><!-- #colophon -->


</body><script>
$("select").on("click" , function() {
  
  $(this).parent(".select-box").toggleClass("open");
  
});

$(document).mouseup(function (e)
{
    var container = $(".select-box");

    if (container.has(e.target).length === 0)
    {
        container.removeClass("open");
    }
});


$("select").on("change" , function() {
  
  var selection = $(this).find("option:selected").text(),
      labelFor = $(this).attr("id"),
      label = $("[for='" + labelFor + "']");
    
  label.find(".label-desc").html(selection);
    
});
$('#Search').click(function() {
    var area = $("#ticketsDiv");
    area.load("TicketsTableCreater.php");
});
</script>
</html>