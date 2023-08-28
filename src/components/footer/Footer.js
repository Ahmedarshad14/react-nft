import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
      <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center mt-5">
                <h5 className="color-white text-center">Development</h5>
                <p className="color-white">Mern Stack</p>
                <p className="color-white">React JS</p>
                <p className="color-white">Node JS</p>
                <p className="color-white">Express JS</p>
                <p className="color-white">Apollo Client</p>
                <p className="color-white">Mongo DB</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center mt-5">
                <h5 className="color-white text-center">Design</h5>
                <p className="color-white">Figma</p>
                <p className="color-white">Adobe photoShop</p>
                <p className="color-white">Adobe Illustrator</p>
                <p className="color-white">Canva</p>
                <p className="color-white">Mid Journey</p>
                
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center mt-5">
                <h5 className="color-white text-center">Stem Wizard Academia</h5>
                <p className="color-white">Stem Eduction</p>
                <p className="color-white">Air Academics</p>
                <p className="color-white">Stem Wizard</p>
                <p className="color-white">Express JS</p>
                <p className="color-white">Online Education</p>
                
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center mt-5">
                <h5 className="color-white text-center">Subscribe To Our NewsLetter</h5>
                <input type="text" />
                <button className='hero-left-btn'>Subscribe</button>
            </div>
        </div>
      </div>
      </div>
    )
}

export default Footer;