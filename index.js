$(function(){
    //console.log('document ready');
    $('form').on('submit',event => {
        event.preventDefault();
        const number = $('#number-choice').val();
        //console.log(number);
        const results = [];
        for(let i = 1; i <= number ; i++){
            if(i % 15 === 0){
                results.push($(
                    '<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'
                ));
            }
            else  if(i % 5 === 0){
                results.push($(
                    '<div class="fizz-buzz-item buzz"><span>buzz</span></div>'
                ));
            }
            else  if(i % 3 === 0){
                results.push($(
                    '<div class="fizz-buzz-item fizz"><span>fizz</span></div>'
                ));
            }
            else {
                results.push($(
                    `<div class="fizz-buzz-item "><span>${i}</span></div>`
                ));
            }
        }
        //console.log(results);
        $(".js-results").empty();
        $(".js-results").append(results);
    })
});