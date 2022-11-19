
const buttons = document.querySelector('.main__buttons')

buttons.addEventListener('click', function (event) {
   if (event.target.closest('.button__main-1')) {
      window.scrollBy(0, 50)
   }
   if (event.target.closest('.button__main-2')) {
      window.scrollTo({
         top: 300,
         left: 0,
         behavior: "smooth"
      })
   }
   if (event.target.closest('.button__main-3')) {
      const blackWrap = document.querySelector('.main__blackwrap')
      blackWrap.scrollIntoView({
         block: "center",
         inline: "nearest",
         behavior: "smooth"
      })
   }
})
