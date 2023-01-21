"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// var { graphql, buildSchema } = require('graphql');

// var schema = buildSchema(`
//   type Query {
//     helloo: String
//   }
// `);

// var rootValue = { helloo: () => 'Hello graphql!' };

// var source = '{ helloo }';

// graphql({ schema, source, rootValue }).then((response) => {
//   console.log(response);
// });

var app = (0, _express["default"])();
app.listen(3000, function () {
  return console.log("Server on port 3000");
});
//# sourceMappingURL=index.js.map