// require mongoose
const mongoose = require('mongoose');
// create shorthand for the Schema constructor
const { Schema } = mongoose;

// schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://placehold.it/500x500' },
  baker: {
    type: String,
    enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
  }
});

// instance methods
breadSchema.methods.getBakedBy = function() {
	return `${this.name} was baked with love by ${this.baker}`;
}

// static methods
breadSchema.statics.findByBaker = function(name) {
  return this.find({ baker: name });
}

// model and export
const Bread = mongoose.model('Bread', breadSchema);
module.exports = Bread;