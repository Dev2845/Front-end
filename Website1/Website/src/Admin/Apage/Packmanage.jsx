import { use, useEffect, useState } from "react";
import useApi from "../../Custome/useApi";
import Aheader from "../Acomman/Aheader";
import axios from "axios";

function PackManage() {
  // const [pkg, setpkg] = useState([])

  useEffect(() => {
    fetchdata();
  }, []);

  // const fetchdata = async () => {
  //     const res = await axios.get("http://localhost:3000/package")
  //     console.log(res.data)
  //     setpkg(res.data)
  // }

  // data show custom hooks
  const { api, fetchdata } = useApi("http://localhost:3000/package");

  // get one Product
  const getPack = async (id) => {
    const res = await Axios.get(`http://localhost:3000/package/${id}`);
    // console.log(res.data);
    setpack(res.data);
  };

  const [pack, setpack] = useState({
    id: "",
    name: "",
    loaction: "",
    desc: "",
    days: "",
    price: "",
    img: "",
  });
  //   console.log(pack)

  //   Delete single data
  const deletePack = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/package/${id}`);
      console.log(res.data);
      console.log("delete This Pack");
      toast.success("Package Delete successfully");
      fetchdata();
    } catch (error) {
      console.log("APi data not Found ..", error);
    }
  };

  // model open close
  const [packedit, setpackedit] = useState(null);
  const [editing, setediting] = useState({
    id: "",
    name: "",
    loaction: "",
    desc: "",
    days: "",
    price: "",
    img: "",
  });

  const getdata = (data) => {
    console.log(data)
    setediting(data)
    setpackedit(data)
  }

  const getchange = (e) => {
    setediting({
      ...editing,
      [e.target.name]: e.target.value
    })
    console.log(editing)
  }

  const UpdatePack = async (e) => {
    e.preventDefault();


    try {
      if (editing.days == "" || editing.desc == "" || editing.img == "" || editing.loaction == "" || editing.name == "" || editing.price == "") {
        console.log("pls Field a Package data")
        toast.error("pls Field a Package data")
        return false
      }

      const res = await axios.put(`http://localhost:3000/package/${editing.id}`, editing)
      console.log(res.data)
      toast.success("Package Update Successfully")
      fetchdata()
      setpackedit(null)

    } catch (error) {
      console.log("API Data Not Foun", error)
      toast.error("Api data not Found")
    }
  }


  return (
    <div>
      <Aheader/>
      <h1 className="text-center">Package Manage Detils</h1>
      <div className="container">
        <table className="table">
          <thead>
            <tr className="text-center">
              <th scope="col">#id</th>
              <th scope="col">Name</th>
              <th scope="col">location</th>
              <th scope="col">Images</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {api &&
              api.map((data, key) => {
                // console.log(data)
                return (
                  <tr className="text-center" key={key}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.loaction}</td>
                    <td>
                      <img src={data.img} style={{ width: "100px" }} alt="" />
                    </td>
                    <td>
                      <button
                        className="btn btn-info"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => getPack(data.id)}
                      >
                        View
                      </button>
                      <button className="btn btn-success mx-2" onClick={() => getdata(data)}>Edit</button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deletePack(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Package Details View
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="col-12 my-3">
                  <div className="desti3im">
                    <div className="desti3im1 position-relative">
                      <div className="desti3im1i">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="detail.html">
                              <img src={pack.img} className="w-100" alt="abc" />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="desti3im1i1 shadow_box p-3 bg-white rounded-3 position-absolute">
                        <div className="desti3im1i1i row">
                          <div className="col-md-6 col-6">
                            <div className="desti3im1i1il">
                              <h6 className="mb-0 font_14">
                                <a href="detail.html">
                                  <i className="fa fa-clock-o me-1 col_green" />{" "}
                                  1 Week
                                </a>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div className="desti3im1i1ir text-end">
                              <h6 className="mb-0 font_14">
                                <a href="detail.html">
                                  <i className="fa fa-envelope col_green" />
                                </a>{" "}
                                <a href="detail.html">
                                  <i className="fa fa-map-pin col_green ms-2" />
                                </a>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="desti3im1i2 top-0 position-absolute w-100 text-end p-3">
                        <h6 className="d-inline-block mb-0 bg_green text-white p-1 px-3 font_14 rounded_50">
                          SALE
                        </h6>
                      </div>
                    </div>
                    <div className="desti3im2 shadow_box p-4">
                      <h5 className="mt-4 fs-4">
                        <a href="detail.html">{pack.name}</a>
                      </h5>
                      <h6>
                        <i className="fa fa-map-marker me-1 col_green" />{" "}
                        {pack.loaction}
                      </h6>
                      <hr />
                      <p>{pack.desc}</p>
                      <hr />
                      <div className="desti3im2i row">
                        <div className="col-md-6 col-6">
                          <div className="desti3im2il">
                            <h6 className="mb-0 mt-2">
                              <a className="button" href="detail.html">
                                Details
                              </a>
                            </h6>
                          </div>
                        </div>
                        <div className="col-md-6 col-6">
                          <div className="desti3im2ir text-end">
                            <h4 className="mb-0">
                              <span className="fw-normal font_14 text-muted">
                                From
                              </span>
                              <br />$ {pack.price}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {
          packedit && (
            <div className="col-12 my-5 mx-auto">
              <div className="contact_2l">
                <form action="" >

                  <h1 className="mt-3">PackAge Update</h1>
                  <div className="blog_dt1ib3i row">
                    <div className="col-md-6">
                      <div className="blog_dt1ib3il">
                        <input placeholder="Name" name='name' onChange={getchange} value={editing.name} className="form-control border-0 bg-light" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="blog_dt1ib3il">
                        <input placeholder="Loaction" name='loaction' onChange={getchange} value={editing.loaction} className="form-control border-0 bg-light" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="blog_dt1ib3i row mt-4">
                    <div className="col-md-6">
                      <div className="blog_dt1ib3il">
                        <input placeholder="Enter your Days" name='days' onChange={getchange} value={editing.days} className="form-control border-0 bg-light" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="blog_dt1ib3il">
                        <input placeholder="Enter your Price" name='price' onChange={getchange} value={editing.price} className="form-control border-0 bg-light" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="blog_dt1ib3i row mt-4">
                    <div className="col-md-12">
                      <div className="blog_dt1ib3il">
                        <input placeholder="Enter your Images" name='img' onChange={getchange} value={editing.img} className="form-control border-0 bg-light" type="url" />
                      </div>
                    </div>

                  </div>
                  <div className="blog_dt1ib3i row mt-4">
                    <div className="col-md-12">
                      <div className="blog_dt1ib3il">
                        <textarea placeholder="Enter your  desc" name='desc' onChange={getchange} value={editing.desc} className="form-control form_text border-0 bg-light" defaultValue={""} />

                      </div>
                    </div>
                    <div className="col-md-12 mt-4">
                      <div className="row">
                        <div className="col-md-6">
                          <input className="form-control btn btn-success" onClick={UpdatePack} type="submit" value="update" />
                        </div>
                        <div className="col-md-6">
                          <input className="form-control btn btn-success" type="submit" onClick={() => setpackedit(null)} value="Cancle update" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default PackManage;