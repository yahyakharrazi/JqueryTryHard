let delay=0;

$('#ce div').each(function() {
    $(this).delay(delay).hide(2e3)
    delay += 500
})

$('#ce div').each(function() {
    $(this).delay(delay).show(2e3)
    delay += 200
})