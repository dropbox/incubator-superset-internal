# bmpimagejs
pure javascript nodejs library for decoding all bmp files
converted from c library http://www.netsurf-browser.org/projects/libnsbmp/


#npm link<br/>
https://www.npmjs.com/package/bmpimagejs


#install <br/>
npm install bmpimagejs --save

#build<br/>
gulp buildsrc

#test<br/>
gulp runspec

#usage

var bmp=require('bmpimagejs');<br/>
var fs=require('fs');<br/>
fs.readFile('filename', (err, data) => {            
            try{
            
            let img= bmp.decode(data.buffer); 
            //if decoding fails, throws a DecodeError;          
            //otherwise returns an RGBA image object
            console.log(img.width);
            console.log(img.height);
            console.log(img.pixels);
            for(var y=0;y<img.height;++y)
            for(var x=0;x<img.width;++x){
                var pixelPos=y*img.width*4+x*4;
                img.pixels[pixelPos]=10;//set R
                img.pixels[pixelPos+1]=10;//set G
                img.pixels[pixelPos+2]=10;//set B
                img.pixels[pixelPos+3]=10;//set A
            }
            
            }catch(ex){
                console.log(ex.errNumber);
                console.log(ex.message);
            }

        });




