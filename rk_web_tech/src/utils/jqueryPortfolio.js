export const jqueryPortfolio = () => {
  return `$(document).ready(function(){
        var mixer = mixitup('.portfolio-list');
        let hash = window.location.hash;
        if(hash != ''){
            $('.portfolio-menu ul li').removeClass('mixitup-control-active');
            $('.portfolio-menu ul li').each(function(index, el){
                if($(el).attr('data-filter') == '.design' && hash == '#design'){
                    $(el).addClass('mixitup-control-active');
                    $(el).trigger('click');
                }
                if($(el).attr('data-filter') == '.web' && hash == '#web'){
                    $(el).addClass('mixitup-control-active');
                    $(el).trigger('click');
                }
                if($(el).attr('data-filter') == '.apps' && hash == '#mobile'){
                    $(el).addClass('mixitup-control-active');
                    $(el).trigger('click');
                }
            })
            mixer.forceRefresh();
            mixer.forceRender();
        }else {
            $('.portfolio-menu ul li:first-child').addClass('mixitup-control-active');
            mixer.forceRefresh();
            mixer.forceRender();
            $('.portfolio-menu ul li:first-child').trigger('click');
        }
    });

    //portfolio logo page    
    $(".logo-banner").hide();
    $(".filter").on('click', function() {
        if($(this).data("filter") == ".logo-banner"){
            $(".logo-banner").show();
        }else if($(this).data("filter") != ".logo-banner"){ 
            $(".logo-banner").hide();
        }
    });`;
};
