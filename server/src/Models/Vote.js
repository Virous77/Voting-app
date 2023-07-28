import mongoose from "mongoose";

const VoteSchema = new mongoose.Schema(
  {
    admin: {
      type: String,
      required: true,
    },
    admin_address: {
      type: String,
      required: true,
    },
    start_time: {
      type: String,
      required: true,
    },
    end_time: {
      type: String,
      required: true,
    },
    term: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Vote", VoteSchema);
