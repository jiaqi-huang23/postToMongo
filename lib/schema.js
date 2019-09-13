"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

const postSchema = new _mongoose.Schema({
  _id: String,
  title: String,
  content: String,
  createdDate: Date
});
exports.default = postSchema;