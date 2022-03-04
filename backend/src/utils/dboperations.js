"use strict";

let saveData = async function (model, data) {
  return new model(data).save();
};

let getData = async function (model, query, projection, options) {
  return model.find(query, projectiodbOperationsn, options);
};

let findOne = async function (model, query, projection, options) {
  return model.findOne(query, projection, options);
};

let findAndUpdate = async function (model, conditions, update, options) {
  return model.findOneAndUpdate(conditions, update, options);
};

let findAndRemove = async function (model, conditions, update, options) {
  return model.findOneAndRemove(conditions, options);
};

let update = async function (model, conditions, update, options) {
  console.log(conditions, "fhyhh", update);

  return model.update(conditions, update, options);
};
let updateMany = async function (model, conditions, update, options) {
  console.log(conditions, "fhyhh", update);

  return model.updateMany(conditions, update, options);
};

let remove = async function (model, condition) {
  return model.deleteOne(condition);
};
/*------------------------------------------------------------------------
 * FIND WITH REFERENCE
 * -----------------------------------------------------------------------*/
let populateData = async function (
  model,
  query,
  projection,
  options,
  collectionOptions
) {
  return model
    .find(query, projection, options)
    .populate(collectionOptions)
    .exec();
};

let count = async function (model, condition) {
  return model.countDocuments(condition);
};
/*
 ----------------------------------------
 AGGREGATE DATA
 ----------------------------------------
 */
let aggregateData = async function (model, aggregateArray, options) {
  let aggregation = model.aggregate(aggregateArray);

  if (options) aggregation.options = options;

  return aggregation.exec();
};

let insert = async function (model, data, options) {
  return model.collection.insert(data, options);
};

let insertMany = async function (model, data, options) {
  return model.collection.insertMany(data, options);
};

module.exports = {
  saveData: saveData,
  getData: getData,
  update: update,
  remove: remove,
  insert: insert,
  insertMany: insertMany,
  count: count,
  findOne: findOne,
  findAndUpdate: findAndUpdate,
  findAndRemove: findAndRemove,
  populateData: populateData,
  aggregateData: aggregateData,
  updateMany,
};
