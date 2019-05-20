$(function(){
    $(document).keydown(function(evt){
         evt.preventDefault()
         evt.stopPropagation()
         //moving div through shift+arrowkey
         if(evt.shiftKey && evt.keyCode >= 37 && evt.keyCode <=40){
            if(evt.keyCode == 40){
                //down arrow
                if(($('.box').position().top-$('#ce').position().top)>($('#ce').height() - 50)){
                    $('.box').animate({
                        top: $('#ce').height
                    });
                }
                else{
                    $('.box').animate({
                        top: '+=20'
                    });
                }
            }
            else if(evt.keyCode == 37){
                //left arrow
                if(($('.box').position().left-20)<($('#ce').position().left)){
                    $('.box').animate({
                        left: $('#ce').position().left
                    });
                }
                else{
                    $('.box').animate({
                        left: '-=20'
                    });
                }

                $(console.log($('.box').position()))
            }
            else if(evt.keyCode == 38){
                //up arrow
                if(($('.box').position().top-20)<($('#ce').position().top)){
                    $('.box').animate({top: 0});
                }
                else{
                    $('.box').animate({top: '-=20'});
                }
                $(console.log($('#ce').position()))
            }
            else if(evt.keyCode == 39){
                //right arrow
                if(($('.box').position().left+20)>($('#ce').width())){
                    $('.box').animate({left: $('#ce').width()});
                }
                else{
                    $('.box').animate({left: '+=20'});
                }
                $(console.log($('.box').position()))
            }                                
        }


        
        //moving div through shift+2keys
        // var keyss = [];
        // $(document).keydown(function (e) {
        //     keyss.push = e;
        //     console.log(keyss.count)

        // });

        // $(document).keyup(function (e) {
        //     keyss.splice();
        //     console.log(keyss.count)
        // });


    })
})