const image = (param) => {
    return `<figure class="w-content content-block-image flex justify-center items-center">
    <img class="max-h-600 object-cover w-full rounded-lg" src='${param.file.url}' alt='${param.caption}'/>
    <figcaption>${param.caption}</figcaption>
    </figure>`
}
module.exports = image