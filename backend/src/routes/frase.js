const {Router} = require("express")
const router = Router()

const {createFras, getFras, getFrase, deleteFras, updateFras}= require ("../controller/frase.controller")

router.route("/")
    .get(getFras)
    .post(createFras)

router.route("/:id")
    .get(getFrase)
    .delete(deleteFras)
    .put(updateFras)

module.exports = router;