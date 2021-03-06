exports.createProduct = (req, res, next) => {
    const name = req.body.name
    const price = req.body.price
    res.json(
        {
            message: 'Create Product Success',
            data: {
                id: 1,
                name: name, 
                price: price
            }
        }
    )
    next()
}

exports.getAllProducts = (req, res, next) => {
    res.json(
        {
            message: 'Get All Product Success',
            data: [
                {
                    id: 1,
                    name: "Teh Gelas", 
                    price: 8000
                }
            ]
        }
    )
    next()

    res.json({name: "Anandela", email: 'anan@gmail.com'})
    next()
}

