import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
  return (
    <div className="home">
      <img 
      className="home__image"
      src=" https://images.nationalgeographic.org/image/upload/v1638892233/EducationHub/photos/crops-growing-in-thailand.jpg" 
      alt=""
      /> 
      <div className="home__row">
      {/*product id, title, price rating,image */}
      <Product
      id="12345"
      title="Tomatoes"
      price={8.00}
      rating={5}
      image="https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg?itok=2owPswip"
      />

     <Product
      id="12546"
      title="Potatoes"
      price={12.00}
      rating={5}
      image="https://cdn.mos.cms.futurecdn.net/ftREv7bnmPBSmJVsdE3kAi.jpg"
      />
      </div>

      <div className="home__row">
      <Product
      id="32154"
      title="Brinjal"
      price={20.00}
      rating={5}
      image="https://housing.com/news/wp-content/uploads/2022/11/brinjal-feature-compressed.jpg"
      />
      <Product
      id="799545"
      title="Okra"
      price={25.00}
      rating={5}
      image="https://i.pinimg.com/originals/8e/46/85/8e4685739a111d22a7f967bf31030d08.jpg"
      />
      <Product
      id="89545"
      title="Carrots"
      price={50.00}
      rating={5}
      image="https://www.apnikheti.com/upload/crops/4958idea99carrots.jpg"
      />
      </div>
      <div className="home__row">
      <Product
      id="56874"
      title="Farm grown Paddy: Raw Rice"
      price={500.00}
      rating={5}
      image="https://media.istockphoto.com/id/1178095816/photo/farmers-farming-on-rice-terraces-ban-pa-bong-piang-northern-region-in-mae-chaem-district.jpg?s=612x612&w=0&k=20&c=rWqXSgtro-n2suFFbVETWlJMdLYL0GIK_czggly5OEI="
      />

    <Product
      id="56874"
      title="Farm grown Wheat"
      price={550.00}
      rating={5}
      image="https://www.agrifarming.in/wp-content/uploads/2015/04/Wheat-Production..jpg"
      />
      </div>
      {/*product */}
    </div>
  );
}

export default Home;
