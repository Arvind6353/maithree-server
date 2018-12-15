var express = require('express')

var adminRouter = express.Router()
var adminController = require('../controllers').adminController

adminRouter.route('/get-target-data')
    .all(function (req, res, next) {
        next();
    })
    .get(adminController.getBranchProductDetailsForTarget)


adminRouter.route('/')
    .all(function (req, res, next) {
        next();
    })
    .post(adminController.createOrReplaceTargets)

adminRouter.route('/saveProduct')
    .all(function (req, res, next) {
        next();
    })
    .post(adminController.saveProductDetails)

adminRouter.route('/getProducts')
    .all(function (req, res, next) {
        next();
    })
    .get(adminController.getProducts);

adminRouter.route('/getProductDetails')
    .all(function (req, res, next) {
        next();
    })
    .get(adminController.getProductDetails);

adminRouter.route('/editProduct')
    .all(function (req, res, next) {
        next();
    })
    .post(adminController.editProductDetails)



//getBranchProductDetailsForTarget

module.exports = adminRouter;