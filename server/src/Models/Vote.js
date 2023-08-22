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
    status: {
      type: String,
      default: "created",
    },
    end_time: {
      type: String,
      required: true,
    },
    end_date: {
      type: Number,
      required: true,
    },
    start_date: {
      type: Number,
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
        vote: [{ type: String, default: null }],
      },
    ],
    vote_type: {
      type: String,
      required: true,
    },
    vote_password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Vote", VoteSchema);
