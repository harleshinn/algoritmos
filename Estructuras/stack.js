var Stack = (function() {

  let elements = [];
  let position = 0;

  function push(value){
    elements[position] =  value;
    position ++;
  }

  function pop() {
    if ( position > 0 ) {
      let value = elements[position];
      position --;
      elements[position] = undefined;
      return value;
    }
  }

  function currentValue() {
    return elements[position -1];
  }

  function size() {
    return position;
  }

  return {
    push : push,
    pop : pop,
    currentValue : currentValue,
    size : size
  };

}());