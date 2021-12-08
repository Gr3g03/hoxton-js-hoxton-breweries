// Write your code here
//aside class="filters-section">

const filtersSection = document.querySelector('.filters-section')
const mainSection = document.querySelector('main')


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

function renderingMainsection(){
    const h1el = document.createElement('h1')
    h1el.textContent = 'List of Breweries'

    const searchBarHeader = document.createElement('header')
    searchBarHeader.setAttribute('class', 'search-bar')

    const searchBreweriesForm = document.createElement('form')
    searchBreweriesForm.setAttribute('id', 'search-breweries-form')
    searchBreweriesForm.setAttribute('autocomplete', 'off')

    const searchBreweriesLabel = document.createElement('label')
    searchBreweriesLabel.setAttribute('for', '"search-breweries')

    const h2LabelEL = document.createElement('h2')
    h2LabelEL.textContent = 'Search breweries:'

    searchBreweriesLabel.append(h2LabelEL)

    const searchBreweriesInput = document.createElement('input')
    searchBreweriesInput.setAttribute('id', 'search-breweries')
    searchBreweriesInput.setAttribute('name','search-breweries')
    searchBreweriesInput.setAttribute('type','text')

    searchBreweriesForm.append(searchBreweriesLabel, searchBreweriesInput)
    searchBarHeader.append(searchBreweriesForm)

    const articleEL = document.createElement('article')

    const breweriesListUl = document.createElement('ul')
    breweriesListUl.setAttribute('class', 'breweries-list')
    articleEL.append(breweriesListUl)

    const liEL = document.createElement('li')
    breweriesListUl.append(liEL)

    const h2LiEl = document.createElement('h2')
    h2LiEl.textContent= 'Snow Belt Brew'

    const microDivEl = document.createElement('div')
    microDivEl.setAttribute('class', 'type')
    microDivEl.textContent = 'micro'

    const addressSection = document.createElement('section')
    addressSection.setAttribute('class', 'address')

    const h3SectionEL = document.createElement('h3')
    h3SectionEL.textContent = 'Address:'

    const pSectionEL = document.createElement('p')
    pSectionEL.textContent = '9511 Kile Rd:'

    const pSectionEl2 = document.createElement('p')
    const strongEl = document.createElement('strong')
    strongEl.textContent = 'Chardon, 44024:'
    pSectionEl2.append(strongEl)

    addressSection.append(h3SectionEL,pSectionEL, pSectionEl2)

    const phoneSection = document.createElement('section')
    phoneSection.setAttribute('class', 'phone')

    const h3PhoneSectionEL = document.createElement('h3')
    h3PhoneSectionEL.textContent = 'Phone:'

    const phoneSectionEL = document.createElement('p')
    phoneSectionEL.textContent = 'N/A'

    phoneSection.append(h3PhoneSectionEL, phoneSectionEL)

    const linkSectionEl = document.createElement('section')
    linkSectionEl.setAttribute('class', 'link')

    const aLinkSectionEl = document.createElement ('a')
    aLinkSectionEl.setAttribute('href', 'null')
    aLinkSectionEl.setAttribute('target', ' _blank')
    aLinkSectionEl.textContent = 'Visit Website'

    linkSectionEl.append(aLinkSectionEl)


    liEL.append(h2LiEl,microDivEl,addressSection,phoneSection,linkSectionEl)
    mainSection.append(h1el,searchBarHeader, articleEL)
}


function render(){
    renderingFilterSection()
    renderingMainsection()
}

render()