import React from "react";
import "./home.css";
import { topCategories, topDevelopers, projects, technologies, competitiveAdvantages } from "../../data";

const Home = () => {
	return (
		<>
			<div className="row container-fluid">
				<div className="col-lg-6 col-md-6 col-sm-12" id="hero-left">
					<h2 className="heading">Not Just Another Digital Agency</h2>
					<p>
						We specilaize in providing innovative digital solutions to help your
						business grow and succeed in the ever-changing online landscape
					</p>
					<button className="hero-left-btn">Explore</button>
					<button className="hero-left-btn">Get Quote</button>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12">
					<h1 className={"heading"}>Top Categories</h1>
					<hr />
					<div className="row">
						{topCategories.map((category) => {
							return (
								<>
									<div className="col-6 col-lg-4 col-md-4 col-sm-6">
										<img src={category.img} />
										<p>{category.name}</p>
									</div>
								</>
							);
						})}
					</div>
				</div>
				<div className="top-developers">
					<h1 className="color-white text-center mt-4">Top Developers</h1>
					<hr className="mt-4 text-center" />
					<div className="devs">
						<div className="row">
							{topDevelopers.map((dev) => {
								return (
									<>
										<div className="col-lg-2 col-md-2 col-sm-6 col-6 text-center mt-4">
											<img className="img-sm" src={dev.img} alt="" />
											<h2 className="color-white">{dev.name}</h2>
											<button className="hero-left-btn mt-2 mb-2">
												LinkedIn
											</button>
										</div>
									</>
								);
							})}
						</div>
						<div className="projects text-center">
							<h1 className="color-white">Projects We Have Worked On</h1>
							<hr />
							<div className="top-projects">
								<div className="row">
									{projects.map((project) => (
										<>
											<div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center mt-4">
												<img src={project.img} alt="" />
												<p>{project.name}</p>
											</div>
										</>
									))}
								</div>
							</div>
						</div>
						<div className="technologies mt-5">
							<h1 className="color-white text-center mt-4">Technologies We Work With</h1>
							<hr className="mt-4"/>
							<div className="row">
								{
									technologies.map((tech) => (
										<>
										<div className="col-lg-4 col-md-4 col-sm-12 col-6 text-center mt-4 text-center">
											<img src={tech.img} alt="" className="img-hw"/>
										</div>
										</>
									
									))}
							</div>

						</div>

						<div className = "competitive-advantages text-center color-white" >
							<h1>Competitive Advantages</h1>
							<hr className="mt-5"/>
							<div className="row">
								{
									competitiveAdvantages.map((advantage) => (
										<>
										<div className="col-lg-3 col-md-3 col-sm-3">
										<div className="icon">
											{advantage.img} 
										</div>
										<h2>{advantage.heading}</h2>
										<div>{advantage.text}</div>
										</div>
										
										</>
									))
								}
							</div>
							<div className="row mt-4 mb-4">
								<div className="col-lg-6 col-md-6 col-sm-12 mt-5 pt-4 pb-4">
									<img src="/images/about.svg" alt="" />
								</div>

								<div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5 pt-5 pb-5 text-start">
									<h2 style={{marginTop : "80px"}}>Create, Sell, Well and collect your best NFTs with us very fast</h2>
									<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro qui id, facilis praesentium aperiam ducimus distinctio?</p>
									<button className="hero-left-btn">Connect Wallet</button>
								</div>

							</div>

							
						</div>


					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
