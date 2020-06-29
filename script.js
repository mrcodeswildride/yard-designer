let yard = document.getElementById(`yard`)

let widthSlider = document.getElementById(`widthSlider`)
let heightSlider = document.getElementById(`heightSlider`)
let sizeParagraph = document.getElementById(`sizeParagraph`)

let dirtButton = document.getElementById(`dirtButton`)
let grassButton = document.getElementById(`grassButton`)
let paversButton = document.getElementById(`paversButton`)
let landscapeParagraph = document.getElementById(`landscapeParagraph`)

let areaParagraph = document.getElementById(`areaParagraph`)
let sqftCostParagraph = document.getElementById(`sqftCostParagraph`)
let totalCostParagraph = document.getElementById(`totalCostParagraph`)

let selectedCost = 0

widthSlider.addEventListener(`input`, changeSize)
heightSlider.addEventListener(`input`, changeSize)

dirtButton.addEventListener(`click`, selectDirt)
grassButton.addEventListener(`click`, selectGrass)
paversButton.addEventListener(`click`, selectPavers)

function changeSize() {
  yard.style.width = `${widthSlider.value * 10}px`
  yard.style.height = `${heightSlider.value * 10}px`
  sizeParagraph.innerHTML = `${widthSlider.value} feet &times; ${heightSlider.value} feet`
  updateCost()
}

function selectDirt() {
  selectedCost = 1
  yard.style.backgroundImage = `url("dirt.jpg")`
  landscapeParagraph.innerHTML = `Selected landscape: dirt`
  updateCost()
}

function selectGrass() {
  selectedCost = 2
  yard.style.backgroundImage = `url("grass.jpg")`
  landscapeParagraph.innerHTML = `Selected landscape: grass`
  updateCost()
}

function selectPavers() {
  selectedCost = 3
  yard.style.backgroundImage = `url("pavers.jpg")`
  landscapeParagraph.innerHTML = `Selected landscape: pavers`
  updateCost()
}

function updateCost() {
  let area = widthSlider.value * heightSlider.value
  areaParagraph.innerHTML = `Area: ${area} square feet`

  sqftCostParagraph.innerHTML = `Cost per square foot: $${selectedCost}`

  let totalCost = area * selectedCost
  totalCostParagraph.innerHTML = `Total cost: $${totalCost}`
}