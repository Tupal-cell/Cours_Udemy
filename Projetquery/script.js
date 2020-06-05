$(document).ready(function()
{
    var $mainMenuItems = $("#main-menu ul").children("li"),
        totalMainMenuItems = $mainMenuItems.length,
        openIndex = -1,

        init = function(){
            $mainMenuItems.children(".images").click(function(){
                var newIndex = $(this).parent().index();
                $item = $mainMenuItems.eq(newIndex);
                if(openIndex === newIndex){
                    animateItem($item, false, 250);
                    openIndex = -1;
                }
                else
                {
                    if(validIndex(newIndex))
                    {
                        animateItem($mainMenuItems.eq(openIndex), false, 250);
                        openIndex = newIndex;
                        animateItem($item, true, 250);
                    }
                }
            });
        },

        validIndex = function(indexToCheck){
            return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
        },

        animateItem = function($item, toOpen, speed){
            var $colorImage = $item.find(".color"),
            itemParam = toOpen ? {width : "420px"} : {width: "140px"};
            colorImageParam = toOpen ? {left: "0px"}: {left: "140px"};
            $colorImage.animate(colorImageParam, 250);
            $item.animate(itemParam, 250);
        };
        
        init(); 
});