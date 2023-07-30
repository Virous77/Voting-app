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
    for_vote: [
      {
        candidate: {
          type: String,
          required: true,
        },
        candidate_address: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Vote", VoteSchema);
