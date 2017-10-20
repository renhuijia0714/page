app.factory("server",function($http,$q){
    return {
        getData:function(){
            var def = $q.defer()
            $http({
                method:"get",
                url:"./Data/data.json"
            }).then(function(data){
                def.resolve(data);
            },function(err){
                def.reject(err);
            })
        }
    }
})