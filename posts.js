module.exports = function CreateList(data) {
    return `<ul>${data.map(elem => {`<li><h1>${elem.title}</h1><p>${elem.body}</p></li>`})}</ul>`
}