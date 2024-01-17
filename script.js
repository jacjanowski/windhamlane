$('form').submit(function(e){
    e.preventDefault();      
    
    $.ajax({
        method: 'POST',
        url: 'https://formsubmit.co/ajax/4a08e6314abc8d4311bab795a95bba0b',
        dataType: 'json',
        accepts: 'application/json',
        data: {
            message: $("#email").val()
        },
        success: (data) => {$("#success").css("display", "block"), $("form").css("display", "none")},
        error: (err) => $("#failure").css("display", "block")
    });
})