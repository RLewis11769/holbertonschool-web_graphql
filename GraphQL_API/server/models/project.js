const mongoose = require('mongoose');

// Define schema for project instances
const projectSchema = new mongoose.Schema({
  title: String,
  weight: Number,
  description: String,
  tasks: Array
});

// Export model based on schema
module.exports = mongoose.model('Project', projectSchema);
