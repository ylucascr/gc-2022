const index = (req, res) => {
    res.send("todo index endpoint")
}

const create = (req, res) => {
    res.send("todo create endpoint")
}

const read = (req, res) => {
    res.send("todo read endpoint")
}

const update = (req, res) => {
    res.send("todo update endpoint")
}

const remove = (req, res) => {
    res.send("todo delete endpoint")
}

export default { index, create, read, update, remove }