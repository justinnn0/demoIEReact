import './ImageCard.css';

const ImageCard = () => {
  return(
    <div className="card">
        <img className='img' src = {require('./assets/demo.png')} alt="demo" />
        <div className="container">
        <h4><b>John Doe</b></h4> 
        <p>Architect & Engineer</p> 
  </div>
</div>
)
};


  export default ImageCard;