it('Update user', () => {
    var newUser = {
        "name": 'Fito',
        "job": 'Bakul Diamond'
    } 
    cy.request('PUT', 'https:reqres.in/api/users/2', newUser).then((response) => {
        expect(response.status).equal(200)
        expect(response.body.name).to.eq(newUser.name)
    })
})

it.only('Succesfully show ability', () => {
    var abilities = {
        "name": 'limber'
    } 
    cy.request('GET', 'https://pokeapi.co/api/v2/ability/7/', abilities).then((response) => {
        expect(response.body.name).to.eq(abilities.name)
    });
})

