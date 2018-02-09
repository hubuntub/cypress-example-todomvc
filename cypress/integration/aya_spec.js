describe('TodoMVC', function () {

  let VANILLA_JS = 'Vanilla 2018'
  let REX_SEO = 'Rex Seo'
  let VR = 'WebVR'
  let GRAPHQL = 'GraphQL'

  beforeEach(function () {
    cy.visit('/')
  })


  it('should allow me to add ', function () {
    cy.get('.new-todo').type(VANILLA_JS).type('{enter}')

    cy.get('.todo-list li').eq(0).find('label').should('contain', VANILLA_JS)


    cy.get('.new-todo').type(REX_SEO).type('{enter}')

    cy.get('.todo-list li').eq(1).find('label').should('contain', REX_SEO)


    cy.get('.new-todo').type(VR).type('{enter}')

    cy.get('.todo-list li').eq(2).find('label').should('contain', VR)


    cy.get('.new-todo').type(GRAPHQL).type('{enter}')

    cy.get('.todo-list li').eq(3).find('label').should('contain', GRAPHQL)

    cy.get('.toggle-all').check()

    cy.get('.todo-list li').eq(0).should('have.class', 'completed')
    cy.get('.todo-list li').eq(1).should('have.class', 'completed')
    cy.get('.todo-list li').eq(2).should('have.class', 'completed')

  })
})
