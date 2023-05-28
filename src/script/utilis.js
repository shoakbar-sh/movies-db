const $ = (selector) => {
   return document.querySelector(selector);
}

const $$ = (selector) => {
   return document.querySelectorAll(selector);
}

function createElement(tagName, className, content) {
   const newElement = document.createElement(tagName);

   if (className) {
      newElement.setAttribute("class", className)
   }
   if (content) {
      newElement.innerHtml = content
   }
   return newElement
}