$(document).ready(function () {
    let thisValue = 0;
    let valueOne = 0;
    let valueTwo = 0;

    $('.x1').click(function (event) {
        $('.symbl').css({ 'pointer-events': 'auto' })
        if ($('.x1').hasClass('first-active')) {
            thisValue = $(this).text();
            $('.valueOne').append(thisValue);
            valueOne = $('.valueOne').text();
        } else if ($('.x1').hasClass('second-active')) {
            thisValue = $(this).text();
            $('.valueTwo').append(thisValue);
            valueTwo = $('.valueTwo').text();
        }
    });

    $('.symbl').click(function () {
        symbl = $(this).html();
        $('.valueSymbl').text(symbl);
        symbl = $('.valueSymbl').text();
        $('.x1').removeClass('first-active').addClass('second-active')
    })

    $('#equal').click(function () {
        valueOne = parseFloat(valueOne);
        valueTwo = parseFloat(valueTwo);
        if (symbl == '+') valueOne += valueTwo
        if (symbl == '-') valueOne -= valueTwo
        if (symbl == '×') valueOne = valueOne * valueTwo
        if (symbl == '÷') valueOne = valueOne / valueTwo


        $('.valueOne').text(valueOne);
        $('.valueSymbl').text('');
        $('.valueTwo').text('');
    })

    $('#clear').click(function () {
        $('.x1').addClass('first-active')
        $('.symbl').css({ 'pointer-events': 'none' })

        $('.valueOne').text('');
        $('.valueSymbl').text('');
        $('.valueTwo').text('');

    })
})