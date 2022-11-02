
function succulent (event) {
    event.preventDefault()
    alert("feed me")
}

document.querySelector('img').addEventListener('click', succulent)

