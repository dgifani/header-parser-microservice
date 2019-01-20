const chai     = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
     
chai.use(chaiHttp);      
const expect = chai.expect;


// In this test we are going to test the header parser microservice

describe('Test the header parser microservice API, assume API running on ../server.js on port 3000', () => {
   
    it('Test GET request on Path  /api/whoami to return language, ipaddress, software which is user agent',  (done) => {
       
        chai.request(server)        
        .get('/api/whoami')
        .set(  'accept-language' , 'en-US,en;q=0.5')
        .set('user-agent' , 'mozila')
        .then((res) => {  
            
            try{
            
                expect(res).to.have.status(200);
                expect(res.body.ipaddress.split(':').slice(-1)[0]).to.equal('127.0.0.1' );
                expect(res.body.language).to.equal('en-US,en;q=0.5');  
                expect(res.body.software).to.equal('mozila');  
                
                done();    
            
            }catch(err){                
                done(err);
            }
        }).catch(function(err){
            done(err);                           
        });
    });
})
// In this test we are going to test invalid request "/"
  
describe('Test the Micro-Service Header parser API for Invalid request, assume API running on ../server.js', () => {

    it('should return 404 if requested for non /api/whoami', (done) => {
        
        chai.request(server)        
        .get('/')
        .then((res) => {  
            
            expect(res).to.have.status(404);                  
            done();    

        }).catch(function(err){
            done(err);
        })
    })
    })

