const randomstring = require("randomstring");

exports.sendResponse = (res, data, message, code) => {
  res.status(code || 200).send({
    message,
    statusCode: code || 200,
    data,
  });
};

exports.sendAccessTokenResponse = (res, data, message, accessToken, code) => {
  res.status(code || 200).send({
    data,
    message,
    accessToken,
    statusCode: code || 200,
  });
};

exports.sendMessageResponse = async (res, message, code) => {
  res.status(code || 200).send({
    statusCode: code || 200,
    message,
  });
};

exports.catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    console.error(err);
    return next(err);
  });
};

