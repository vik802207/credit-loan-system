const express = require("express");
const router = express.Router();
const User=require('../models/User');
const auth=require('../middleware/Auth')


// Add a new Pickup Partner to MCP
router.post("/addPartner",auth, async (req, res) => {
    const { name, email,password } = req.body;
    // console.log(name, status);

    try {
      console.log(req.user.id)
        const mcp = await User.findById(req.user.id);
        if (!mcp) return res.status(404).json({ message: "MCP not found" });

        const pickup = new User({
            name,
            email,
            password,
            role: "admin",
            walletBalance: 0,
            AdminWhoAddYou:req.user.id
        });

        const savedPartner = await pickup.save();

        mcp.AdminWhoAddYou.push(savedPartner._id);

        await mcp.save();

        res.json({name:mcp.name,status:mcp.status, message: "Pickup Partner added and mapped to MCP", partner: savedPartner });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding pickup partner");
    }
});

module.exports = router;
