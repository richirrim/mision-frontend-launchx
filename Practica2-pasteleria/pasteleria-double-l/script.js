const flavorsEl = document.getElementById('js-flavors')
const textEl = document.getElementById('js-selected-flovers')
const checkboxListEl = Array.from(document.querySelectorAll('.flavors input[type=checkbox]'))
let contador = 0

flavorsEl.addEventListener('change',  function(e) {
    if (e.target.checked) {
        contador++
        textEl.textContent = `${contador}/2`
    } else {
        contador--
        textEl.textContent = `${contador}/2`
    }
    
    if (contador == 2) {
        for (check of checkboxListEl) {
            if (check.checked == false) {
                check.setAttribute('disabled', '')
            }
        }
    } else {
        for (check of checkboxListEl) {
            if (check.checked == false) {
                check.removeAttribute('disabled')
            }
        }
    }
})