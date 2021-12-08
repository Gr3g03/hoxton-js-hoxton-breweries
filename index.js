// Write your code here
//aside class="filters-section">

const filtersSection = document.querySelector('.filters-section')


function renderingFilterSection(){
    // filtersSection.innerHTML= ``
    const h2El = document.createElement('h2')
    h2El.textContent = 'Filter By:'

    const filterByTypeForm = document.createElement('form')
    filterByTypeForm.setAttribute('id', 'filter-by-type-form')
    filterByTypeForm.setAttribute('autocompete', 'off')

    const filterByTypeLabelEl = document.createElement('label')
    filterByTypeLabelEl.setAttribute ('for', 'filter-by-type')
    
    const h3El = document.createElement('h3')
    h3El.textContent = 'Type of Brewery'
    
    const filterByTypeSelectEl = document.createElement('select')
    filterByTypeSelectEl.setAttribute('name', 'filter-by-type')
    filterByTypeSelectEl.setAttribute('id', 'filter-by-type"')
    const optionEl1 = document.createElement ('option')
    optionEl1.setAttribute ('value', '')
    optionEl1.textContent = 'Select a type...'
    const optionEl2 = document.createElement ('option')
    optionEl2.setAttribute ('value', 'micro')
    optionEl2.textContent = 'Micro'
    const optionEl3 = document.createElement ('option')
    optionEl3.setAttribute  ('value', 'regional')
    optionEl3.textContent = 'Regional'
    const optionEl4 = document.createElement  ('option')
    optionEl4.setAttribute  ('value', 'brewpub')
    optionEl4.textContent = 'Brewpub'

    filterByTypeSelectEl.append(optionEl1, optionEl2, optionEl3, optionEl4)
    filterByTypeForm.append(filterByTypeLabelEl, h3El, filterByTypeSelectEl)


    const filterByCityHeadingEl = document.createElement('div')
    filterByCityHeadingEl.setAttribute('class', 'filter-by-city-heading')
    const h3CitiesEl = document.createElement('h3')
    h3CitiesEl.textContent = 'Cities'

    const cleareAllBtn = document.createElement('button')
    cleareAllBtn.setAttribute('class', 'clear-all-btn')
    cleareAllBtn.textContent = 'clear all'

    const filterByCityForm = document.createElement('form')
    filterByCityForm.setAttribute('id', 'filter-by-city-form')

    const filterByCityInputEl = document.createElement('input')
    filterByCityInputEl.setAttribute('type', 'checkbox')
    filterByCityInputEl.setAttribute('name', 'chardon')
    filterByCityInputEl.setAttribute('value' ,'chardon')

    const filterByCitylabel1Form = document.createElement('label')
    filterByCitylabel1Form.setAttribute('for', ' chardon')
    filterByCitylabel1Form.textContent = 'Chardon'

    const filterByCityInput2El = document.createElement('input')
    filterByCityInput2El.setAttribute('type', 'checkbox')
    filterByCityInput2El.setAttribute('name', 'cincinnati')
    filterByCityInput2El.setAttribute('value' ,'cincinnati')

    const filterByCitylabel2Form = document.createElement('label')
    filterByCitylabel2Form.setAttribute('for', ' cincinnati')
    filterByCitylabel2Form.textContent = 'cincinnati'



    filterByCityForm.append(filterByCityInputEl, filterByCitylabel1Form,filterByCityInput2El,filterByCitylabel2Form )
    filterByCityHeadingEl.append(h3CitiesEl, cleareAllBtn)
    filterByTypeLabelEl.append(h3El)
    filtersSection.append(h2El, filterByTypeForm, filterByCityHeadingEl,  filterByCityForm)
}

function render(){
    renderingFilterSection()
}

render()