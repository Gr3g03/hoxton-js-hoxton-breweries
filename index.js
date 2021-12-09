const baseUrl = 'https://api.openbrewerydb.org/breweries'

// const filtersSection = document.querySelector('.filters-section')
const mainSection = document.querySelector('main')
const selectStateForm = document.querySelector('#select-state-form')

const state = {
    breweries : [],
    selectedState: null,
    breweryTypes: ['micro', 'regional', 'brewpub'],
    selectedBreweryType: '',
    selectedCities: []
}

function displayBreweries(){
    let breweriesToDisplay = state.breweries
    
    breweriesToDisplay = breweriesToDisplay.filter(brewery =>
        state.breweryTypes.includes(brewery.brewery_type)
      )
      breweriesToDisplay = breweriesToDisplay.slice(0, 10)

  return breweriesToDisplay
}

function getCitiesFromBreweries (breweries) {
    let cities = []
  
    for (const brewery of breweries) {
      if (!cities.includes(brewery.city)) {
        cities.push(brewery.city)
      }
    }
  
    return cities
  }

function getBreweriesFromServer() {
    return fetch(baseUrl).then(function (resp) 
    {
        return resp.json()
    })
}

function getStateBreweriesFromServer(state){
    return fetch(`${baseUrl}?by_state=${state}&per_page=20`).then(resp =>
        resp.json()
      )
}

// // How to get the value of a select when it changes
// filterByTypeSelect.addEventListener("change", function (){
//     console.log(filterByTypeSelect.value)


// How to get an array with only the selected cities
// let selectedCities = []

// for (const checkbox of city-checkbox) {
//     if (checkbox.checked) selectedCities.push(checkbox.value)
// }


function renderingFilterSection(){
    const filtersSection = document.createElement('aside')
    filtersSection.setAttribute ('class', 'filters-section ')

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

    filterByTypeSelectEl.addEventListener("change", function (){
        !state.breweryTypes == state.breweryTypes
    })

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
     filterByCityForm.addEventListener('submit' , function(event){
        event.preventDefault()  
       
            })
            filterByCityForm.innerHTML =``
    const cities = getCitiesFromBreweries(state.breweries)

        for (const city of cities) {
    const filterByCityInputEl = document.createElement('input')
    filterByCityInputEl.setAttribute('type', 'checkbox')
    filterByCityInputEl.setAttribute('class', 'city-checkbox')
    filterByCityInputEl.setAttribute('name', city)
    filterByCityInputEl.setAttribute('value' ,city)
    filterByCityInputEl.setAttribute('id', city)
        
    const filterByCitylabel1Form = document.createElement('label')
    filterByCitylabel1Form.setAttribute('for', city)
    filterByCitylabel1Form.textContent = city

        if (state.breweries.length !== 0) {
            filtersSection.style.display = 'block'
        } else {
            filtersSection.style.display = 'none'

 }
 filterByCityForm.append(filterByCityInputEl, filterByCitylabel1Form)
}

    filterByCityHeadingEl.append(h3CitiesEl, cleareAllBtn)
    filterByTypeLabelEl.append(h3El)
    filtersSection.append(h2El, filterByTypeForm, filterByCityHeadingEl,  filterByCityForm)
    mainSection.append(filtersSection)
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
    // articleEL.innerHTML = ``

    for(const brewerie of state.breweries){

    const liEL = document.createElement('li')
   
    const h2LiEl = document.createElement('h2')
    h2LiEl.textContent= brewerie.name

    const microDivEl = document.createElement('div')
    microDivEl.setAttribute('class', 'type')
    microDivEl.textContent = brewerie.brewery_type

    const addressSection = document.createElement('section')
    addressSection.setAttribute('class', 'address')

    const h3SectionEL = document.createElement('h3')
    h3SectionEL.textContent = 'Address:'

    const pSectionEL = document.createElement('p')
    pSectionEL.textContent = brewerie.street

    const pSectionEl2 = document.createElement('p')
    const strongEl = document.createElement('strong')
    strongEl.textContent = `${brewerie.city} , ${brewerie.postal_code}`
    pSectionEl2.append(strongEl)

    addressSection.append(h3SectionEL,pSectionEL, pSectionEl2)

    const phoneSection = document.createElement('section')
    phoneSection.setAttribute('class', 'phone')

    const h3PhoneSectionEL = document.createElement('h3')
    h3PhoneSectionEL.textContent = 'Phone:'

    const phoneSectionEL = document.createElement('p')
    phoneSectionEL.textContent = brewerie.phone

    phoneSection.append(h3PhoneSectionEL, phoneSectionEL)

    const linkSectionEl = document.createElement('section')
    linkSectionEl.setAttribute('class', 'link')

    const aLinkSectionEl = document.createElement ('a')
    aLinkSectionEl.setAttribute('href', 'null')
    aLinkSectionEl.setAttribute('target', ' _blank')
    aLinkSectionEl.textContent = brewerie.website_url

    linkSectionEl.append(aLinkSectionEl)
    liEL.append(h2LiEl,microDivEl,addressSection,phoneSection,linkSectionEl)
    breweriesListUl.append(liEL)

}
   
    mainSection.append(h1el,searchBarHeader, articleEL)
}




function render(){
    renderingFilterSection()
    renderingMainsection()
}

function selectedStateForm(){
    selectStateForm.addEventListener('submit', function(event){
        event.preventDefault()
         state.selectedState = selectStateForm['select-state'].value
    
        getStateBreweriesFromServer(state.selectedState)
          .then(function(getBreweries){
    state.breweries = getBreweries
    render()
    })

  })
}

function init(){
    render()
    selectedStateForm()
}

init()