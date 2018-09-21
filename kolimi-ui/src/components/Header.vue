<template>
  <div  data-spy="scroll" data-target=".navbar">
  <nav class="navbar navbar-fixed-top" id="mainNav"> 

          <div class="container">
              <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </button>
                  <div class="mainnav">
                <a class="navbar-brand" href="/"><strong>Kolimi</strong>.io</a>
                  </div>
              </div>
              <div class="collapse navbar-collapse" >
                  <ul class="nav navbar-nav navbar-right">
                    <li>
                    <a href="/how-it-works">How it Works</a>
                    </li>  
                    <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Products 
            <i class="fa fa-caret-down" aria-hidden="true">
            </i></a>
            <ul class="dropdown-menu dropdown-menu-left" role="menu">
              <li><a href="/kolimi-products">Kolimi</a></li>
            
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Services <i class="fa fa-caret-down" aria-hidden="true"></i></a>
            <ul class="dropdown-menu dropdown-menu-left" role="menu">
              <li><a href="/kolimi-services">Support</a></li>
            </ul>
          </li>
           <li><a href="/Pricing" >Pricing</a></li>
          <li>  <p><a href="/contact" class="btn btn-info" role="button">Get Started</a></p></li>
                  </ul>
              </div>
              
          </div>
          
      </nav>

  </div>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


html,
body {
    height: 100%;
}
.full-width-container {
    height: 100%;
    width:100%;
}

/*Styles for all reset **********************/
.text-silver{
	color: silver;
}
.reset-padding{
	padding:0;
}
.reset-margin{
	margin: 0;
}
/*end Styles for all reset*********************/

/*navbar Styles**************************/

.header-nav{
  height:60px;
}
/*.header-nav ul li.active, .header-nav ul li:hover, .header-nav ul li:focus{
  border-bottom: 3px solid #ff4949;
  color: #ff4949;
  background-color: transparent;
}*/
.header-nav ul li.active{
  color:black;
}

.header-nav{
  height: 50px;
}
.color-white p{
  color:#fff;
}

.navbar-brand {
  height: 100%;
  color:#fff;
}

.main-navbar, .dashnavbar {
  border: none;
  background-color: transparent;
  font-size: 14px;
  
}
.mainnav li >a, .dashnav li> a {
 font-size: 14px;
  color:#fff;
 /* text-transform: uppercase;*/
}

.dashnav ul li.active, .dashnav ul li:hover, .dashnav ul li:focus{
  font-size: 14px;
  color:#000; 
}
/* .navbar{
  
	color: #fff;
	background-color: #a93465;
	margin-bottom: 0px;
  box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.2);
  background: url("../images/bg-pattern.png"), #7b4397;
  background: url("../images/bg-pattern.png"), -webkit-linear-gradient(to left, #7b4397, #dc2430);
  background: url("../images/bg-pattern.png"), linear-gradient(to left, #7b4397, #dc2430);
  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
  font-weight: 200;
  letter-spacing: 1px;
  border-radius: 0px;
} */

section {
  padding: 100px 0; }
  section h2 {
    font-size: 50px; }

