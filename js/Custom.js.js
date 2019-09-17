//  show and hide 

$(document).ready(function()
  {
    'user restrict';
    $(window).scroll(function()
           {
         'user restrict';
                if($(window).scrollTop()<80)
                    {
                        $('.navbar').css({
                            'margin-top':'-100px',
                            'opacity':'0' 
                        });
                        $('.navbar-default').css({
                            'background-color':'rgba(59,59,59,0)'
                        })
                    }
                  else{
                          $('.navbar').css({
                            'margin-top':'0px',
                            'opacity':'1'
                        });
                       $('.navbar-default').css({
                            'background-color':'rgba(59,59,59,0.7)',
                           'border-color':'#444'
                        })
                      }
         
               })
    
})