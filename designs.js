// Select color input

// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$( "#sizePicker" ).submit(function( event ) {
    event.preventDefault();
    height = $("#inputHeight").val();
    width = $("#inputWeight").val();
    makeGrid(height, width);


  });


function makeGrid(height, width) {
$('table tr').remove();
// Your code goes here!
for (var i= 1; i <= height; i++ ){
  $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
  for (var j= 1; j <= width; j++ ){
    $('#table' + i).append('<td></td>');
  }
}
// add color to  table cell
$('td').click(function addColor() {
  color = $('#colorPicker').val();

  if($(this).attr('style')){
    $(this).removeAttr('style')
  }else{
    $(this).attr('style','background-color:' + color)
  }

})
}
