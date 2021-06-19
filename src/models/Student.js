import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Student = new Schema(
  {
    name: {
      type: String,
      reqired: true,
    },

    gender: {
      type: String,
      required: true,
    },

    school: {
      type: String,
      required: true,
    },

    grade: {
      type: Number,
      reqired: true,
    },

    ban: {
      type: Number,
      required: true,
    },

    birth: {
      type: String,
      required: true,
    },

    hobby: {
      type: String,
      required: true,
    },
  },

  {
    versionKey: false,
  }
);

export default mongoose.model(`Student`, Student, `Student`);
