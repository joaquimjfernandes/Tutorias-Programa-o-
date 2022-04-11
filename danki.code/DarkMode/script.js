let btn = document.querySelector('#btn')
btn.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked)
})