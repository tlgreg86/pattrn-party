// application variables

const tabMobile = $('.tab-wrapper')
const tabDesktop = $('.button')
const tabContent = $('.tab-content-wrapper')

// functions

const signChange = (childElement, currentTarget, parentSibling) => {
  $(childElement).toggleClass('expanded')
  $(currentTarget).toggleClass('active')
  $(parentSibling).toggle()  
}

const expand = (parentsChildren, target) => {
  $(parentsChildren).each( function() {
    switch ($(this).hasClass('active')) {
      case true:
        $(this).toggleClass('active')
        break;
    }
  })  
  $(target).toggleClass('active')  
}

const toggleContent = (activeTab) => {
  $(tabContent[0].children).each( function() {
    switch ($(this).hasClass('disabled')) {
      case true:
      $(this).toggleClass('disabled')
      break;  
    }
  })

  $("#"+activeTab).toggleClass('disabled');
}

// event listeners

tabMobile.click((event) => {
  signChange( event.currentTarget.children[1], 
              event.currentTarget, 
              event.currentTarget.nextElementSibling);
})

tabDesktop.click( function() {
  let activeTab = $(this).attr('rel')

  expand(event.target.parentNode.children, event.target)
  
  toggleContent(activeTab)
  
})
