export default {
  Query: {
    getAllCats: async (parentValue, args, { Cat }) => {
      return await Cat.find();
    },
    catById: async (parentValue, args, { Cat }) => {
      return await Cat.findById(args);
    }
  },
  Mutation: {
    createCat: async (parentValue, { name }, { Cat }) => {
      return await new Cat({ name }).save();
    },
    deleteCat: async (parentValue, args, { Cat }) => {
      return await Cat.remove({ _id: args });
    },
    updateCat: async (parentValue, { _id, name }, { Cat }) => {
      return await Cat.findById(_id)
        .then(cat => {
          cat.name = name;
          return cat.save();
        });   
    },
    addLife: async (parentValue, args, { Cat }) => {
      return await Cat.findById(args)
        .then(cat => {
          ++cat.lives;
          return cat.save();
        })
    },
    clearAllCats: async (parentValue, args, { Cat }) => {
      return await Cat.collection.remove({});
    }
  }
}