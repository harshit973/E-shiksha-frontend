import { useEffect, useState } from "react";
import { ListItem } from "../../types/ListItem";
import "./ListView.css";
import { ListView as ListViewType } from "../../types/ListView";
export default function ListView(props: ListViewType) {
  const [items, setItems] = useState<Array<ListItem>>([]);
  useEffect(() => {
    setItems(props.content);
  }, [props.content]);
  return (
    <>
      {items.length > 0 &&
        (() => {
          let temp = items.map((item, idx) => {
            return (
              <div className="list-block">
                <div className="d-flex">
                  {item.image && <img src={item.image} className="thumbnail" />}
                  <div className="content">
                    <p
                      style={{
                        fontWeight: "bold",
                        textTransform: "capitalize",
                      }}
                    >
                      {item.head}
                    </p>
                    <p>{item.subhead}</p>
                    <p>
                      <span className="badge badge-success">
                        {String(item.stars)}
                        <img src="/star-icon.png" className="rating" />
                      </span>
                    </p>
                    {window.screen.width < 600 && (
                      <div>
                        <p className="bolder">{item.right}</p>
                      </div>
                    )}
                    <button
                      style={{ fontSize: "13px" }}
                      className="btn btn-outline-primary"
                      onClick={() => {
                        props.btnAction(item, idx);
                      }}
                    >
                      {props.btnText}
                    </button>
                  </div>
                </div>
                {window.screen.width >= 600 && (
                  <div>
                    <p className="bolder">{item.right}</p>
                  </div>
                )}
              </div>
            );
          });
          return temp;
        })()}
      {props.pages > 0 && (
        <div style={{ gap: 10 }} className="row justify-content-end p-2">
          {(() => {
            let paginationButtons = [];
            for (let i = 0; i < props.pages; i++) {
              paginationButtons.push(
                <button
                  onClick={() =>
                    props.onPaginate({ offset: i, pageSize: props.pageSize })
                  }
                  className={`btn ${
                    props.pageNumber === i
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                >
                  {i + 1}
                </button>
              );
            }
            return paginationButtons;
          })()}
        </div>
      )}
    </>
  );
}
