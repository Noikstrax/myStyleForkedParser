let val = ''
const embed = (param) => {
    val = ''
    val += `<iframe style="border: none; margin-top: 4px;" width='100%' height='${param.height + 100}' src='${param.embed}' class='mt-4'></iframe>`
    return val
}

module.exports = embed;
