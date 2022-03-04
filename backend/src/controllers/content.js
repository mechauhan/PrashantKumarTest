const {
  sendResponse,
  sendMessageResponse,
  catchAsync,
  getOtp,
} = require('../utils/common');

const service = require('../service/contentService');

const Model = require('../models/content');

exports.createContent = catchAsync(async (req, res) => {
  let data = await service.saveData(Model, req);

  sendResponse(res, data, 'content saved');
});

exports.getAll = catchAsync(async (req, res) => {
  let data = await service.getAll(Model, req);
  sendResponse(res, data, 'All users');
});

exports.deleteUser = catchAsync(async (req, res) => {
  let data = await service.deleteData(Model, req);
  sendResponse(res, data, 'deleted');
});
