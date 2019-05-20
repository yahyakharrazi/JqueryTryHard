var $total=0
$('#ce table tr').each(function() {
    var $tds = $(this).find('.r')
    if($tds.length ==3){
        $tds.eq(2).text(parseInt($tds.eq(0).text()) * parseInt($tds.eq(1).text()))
        $total += parseInt( $tds.eq(2).text() )
    }
    else{
        $tds.eq(1).text('' + $total.toString())
        //format($tds.eq(1).text())
        
    }
})

function format(value){
    var formatted = value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    console.log(formatted);

}

format(23345.6)