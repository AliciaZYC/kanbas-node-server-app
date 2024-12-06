import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    published: Boolean,
    title: { type: String, required: true },
    description: { type: String, required: true },
    quizType: {
      type: String,
      required: true,
      enum: ["Graded Quiz", "Practice Quiz", "Survey Quiz"],
    },
    points: { type: Number, required: true },
    assignmentGroup: String,
    shuffleAnswers: Boolean,
    timeLimit: { type: Number, required: true },
    multipleAttempts: { type: Boolean, required: true },
    attempts: { type: Number },
    showCorrectAnswers: {
      type: String,
    },
    accessCode: { type: String },
    oneQuestionAtATime: { type: Boolean },
    webcamRequired: { type: Boolean },
    lockQuestionsAfterAnswering: { type: Boolean },
    dueDate: { type: Date, required: true },
    availableDate: { type: Date, required: true },
    untilDate: { type: Date, required: true },
    questions: { type: Array },
  },
  { collection: "quizzes", timestamps: true }
);

export default schema;
