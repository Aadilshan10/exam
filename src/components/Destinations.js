import { Outlet } from "react-router-dom";
const Destination = () => {
    return ( 
        <>
       
      <div className="container">
      <div class="row">
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://images.unsplash.com/photo-1554072675-66db59dba46f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2VybWFueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=" " />
        <div class="card-body">
          <h5 class="card-title">Germany</h5>
          <p class="card-text">Germany, located in the heart of Europe, is a vibrant nation renowned for its rich history, culture, and technological advancements. With a diverse landscape encompassing picturesque forests, majestic mountains, and scenic rivers, Germany offers a captivating blend of natural beauty and architectural wonders. From the medieval castles along the Rhine River to the modern skyline of Berlin, the country seamlessly merges its glorious past with its progressive present. Home to renowned philosophers, composers, and scientists, Germany has made remarkable contributions to art, music, literature, and scientific research. With a strong economy, efficient infrastructure, and a commitment to sustainability, Germany stands as a global leader in innovation, engineering, and renewable energy, while its warm-hearted people, world-class cuisine, and celebrated festivals create a welcoming atmosphere for visitors from around the world.</p>
          <a  class="btn " style={{backgroundColor:"#247175"}}>Rs.10000</a>
        </div>
      </div>
     </div>
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://media.istockphoto.com/id/1311302395/photo/express-train.webp?b=1&s=170667a&w=0&k=20&c=lz2XYX11RYFkxYdcKc_1e5CFoEUmcVEFR4MSCdqSw1o=" alt=" " />
          <h5 class="card-title">Switzerland</h5>
          <p class="card-text">Switzerland, nestled in the heart of the Alps, is a captivating country known for its breathtaking landscapes, precision engineering, and renowned financial institutions. With its charming towns, pristine lakes, and snow-capped peaks, Switzerland is a paradise for outdoor enthusiasts and nature lovers.</p>
          <a  class="btn " style={{backgroundColor:"#247175"}}>Rs.30000</a>
        </div>
      </div>
    </div>
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://images.unsplash.com/photo-1543832923-44667a44c804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5nbGFuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=" " />
        <div class="card-body">
          <h5 class="card-title">United kingdom</h5>
          <p class="card-text">The United Kingdom, a land of rich history and diverse cultures, is famous for its iconic landmarks such as Big Ben, Buckingham Palace, and the Tower of London. Its vibrant cities, including London, Edinburgh, and Manchester, offer a blend of tradition and modernity, while its literature, music, and theater scenes thrive with creativity..</p>
          <a  class="btn " style={{backgroundColor:"#247175"}}>Rs.35000</a>
        </div>
      </div>
    </div>

    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.webp?b=1&s=170667a&w=0&k=20&c=CdU6wg8rA9Cc_9P4NP913RpG81Z95qfNIWzcbQQU1dQ=" alt=" " />
        <div class="card-body">
          <h5 class="card-title">France</h5>
          <p class="card-text">France, a country synonymous with art, fashion, and gastronomy, exudes an air of sophistication. From the romantic streets of Paris to the sun-kissed beaches of the French Riviera, France delights visitors with its exquisite cuisine, world-class museums, and architectural marvels such as the Eiffel Tower and the Palace of Versailles.</p>
          <a  class="btn " style={{backgroundColor:"#247175"}}>Rs.25000</a>
        </div>
      </div>
    </div>

    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://media.istockphoto.com/id/1438301944/photo/le%C3%B3n-city-spain-with-leon-cathedral-drone-view-castile-and-le%C3%B3n.webp?b=1&s=170667a&w=0&k=20&c=ykEPM_3Md9gsbwy-7Txhxh8BDhRWTC1M6p1FC-oH8r4=" alt=" " />
        <div class="card-body">
          <h5 class="card-title">Spain</h5>
          <p class="card-text">Spain, with its vibrant culture and passionate people, entices travelers with its stunning beaches, historic cities, and lively fiestas. From the vibrant streets of Barcelona to the traditional charm of Seville, Spain offers a kaleidoscope of experiences that celebrate its rich heritage.</p>
          <a  class="btn " style={{backgroundColor:"#247175"}}>Rs.45000</a>
        </div>
      </div>
     </div>

     <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://media.istockphoto.com/id/1378123067/photo/gloriette-pavilion-and-neptune-fountain-in-schonbrunn-park-vienna-austria.webp?b=1&s=170667a&w=0&k=20&c=uci46Wp-bfQSomzvMzHtytyzNeUQw3eQjsYzjU-AiXM=" alt=" " />
      <div class="card-body">
          <h5 class="card-title">Austria</h5>
          <p class="card-text">Austria, nestled in the heart of Europe, is renowned for its magnificent Alpine scenery, classical music heritage, and imperial architecture. From the elegant streets of Vienna to the idyllic landscapes of the Austrian Alps, the country captivates visitors with its cultural treasures, including the Vienna State Opera, Schönbrunn Palace, and the birthplace of Mozart, Salzburg.</p>
          <a  class="btn " style={{backgroundColor:"#247175"}}>Rs.10000</a>
        </div>
      </div>
     </div>
        </div>
        <Outlet />
      </>
     );
  }
  
  export default Destination;
  /**/