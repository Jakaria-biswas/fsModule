const fs = require('fs')

const http = require('http')

const server = http.createServer((req, res) => {




        // get request through url get data form server - simple way
               // if(req.url == '/'){
               //       res.writeHead(200, {'context-type': 'text/html'});
               //       res.write('<h1>this is home page</h1>');
               //       res.end()
               // }else if(req.url == '/about'){
               //       res.writeHead(200, {'context-type': 'text/html'});
               //       res.write('<h1>this is about page</h1>');
               //       res.end()
               // }else if(req.url == '/contact'){
               //       res.writeHead(200, {'context-type': 'text/html'});
               //       res.write('<h1>this is contact page</h1>');
               //       res.end()
               // }


           

            

                  //    // red file ays 

                  //      fs.readFile('Home.html', (error, data) => {
                  //            res.writeHead(200, {'content-type':'text/html'});
                  //            res.write(data);
                  //            res.end()
                  //      })





                     // write file ays way

                  //     fs.writeFile('demo.text','hello world', (error) => {
                  //               if(error){
                  //                          res.writeHead(200, {'content-type' : 'text/html'})
                  //                          res.write('file write fail');
                  //                          res.end()
                  //               }else{
                  //                          res.writeHead(200, {'content-type' : 'text/html'})
                  //                          res.write('file write success');
                  //                          res.end() 
                  //               }
                  //     })


                  //write file sync way

                      let error = fs.writeFileSync('demoSync.html', 'welcome to file sync');
                      if(error){
                               res.writeHead(200, {'content-type' : 'text/html'})
                               res.write('file write sync way fail');
                               res.end()
                      }else{
                               res.writeHead(200, {'content-type':'text/html'})
                               res.write('file write sync way success');
                               res.end()
                      }
                  


      
})
server.listen(3030)
console.log('server start')

