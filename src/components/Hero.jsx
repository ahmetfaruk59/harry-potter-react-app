const Hero = ({ text, background }) => {

  const style = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <div className="hero d-flex" style={style}>
      <h2>{text}</h2>
    </div>
  )
}

export default Hero