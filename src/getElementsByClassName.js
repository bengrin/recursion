// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  var node = node || document.body;
  var nodes = []
  var classList = node.classList;
  var children = node.childNodes;

  if (_.contains(classList, className)) {
    nodes.push(node);
  }

  _.each(children, function(child) {
    nodes = nodes.concat(getElementsByClassName(className, child)); 
  });

  return nodes;
};
