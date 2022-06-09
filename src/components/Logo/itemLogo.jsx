import "./styleLogo.css";

const Logo = (props) => {

  return (
    <div className='divLogo'>
      <div
        className="imgFotoLogo"

        style={{
          backgroundImage: `url(${props.linkImagem})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}>

      </div>
    </div>

  );
};

export default Logo;