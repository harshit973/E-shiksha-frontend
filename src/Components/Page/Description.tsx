import { useEffect, useState } from "react";
import { Course } from "../../Utill/types/Course.js";
import ListView from "../ListView/ListView.js";
import { ListItem } from "../../Utill/types/ListItem.js";
import { useNavigate } from "react-router-dom";

export default function Description() {
  const [course, setCourse] = useState<Array<ListItem>>([]);
  const [trendingCourse, setTrendingCourse] = useState<Array<Course>>([]);
  const navigate = useNavigate();
  useEffect(() => {
    setCourse([
      {
        head: "Web46",
        image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
        subhead: "Web",
        stars: 4,
        right: "Rs. 300",
        id: 1,
        badges: [],
      },
      {
        id: 2,
        head: "Web47",
        image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
        subhead: "Web",
        stars: 4,
        right: "Rs. 300",
        badges: [],
      },
      {
        id: 3,
        head: "Web48",
        image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
        subhead: "Web",
        stars: 4,
        right: "Rs. 300",
        badges: [],
      },
    ]);
    setTrendingCourse([
      {
        id: 1,
        name: "Web46",
        thumbnail:
          "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
        description: "Web",
        rating: 4,
        price: 300,
      },
      {
        id: 2,
        name: "Web3",
        thumbnail:
          "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
        description: "Web3",
        rating: 4,
        price: 500,
      },
      {
        id: 3,
        name: "Web3",
        thumbnail:
          "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
        description: "Web3",
        rating: 4,
        price: 500,
      },
      {
        id: 4,
        name: "Web3",
        thumbnail:
          "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
        description: "Web3",
        rating: 4,
        price: 500,
      },
      {
        id: 5,
        name: "Web3",
        thumbnail:
          "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
        description: "Web3",
        rating: 4,
        price: 500,
      },
    ]);
  }, []);
  return (
    <div className="container-lg" style={{ padding: "20px" }}>
      <h4>Trending</h4>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {(() => {
            let activeNode = [];
            let courses = [];
            let partitionSize = 3;
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
                    <h5 className="card-title">{course.name}</h5>
                    <p className="card-text">{String(course.rating)}</p>
                    <p>{String(course.price)}</p>
                    <button
                      style={{ fontSize: "13px" }}
                      className="btn btn-outline-primary"
                    >
                      See More
                    </button>
                  </div>
                </div>
              );
              if (index > 0 && (index + 1) % partitionSize === 0) {
                courses.push(
                  <div
                    className={`carousel-item ${
                      index + 1 <= partitionSize ? "active" : ""
                    }`}
                  >
                    <div
                      className={`d-flex ${
                        activeNode.length > 2 ? "justify-content-between" : ""
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
                      activeNode.length > 2 ? "justify-content-between" : ""
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
      <div style={{ padding: "20px 0" }}>
        <h3>Courses for you</h3>
        <ListView
          btnText={"See More"}
          btnAction={(item: ListItem, idx: Number) => {
            navigate(`/description/${item.id}`);
          }}
          items={course.length > 0 ? course : []}
        />
      </div>
    </div>
  );
}
