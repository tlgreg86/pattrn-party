// application variables

const tabMobile = $('.tab-wrapper');
const tabDesktop = $('.button');
const tabContent = $('.tab-content-wrapper');
const menuBtn = $('.menu-dropdown-btn');

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

const addDropDown = () => {
  if (!$('.drop-down-wrapper').length) {
    $('.nav-bar-wrapper').after(
      `<div class="drop-down-wrapper">
        <div class="nav-link-drop-down-wrapper">
          <a class="nav-link" href="https://www.google.com">Navigation Link 1</a>
          <a class="nav-link" href="https://www.google.com">Navigation Link 2</a>
          <a class="nav-link" href="https://www.google.com">Navigation Link 3</a>
        </div>
        <div class="drop-down-search-wrapper">
          <img class="search-icon" height="30px" width="20" src="search.svg" alt="search-icon">
          <input class="search-bar" type="search" name="search" placeholder="Search">
        </div>
      </div>`
    )
  } else {
    $('.drop-down-wrapper').remove()
  }
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

menuBtn.click(() => {
  addDropDown()
})
