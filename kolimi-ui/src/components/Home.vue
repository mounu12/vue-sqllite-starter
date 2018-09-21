<template>
<div>


<header class="masthead">
    <div class="container h-100">
      <div class="row h-100">
         <div class="col-lg-8 my-auto">
          <div class="header-content">
            <h1 class="mb-5 homepageheading">Define your infrastruture as code
            in about a day..
            </h1>
            <p class="infrastructure">We will make your Build and AWS Infrastuture 100% of the code</p>
            <br>
            <br>
         
          </div>
        </div>
     
        <div class="col-lg-4 my-auto">
          <div class="device-container">
            <div class="device-mockup nexus_6 portrait white">
              <div class="device">
                <div class="screen">
              
                  <img src="../images/blogbanner.png" class="img-fluid" alt="">
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section class="download bg-primary text-center" id="download">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 mx-auto">
            <h2 class="section-heading">Get Programmable Infrastructure in a matter of days with the reference infrastructure</h2>
            <p>Our app is available on any mobile device! Download now to get started!</p>
            <div class="badges">
              <a class="badge-link" href="#"><img src="../images/google-play-badge.svg" alt=""></a>
              <a class="badge-link" href="#"><img src="../images/app-store-badge.svg" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section class="features" id="features">
      <div class="container">
        <div class="section-heading text-center">
          <h2>Unlimited Features, Unlimited Fun</h2>
          <p >Check out what you can do with this app theme!</p>
          <hr>
        </div>
        <div class="row">
          <div class="col-lg-4 my-auto">
            <div class="device-container">
              <div class="device-mockup iphone6_plus portrait white">
                <div class="device">
                  <div class="screen">
                    <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
                    <img src="../images/demo-screen-1.jpg" class="img-fluid" alt="">
                  </div>
                  <div class="button">
                    <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 my-auto">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="icon-screen-smartphone text-primary"></i>
                    <h3>Device Mockups</h3>
                    <p class="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="icon-camera text-primary"></i>
                    <h3>Flexible Use</h3>
                    <p class="text-muted">Put an image, video, animation, or anything else in the screen!</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="icon-present text-primary"></i>
                    <h3>Free to Use</h3>
                    <p class="text-muted">As always, this theme is free to download and use for any purpose!</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="icon-lock-open text-primary"></i>
                    <h3>Open Source</h3>
                    <p class="text-muted">Since this theme is MIT licensed, you can use it commercially!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

</div>
</div>
</template>

<script>
export default {
   name: 'Home'
}
</script>

<style>
.bg-primary {
     background: #fdcc52;
     background: -webkit-linear-gradient(#fdcc52,#fdc539);
     background: linear-gradient(#fdcc52,#fdc539);
}
 .h2{
     font-family: Catamaran,Helvetica,Arial,sans-serif;
     font-weight: 200;
     letter-spacing: 1px;
}
 header.masthead {
     position: relative;
     width: 100%;
     padding-top: 150px;
     padding-bottom: 100px;
     color: white;
     background: url("../images/bg-pattern.png"), #7b4397;
     background: url("../images/bg-pattern.png"), -webkit-linear-gradient(to left, #7b4397, #dc2430);
     background: url("../images/bg-pattern.png"), linear-gradient(to left, #7b4397, #dc2430);
}
 header.masthead .header-content {
     max-width: 500px;
     margin-bottom: 100px;
     text-align: center;
}
 header.masthead .header-content h1 {
     font-size: 30px;
}
 header.masthead .device-container {
     max-width: 325px;
     margin-right: auto;
     margin-left: auto;
}
 header.masthead .device-container .screen img {
     border-radius: 3px;
}
 @media (min-width: 992px) {
     header.masthead {
         height: 100vh;
         min-height: 775px;
         padding-top: 0;
         padding-bottom: 0;
    }
     header.masthead .header-content {
         margin-bottom: 0;
         text-align: left;
    }
     header.masthead .header-content h1 {
         font-size: 46px;
         margin-top: 250px 
    }
     header.masthead .device-container {
         max-width: 325px;
    }
     header.masthead .device-container .screen img {
         border-radius: 3px;
         margin-top:90px 
    }
}
 section.download{
     position:relative;
     padding:150px 0 
}
 section.download h2{
     font-size:50px;
     margin-top:0 ;
     color:#212529;
}
 section.download .badges .badge-link{
     display:block;
     margin-bottom:25px 
}
 section.download .badges .badge-link:last-child{
     margin-bottom:0 
}
 section.download .badges .badge-link img{
     height:60px 
}
 @media (min-width:768px){
     section.download .badges .badge-link{
         display:inline-block;
         margin-bottom:0 
    }
}
 @media (min-width:768px){
     section.download h2{
         font-size:65px 
    }
}
p{
      font-size: 18px;
    line-height: 1.5;
    margin-bottom: 20px;
    color:#212529;
}
section.features{
   position:relative;
     padding:150px 0 
}
 section.features .section-heading{
    margin-bottom:100px
}
section.features .section-heading h2{
    margin-top:0
}
section.features .section-heading p{
    margin-bottom:0
}
section.features .device-container,section.features .feature-item{
    max-width:325px;
    margin:0 auto
}
section.features .device-container{
    margin-bottom:100px
}
@media (min-width:992px){
    section.features .device-container{
        margin-bottom:0
    }
}
section.features .feature-item{
    padding-top:50px;
    padding-bottom:50px;
    text-align:center
}
section.features .feature-item h3{
    font-size:30px
}
section.features .feature-item i{
    font-size:80px;
    display:block;
    margin-bottom:15px;
    background:-webkit-linear-gradient(to left,#7b4397,#dc2430);
    background:linear-gradient(to left,#7b4397,#dc2430);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent
}
hr {
    max-width: 100px;
    margin: 25px auto 0;
    border-width: 1px;
    border-color: rgba(34,34,34,.1);
}
.img-fluid{
  max-width: 100%;
    height: auto;
}
.infrastructure{
    color: #fff;
    font-size: 23px;
    padding: 40px;
}
.kolimilogos{
  margin-top:-10%;
      width: 48%;
    padding: 1%;
    background-color: #000;
}
</style>
