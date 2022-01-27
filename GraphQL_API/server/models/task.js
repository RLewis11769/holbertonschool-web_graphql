const mongoose = require('mongoose');

// Define schema for task instances
const taskSchema = new mongoose.Schema({
  title: String,
  weight: Number,
  description: String,
  projectId: projectSchema
});

// Export model based on schema
module.exports = mongoose.model('Task', taskSchema);