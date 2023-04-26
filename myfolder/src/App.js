import logo from './logo.svg';
import './App.css';
import {Cart} from './Cart';

function App() {
  const addColor1={
    name1:"blue"
  }
  const addColor2={
    name1:"green"
  }
  const addColor3={
    name1:"red"
  }
  const addColor4={
    name1:"grey"
  }
  const addColor5={
    name1:"orange"
  }
  
  const productdetails1={
    productId:"1",
    productPic:"https://assets.ajio.com/medias/sys_master/root/20210917/jW76/61439967aeb269a268948016/-473Wx593H-4921741550-multi-MODEL.jpg",
    productName:"Watch",
    Brand:"Titan",
    productDescription:"Titan watches, a product of TATA, is one of India's leading w to India with its exquisite watch collections. Apart from our own brands like Zoop, Fastrack and more, we also offer top international brands like Police, Tommy Hilfiger, Anne Klein, and more.",
    Price:"Price-$60",
    Rating:"Rating-4"

  }
  const productdetails2={
    productId:"2",
    productPic:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bf34e3cf2ea74279ad3cae890002d5e3_9366/Response_Super_3.0_Shoes_Grey_GW1376_01_standard.jpg",
    productName:"Shoes",
    Brand:"Adidas",
    productDescription:"Adidas, in full Adidas AG, German manufacturer of athletic shoes and apparel and sporting goods. In the early 21st century it was the largest sportswear manufacturer in Europe and the second largest (after Nike) in the world.",
    Price:"Price-$30",
    Rating:"Rating-5"

  }
  const productdetails3={
    productId:"3",
    productPic:"https://contents.mediadecathlon.com/p1484240/ab565f3675dbdd7e3c486175e2c16583/p1484240.jpg",
    productName:"Mens Shirt",
    Brand:"POLO",
    productDescription:"Apolo shirt is a knitted, set, a small opening at the neckline, and attached collar. Polo shirts were first knit from wool jersey but soon were knit with cotton and other soft materials. The first polo shirts were part of the uniforms worn by polo players on teams in England and the United States starting at the beginning of the nineteenth century. ",
    Price:"Price-$20",
    Rating:"Rating-5"

  }
  const productdetails4={
    productId:"4",
    productPic:"https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1",
    productName:"iPhone 13",
    Brand:"Apple",
    productDescription:"The iPhone 13 features a 6.1-inch (155 mm) display with Super Retina XDR OLED technology at a resolution of 2532×1170 pixels and a pixel density of about 460 PPI with a refresh rate of 60 Hz.",
    Price:"Price-$200",
    Rating:"Rating-5"

  }
  const productdetails5={
    productId:"5",
    productPic:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WH-XB910N-Blue-01.jpg?v=1656404563&width=1160",
    productName:"HeadPhone",
    Brand:"Sony",
    productDescription:"Most of the best Sony headphones have touch controls for functions like play/pause, skipping track, etc and some are compatible with voice assistants such as Alexa and Siri. Premium models such as the WH-1000XM5 over-ears offer even more advanced features such as Speak-to-Chat.",
    Price:"Price-$54",
    Rating:"Rating-5"

  }
  return (
    <div className="cart">
      <div><Cart
      product={productdetails1}
      addColor={addColor1}
      
      /></div>
      
      <div><Cart product={productdetails2} addColor={addColor2}/></div>
      <div><Cart product={productdetails3} addColor={addColor3}/></div>
      <div><Cart product={productdetails4} addColor={addColor4}/></div>
      <div><Cart product={productdetails5} addColor={addColor5}/></div>
</div>
  );
}

export default App;
