// server.js placeholder
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(cors(
  origin :"*",
));
app.use(express.json());

connectDB();

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/loanapplication', require('./routes/ApplicationAuth'));
app.use('/api/user', require('./routes/userprofile'));
app.use('/api/mapalltoverifier', require('./routes/mappedalluserToverifier'));
app.use('/api/verifierChangeStatus', require('./routes/updatestatusbyverifier'));
app.use('/api/adminchagestatus', require('./routes/updatestatusbyadmin'))
app.use('/api/adminorverifier',require('./routes/AdminorVerifierProfile'));
app.use('/api/mapalltoadmin',require('./routes/mapalladminprofile'));
app.use('/api/add',require('./routes/AddAdmin'));
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
