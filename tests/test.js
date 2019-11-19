'use strict'

const http = require('http');


function testMicroservice(microserviceId){
    var resp = '';
    const options = {
        hostname: 'localhost',
        port: 7894,
        path: `/api/sd2019bExam1/microservices/${microserviceId}`,
        method: 'GET'
      };
      console.log('Respuesta inicial', resp);

      http.get(options, (res) => {
        res.on('data', (data) => {
            console.log('Mostró resultado con datos.', JSON.stringify(data));
            resp = data;
          });
        res.on('end', ()=> {
            console.log('Respuesta final:', JSON.parse(resp));
            return JSON.parse(resp);
        });
      });   
}

// testMicroservice('78sdfs78ss-54215s-kss4wq12');

module.exports = testMicroservice;