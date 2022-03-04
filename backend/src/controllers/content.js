const {
  sendResponse,
  sendMessageResponse,
  catchAsync,
  getOtp,
} = require('../utils/common');

const service = require('../service/contentService');

const contentModel = require('../models/content');

exports.createContent = catchAsync(async (req, res) => {
  let data = await service.saveData(contentModel, req);

  sendResponse(res, data, 'content saved');
});
