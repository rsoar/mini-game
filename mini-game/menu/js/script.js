const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    const difficulty = document.getElementById('select').value
    e.preventDefault()
    if(difficulty == '') return alert('Selecione a dificuldade')
    window.location.href="../game/index.html?" + difficulty
})