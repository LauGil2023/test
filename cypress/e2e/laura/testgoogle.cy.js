describe('template spec', () => {

  it('1.- Como usuario quiero buscar cualquier término utilizando la barra de búsqueda única en pantalla. Ejemplo: instagram', () => {
    cy.visit('https://www.google.com')
    cy.get('textarea[name="q"]').type('instagram{enter}')

    cy.get('#search a')
      .invoke('attr', 'href')
      .then((href) => console.log(href))
  })

  it('2.- Después de enviar cualquier búsqueda los usuarios deben ser capaces de ver cuántos resultados se encontraron', () => {
    cy.visit('https://www.google.com')
    cy.get('textarea[name="q"]').type('instagram{enter}')
    cy.get('#result-stats')
    .invoke('clone')
    .then(($el) => {
      $el.find('nobr').remove()
      alert($el.text().trim())
    })
  })

  it('3 Después de enviar cualquier búsqueda los usuarios deben ser capaces de ver cuánto tiempo tomó la búsqueda', () => {
    cy.visit('https://www.google.com')
    cy.get('textarea[name="q"]').type('instagram{enter}')
    cy.get('#result-stats')
    .children('nobr')
    .invoke('text')
    .then((text) => alert('Tiempo de la busqueda ' + text))
  })

  it('4.- Si el término buscado no coincide con ningún resultado, el sistema debe mostrar un mensaje de error. Ejemplo de Busqueda `adoomd255255adad22adavv`', () => {
    cy.visit('https://www.google.com')
    cy.get('textarea[name="q"]').type('adoomd255255adad22adavv{enter}')
  })
})