#mainNav {
  /* border-color: rgba(34, 34, 34, 0.05); */
  /* background-color: white; */
    background: url("../images/bg-pattern.png"), #7b4397;
  background: url("../images/bg-pattern.png"), -webkit-linear-gradient(to left, #7b4397, #dc2430);
  background: url("../images/bg-pattern.png"), linear-gradient(to left, #7b4397, #dc2430); 
  -webkit-transition: all .35s;
  -moz-transition: all .35s;
  transition: all .35s;
  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
  font-weight: 200;
  letter-spacing: 1px; }
  #mainNav .navbar-brand {
    color: #fdcc52;
    font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
    font-weight: 200;
    letter-spacing: 1px; }
    #mainNav .navbar-brand:hover, #mainNav .navbar-brand:focus {
      color: #fcbd20; }
  #mainNav .navbar-toggler {
    font-size: 12px;
    padding: 8px 10px;
    color: #222222; }
  #mainNav .navbar-nav > li > a {
    font-size: 15px;
    font-family: 'Lato', 'Helvetica', 'Arial', 'sans-serif';
    letter-spacing: 1px;
    text-transform: uppercase; }
 
      #mainNav .navbar-nav > li > a.active:hover {
        background-color: transparent; }
  #mainNav .navbar-nav > li > a{
    color: white;
  }
  #mainNav .navbar-nav > li > a:focus {
    color: #fff; 
    background: transparent
  }
    #mainNav .navbar-nav > li > a:hover,
    #mainNav .navbar-nav > li > a:focus:hover {
      color: #fff;
    background: transparent }
     
  @media (min-width: 992px) {
    #mainNav {
      border-color: transparent;
      background-color: transparent; }
      #mainNav .navbar-brand {
        color: fade(white, 70%); }
        #mainNav .navbar-brand:hover, #mainNav .navbar-brand:focus {
          color: white; }
     #mainNav .navbar-nav li>a:active{
       color:#fdcc52
     }
      #mainNav .navbar-nav > li > a,
      #mainNav .navbar-nav > li > a:focus {
        color: white;
        background: transparent
       }
        #mainNav .navbar-nav > li > a:hover,
        #mainNav .navbar-nav > li > a:focus:hover {
          color: white;
        background: transparent }
        
     }

section.features .section-heading {
  margin-bottom: 100px; }
  section.features .section-heading h2 {
    margin-top: 0; }
  section.features .section-heading p {
    margin-bottom: 0; }

section.features .device-container,
section.features .feature-item {
  max-width: 325px;
  margin: 0 auto; }

section.features .device-container {
  margin-bottom: 100px; }
  @media (min-width: 992px) {
    section.features .device-container {
      margin-bottom: 0; } }

section.features .feature-item {
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center; }
  section.features .feature-item h3 {
    font-size: 30px; }
  section.features .feature-item i {
    font-size: 80px;
    display: block;
    margin-bottom: 15px;
    background: -webkit-linear-gradient(to left, #7b4397, #dc2430);
    background: linear-gradient(to left, #7b4397, #dc2430);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; }


footer {
  padding: 25px 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.3);
  background-color: #222222; }
  footer p {
    font-size: 12px;
    margin: 0; }
  footer ul {
    margin-bottom: 0; }
    footer ul li a {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.3); }
      footer ul li a:hover, footer ul li a:focus, footer ul li a:active, footer ul li a.active {
        text-decoration: none; }

 @media (min-width: 992px) {
   .grabbaimage{
          max-width: 325px;
          height: 454px;
        
        }

 }

#loginnav{
     background: url("../images/bg-pattern.png"), #7b4397;
  background: url("../images/bg-pattern.png"), -webkit-linear-gradient(to left, #7b4397, #dc2430);
  background: url("../images/bg-pattern.png"), linear-gradient(to left, #7b4397, #dc2430); 
  -webkit-transition: all .35s;
  -moz-transition: all .35s;
  transition: all .35s;
  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
  font-weight: 200;
  letter-spacing: 1px;
}
#loginnav .navbar-brand {
    color: #fdcc52;
    font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
    font-weight: 200;
    letter-spacing: 1px; }
    #loginnav .navbar-brand:hover, #mainNav .navbar-brand:focus {
      color: #fcbd20; }
  #loginnav .navbar-toggler {
    font-size: 12px;
    padding: 8px 10px;
    color: #222222; }
  #loginnav .navbar-nav > li > a {
    font-size: 15px;
    font-family: 'Lato', 'Helvetica', 'Arial', 'sans-serif';
    letter-spacing: 1px;
    text-transform: uppercase; }
    #loginnav .navbar-nav > li > a.active {
      color: #fdcc52 !important;
      background-color: transparent; }
      #loginnav .navbar-nav > li > a.active:hover {
        background-color: transparent; }
  #loginnav .navbar-nav > li > a,
  #loginnav .navbar-nav > li > a:focus {
    color: #fff; }
    #loginnav .navbar-nav > li > a:hover,
    #loginnav .navbar-nav > li > a:focus:hover {
      color: #fdcc52; 
    background: transparent}
  @media (min-width: 992px) {
    #loginnav {
      border-color: transparent;
      background-color: transparent; }
      #loginnav .navbar-brand {
        color: fade(white, 70%); }
        #loginnav .navbar-brand:hover, #loginnav .navbar-brand:focus {
          color: white; }
      #loginnav .navbar-nav > li > a,
      #loginnav .navbar-nav > li > a:focus {
        color: white; }
        #loginnav .navbar-nav > li > a:hover,
        #loginnav .navbar-nav > li > a:focus:hover {
          color: white; 
        background: transparent}
          #loginnav .navbar-nav > li > a:active{
            color:#fdcc52;
          }
  }


