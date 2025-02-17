let recipes = {};

function updateObjectWithKeyAndValue(obj, key, val) {
  return Object.assign({}, obj, {[key]: val})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  let newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}
