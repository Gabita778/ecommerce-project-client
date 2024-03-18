import modelw1 from "../assets/modelw1.png";
import modelm2 from "../assets/modelm2.png";
import modelw3 from "../assets/modelw3.png";
import modelw4 from "../assets/modelw4.png";
import modelw5 from "../assets/modelw5.png";
import modelw12 from "../assets/modelw12.png";
import modelm1 from "../assets/modelm1.png";
import modelw8 from "../assets/modelw8.png";


const ImageGallery = () => {
  const images = [modelw1,modelm2,modelw3,modelw4,modelw5,modelw12,modelm1,modelw8];
  
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
