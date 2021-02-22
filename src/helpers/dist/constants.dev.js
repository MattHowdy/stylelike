"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TWITTER_API = exports.MONTHLY = exports.WEEKLY = exports.APPLICATION = exports.NEW_CONTENT = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NEW_CONTENT = "1";
exports.NEW_CONTENT = NEW_CONTENT;
var APPLICATION = "1";
exports.APPLICATION = APPLICATION;
var WEEKLY = 'weekly';
exports.WEEKLY = WEEKLY;
var MONTHLY = 'monthly';
exports.MONTHLY = MONTHLY;
var TWITTER_API = 'https://uxstudioteam.com/development/fedc/twitter-data.json';
exports.TWITTER_API = TWITTER_API;

window.formatNumber = function (number) {
  return number.toLocaleString().replace(',', ' ');
};

window.capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

window.formatDate = function (date) {
  // return date
  return (0, _moment.default)(date).format('DD-MM-YYYY');
};