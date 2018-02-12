var mongoose = require('mongoose');
require('mongoose-type-url');
var Schema = mongoose.Schema;

var itemsSchema = new Schema({
  name: String,
  picture: mongoose.SchemaTypes.Url,
  description: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User' },

});

module.exports = mongoose.model('Items', itemsSchema);
