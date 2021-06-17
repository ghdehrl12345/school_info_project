import mongoose from "mongoose";

//table ,schema ,collection
const Schema = mongoose.Schema;

const Student = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    grade: {
      type: String,
      required: true,
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
//인스턴스화

export default mongoose.model(`Student`, Student, `Student`);
