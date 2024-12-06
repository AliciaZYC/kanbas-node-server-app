import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
      required: true,
    },
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "QuizModel",
      required: true,
    },
    score: { type: Number, required: true },
  },
  { collection: "scores" }
);

export default scoreSchema;
