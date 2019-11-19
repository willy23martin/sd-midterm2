const testMicroservice = require('./test');

test('Test Microservices API - GET', function() {
    expect(
        testMicroservice('78sdfs78ss-54215s-kss4wq12')
    ).toBe(
        {
            "status": "200 OK",
            "message": `Microservices API works for microserviceId: 78sdfs78ss-54215s-kss4wq12`,
            "webServerLocation": {
                apiServiceAddress: '192.168.130.23'
        }
    }
    );
  });