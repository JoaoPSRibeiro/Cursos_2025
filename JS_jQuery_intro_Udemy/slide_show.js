$(function(){
    $('#l1').click(function(){
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
        $('#i2').show();
    });
    $('#l2').click(function(){
        $('#i1').hide();
        $('#i3').hide();
        $('#i4').hide();
        $('#i2').show();
    });
    $('#l3').click(function(){
        $('#i2').hide();
        $('#i1').hide();
        $('#i4').hide();
        $('#i3').show();
    });
    $('#l4').click(function(){
        $('#i3').hide();
        $('#i2').hide();
        $('#i1').hide();
        $('#i4').show();
    });

});