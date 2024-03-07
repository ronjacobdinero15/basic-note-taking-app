document.addEventListener('click', function (e) {
  if (e.target.id === 'addBtn') {
    e.preventDefault()
    const title = document.getElementById('inputTitle').value
    const body = document.getElementById('inputTextarea').value

    const newNote = document.createElement('div')
    newNote.classList.add('card', 'col-md-4', 'mt-4', 'noteContainer', 'p-0')

    newNote.innerHTML = `
      <div class="card-header bg-dark text-white">
        <h2 class="display-3">${title}</h2>
      </div>
      <div class="card-body">
        <p>${body}</p>
        <button class="btn btn-danger float-end delBtn">Delete</button>
      </div>
    `

    document.querySelector('.notesContainer').appendChild(newNote)

    newNote.querySelector('.delBtn').addEventListener('click', function () {
      this.closest('.noteContainer').remove()
    })
  }
})
