import { Schema, model } from "mongoose";

const RecipeSchema = Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    ingredients: {
      type: String,
      require: true,
    },
    imageUrl: {
      type: String,
      require: true,
    },
    preparation: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  },
);

const Recipe = model("Recipe", RecipeSchema);

export default Recipe;
