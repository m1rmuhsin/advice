const advice = document.querySelector('.advices')
const text = document.querySelector(".new-text")
const numbers = document.querySelector('.number')

let url =  "https://api.adviceslip.com/advice";

async function fetchBtnData() {
    try {
      const response = await fetch(url);
      const data = await response.json()
     renderAdv(data)

    } catch (error) {
      console.log("xatolik",error)
    }
  }
  function renderAdv(data) {
   
    text.innerHTML = `
    ${data.slip.advice}
    `
    numbers.innerHTML =`
    ADVICE #${data.slip.id}
    `
}
advice.addEventListener('click',() => {
    location.reload()
})
fetchBtnData()


