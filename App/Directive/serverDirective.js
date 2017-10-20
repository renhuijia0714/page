app.directive("serverDirective",function(){
    return {
        restrict:"EA",
        templateUrl:"./App/View/temp/_server.html",
        link:function(){

          var mySwiper = new Swiper(".swiper-container",{
                    direction:"horizontal",
                    loop:true,
                    pagination:".swiper-pagination",
                    autoplay:3000
                    //paginationType:"progress"

        })
            console.log($(".main").scrollTop())
            //var str = '';
            //if($(document).scrollTop()>100){
            //    for(var i=0;i<2;i++){
            //        str += "<dl><dd><p>"+1111+"</p> <p>"+4545454+"</p> <p><span>"+1+"元</span><del>"+1.44+"万</del></p></dd><dt><img src='Content/image/car_02.gif'></dt></dl>";
            //    }
            //    $('.box4').append(str);
            //}

            $('.btn').on('click',function(){
                //$(document).scrollTop()==0
                var str = '';
                for(var i=0;i<2;i++){
                    str += "<dl><dd><p>"+1111+"</p> <p>"+4545454+"</p> <p><span>"+1+"元</span><del>"+1.44+"万</del></p></dd><dt><img src='Content/image/car_02.gif'></dt></dl>";
                }
                $('.box4').append(str);
            })
        }
     }
})