// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (Array.isArray(obj)) {
    var results = [];

    _.each(obj, function(x) {
    	results.push(stringifyJSON(x));
    });

    return '[' + results.join(',') + ']';
  }

  if (obj && typeof obj === "object") {
  	var results = [];

  	_.each(obj, function(value, key) {
  		if (typeof value === "function" || value === undefined){
  			return "{}";
  		}
  		results.push(stringifyJSON(key) + ":" + stringifyJSON(value));
  	});

  	return '{' + results.join(',') + '}';
  }


  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  return ""+obj;

};


