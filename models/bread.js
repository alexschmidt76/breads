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
    type: Schema.Types.ObjectId,
    ref: 'Baker',
  }
});

// instance methods
breadSchema.methods.getBakedBy = function() {
  console.log(this.baker)
	return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`;
}

// static methods
breadSchema.statics.findByBaker = function(name) {
  return this.find({ baker: name });
}

// model and export
const Bread = mongoose.model('Bread', breadSchema);
module.exports = Bread;