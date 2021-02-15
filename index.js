const fs = require('fs')

const http = require('http')

const server = http.createServer((req, res) => {
       
       if(req.url == '/'){

        //    // red file ays 

        //      fs.readFile('Home.html', (error, data) => {
        //            res.writeHead(200, {'content-type':'text/html'});
        //            res.write(data);
        //            res.end()
        //      })

          // write file ays 

           fs.writeFile('demo.text','hello world', (error) => {
                     if(error){
                                res.writeHead(200, {'content-type' : 'text/html'})
                                res.write('file write fail');
                                res.end()
                     }else{
                                res.writeHead(200, {'content-type' : 'text/html'})
                                res.write('file write success');
                                res.end() 
                     }
           })
        


       }
})
server.listen(3030)
console.log('server start')

