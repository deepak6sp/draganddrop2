
$(document).ready (function() {

  /* left side bar control panel*/
  $("#side_bar .panel").draggable({
      helper: "clone",
      revert: true
  });

  // unselect everything and close settings panel
  $("#template").on("click",function(e){
  	e.stopPropagation();
  	$(".panel").removeClass("selectedDiv");
    hideSettingsPanelAttribute();
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
              $(this).find(".addText").html("<textarea onblur='textToLabel(this)' class='useOnSave' />");
              $(this).find(".addImage").html("<input class='image' type='file' name='pic' onchange='inputToImage(this)' />");
              // add selectedDiv class on div selection click
						  componenentSelection();
            }
          });
          // add selectedDiv class on div selection click
			  	componenentSelection();
        }
      });
     // add selectedDiv class on div selection click
	  	componenentSelection();
    }
  });

  // look for .selectedDiv class and delete
  $(".deleteSelection").on("click", function(){
  	$("#template .selectedDiv").remove();
  	hideSettingsPanelAttribute();
  });

  // form submit
  $("form").on("submit",function(e){
    e.preventDefault();
    //("#template div").removeClass("ui-draggable ui-draggable-handle ui-droppable panel panel-default");
    if(!$(".wrapper div:first-child").hasClass("initialRow")){
      $("#template .initialRow").remove();
    }

    var formData = {};
    formData.id = $("#hidden_id").val();
    formData.structure=$("#template .wrapper").html();
    $.ajax({
        method: "POST",
        url: "http://localhost/draganddrop2/php/post.php",
        dataType:"html",
        data: formData
    })
    .done(function( data ) {
          console.log("succesfully posted");
    });

    //$("#result").text($("#template .wrapper").html());
  });


  // load template if exist
  var id = $("#hidden_id").val();
  $.ajax({
      method: "GET",
      url: "http://localhost/draganddrop2/php/get.php?id="+id,
      dataType:"html"
  })
  .done(function( data ) {
        $("#template .wrapper").prepend(data);
  });


});
