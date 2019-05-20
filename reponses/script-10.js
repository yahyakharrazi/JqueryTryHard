    $('#ce img').mousemove(function (e) { 
        //horizontal position of the mouse
        let posX = e.offsetX
        //vertical position of the mouse
        let posY = e.offsetY
        
        $('.box').css({
            'display':'inline-block',
            'background-image':'url("../interface/images/monalisa-orig.png")',
            'background-repeat':'no-repeat',
            'background-position':(-posX*4.9)+'px '+(-posY*4.5)+'px'
        })

        //console.log('offset : '+e.offsetX +' page x: '+ e.pageX)
//        console.log(e.offsetX)
        
    })

    $('#ce img').mouseout(function () {
        //hiding the background when leaving the hover
        $('.box').css({"background-image":"none"})
    })