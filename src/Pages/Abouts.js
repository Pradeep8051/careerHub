import React from 'react';
import Navbaar from './Navbaar';
import img1 from "../images/t1.jpg"
import img2 from "../images/t2.jpg"
import img3 from "../images/t3.jpg"
// import img4 from "../images/t4.jpg"
// import img5 from "../images/t5.jpg"

const Abouts = () => {
  return (
    <div className='bg-white'>
    
<Navbaar/>
<div className="slider-area ">
        <div
          className="single-slider section-overly slider-height2 d-flex align-items-center"
          data-background="assets/img/hero/about.jpg"
        >
          <div className="container">
            <div className="row cards">
              <div className="col-xl-12">
                <div className="hero-cap text-center">
                  <h2> About Us</h2>
                  {/* <div action="#" className="serach-form-area">
                    <div className="row justify-content-center form-wrap">
                      <div className="col-lg-4 form-cols">
                        <select
                          class="form-select form-select-sm default-sel"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>I AM SEARCHING </option>
                          <option> Practice Internship</option>
                          <option> Training Program / Course</option>
                          <option> Online Programs</option>
                          <option> Certification Course</option>
                          <option> Fellowship/scholarships</option>
                          <option> Events </option>
                          <option> Diploma Course</option>
                          <option> Bachelor Degree</option>
                          <option> Master Degree</option>
                          <option> Jobs</option>
                          <option> Business Proposal</option>
                        </select>
                      </div>
                      <div className="col-lg-3 form-cols">
                        <div className="default-select" id="default-selects">
                          <select
                            class="form-select form-select-sm default-sel"
                            aria-label=".form-select-sm example"
                          >
                            <option selected>In Industry </option>
                            <option value="1">Health</option>
                            <option value="2">Software Engineering</option>
                            <option value="3">Database</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3 form-cols">
                        <div className="default-select" id="default-selects2">
                          <select
                            class="form-select form-select-sm default-sel"
                            aria-label=".form-select-sm example"
                          >
                            <option value={1}>In City </option>
                            <option value={2}>Medical</option>
                            <option value={3}>Technology</option>
                            <option value={4}>Goverment</option>
                            <option value={5}>Development</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-2 form-cols">
                        <button type="button" className="btn btn-info">
                          <span className="lnr lnr-magnifier" /> Search
                        </button>
                      </div>
                    </div>
                  </div> */}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <section class="service-area section-gap" id="service">
				<div class="container mt-5">
					<div class="row d-flex justify-content-center">
						<div class="col-md-8 pb-40 header-text">
							<h1>Why Choose Us</h1>
							<p>
								Who are in extremely love with eco friendly system.
							</p>
						</div>
					</div>
					<div class="row mt-5">
						<div class="col-lg-4 col-md-6">
							<div class="single-service">
								<h4><span class="lnr lnr-user"></span>Expert Technicians</h4>
								<p>
									Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="single-service">
								<h4><span class="lnr lnr-license"></span>Professional Service</h4>
								<p>
									Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>								
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="single-service">
								<h4><span class="lnr lnr-phone"></span>Great Support</h4>
								<p>
									Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>								
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="single-service">
								<h4><span class="lnr lnr-rocket"></span>Technical Skills</h4>
								<p>
									Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>				
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="single-service">
								<h4><span class="lnr lnr-diamond"></span>Highly Recomended</h4>
								<p>
									Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>								
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="single-service">
								<h4><span class="lnr lnr-bubble"></span>Positive Reviews</h4>
								<p>
									Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>									
							</div>
						</div>						
					</div>
				</div>	
			</section>

            <section class="team-area section-gap mb-4" id="team">
				<div class="container mt-4">
					<div class="row d-flex justify-content-center">
						<div class="menu-content pb-70 col-lg-8">
							<div class="title text-center">
								<h1 class="mb-10">Experienced Mentor Team</h1>
								<p>Who are in extremely love with eco friendly system.</p>
							</div>
						</div>
					</div>						
					<div class="row justify-content-center d-flex align-items-center mt-4">
						<div class="col-md-3 single-team">
						    <div class="thumb">
						        <img class="img-fluid" src={img1} alt=""/>
						        <div class="align-items-center justify-content-center d-flex">
									<a href="#"><i class="fa fa-facebook"></i></a>
									<a href="#"><i class="fa fa-twitter"></i></a>
									<a href="#"><i class="fa fa-linkedin"></i></a>
						        </div>
						    </div>
						    <div class="meta-text mt-30 text-center">
							    <h4>Ethel Davis</h4>
							    <p>Managing Director (Sales)</p>									    	
						    </div>
						</div>
						<div class="col-md-3 single-team">
						    <div class="thumb">
						        <img class="img-fluid" src={img2} alt=""/>
						        <div class="align-items-center justify-content-center d-flex">
									<a href="#"><i class="fa fa-facebook"></i></a>
									<a href="#"><i class="fa fa-twitter"></i></a>
									<a href="#"><i class="fa fa-linkedin"></i></a>
						        </div>
						    </div>
						    <div class="meta-text mt-30 text-center">
							    <h4>Rodney Cooper</h4>
							    <p>Creative Art Director (Project)</p>			    	
						    </div>
						</div>	
						<div class="col-md-3 single-team">
						    <div class="thumb">
						        <img class="img-fluid"  src={img3} alt=""/>
						        <div class="align-items-center justify-content-center d-flex">
									<a href="#"><i class="fa fa-facebook"></i></a>
									<a href="#"><i class="fa fa-twitter"></i></a>
									<a href="#"><i class="fa fa-linkedin"></i></a>
						        </div>
						    </div>
						    <div class="meta-text mt-30 text-center">
							    <h4>Dora Walker</h4>
							    <p>Senior Core Developer</p>			    	
						    </div>
						</div>	
						<div class="col-md-3 single-team">
						    <div class="thumb">
						        <img class="img-fluid" src={img3} alt=""/>
						        <div class="align-items-center justify-content-center d-flex">
									<a href="#"><i class="fa fa-facebook"></i></a>
									<a href="#"><i class="fa fa-twitter"></i></a>
									<a href="#"><i class="fa fa-linkedin"></i></a>
						        </div>
						    </div>
						    <div class="meta-text mt-30 text-center">
							    <h4>Lena Keller</h4>
							    <p>Creative Content Developer</p>			    	
						    </div>
						</div>																									
				
					</div>
				</div>	
			</section>
    </div>
  );
}

export default Abouts;
