"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAxtiosInstance = getAxtiosInstance;
exports.get = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAxtiosInstance() {
  return _axios.default.create({
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

var get = function get(url, params) {
  return new Promise(function (resolve, reject) {
    getAxtiosInstance().get(url, {
      params: params
    }).then(function (result) {
      resolve(result.data);
    }).catch(function (error) {
      if (error.response && error.response.status === 401) {
        console.log(error);
      }

      reject(error);
    });
  });
};

exports.get = get;