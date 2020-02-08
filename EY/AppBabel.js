class AppContainer extends React.Component {
    render() {  
        return (        
          <div id="AppContainer" >
            <Header />
            <BodyContainer />
            <Footer />
          </div>
        );
    }
}

class Header extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img src="Logo.jpg" alt="Paris" width="100" height="80" />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="row">
            <div className="col-12"><h3>MS Alliance Internal Global Site</h3></div>
            <div className="col-12">
              <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Acquisitions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Alliances</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">Contacts</a>
              </li>
            </ul>
            </div>
            </div>
          </div>
        </nav>
    )
  }
}

class BodyContainer extends React.Component {
  render() {
    return (
      <div id="BodyContainer" className="container-fluid">
        <div className="row">
          <LeftBodyContainer />
          <CenterBodyContainer />
          <RightrBodyContainer />
        </div>
      </div>
    );
  }
}

class LeftBodyContainer extends React.Component {
  render() {
    return (
      <div id="LeftBodyContainer" className="col-md-3 col-sm-12 col-xs-12">
        <div className="col-12" id="GlobalBox">
          <img src="icon_3.png" alt="Paris" width="90" height="90" />
          <h5>Global GTM</h5>
        </div>
        <div className="col-12" id="AlliancesHome">
          <div className="row">
              <img src="icon_3.png" alt="Paris" width="30" height="30" /><h5 >Alliances Home</h5>
          </div>
        </div>

        <div className="col-12" id="Area">
          <div className="row">
            <div id="Logo" className="col-2">
              <img src="icon_3.png" alt="Paris" width="30" height="30" />
            </div>
            <div id="Title" className="col-10">
              <h5>Area</h5>
            </div>
          </div>
        </div>
        <div class="col-12 AreaItem"><h5>Americas</h5></div>
        <div class="col-12 AreaItem"><h5>EMEIA</h5></div>
        <div class="col-12 AreaItem"><h5>Asia-Pacific</h5></div>
        <div class="col-12 AreaItem"><h5>Japan</h5></div>

      </div>
    )
  }
}

class CenterBodyContainer extends React.Component {
  render() {
    return (
      <div id="CenterBodyContainer" className="col-md-6 col-sm-12 col-xs-12">
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="banner_alliance_2.jpg" alt="Los Angeles"  height="250" />
            </div>
            <div className="carousel-item">
              <img src="banner_alliance.jpg" alt="Chicago" height="250" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
        <div className="row" id="LatestNews">
          <div id="Logo1" className="col-1">
            <img src="icon_1.png" alt="Paris" width="45" height="45" />
          </div>
          <div id="Title" className="col-11">
            <h5>Latest News</h5>
          </div>
          
          <div className="col-12 LatestNewBox">
            <div className="row" id="LatestNewsContent">
              <div className="col-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTW4hyJ57KwJ05fbROTx15086dQEohdOiyxDeSnYjz24AKYe1q5" alt="Paris" width="80" height="80" class="image thumbnail"/>
              </div>
              <div class="col-10">
                Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.
              </div>
            </div>
            <div className="row" id="LatestNewsContent">
              <div className="col-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTW4hyJ57KwJ05fbROTx15086dQEohdOiyxDeSnYjz24AKYe1q5" alt="Paris" width="80" height="80" class="image thumbnail"/>
              </div>
              <div class="col-10">
                Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.
              </div>
            </div>
            <div className="row" id="LatestNewsContent">
              <div className="col-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTW4hyJ57KwJ05fbROTx15086dQEohdOiyxDeSnYjz24AKYe1q5" alt="Paris" width="80" height="80" class="image thumbnail"/>
              </div>
              <div class="col-10">
                Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.
              </div>
            </div>
          </div>
        </div>

        <div className="row" id="LatestNews">
          <div id="Logo1" className="col-1">
            <img src="icon_2.png" alt="Paris" width="45" height="45" />
          </div>
          <div id="Title" className="col-11">
            <h5>Latest Announcements</h5>
          </div>

          <div className="col-12 AnnouncementBox" >
            <table className="table">

              <tbody>
                <tr>
                  <td>22/07/2019</td>
                  <td>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.</td>
                </tr>
                <tr>
                  <td>22/07/2019</td>
                  <td>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.</td>
                </tr>
                <tr>
                  <td>22/07/2019</td>
                  <td>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row" id="LatestNews">
          <div id="Logo1" className="col-1">
            <img src="icon_313.png" alt="Paris" width="45" height="45" />
          </div>
          <div id="Title" className="col-11">
            <h5>Latest Documents</h5>
          </div>
          <div className="col-12 LatestDocumentBox">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th></th>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Owner</th>
                  <th>Date Modified</th>
                  <th>Modified By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>22/07/2020</td>
                  <td>Welcome Kit</td>
                  <td>Doe</td>
                  <td>22/07/2020</td>
                  <td>John</td>
                </tr>
                <tr>
                  <td></td>
                  <td>22/07/2020</td>
                  <td>Welcome Kit</td>
                  <td>Doe</td>
                  <td>22/07/2020</td>
                  <td>John</td>
                </tr>
                <tr>
                  <td></td>
                  <td>22/07/2020</td>
                  <td>Welcome Kit</td>
                  <td>Doe</td>
                  <td>22/07/2020</td>
                  <td>John</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>



        <div className="row" id="LatestNews">
          <div id="Logo1" className="col-1">
            <img src="icon_4.png" alt="Paris" width="45" height="45" />
          </div>
          <div id="Title" className="col-11">
            <h5>Lates Videos</h5>
          </div>

          <div className="col-12 LatestVideo">
            <div id="demo" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row VideoItem">
                    <div className="col-4 VideoItem">
                      <div className="responsive-video">
                        <iframe src="https://www.youtube.com/embed/6v2L2UGZJAM?rel=0&amp;showinfo=0" width="120" height="120" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                      </div>
                    </div>
                    <div className="col-4 VideoItem">
                      <div className="responsive-video">
                        <iframe src="https://www.youtube.com/embed/aBnGzklDHnM?rel=0&amp;showinfo=0" width="120" height="120" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                      </div>
                    </div>
                    <div className="col-4 VideoItem">
                      <div className="responsive-video">
                        <iframe src="https://www.youtube.com/embed/aBnGzklDHnM?rel=0&amp;showinfo=0" width="120" height="120" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                      </div>
                    </div>
                  </div>         
                </div>
                
                <div className="carousel-item">
                  <div className="row VideoItem">
                    <div className="col-4 VideoItem">
                      <div className="responsive-video">
                        <iframe src="https://www.youtube.com/embed/6v2L2UGZJAM?rel=0&amp;showinfo=0" width="120" height="120" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                      </div>
                    </div>
                    <div className="col-4 VideoItem">
                      <div className="responsive-video">
                        <iframe src="https://www.youtube.com/embed/aBnGzklDHnM?rel=0&amp;showinfo=0" width="120" height="120" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                      </div>
                    </div>
                    <div className="col-4 VideoItem">
                      <div className="responsive-video">
                        <iframe src="https://www.youtube.com/embed/aBnGzklDHnM?rel=0&amp;showinfo=0" width="120" height="120" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                      </div>
                    </div>
                  </div>                            
                </div>
              </div>
              <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </a>
              <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>
        </div>

          
      </div>
    )
  }
}

