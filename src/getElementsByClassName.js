// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  // your code here
  node = node || document.body;
  var nodes = [];

  var classList = node.classList;
  var childNodes = node.childNodes;


  if (_.contains(classList, className)) {
    nodes.push(node);
  }

  _.each(childNodes, function(child) {
    var result = getElementsByClassName(className, child);
    nodes = nodes.concat(result);
  });

return nodes;

};
