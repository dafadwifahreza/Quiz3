describe ('API Testing Data Acces', () => {
    it('List User', ()=>{
        cy.request('GET',"https://reqres.in/api/users?page=2")
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('data')
            })  
    })
    
    it('Single User Not Found', ()=>{
        cy.request ({
            method:'GET',
            url:'https://reqres.in/api/users/23',
            failOnStatusCode: false,
            headers:{
                'x-api-key': 'reqres-free-v1'
            }  
        })
        .then((response) => {
            expect(response.status).to.eq(404)
        })  
    })  

     it('Single Resource User Not Found', ()=>{
        cy.request ({
            method:'GET',
            url:'https://reqres.in/api/unknown/23',
            failOnStatusCode: false,
            headers:{
                'x-api-key': 'reqres-free-v1'
            }  
        })
        .then((response) => {
            expect(response.status).to.eq(404)
        })  
    })  
    

    it('Single User', ()=>{
        cy.request('GET',"https://reqres.in/api/users/2")
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.data).to.have.property('id')
            })  
    })  

    it('List Resource', ()=>{
        cy.request ({
            method:'GET',
            url:'https://reqres.in/api/unknown',
            headers:{
                'x-api-key': 'reqres-free-v1'
            }  
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.data).to.be.an('array');
            expect(response.body.data).to.have.length(6);
        }) 
    })

    it('Single Resource', ()=>{
        cy.request ({
            method:'GET',
            url:'https://reqres.in/api/unknown/2',
            headers:{
                'x-api-key': 'reqres-free-v1'
            }  
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('data');
        }) 
    })

    it('Create User', ()=>{
        cy.request({
            method:'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "dafa",
                "job": "digital marketing",
                "id" : "123"
            },
            headers:{
                'x-api-key': 'reqres-free-v1'
            }     
        })     
        .then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('name', 'dafa')
            expect(response.body).to.have.property('job', 'digital marketing')
            expect(response.body).to.have.property('id', '123')
        })  
    })   

    it('Update User', ()=>{
        cy.request({
            method:'PUT',
            url: 'https://reqres.in/api/users/2',
            body: {
                "name": "dafa",
                "job": "front end",
                "id" : "19"
            },
            headers:{
                'x-api-key': 'reqres-free-v1'
            }     
        })     
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('name', 'dafa')
            expect(response.body).to.have.property('job', 'front end')
            expect(response.body).to.have.property('id', '19')
            expect(response.body).to.have.property('updatedAt')
        })  
    })  

    it('Update Patch User', ()=>{
        cy.request({
            method:'PATCH',
            url: 'https://reqres.in/api/users/2',
            body: {
                "name": "fahreza",
                "job": "back end",
                "id" : "82"
            },
            headers:{
                'x-api-key': 'reqres-free-v1'
            }     
        })     
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('name', 'fahreza')
            expect(response.body).to.have.property('job', 'back end')
            expect(response.body).to.have.property('id', '82')
            expect(response.body).to.have.property('updatedAt')
        })  
    })  

    it('Delete User', ()=> {
         cy.request ({
            method:'DELETE',
            url:'https://reqres.in/api/users/2',
            headers:{
                'x-api-key': 'reqres-free-v1'
            }  
        })
        .then((response) => {
             expect(response.status).to.eq(204)
        })
    })

    it('Register User', () => {
        cy.request({
            method:'POST',
            url: 'https://reqres.in/api/register',
            body: {
                email: 'eve.holt@reqres.in',
                password: 'pistol'
            },
            headers:{
                'x-api-key': 'reqres-free-v1'
            }  
        })   
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('token')
        })
    })   

    it('Register Failed', () => {
        cy.request({
            method:'POST',
            url: 'https://reqres.in/api/register',
            failOnStatusCode: false,
            body: {
                email: 'sydeney@fife'
            },
            headers:{
                'x-api-key': 'reqres-free-v1'
            }  
        })   
        .then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error', 'Missing password')
        })
    })   

    it('Login User', () => {
        cy.request({
            method:'POST',
            url: 'https://reqres.in/api/login',
            body: {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka'
            },
            headers:{
                'x-api-key': 'reqres-free-v1'
            }  
        })   
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('token')
        })
    })   

     it('Login Failed', () => {
        cy.request({
            method:'POST',
            url: 'https://reqres.in/api/login',
            failOnStatusCode: false,
            body: {
                email: 'dafadwi@gmail.com'
            },
            headers:{
                'x-api-key': 'reqres-free-v1'
            }  
        })   
        .then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error', 'Missing password')
        })
    })   
})