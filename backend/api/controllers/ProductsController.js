// module.exports = {
// getProducts: (req, res) => {
//   const page = req.param('page');

//   Product.count().exec((error, amountOfProducts) => {
//     if (error) return res.status(500).send('Something broke!');
//     console.log('amt of products', amountOfProducts);
//     console.log('skip', ((page - 1) * 6));
//     Product.find()
//       .populate('user')
//       .skip((page - 1) * 6)
//       .limit(6)
//       .exec((error, products) => {
//         if (error) return res.status(500).send('Something broke!');
//         console.log(products.length);
//         if (products)
//           return res.json({
//             products,
//             amountOfProducts
//           });
//       });
//   });
// };

// };

// module.exports = {
// getProducts: (req, res) => {
//   const page = req.param('page');

//   Product.count().exec((error, amountOfProducts) => {
//     if (error) return res.serverError(error);

//     Product.find()
//       .populate('user')
//       .skip((page - 1) * 6)
//       .limit(6)
//       .exec((error, products) => {
//         if (error) return res.serverError(error);

//         if (products)
//           return res.json({
//             products,
//             amountOfProducts
//           });
//       });
//   });
// }
// };

module.exports = {
  getProducts: (req, res) => {
    const page = req.param('page');

    Product.count().exec((error, amountOfProducts) => {
      if (error) return res.serverError(error);

      Product.find()
        .populate('user')
        .paginate(page, 6)
        .exec((error, products) => {
          if (error) return res.serverError(error);
          console.log(products);
          if (products)
            return res.json({
              products,
              amountOfProducts
            });
        });
    });
  }
};
