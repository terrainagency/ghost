export function wordToSpan(arr) {
    arr.forEach((el, str) => {
        let before = el.innerText;

        let after = before.split(' ').map(function(w) {
            return `<span ${str}>` + w + ' </span>';
        }).join('');

        el.innerHTML = after;
    });
}