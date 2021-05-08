// Input Num
const inputNum = document.querySelectorAll('.\\@ui-num')

if(inputNum.length > 0) {
    inputNum.forEach((container, i) => {
        let input = container.querySelector('input')

        let plusBtn = container.querySelector('.\\@btn-plus')
        plusBtn.addEventListener('click', (e) => {
            e.preventDefault()
            if(input.value < input.max) {input.value++}
        })

        let minusBtn = container.querySelector('.\\@btn-minus')
        minusBtn.addEventListener('click', (e) => {
            e.preventDefault()
            if(input.value > input.min) {input.value--}
        })
    })
}