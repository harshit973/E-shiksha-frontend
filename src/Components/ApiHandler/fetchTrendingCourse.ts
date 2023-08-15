import axios from "axios";
import getCookie from "./getCookie";

export function fetchTrendingCourse() {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: process.env.REACT_APP_BASE_COURSE_URL + `v1/course/trending`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie()}`,
      },
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve(error);
      });
  });
}
