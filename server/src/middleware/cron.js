import cron from "node-cron";
import Vote from "../Models/Vote.js";

const getRunning = async () => {
  const today = new Date();

  try {
    await Vote.updateMany(
      {
        start_date: today.getDate(),
        status: { $ne: "running" },
      },
      { $set: { status: "running" } }
    );
  } catch (error) {
    console.error("Error updating documents:", error);
  }
};

const getRunningOver = async () => {
  const today = new Date();

  try {
    await Vote.updateMany(
      {
        end_date: today.getDate() + 1,
        status: { $ne: "over" },
      },
      { $set: { status: "over" } }
    );
  } catch (error) {
    console.error("Error updating documents:", error);
  }
};

export const voteStatusUpdate = () => {
  cron.schedule("* * * * *", async () => {
    try {
      getRunning();
      getRunningOver();
    } catch (error) {
      console.error("Error occurred during cron job:", error);
    }
  });
};
