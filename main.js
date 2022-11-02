
function succulent (event) {
    event.preventDefault()
    alert("feed me")
}

document.querySelector('.image').addEventListener('click', succulent)