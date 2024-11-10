const image = (param) => {
    return `<figure class="w-content content-block-image flex justify-center items-center">
    <img class="object-cover mx-auto w-10/12" src='${param.file.url}' alt='${param.caption}'/>
    <figcaption>${param.caption}</figcaption>
    </figure>`
}
module.exports = image
