$('#ajax').click(function(){
    $('#names').hide();
var url = "./name.json";
$.getJSON(url, function(response){

    var htmlresponse = '<ul class="ul-style">';
    $.each(response, function(index, person){
        htmlresponse +=`<li>Name: ${person.name} Age: ${person.age}</li>`;

    });//each
    htmlresponse += '</ul>'
    $('#inner-html').html(htmlresponse);

});//GetJSON
});//ready


$(function(){
$('#submit').on('click', function(event){
    event.preventDefault();
    var newName = {name: $('#sign-name').val(), 
                   age: $('#sign-age').val()};
    
    $.ajax({
        type: 'POST',
        url: '/name.json',
        data: newName,
        dataType: 'json',
        success: function(newData){
            alert(newData);
        },//Success
        error: function(){
            console.log("error")
        }
    });//Ajax

});//Submit

});//Load