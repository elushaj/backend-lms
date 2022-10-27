import mongoose from "mongoose";


const activitySchema = new mongoose.Schema(  {
    activityType: {
      type: String,
      required: [true, "Activity type is required"],
    },

    description: {
      type: String,
      required: [true, "Activity Description is required"],
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    reference: {
      id: String,
      modelName: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Activity', activitySchema)