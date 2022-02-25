const messages = [
    'Agustin',
    'Ana',
    'Sam',
    'Laura',
    'Martin',
    'Oscar',
    'Carolina',
    "Paulo"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = { randomMsg }