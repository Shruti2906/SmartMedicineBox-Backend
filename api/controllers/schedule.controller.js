const connection = require('../utils/db.js');

exports.getSchedules = (req, res, next) => {
    res.status(200).json({
        message: 'Schedules'
    });
} 

module.exports.addTabletSchedule = async (req, res) => {
    const { medicineName, day, time, compartment, dose } = req.body;
    const userId = req.userId;
  
    try {
      // Check if the compartment already exists
      const [rows] = await (
        await connection
      ).execute("SELECT * FROM `Tablets` WHERE `compartment` = ?", [compartment]);
  
      const existingUsers = rows;
  
      if (existingUsers.length > 0) {
        return res.status(400).send("compartment already Used");
      }
  
      // Insert the new tablet into the database
      const result = await (
        await connection
      ).execute(
        "INSERT INTO `Tablets` (userId, medicineName, day, time, compartment, dose) VALUES (?,?,?,?,?,?)",
        [userId, medicineName, day, time, compartment, dose]
      );
  
      console.log("Tablet added:", result);
      res.status(200).send("Tablet added successfuly");
    } catch (error) {
      console.error("error while adding tablet", error);
      res.status(500).send("error while adding tablet");
    }
  };

  module.exports.addLiquidSchedule = async (req, res) => {
    const { medicineName, totalQty, day, time, quantityToTake, dose } = req.body;
    const userId = req.userId;
  
    try {
      
      // Insert the new liquid into the database
      const result = await (
        await connection
      ).execute(
        "INSERT INTO `Liquid` (userId, medicineName, totalQty, day, time, quantityToTake, dose) VALUES (?,?,?,?,?,?,?)",
        [userId, medicineName, totalQty, day, time, quantityToTake, dose]
      );
  
      console.log("Liquid added:", result);
      res.status(200).send("Liquid added successfuly");
    } catch (error) {
      console.error("error while adding Liquid", error);
      res.status(500).send("error while adding Liquid");
    }
  };

  module.exports.addInsulinSchedule = async (req, res) => {
    const { medicineName, totalQty, day, time, quantityToTake, dose } = req.body;
    const userId = req.userId;
  
    try {
      
      // Insert the new Insulin into the database
      const result = await (
        await connection
      ).execute(
        "INSERT INTO `Insulin` (userId, medicineName, totalQty, day, time, quantityToTake, dose) VALUES (?,?,?,?,?,?,?)",
        [userId, medicineName, totalQty, day, time, quantityToTake, dose]
      );
  
      console.log("Insulin added:", result);
      res.status(200).send("Insulin added successfuly");
    } catch (error) {
      console.error("error while adding Insulin", error);
      res.status(500).send("error while adding Insulin");
    }
  };

 