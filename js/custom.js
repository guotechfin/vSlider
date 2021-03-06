function vSlider(v){
    //main class
    var v = v;
    //nav menu class active
    var a1 ='nav-active';
    //article class active
    var a2 ='article-active';
    
    //change class menu / article
    var changeClassNavArticle= function(currentEl, nextEl){       
        //change class on menu
        currentEl.removeClass(a1);
        nextEl.addClass(a1);

        //change active slide
        link = $(nextEl.attr('href'));
        $(v).find('.' + a2).removeClass(a2);
        link.addClass(a2);
    };
    
    //when click on menu change active class
    $('nav ul a').on('click', function(el, currentEl){
        //variables
        el = $(this);
        //find
        //nav
        currentEl = $(v + ' nav ul').find('.' + a1);;
        el.addClass(a1);
        changeClassNavArticle(currentEl,el);
    });
    
    //show menu on hover
    var nav = $(v + ' nav');
    nav.hover(function(){
        nav.addClass('nav-on');
    }, function(){
        nav.removeClass('nav-on');
    })
    nav.on('click','.close', function(){
       nav.toggleClass('nav-on');
    });
    
    //on keydown change slide
    $(document).keydown(function(key, currentEl, nextEl, lastEl){
        //find every time when you press button
        currentEl = $(v + ' nav ul').find('.' + a1);;
        
        //key arrow up
        if(key.keyCode == 38){       
            nextEl = currentEl.parent().prev().find('a');      
            lastEl = currentEl.parent().parent().find('li').last().find('a');

            if(nextEl.length == 0){
               nextEl=lastEl;
            }           
            changeClassNavArticle(currentEl, nextEl);
        }
        //key arrow down
        if(key.keyCode == 40){
            nextEl = currentEl.parent().next().find('a');      
            firstEl = currentEl.parent().parent().find('li').first().find('a');

            if(nextEl.length == 0){
               nextEl=firstEl;
            }        
            changeClassNavArticle(currentEl, nextEl);
        }
    });
}

$(document).ready(function(){     
    vSlider('.vslider');
})