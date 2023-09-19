import { Card } from "../types/Card";

export const courseInitialState = {
  course: {
    totalElements: 0,
    pages: 0,
    content: new Array<any>(),
    pageSize: 0,
    pageNumber: 0
  },
  trendingCourse: new Array<Card>()
};
