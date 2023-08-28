import './Contact.css'

const Contact = () => {
	return (
		<>
			<div className="container">
				<div className="top-bar">
					<h1 className="color-white text-center mb-5">Contact Us</h1>

					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-12 text-center">
							<i className="fa fa-phone color-white text-center" style={{fontSize : '30px'}}></i>
							<h4 className="color-white text-center">Phone</h4>
							<p className="color-white text-center">0300-4504123</p>
							</div>
              <div className="col-lg-4 col-md-4 col-sm-12 text-center">
							<i className="fa fa-envelope color-white text-center" style={{fontSize : '30px'}}></i>
							<h4 className="color-white text-center">Email</h4>
							<p className="color-white text-center">email@gmail.com</p>
							</div>
              <div className="col-lg-4 col-md-4 col-sm-12 text-center">
							<i className="fa fa-map-marker color-white text-center" style={{fontSize : '30px'}}></i>
							<h4 className="color-white text-center">Location</h4>
							<p className="color-white text-center">123, Main Street.</p>
							</div>
					</div>
				</div>
        <form class="row g-4 color-white mx-auto mt-4" style={{width : '60vw'}}>
  <div class="col-md-6">
    <label for="FullName" class="form-label">Full Name</label>
    <input type="text" class="form-control" id="inputFullName" />
  </div>
  <div class="col-md-6">
    <label for="subject" class="form-label">Subject</label>
    <input type="text" class="form-control" id="inputSubject" />
  </div>
  <div class="col-12">
    <label for="inputemail" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail" placeholder="Enter your e-mail address." />
  </div>
  <div class="col-12">
    <label for="inputPhone" class="form-label">Phone</label>
    <input type="number" class="form-control" id="inputAddress2" placeholder="Enter your phone number." />
  </div>
  <div class="col-md-12">
    <label for="inputMessage" class="form-label">Message</label>
    <textarea type="messagebox" class="form-control" id="inputMessage" placeHolder='Enter your message here' style={{height : '25vh'}}/>
  </div>
 
 <div class="col-12 d-grid gap-2 d-md-flex justify-content-md-end mb-5">
    <button type="submit" class="btn btn-primary float-right hero-left-btn">Submit</button>
  </div>
</form>


			</div>
		</>
	);
};

export default Contact;
