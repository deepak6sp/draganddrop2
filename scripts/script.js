
$(document).ready (function() {
  var editor;
  /* left side bar control panel*/
  $("#side_bar .panel").draggable({
      helper: "clone",
      revert: true
  });
  /*actual control panel that use for template export*/
  $( "#template" ).droppable({
    accept: ".row",
    drop: function(event,ui){
      $(".wrapper .initialRow").html("");
      $($(ui.draggable).clone()).insertBefore(".wrapper .initialRow");
      $(".initialRow").prev().html("");
      $(".wrapper .row").droppable({
        accept: ".columns",
        drop: function(event,ui){
          $(this).append($(ui.draggable).clone());
          $(".wrapper .columns").droppable({
            accept: ".addText,.addImage",
            drop: function(event,ui){
              $(this).find(".columnText").html("");
              $(this).prepend($(ui.draggable).clone());
              $(this).find(".addText").html("<textarea onfocus='openEditor(this)' onblur='closeEditor(this)' class='useOnSave' />");
              $(this).find(".addImage").html("<input class='image' type='file' name='pic' onchange='inputToImage(this)' />");
              // add selectedDiv class on div selection click
						  componenentSelection(this);
            }

          });
          // add selectedDiv class on div selection click
			  	componenentSelection(this);
        }

      });
     // add selectedDiv class on div selection click
	  	componenentSelection(this);
    }
  });

  // look for .selectedDiv class and delete
  $(".deleteSelection").on("click", function(){
  	$("#template .selectedDiv").remove();
  	hideSettingsPanelAttribute();
  });

});