/*navbar Styles*********************/
.homepagefeatures{
  word-spacing: 20px;
  font-size: 24px;
  
}
.homepagefeatures a{
  color:#fdcc52;
}
.configsidebar{
  background-color:aliceblue;
  height: 630px
}
#menu .nav-sidebar li>a:focus, #menu .nav-sidebar li>a:hover{
  background:transparent;
}
@media (min-width: 992px){
  .configsidebar{
   background-color:aliceblue;
  height: 895px;
  }
#menu .nav-sidebar li>a:focus, #menu .nav-sidebar li>a:hover{
  background:transparent;
}
}
.container #loginbox{
  min-height: 100%;
}
.loginpanel{
  -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2),0 3px 10px 0 rgba(0,0,0,0.3);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2),0 3px 10px 0 rgba(0,0,0,0.3);
    color: #ff4949;
}
  .grid{
    height:100%;
  }
   

 
  .about{
    background-color:#dab532;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size:cover;
  min-height: 100% !important;
  width: 100%;
color:white;
  }
  .about .paraone{
    font-size:100%;
  }
 

.fa{
  color:white;
  vertical-align: middle;
  text-align:center;
}

aside.clients img {
  margin: 50px auto;
}
hr.star-light,
  hr.star-primary{
    margin:25px auto 30px;
    padding: 0;
    max-width: 250px;
    border: 0;
    border-top: solid 5px;
        text-align: center;
  }
  hr.star-light-after,
  hr.star-light-primary:after{
     display: inline-block;
    position: relative;
    top: -.8em;
    padding: 0 .25em;
    font-family: FontAwesome;
    font-size: 2em;
  }
  hr.star-light {
    border-color: #fff;
}

hr.star-light:after {
    color: #fff;
    background-color: #18bc9c;
}
hr.star-primary {
    border-color: #2c3e50;
}

hr.star-primary:after {
    color: #2c3e50;
    background-color: #18bc9c;
}
  	footer {
  	 background-color:black; min-height:50px; color:white;
}
.grid {
  width: 100%;
 
  height:100%;
  border:none;
}

.my-custom-menu {
  position: absolute;
}

.my-custom-menu .ui-grid-menu {
  padding: 0px;
}

.my-custom-menu .ui-grid-menu-inner {
  -webkit-box-shadow: none;
  box-shadow: none;
}

.rotated {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
}

.grid .ui-grid-render-container-body .ui-grid-viewport {
  overflow-x: auto !important; 
}

.grid .ui-grid-render-container-body .ui-grid-header-cell .ui-grid-cell-contents {
  margin-right: 15px;
  -background-color: red;
}

.grid .ui-grid-header-cell:last-child .ui-grid-column-resizer.right {
  margin-right: 8px;
}
.grid .ui-grid-column-menu-button-last-col {
  margin-right: 5px;
}
.grid .ui-grid-menu-button {
  height: 30px;
  border: 0;
  border-left: 1px solid #d4d4d4;
  border-bottom: 1px solid #d4d4d4;
}
.grid .ui-grid-menu-button .ui-grid-icon-container {
  margin-top: 5px;
  margin-left: 2px;
}

.newridertype{
  color:green
}
.deleteridertype{
  color:red;
  padding:50px;
}
.active{
  
     border-bottom: 3px solid #fdcc52;
  }
 
  #menu{
      color:white
    }
    .btn-info{
     background: linear-gradient(135deg, #ff2b67, #ff5442);
    padding: 6px 20px;
    border: none;
    box-shadow: 0 4px 6px rgba(0,0,0,0.11), 0 1px 3px rgba(0,0,0,0.08);
    margin-bottom:-25px;
}
</style>
