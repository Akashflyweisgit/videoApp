/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../../Common/Hoc";
import { Card, Grid, Button } from "@material-ui/core";
// import Loder from "../../Loder/Loder";
import { getBaseUrl } from "../../utils";
import { showNotificationMsz } from "../../utils/Validation";
import axios from "axios";

const CreateTestVideos = (props) => {
  const [setisloading] = useState(false);
  const [discount, setdiscount] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [video, setVideo] = useState("");

  //error
  const [EditDiscount, setEditDiscount] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //add TestVideo

  const addTestVideo = () => {
    try {
      let url = getBaseUrl() + "api/add/course";
      setisloading(true);

      const fd = new FormData();
      fd.append("title", title);
      fd.append("description", desc);
      fd.append("premiumVideo", video);

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .post(url, fd, config)
        .then(
          (res) => {
            console.log("data Category:::", res);
            setisloading(false);
            showNotificationMsz(res.data.msg, "success");
          },

          (error) => {
            setisloading(false);
            console.log("data response error:::", error);
            showNotificationMsz(error, "danger");
          }
        )
        .catch((e) => {
          setisloading(false);
          console.log("data response error:::", e);
          showNotificationMsz(e, "danger");
        });
    } catch (error) {}
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <div className="home_padding">
          <div className="content_padding">
            <Grid className="Component_main_grid p-2 "></Grid>

            <div>
              <Card className=" mb-2 Card_shadow p-3">
                <div className="card_admissiondetails_height">
                  <div className="textfiled_margin">
                    <div className="card_content_instition">
                      <h5 className="text_filed_heading">Add Test Videos</h5>

                      <Grid className="Component_main_grid">
                        <Grid item md={12}>
                          <div className="text_filed_heading">Title</div>
                          <div className=" mt-1 mr-2">
                            <input
                              type="text"
                              className="form-control "
                              placeholder="Enter Name"
                              autoComplete="off"
                              value={title}
                              onChange={(e) => {
                                setTitle(e.target.value);
                              }}
                            />
                          </div>

                          <div className="text_filed_heading">Description</div>
                          <div className=" mt-1 mr-2">
                            <input
                              type="text"
                              className="form-control "
                              placeholder="Enter Name"
                              autoComplete="off"
                              value={desc}
                              onChange={(e) => {
                                setDesc(e.target.value);
                              }}
                            />
                          </div>

                          <div className="text_filed_heading">Choose File</div>
                          <div className=" mt-1 mr-2">
                            <input
                              type="file"
                              accept="video*/"
                              className="form-control "
                              placeholder="Enter Name"
                              autoComplete="off"
                              value={video}
                              onChange={(e) => {
                                setEditDiscount(false);
                                setVideo(e.target.value);
                              }}
                            />
                            {EditDiscount && (
                              <span className="text-danger">
                                Enter Discount
                              </span>
                            )}
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="mt-2 pb-3 ">
                      <Button
                        variant="contained"
                        className="button_formatting"
                        onClick={addTestVideo}
                      >
                        Create
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(CreateTestVideos);
