const component = document.querySelector('.component')
const ratings = document.querySelectorAll('.rating')
let feedback = 5
component.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.parentNode.classList.contains('rating')) {
        ratings.forEach(rating => rating.classList.remove('active'))
        e.target.parentNode.classList.add('active')
        feedback = e.target.innerText
    }
    if (e.target.classList.contains('rating')) {
        ratings.forEach(rating => rating.classList.remove('active'))
        e.target.classList.add('active')
        feedback = e.target.innerText
    }
    if (e.target.classList.contains('submit')) {
        console.log(e.target)
        component.classList.add('submitted')
        component.innerHTML = `<div class="thank-you-image">
        <img src="images/illustration-thank-you.svg" alt="">
      </div>
      <div class="feedback">you selected ${feedback} out of 5</div>
      <h3>Thank you!</h3>
      <p>We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!</p>`
    }
})