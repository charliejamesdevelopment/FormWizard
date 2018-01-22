(function ( $ ) {
 
    $.fn.wizard = function(options) {
        var a = this;
        var count = 0;
        $(a).children("section").each(function() {
            if(count != 0) {
                $(this).hide()
            }
            
            count++;
            $(this).prepend("<h5 class='display-5 wizard_form_title'>" + $(this).attr("title") + "</h5>")
            $(this).attr("value", count+"_wizard_form")
        })
        
        var pVar="";
        pVar += "<div class=\"wizard_form_progress_bar_div\">";
        pVar += "   <div class=\"row\">";
        for(var i = 0; i < count; i++) {
            if(i == 0) {
                pVar += "<div id='wizard_progress_" + i + "' class='col-sm wizard_form_progress_bar wizard_form_progress_bar_active'></div>"
                continue;
            }
            pVar += "<div id='wizard_progress_" + i + "' class='col-sm wizard_form_progress_bar'></div>"
        }
        pVar += "   ";
        pVar += "   <\/div>";
        pVar += "<\/div>";

        
        $(a).prepend(pVar)
        
        var currentStep = 1;
        
        var strVar="";
        strVar += "<div class=\"wizard_form_pagination\">";
        strVar += "   <div class=\"wizard_step\">";
        strVar += "    Step <span id='wizard_step_coord'>" + currentStep + "</span>";
        strVar += "   <\/div>";
        strVar += "";
        strVar += "   <div class=\"wizard_pagination\">";
        strVar += "      <button type='button' id=\"wizard_pagination_previous\" class=\"btn btn-warning\">Previous<\/button>";
        strVar += "      <button type='button' id=\"wizard_pagination_next\" class=\"btn btn-info\">Next<\/button>";
        strVar += "   <\/div>";
        strVar += "<\/div>";
        
        $(a).append(strVar)
        
        $("#wizard_pagination_next").click(function() {
            
            if(currentStep < count) {
                currentStep = currentStep + 1;
                
                for(var i = 0; i < currentStep; i++) {
                    $("#wizard_progress_" + i).addClass("wizard_form_progress_bar_active");
                }
                
                a.children("section").each(function() {
                    var value = $(this).attr("value");
                    if(value == (currentStep + "_wizard_form")) {
                        $(this).show()
                        
                        if(currentStep == count) {
                            $("#wizard_pagination_next").hide();
                            if ($("#wizard_pagination_submit" ).length) {
                                $( "#wizard_pagination_submit" ).show();
                            } else {
                                $(".wizard_form_pagination .wizard_pagination").append("<button id='wizard_pagination_submit' class='btn btn-success'>Submit</button>")
                            }
                        } else {
                            $("#wizard_pagination_next").show();
                        }
                    } else {
                        $(this).hide()
                    }
                })
                
                $("#wizard_step_coord").text(currentStep)
            }
                
        })
        
        $("#wizard_pagination_previous").click(function(event) {
            
            if(currentStep > 1) {
                currentStep = currentStep - 1;
                
                for(var i = 0; i < count; i++) {
                    $("#wizard_progress_" + i).removeClass("wizard_form_progress_bar_active");
                }
                
                for(var i = 0; i < currentStep; i++) {
                    $("#wizard_progress_" + i).addClass("wizard_form_progress_bar_active");
                }
                if(currentStep != count) {
                    $("#wizard_pagination_next").show();
                    $("#wizard_pagination_submit").hide()
                }
                
                a.children("section").each(function() {
                    var value = $(this).attr("value");
                    if(value == (currentStep + "_wizard_form")) {
                        $(this).show()
                    } else {
                        $(this).hide()
                    }
                })
                
                $("#wizard_step_coord").text(currentStep)
            }
        });
        
    };
 
}(jQuery));
