/*describe('REQRES API Test Suite',function()
{
    it('list user-GET',function()
    {
        cy.request('GET','https://reqres.in/api/users?page=2')
    })

    it('create-POST',function()
    {
        var user=
        {
            "name": "morpheus",
            "job": "leader"
        }
     cy.request('POST','https://reqres.in/api/users')
    }) 
})*/


//Method 2
/*context('REQRES API Test Suite',()=>
{
    it('list user-GET',()=>
    {
        cy.request('GET','https://reqres.in/api/users?page=2').then({response}=>
        {
            expect(response.status).equal(200)
        })
    })
})*/


//Method 3
/*describe('REQRES API Test Suite',function()
{
    it('list user-GET',function()
    {
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users?page=2'
        })
    });
});*/


//Assertions
describe('REQRES API Test Suite',function()
{
    it('list user-GET',function()
    {
        cy.request('GET','https://reqres.in/api/users?page=2')
        .then(function(response)
        {
            expect(response.status).equal(200)
            expect(response.body.data[0].first_name).equal('Michael')
        })
    })
    it('create-POST',function()
    {
        var user=
        {
            "name": "fortune",
            "job": "tester"
        }
        cy.request('POST','https://reqres.in/api/users',user)
        .then(function(response)
        {
            expect(response.status).equal(201)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
        })
    })
})
