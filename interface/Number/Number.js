// Input Num
const inputNum = document.querySelectorAll('.\\@uiNum')

if(inputNum.length > 0) {
    inputNum.forEach((container, i) => {
        let input = container.querySelector('input')

        let plusBtn = container.querySelector('[data-btn="plus"]')
        plusBtn.addEventListener('click', (e) => {
            e.preventDefault()
            if(input.value < input.max) {input.value++}
        })

        let minusBtn = container.querySelector('[data-btn="minus"]')
        minusBtn.addEventListener('click', (e) => {
            e.preventDefault()
            if(input.value > input.min) {input.value--}
        })
    })
}