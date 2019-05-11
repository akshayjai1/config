const a = {
  name1: {
    name1: value,
    children: {
      name12: value12,
      children: null
    }
  },
  name2: {
    name2: value2,
    children:{
      name21:{
        name21: value21,
        children: null,
      },
      name22: {
        name22: value22,
        children: {
          name221:{
            name221: value221,
            children:{
              name2211: value2211
            }
          }
        }
      }

    }
  }
}

insights about Data
1. if the input is Array, the output will contain object with keys k1,k2,k3
2. if there is an object, it will have an object with two properties namely, k1 and children

That's all I see only these two condition