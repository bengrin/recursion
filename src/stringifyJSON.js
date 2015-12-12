// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    var results = []
    _.each(obj, function(item) {
      results.push(stringifyJSON(item));
    })
    return '[' + results.join(',') + ']';
  }
  if (obj && typeof obj === 'object') {
    results = [];
    _.each(obj, function(value, key) {
      if (value === undefined || typeof value === 'function') {
        return;
      }
      results.push(stringifyJSON(key) + ':' + stringifyJSON(value));
    });
    return '{' + results.join(',') + '}';
  }



  return obj + '';
};
