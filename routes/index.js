const { Router } = require("express");
const router = Router();

router.use(require("./categories"));
router.use(require("./comments"));
router.use(require("./posts"));
router.use(require("./users"));

module.exports = router;
