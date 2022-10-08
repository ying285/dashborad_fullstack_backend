const Expense = require("../models/expenseApi");
const NewCustomer = require("../models/newCustomerApi");
const Order = require("../models/orderApi");
const Revenue = require("../models/revenueApi");

exports.postExpense = async (req, res) => {
  const name = req.body.name;
  const expenses = req.body.Expenses;
  try {
    const expensesData = new Expense({
      name: name,
      Expenses: expenses,
    });
    await expensesData.save();
    return res.status(200).json({ message: "Data has saved successfully!" });
  } catch (err) {
    const error = new Error(err);
    error.code = 400;
    throw error;
  }
};
exports.postNewClient = async (req, res) => {
  const name = req.body.name;
  const newclients = req.body.NewClients;
  try {
    const newclientsData = new NewCustomer({
      name: name,
      NewClients: newclients,
    });
    await newclientsData.save();
    return res
      .status(200)
      .json({ message: "new clientsData has saved successfully!" });
  } catch (err) {
    const error = new Error(err);
    error.code = 400;
    throw error;
  }
};
exports.postOrder = async (req, res) => {
  const name = req.body.name;
  const orders = req.body.Orders;
  try {
    const ordersData = new Order({
      name: name,
      Orders: orders,
    });
    await ordersData.save();
    return res
      .status(200)
      .json({ message: "ordersData has saved successfully!" });
  } catch (err) {
    const error = new Error(err);
    error.code = 400;
    throw error;
  }
};
exports.postRevenue = async (req, res) => {
  const name = req.body.name;
  const revenue = req.body.Revenue;
  try {
    const revenueData = new Revenue({
      name: name,
      Revenue: revenue,
    });
    await revenueData.save();
    return res
      .status(200)
      .json({ message: "revenue Data has saved successfully!" });
  } catch (err) {
    const error = new Error(err);
    error.code = 400;
    throw error;
  }
};

exports.getExpense = async (req, res) => {
  try {
    const allExpenses = await Expense.find();

    return res.status(200).json(allExpenses.slice(-10));
  } catch (err) {
    const error = new Error(err);
    error.code = 400;
    throw error;
  }
};
exports.getNewClient = async (req, res) => {
  try {
    const allNewClients = await NewCustomer.find();

    return res.status(200).json(allNewClients.slice(-10));
  } catch (err) {
    const error = new Error(err);
    error.code = 400;
    throw error;
  }
};
exports.getOrder = async (req, res) => {
  try {
    const allOrders = await Order.find();

    return res.status(200).json(allOrders.slice(-10));
  } catch (err) {
    const error = new Error(err);
    error.code = 400;
    throw error;
  }
};
exports.getRevenue = async (req, res) => {
  try {
    const allRevenue = await Order.find();

    return res.status(200).json(allRevenue.slice(-10));
  } catch (err) {
    const error = new Error(err);
    error.code = 400;
    throw error;
  }
};

exports.getTotalExpenses = async (req, res) => {
  try {
    const allExpenses = await Expense.find();
    const totalExpenses = allExpenses
      .map((item) => item.Expenses)
      .reduce((prev, cur) => prev + cur, 0);

    return res.status(200).json(totalExpenses);
  } catch (err) {
    const error = new Error(err);
    error.code = 400;
    throw error;
  }
};

exports.getTotalNewClients = async (req, res) => {
  try {
    const allNewClients = await NewCustomer.find();
    const totalNewClients = allNewClients
      .map((item) => item.NewClients)
      .reduce((prev, cur) => prev + cur, 0);

    return res.status(200).json(totalNewClients);
  } catch (err) {
    const error = new Error(err);
    error.code = 400;
    throw error;
  }
};

exports.getTotalOrders = async (req, res) => {
  try {
    const allOrder = await Order.find();
    const totalOrders = allOrder
      .map((item) => item.Orders)
      .reduce((prev, cur) => prev + cur, 0);

    return res.status(200).json(totalOrders);
  } catch (err) {
    const error = new Error(err);
    error.code = 400;
    throw error;
  }
};

exports.getTotalRevenue = async (req, res) => {
  try {
    const allOrder = await Order.find();
    const totalRevenue = allOrder
      .map((item) => item.Orders * 30)
      .reduce((prev, cur) => prev + cur, 0);

    return res.status(200).json(totalRevenue);
  } catch (err) {
    const error = new Error(err);
    error.code = 400;
    throw error;
  }
};
