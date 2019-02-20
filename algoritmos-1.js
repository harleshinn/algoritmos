function Stack() {

  let elements = [];
  let position = 0;

  return {
    push(value) {
      elements[position] = value;
      position ++;
    },

    pop() {
      if( position > 0 ) {
        position --;

        let value = elements[position];
        elements[position] = undefined;
        return value;
      }
    },

    currentValue() {
      return elements[position -1];
    },

    size() {
      return position;
    }

  }




}