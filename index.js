const paginate = function (items, page, itemsPerPage) {
    let toModifyArr = [...items]
    let itemsOnPage = toModifyArr.splice(((itemsPerPage * page) - itemsPerPage), itemsPerPage)
    return {
        totalItems: items.length,
        itemsOnPage,
        page,
        itemsPerPage,
        from: itemsOnPage[0].id,
        to: itemsOnPage[itemsOnPage.length - 1].id,
        prev: ((itemsPerPage * page) - itemsPerPage) > 0 ? true : false,
        next: (((itemsPerPage * page) - itemsPerPage) + itemsPerPage) < items.length ? true : false
    }
}

module.exports = paginate
