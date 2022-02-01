import { Schema, model } from "mongoose";

const UserSchema = Schema(
  {
    username: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  },
);

const User = model("User", UserSchema);

export default User;
