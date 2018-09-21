<template>
 <div>
   <div class="section section-hero">
      <div class="container">
         <div class="row">
            <div class="col-xs-12">
               <h1 class="Howitworks">How it Works</h1>
               <p class="lead">
                  Kolimi can help you get your entire infrastructure defined as code,<br/>in about a day. Here's how it works.
               </p>
            </div>
         </div>
      </div>
   </div>
   <div class="section section-dark">
      <div class="container">
      <div class="row">
         <div class="col-xs-12 col-sm-3 col-sm-offset-1">
            <div class="circle circle1">
            </div>
         </div>
         <div class="col-xs-12 col-sm-6">
            <div class="panel panel-default">
               <div class="panel-body">
                  <div>
                     <h4 class="margin-top-none">Monitoring &amp; Alerting</h4>
                     <p class="configure">Get connected to Kolimi Technical Professional for a free evaluation of the infrastructure - for a report</p>
                  </div>
               </div>
            </div>
         </div>
         </div>
               <div class="row">
         <div class="col-xs-12 col-sm-3 col-sm-offset-1">
            <div class="circle circle1">
            </div>
         </div>
         <div class="col-xs-12 col-sm-6">
            <div class="panel panel-default">
               <div class="panel-body">
                  <div>
                     <h4 class="margin-top-none">Monitoring &amp; Alerting</h4>
                     <p class="configure">Get Started with one time Reference Architecture implementation
                        AND/OR
                        Get started with our Kolimi Subscription  and support.</p>
                  </div>
               </div>
            </div>
         </div>
         </div>
             <div class="row">
         <div class="col-xs-12 col-sm-3 col-sm-offset-1">
            <div class="circle circle1">
            </div>
         </div>
         <div class="col-xs-12 col-sm-6">
            <div class="panel panel-default">
               <div class="panel-body">
                  <div>
                     <h4 class="margin-top-none">Monitoring &amp; Alerting</h4>
                     <p class="configure">
                     No lock-in, all the code belongs to you and you can customize. Just pay the subscription
                   </p>
                  </div>
               </div>
            </div>
         </div>
         </div>
            <div class="row">
         <div class="col-xs-12 col-sm-3 col-sm-offset-1">
            <div class="circle circle1">
            </div>
         </div>
         <div class="col-xs-12 col-sm-6">
            <div class="panel panel-default">
               <div class="panel-body">
                  <div>
                     <h4 class="margin-top-none">Monitoring &amp; Alerting</h4>
                     <p class="configure">Plan to make the infrastructure 100% programmable</p>
                  </div>
               </div>
            </div>
         </div>
         </div>
   
         
      </div>
   </div>
</div>
</template>
<script>
export default{
    name:'Howitworks'
}
</script>
<style scoped>
.section-hero{
    background: linear-gradient(to bottom, #1a232d, #2e3b4a);
    color:#fff;
    margin-top:3%;
 }
.section-hero{
    background:#ffcc5e;
    border-bottom: 2px solid rgba(15,192,239,0.25);
    padding-top: 60px;
    padding-bottom: 60px;
}
.section-dark{
   background-color: #ffffff;
    font-family: 'Source Sans Pro',sans-serif;
    font-size: 18px;
    line-height: 1.7;
    color: #bfbfbf;
    border-bottom: 2px solid rgba(15,192,239,0.25);
    padding-bottom: 120px;
    padding-top: 60px;
}
h2{
  font-family: inherit;
    font-weight: 400;
    line-height: 1.1;
    color: #fff;
}
.lead {
    font-size: 27px;
    color: black;
}
.panel-default {
    border-color: #194c5f;
}
.panel {
    margin-top: 20px;
    background-color: transparent;
    border-radius: 0;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.05);
    box-shadow: 0 1px 1px rgba(0,0,0,0.05);
}
.circle {
   
   display: inline-block;
   padding: 16px;
   text-align: center;
    width: 180px;
   height: 180px;
    border-radius: 50%;
     background: #B52F64;
    border-radius: 50%;
    -webkit-transform: scale(.9);
    transform: scale(.9);
    color:#fff
  }
  .circle::before,
  .circle::after {
    position: absolute;
    z-index: -1;
    display: block;
    content: '';
  }
  .circle,
  .circle::before,
  .circle::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
   -webkit-transition: all .5s;
   transition: all .5s;
  }
  
  .circle {
    position: relative;
     z-index: 2; 
    background-color: #B52F64;
    /* border: 2px solid #5c5eae; */
   color: #fff;
   line-height: 50px;
    overflow: hidden;
     background: #B52F64;
    border-radius: 50%;
    -webkit-transform: scale(.9);
    transform: scale(.9);
  }
   .circle:hover h3 {
       color:#35629d
     }
  .circle::after {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    -webkit-transform: scale(.5);
    transform: scale(.5);
  }
  .circle:hover::after {
    background: #FFFFFF;
    border-radius: 50%;
    -webkit-transform: scale(.9);
    transform: scale(.9);
    color:black
  }
  .Howitworks{
      color:black;
  }
  .margin-top-none{
      color:black
  }
  .configure{
      color:darkslategrey;
  }
</style>

