// application variables

const tab = $('.tab-wrapper')

// functions

const signChange = (parentElement, currentElement, parentSibling) => {
  $(parentElement).toggleClass('active')
  $(currentElement).toggleClass('expanded')
  $(parentSibling).toggle()  
}

// event listeners

tab.click((event) => {
  console.log(event.target.nextElementSibling);
  signChange( event.target.parentElement, 
              event.target.nextElementSibling, 
              event.target.parentElement.nextSibling.nextSibling);
})