class RightrBodyContainer extends React.Component {
  render() {
    return (
      <div id="RightBodyContainer" className="col-md-3 col-sm-12 col-xs-12">
        <div className="col-12" id="Area">
          <div className="row">
            <div id="Logo" className="col-2">
              <img src="Global GTM_americas.jpg" alt="Paris" width="30" height="30" />
            </div>
            <div id="Title" className="col-10">
              <h5>Key Contacts</h5>
            </div>
            <div className="col-12 ContactCard">
              <div className="row marginbottom5">
                <div className="col-2">
                  <img src="icon_777.png" alt="Paris" width="45" height="45" />
                </div>
                <div className="col-10">Rahul Trimukhe <br/> <span className="Designation"> Scinior Software Developer</span></div>
              </div>
              <div className="row marginbottom5">
                <div className="col-2">
                  <img src="icon_777.png" alt="Paris" width="45" height="45" />
                </div>
                <div className="col-10">Rahul Trimukhe <br/><span className="Designation"> Scinior Software Developer</span></div>
              </div>
              <div className="row marginbottom5">
                <div className="col-2">
                  <img src="icon_777.png" alt="Paris" width="45" height="45" />
                </div>
                <div className="col-10">Rahul Trimukhe <br/> <span className="Designation"> Scinior Software Developer</span></div>
              </div>
              <div className="row marginbottom5">
                <div className="col-2">
                  <img src="icon_777.png" alt="Paris" width="45" height="45" />
                </div>
                <div className="col-10">Rahul Trimukhe <br/> <span className="Designation"> Scinior Software Developer</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12" id="Area">
          <div className="row">
            <div id="Logo" className="col-2">
              <img src="Global GTM_americas.jpg" alt="Paris" width="30" height="30" />
            </div>
            <div id="Title" className="col-10" style={{padding: '0px'}}>
              <input type="text" className="form-control FindExpert" placeholder="Find an expert"/>
            </div>
          </div>
        </div>
        <div className="col-12" id="Area">
          <div className="row">
            <div id="Logo" className="col-2">
              <img src="icon_222.jpg" alt="Paris" width="30" height="30" />
            </div>
            <div id="Title" className="col-10">
              Quick links
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div id="Footer">This is Footer</div>
    )
  }
}

ReactDOM.render( <AppContainer />, document.getElementById('root') );
