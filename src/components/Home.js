


const Home = () => {
    return ( 
        <> 
        <body>
        
    <nav class="navbar navbar-expand-lg  bg-warning">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">KOHINOOR TRAVELS</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          
              
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="search" aria-label="Search"></input>
              <button class="btn btn-outline-success" ><a href="./login.html">login</a></button>
            </form>
          </div>
        </div>
      </nav>
      <br></br>

      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://source.unsplash.com/random/1920x600/?Emirates Aeroplanes"
              height="600px"
              class="d-block w-100"
              alt="..."
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src="https://source.unsplash.com/random/1920x600/?Trains"
              height="600px"
              class="d-block w-100"
              alt="..."
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src="https://source.unsplash.com/random/1920x600/?Bus"
              height="600px"
              class="d-block w-100"
              alt="..."
            ></img>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br></br>
      <div class="container">
            <div class="row">
                <div class=" col-sm-12 col-md-6 col-lg-6">
                    <div class="card">
                        <img  src="https://source.unsplash.com/random/1920x1080/?Ooty"class="card-img-top" alt="..." ></img>
                        <div class="card-body">
                            <h5 class="card-title">Ooty</h5>
                            <p class="card-text">Visit ooty!!!MASSIVE DISCOUNTS</p>
                            <a href="#" class="btn btn-primary">Book now</a>
                        </div>
                    </div>
                </div>
                <div class=" col-sm-12 col-md-6 col-lg-6">
                    <div class="card">
                        <img  src="https://source.unsplash.com/random/1920x1080/?Kanyakumari"class="card-img-top" alt="..." ></img>
                        <div class="card-body">
                            <h5 class="card-title">Kanyakuamri</h5>
                            <p class="card-text">Visit Kanyakuamri!!!Mouth-watering deals</p>
                            <a href="#" class="btn btn-primary">Book now</a>
                        </div>
                    </div>
                </div>
            </div>
      </div>


export default Home;
    

      </body>
        </>
    );
}
 
export default Home;