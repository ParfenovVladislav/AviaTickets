<?php 
include_once($_SERVER['DOCUMENT_ROOT'].'/includes/core.php');
include_once($_SERVER['DOCUMENT_ROOT'].'/includes/header.php');
?>

<div id="main">

    <div id="primary">
        <div id="content" role="main">
            <div class="form-container">
                <div class="response"></div>
                <div class="forms">
                    <fieldset>
                        <table align="center" width="100%" border="1">
                            <tr>
                                <td>
                                    <section>
                                        <label class="select-label">Leaving from:</label>
                                        <input type="text" name="leaving" class="text-input defaultText required email"
                                            title="City or airport" />
                                    </section>
                                </td>
                                <td>
                                    <section>
                                        <label class="select-label">Going to:</label>
                                        <input type="text" name="going" class="text-input defaultText required email"
                                            title="City or airport" />
                                    </section>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <section>
                                        <label class="select-label">Departuring:</label>
                                        <input type="text" id="inputDate" class="text-input defaultText required email"
                                            title="Date" />
                                    </section>
                                </td>
                                <td>
                                    <section>
                                        <label class="select-label">Preferred class:</label>

                                        <div class="text-input defaultText required email">
                                            <select class="new-select-style-wpandyou>
        										<option value=" 1">No preference</option>
                                                <option value="2">First class</option>
                                                <option value="3">Business</option>
                                                <option value="3">Economy</option>
                                            </select>
                                        </div>
                                    </section>
                                </td>
                            </tr>
                        </table>

                        <input type="submit" id="Search" class="btn-submit" />
                    </fieldset>
                </div>


            </div>

            <div id="ticketsDiv">
            </div>

            <div class="map full">
                <iframe width="1040" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                    src="http://maps.google.com/maps?ll=40.967132,29.07403&amp;spn=0.047894,0.132093&amp;vpsrc=6&amp;t=m&amp;z=14&amp;output=embed"></iframe>
            </div>



        </div><!-- #content -->
    </div><!-- #primary -->


</div><!-- #main -->

<footer id="colophon" role="contentinfo">
    <div id="site-generator">
        Copyright 2019 - Parfenov & Nekrut
    </div>

</footer><!-- #colophon -->
</div><!-- #wrapper -->
</div><!-- #page -->

<script type="text/javascript" src="style/js/scripts.js"></script>
</body>

<script>
$('#Search').click(function() {
    var area = $("#ticketsDiv");
    area.load("TicketsTableCreater.php");
});


$(document).ready(function() {

    // assuming the controls you want to attach the plugin to
    // have the "datepicker" class set
    $('#inputDate').Zebra_DatePicker();
});
</script>

</html>