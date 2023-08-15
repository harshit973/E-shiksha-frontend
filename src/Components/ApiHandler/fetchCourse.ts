import axios from "axios";
import getCookie from "./getCookie";

export function fetchCourse(
  search?: string,
  pageNumber?: Number,
  pageSize?: Number
) {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url:
        process.env.REACT_APP_BASE_COURSE_URL +
        `v1/course?pageNumber=${pageNumber ? pageNumber : 0}&pageSize=${
          pageSize ? pageSize : 10
        }${search ? "&" + search : ""}`,
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
