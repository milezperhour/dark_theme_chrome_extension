/**
* chrome://extensions
* Check off developer mode
* Load unpacked extensions
*/
var allElements = $('*');
var allElementsButA = $('*:not(a)');

$(document).ready(function(){
    console.log('CHROME EXTENSION');
    IDEColorTheme();
})

function IDEColorTheme(){
    $('*:not(pre, code, code>span)').css({
        'background-color':'#1F2025',
        'color':'#809bbd',
        'font-family': 'Monospace'
    });

    $('a').css({
        'color':'#ddca7e'
    });

    $('pre, code, code>span, cite, #metadata-line span').css({
        'background-color': '#35363a',
        'color':'#d0782a'
    });

    $("body':contains('('),body':contains(')')").css("color","red")
    //$('pre, code, span').css('background-color', '#4C4D4E');

     //var fontSize = node.css('font-size').slice(0, -2);
     //#d0782a
}
