var gulp = require("gulp");
var webserver = require("gulp-webserver");
var path = require("path");
var url = require("url");
var fs = require("fs");
gulp.task("webserver",function(){
    gulp.src("./")
        .pipe(webserver({
            host:"localhost",
            port:9090,
            livereload:true,
            middleware:function(req,res,next){
                var urlObj = url.parse(req.url,true);
                var pathName = path.join(__dirname,"./Data",urlObj.search.split("?")[1]+".json");
                fs.exists(pathName,function(exist){
                    if(!exist){
                        res.writeHead(404);
                        res.end("can no find this file")
                    }else{
                        fs.readFile(pathName,function(err,data){
                            if(err){
                                return conle.err(err);
                            }
                            res.writeHead(200,{
                                "Content-Type":"text.json;charset=utf8"
                            })
                           res.end(data.toString());
                        })
                    }
                })

            }
        }))
})