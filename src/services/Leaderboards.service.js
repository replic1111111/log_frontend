import Axios from "../utils/axios";

//
export const leaderBoardData = async () => {
  return await Axios.get("prediction-leaderboard");
};
export const sortByAccuracy = async (order) => {
  return await Axios.get(`prediction-leaderboard?sortByAccuracy=${order}`);
};
export const sortByScore = async (order) => {
  return await Axios.get(`prediction-leaderboard?sortByScore=${order}`);
};
