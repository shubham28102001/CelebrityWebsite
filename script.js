const name = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }
  if (message.value === '' || message.value == null) {
    messages.push('Message is required')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})