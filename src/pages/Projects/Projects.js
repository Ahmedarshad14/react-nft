import { projects, topDevelopers } from "../../data";
import "./Projects.css";
const Projects = () => (
	<>
		<div className="container">
			<div className="gradient-box mt-4 mb-4"></div>

			<div className="row">
				<div className="col-lg-2 col-md-2 col-sm12 text-center">
					<img
						src="/images/location.jpg"
						style={{ width: "150px", height: "100px" }}
						alt=""
					/>
					<h3 className="color-white">NFT Hub</h3>
					<p>@nfthub</p>
					<p>Follwers: 2.1M</p>
					<button className="hero-left-btn">Ongoing Activities</button>
					<button className="hero-left-btn">Testimonials</button>
					<button className="hero-left-btn">Previous Prjoects</button>
					<button className="hero-left-btn">Case Studies</button>
				</div>
				<div className="col-lg-10 col-md-10 col-sm-6">
					<div className="row">
						{projects.map((project) => (
							<div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center color-white">
								<img
									src={project.img}
									style={{ width: "200px", height: "200px" }}
									alt=""
								/>
								<h4>{project.name}</h4>
								<button className="hero-left-btn mb-4">{project.link}</button>
							</div>
						))}
						)
					</div>
				</div>
				<div className="container">
					<div className="gradient-box mt-4 mb-4"></div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-2 col-md-2 col-sm12 text-center">
					<img
						src="/images/location.jpg"
						style={{ width: "150px", height: "100px" }}
						alt=""
					/>
					<h3 className="color-white">NFT Hub</h3>
					<p>@nfthub</p>
					<p>Follwers: 2.1M</p>
					<button className="hero-left-btn">Ongoing Activities</button>
					<button className="hero-left-btn">Testimonials</button>
					<button className="hero-left-btn">Previous Prjoects</button>
					<button className="hero-left-btn">Case Studies</button>
				</div>
				<div className="col-lg-10 col-md-10 col-sm-6">
					<div className="row">
						<h1 className="text-center color-white">Testimonials</h1>
						{topDevelopers.map((developer) => (
							<>
								<div className="col-lg-3 col-md-3 col-sm12 text-center mt-4">
									<img
										src={developer.img}
										alt=""
										style={{ width: "100px", height: "100px" }}
									/>
									<h3 className="color-white">{developer.name}</h3>
									<button className="hero-left-btn">LinkedIn</button>
								</div>
							</>
						))}
					</div>
				</div>
				<div className="container">
					<div className="gradient-box mt-4 mb-4"></div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-2 col-md-2 col-sm12 text-center">
					<img
						src="/images/location.jpg"
						style={{ width: "150px", height: "100px" }}
						alt=""
					/>
					<h3 className="color-white">NFT Hub</h3>
					<p>@nfthub</p>
					<p>Follwers: 2.1M</p>
					<button className="hero-left-btn">Ongoing Activities</button>
					<button className="hero-left-btn">Testimonials</button>
					<button className="hero-left-btn">Previous Prjoects</button>
					<button className="hero-left-btn">Case Studies</button>
				</div>
			
			<div className="col-lg-10 col-md-10 col-sm-6">
				<div className="row">
					<h1 className="text-center color-white">Our Previous Projects</h1>
					{projects.map((project) => {
						return (
							<>
								<div className="col-lg-3 col-md-3 col-sm12 text-center mt-4">
									<img
										src={project.img}
										alt=""
										style={{ width: "100px", height: "100px" }}
									/>
									<h5 className="color-white mt-3">{project.name}</h5>
									<button className="hero-left-btn">LinkedIn</button>
								</div>
							</>
						);
					})}
				</div></div>
			</div>

			<div className="container">
				<div className="gradient-box mt-4 mb-4"></div>
			</div>
		</div>
	</>
);

export default Projects;
