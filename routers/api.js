const express = require("express");
const router = express.Router();
const apiController = require("../controllers/api");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.post("/postExpense", apiController.postExpense);
router.post("/postNewclient", apiController.postNewClient);
router.post("/postOrder", apiController.postOrder);
router.post("/postRevenue", apiController.postRevenue);

router.get("/getExpense", validateToken, apiController.getExpense);
router.get("/getNewclient", apiController.getNewClient);
router.get("/getOrder", apiController.getOrder);
router.get("/getRevenue", apiController.getRevenue);

router.get("/getTotalExpenses", apiController.getTotalExpenses);
router.get(
  "/getTotalNewClients",

  apiController.getTotalNewClients
);
router.get("/getTotalOrders", apiController.getTotalOrders);
router.get("/getTotalRevenue", apiController.getTotalRevenue);

module.exports = router;