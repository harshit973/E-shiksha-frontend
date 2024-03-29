import { useEffect, useRef, useState } from "react";
import ListView from "../ListView/ListView.tsx";
import { ListItem } from "../../Utill/types/ListItem.ts";
import { useNavigate } from "react-router-dom";
import { Card } from "../../Utill/types/Card.ts";
import { fetchTrendingCourse } from "../ApiHandler/fetchTrendingCourse.ts";
import { Page } from "../../Utill/types/Page.ts";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse } from "../ApiHandler/fetchCourse.ts";
import { setCourse, setTrendingCourse } from "../../Utill/Store/Slices/CourseSlice.js";
export default function Courses() {
  const course:any = useSelector((state:any) => state.courseSlice.course);
  const trendingCourse:Array<Card> = useSelector((state:any) => state.courseSlice.trendingCourse);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const container = useRef(null);
  useEffect(() => {
    getAllCourses(course?.pageNumber, course?.pageSize);
    fetchTrendingCourse().then((data: any) => {
      dispatch(setTrendingCourse(data));
    });
  }, []);
  const getAllCourses = (offset: Number, pageSize: Number) => {
    setLoading(true);
    fetchCourse("", offset, pageSize)
      .then((data: any) => {
        dispatch(setCourse(data));
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const onPaginate = (page: Page) => {
    getAllCourses(page.offset, page.pageSize);
  };
  return (
    <div ref={container} className="container-lg" style={{ padding: "20px" }}>
      <h4 className="ml-3">Trending</h4>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {(() => {
            let activeNode = [];
            let courses = [];
            let partitionSize = Math.max(
              Math.floor(
                (container?.current
                  ? container?.current?.offsetWidth + 20
                  : 0) / 300
              ),
              1
            );
            trendingCourse.map((course, index) => {
              activeNode.push(
                <div
                  className="card"
                  style={{ width: "18rem", margin: "0 15px" }}
                >
                  <img
                    src={course.thumbnail}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">
                      {course.name}
                    </h5>
                    <p className="card-text">{String(course.description)}</p>
                    <span
                      style={{ fontSize: "17px" }}
                      className="badge badge-success"
                    >
                      {String(course.rating)}
                      <img src="/star-icon.png" style={{ width: "17px" }} />
                    </span>

                    <p style={{ margin: "10px 0" }}>{String(course.price)}</p>
                    <button
                      onClick={() => {
                        navigate(`/description/${course.id}`);
                      }}
                      style={{ fontSize: "13px" }}
                      className="btn btn-outline-primary"
                    >
                      See More
                    </button>
                  </div>
                </div>
              );
              if ((index + 1) % partitionSize === 0) {
                courses.push(
                  <div
                    className={`carousel-item ${
                      index + 1 <= partitionSize ? "active" : ""
                    }`}
                  >
                    <div
                      className={`d-flex ${
                        activeNode.length > 2
                          ? "justify-content-between"
                          : activeNode.length === 1
                          ? "justify-content-center"
                          : ""
                      }`}
                    >
                      {activeNode}
                    </div>
                  </div>
                );
                activeNode = [];
              }
            });
            if (activeNode.length > 0) {
              courses.push(
                <div
                  className={`carousel-item ${
                    courses.length > 0 ? "" : "active"
                  }`}
                >
                  <div
                    className={`d-flex ${
                      activeNode.length > 2
                        ? "justify-content-between"
                        : activeNode.length === 1
                        ? "justify-content-center"
                        : ""
                    }`}
                  >
                    {activeNode}
                  </div>
                </div>
              );
            }
            return courses;
          })()}
        </div>
        <button
          style={{ justifyContent: "left", width: "auto" }}
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleControls"
          data-slide="prev"
        >
          <div
            style={{
              backgroundColor: "black",
              padding: "10px",
              borderRadius: "0.5rem",
              display: "flex",
            }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </div>
        </button>
        <button
          style={{ justifyContent: "right", width: "auto" }}
          className="carousel-control-next"
          type="button"
          data-target="#carouselExampleControls"
          data-slide="next"
        >
          <div
            style={{
              backgroundColor: "black",
              padding: "10px",
              borderRadius: "0.5rem",
              display: "flex",
            }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </div>
        </button>
      </div>
      {!loading && (
        <div style={{ padding: "20px 0" }}>
          <ListView
            btnText={"See More"}
            btnAction={(item: ListItem) => {
              navigate(`/description/${item.id}`);
            }}
            onPaginate={onPaginate}
            totalElements={course?.totalElements}
            pages={course?.pages}
            content={course?.content?.length > 0 ? course?.content : []}
            pageSize={course?.pageSize}
            pageNumber={course?.pageNumber}
          />
        </div>
      )}
      {loading && (
        <div
          style={{
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{ width: "5rem", height: "5rem" }}
            className="spinner-border"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}
