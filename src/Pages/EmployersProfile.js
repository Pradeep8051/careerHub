import React, { useState } from 'react';
import Navbaar from './Navbaar';

const EmployersProfile = () => {
    const[tabOpen, setTabOpen]= useState(1)
    console.log("tabOpen",tabOpen)
  return (
    <div>
        <Navbaar/>

    <div className="container my-2">
  <div className="row">
    <div className="col-lg-4">
      <div className="profile-card-4 z-depth-3">
        <div className="card">
          <div className="card-body text-center bg_color_d rounded-top">
            <div className="user-box">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="user avatar"
              />
            </div>
            <h5 className="mb-1 text-white">Jhon Doe</h5>
            <h6 className="text-light">UI/UX Engineer</h6>
          </div>
          <div className="card-body">
            <ul className="list-group shadow-none">
              <li className="list-group-item">
                <div className="list-icon">
                  <i className="fa fa-phone-square" />
                </div>
                <div className="list-details">
                  <span>9910XXXXXX</span>
                  <small>Mobile Number</small>
                </div>
              </li>
              <li className="list-group-item">
                <div className="list-icon">
                  <i className="fa fa-envelope" />
                </div>
                <div className="list-details">
                  <span>info@example.com</span>
                  <small>Email Address</small>
                </div>
              </li>
              <li className="list-group-item">
                <div className="list-icon">
                  <i className="fa fa-globe" />
                </div>
                <div className="list-details">
                  <span>www.example.com</span>
                  <small>Website Address</small>
                </div>
              </li>
            </ul>
            {/* <div className="row text-center mt-4">
              <div className="col p-2">
                <h4 className="mb-1 line-height-5">154</h4>
                <small className="mb-0 font-weight-bold">Projects</small>
              </div>
              <div className="col p-2">
                <h4 className="mb-1 line-height-5">2.2k</h4>
                <small className="mb-0 font-weight-bold">Followers</small>
              </div>
              <div className="col p-2">
                <h4 className="mb-1 line-height-5">9.1k</h4>
                <small className="mb-0 font-weight-bold">Views</small>
              </div>
            </div> */}
          </div>
          <div className="card-footer text-center">
            <a
              href="javascript:void()"
              className="btn-social btn-facebook waves-effect waves-light m-1"
            >
              <i className="fa fa-facebook" />
            </a>
            <a
              href="javascript:void()"
              className="btn-social btn-google-plus waves-effect waves-light m-1"
            >
              <i className="fa fa-google-plus" />
            </a>
            <a
              href="javascript:void()"
              className="list-inline-item btn-social btn-behance waves-effect waves-light"
            >
              <i className="fa fa-behance" />
            </a>
            <a
              href="javascript:void()"
              className="list-inline-item btn-social btn-dribbble waves-effect waves-light"
            >
              <i className="fa fa-dribbble" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-8">
      <div className="card z-depth-3">
        <div className="card-body">
          <ul className="nav nav-pill nav nav-tabs nav-pills-primary nav-justified">
            <li className="nav-item">
              <a
                // href="javascript:void();"
                // data-target="#profile"
                // data-toggle="pill"
                class="nav-link active" data-bs-toggle="tab" href="#home"
                
                // className="nav-link active show bg_color_d "
                // onChange={(e)=>setTabOpen(e.target.value)}
              >
                <i className="icon-user" />{" "}
                <span className="hidden-xs">Profile</span>
              </a>
            </li>
            <li className="nav-item ">
              <a
               class="nav-link" data-bs-toggle="tab" href="#menu1"
                // href="javascript:void();"
                // data-target="#messages"
                // data-toggle="pill"
                // className="nav-link"
                
              >
                <i className="icon-envelope-open" />{" "}
                <span className="hidden-xs">Messages</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                // href="javascript:void();"
                // data-target="#edit"
                // data-toggle="pill"
                // className="nav-link"
                // onChange={()=>setTabOpen(3)}
                class="nav-link" data-bs-toggle="tab" href="#menu2"
              >
                <i className="icon-note" />
                <span className="hidden-xs">Edit</span>
              </a>
            </li>
          </ul>
          <div className="tab-content p-3">
            <div class="tab-pane container active" id="home">
              <h5 className="mb-3">User Profile</h5>
              <div className="row">
                <div className="col-md-6">
                  <h6>About</h6>
                  <p>Web Designer, UI/UX Engineer</p>
                  <h6>Hobbies</h6>
                  <p>
                    Indie music, skiing and hiking. I love the great outdoors.
                  </p>
                </div>
                <div className="col-md-6">
                  <h6>Recent badges</h6>
                  <a
                    href="javascript:void();"
                    className="badge badge-dark badge-pill"
                  >
                    html5
                  </a>
                  <a
                    href="javascript:void();"
                    className="badge badge-dark badge-pill"
                  >
                    react
                  </a>
                  <a
                    href="javascript:void();"
                    className="badge badge-dark badge-pill"
                  >
                    codeply
                  </a>
                  <a
                    href="javascript:void();"
                    className="badge badge-dark badge-pill"
                  >
                    angularjs
                  </a>
                  <a
                    href="javascript:void();"
                    className="badge badge-dark badge-pill"
                  >
                    css3
                  </a>
                  <a
                    href="javascript:void();"
                    className="badge badge-dark badge-pill"
                  >
                    jquery
                  </a>
                  <a
                    href="javascript:void();"
                    className="badge badge-dark badge-pill"
                  >
                    bootstrap
                  </a>
                  <a
                    href="javascript:void();"
                    className="badge badge-dark badge-pill"
                  >
                    responsive-design
                  </a>
                  <hr />
                  <span className="badge badge-primary">
                    <i className="fa fa-user" /> 900 Followers
                  </span>
                  <span className="badge badge-success">
                    <i className="fa fa-cog" /> 43 Forks
                  </span>
                  <span className="badge badge-danger">
                    <i className="fa fa-eye" /> 245 Views
                  </span>
                </div>
                <div className="col-md-12">
                  <h5 className="mt-2 mb-3">
                    <span className="fa fa-clock-o ion-clock float-right" />{" "}
                    Recent Activity
                  </h5>
                  <table className="table table-hover table-striped">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Abby</strong> joined ACME Project Team in{" "}
                          <strong>`Collaboration`</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Gary</strong> deleted My Board1 in{" "}
                          <strong>`Discussions`</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Kensington</strong> deleted MyBoard3 in{" "}
                          <strong>`Discussions`</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>John</strong> deleted My Board1 in{" "}
                          <strong>`Discussions`</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Skell</strong> deleted his post Look at Why
                          this is.. in <strong>`Discussions`</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/*/row*/}
            </div>
          
            
            <div class="tab-pane container fade" id="menu1">
              <div className="alert alert-info alert-dismissible" role="alert">
                <button type="button" className="close" data-dismiss="alert">
                  ×
                </button>
                <div className="alert-icon">
                  <i className="icon-info" />
                </div>
                <div className="alert-message">
                  <span>
                    <strong>Info!</strong> Lorem Ipsum is simply dummy text.
                  </span>
                </div>
              </div>
              <table className="table table-hover table-striped">
                <tbody>
                  <tr>
                    <td>
                      <span className="float-right font-weight-bold">
                        3 hrs ago
                      </span>{" "}
                      Here is your a link to the latest summary report from
                      the..
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="float-right font-weight-bold">
                        Yesterday
                      </span>{" "}
                      There has been a request on your account since that was..
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="float-right font-weight-bold">9/10</span>{" "}
                      Porttitor vitae ultrices quis, dapibus id dolor. Morbi
                      venenatis lacinia rhoncus.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="float-right font-weight-bold">9/4</span>{" "}
                      Vestibulum tincidunt ullamcorper eros eget luctus.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="float-right font-weight-bold">9/4</span>{" "}
                      Maxamillion ais the fix for tibulum tincidunt ullamcorper
                      eros.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> 
            
              
            <div  class="tab-pane container fade" id="menu2">
              <form>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label">
                    First name
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Mark"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label">
                    Last name
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Jhonsan"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label">
                    Email
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      type="email"
                      defaultValue="mark@example.com"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label">
                    Change profile
                  </label>
                  <div className="col-lg-9">
                    <input className="form-control" type="file" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label">
                    Website
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      type="url"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label">
                    Address
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue=""
                      placeholder="Street"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label" />
                  <div className="col-lg-6">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue=""
                      placeholder="City"
                    />
                  </div>
                  <div className="col-lg-3">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue=""
                      placeholder="State"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label">
                    Username
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="jhonsanmark"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label">
                    Password
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      type="password"
                      defaultValue={11111122333}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label">
                    Confirm password
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      type="password"
                      defaultValue={11111122333}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label" />
                  <div className="col-lg-9">
                  <div class="d-grid gap-2  d-md-block">
                  <button class="btn btn-primary me-3" type="button">Submit</button>
                  <button class="btn btn-danger" type="button">Cancel</button>
                  </div>
                    {/* <input
                      type="reset"
                      className="btn btn-secondary"
                      defaultValue="Cancel"
                    />
                    <input
                      type="button"
                      className="btn btn-primary"
                      defaultValue="Save Changes"
                    /> */}
                  </div>
                </div>
              </form>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>

  );
}

export default EmployersProfile;
