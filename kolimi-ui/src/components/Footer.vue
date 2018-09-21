<template>
   <div>
      <div class="clearfix">
         <footer class="footer">
            <div class="section section-footer-content">
               <div class="container">
                  <div class="row row-call-to-action">
                     <div class="col-xs-12 text-center">
                        <h2 class="h1">Build your infrastructure now.</h2>
                        <p><a href="/contact" class="btn btn-info" role="button">Get Started</a></p>
                     </div>
                  </div>
                  <div class="row row-sitemap">
                     <div class="col-xs-10 col-xs-offset-1 col-sm-3 col-sm-offset-0">
                        <h3>Products &amp; Services</h3>
                        <hr class="hr-sm">
                        <ul class="list-unstyled">
                           <li><a href="/infrastructure-as-code-library">Infrastructure Code Library</a></li>
                           <li><a href="/usage-patterns-library">Usage Patterns Library</a></li>
                           <li><a href="/training">DevOps Training Library</a></li>
                           <li><a href="/support">Support</a></li>
                           <li><a href="/initial-setup">Initial Setup &amp; Deployment</a></li>
                           <li><a href="/devops-bootcamp">DevOps Bootcamp</a></li>
                           <li><a href="/custom-module-development">Module Development</a></li>
                        </ul>
                     </div>
                     <div class="col-xs-10 col-xs-offset-1 col-sm-3 col-sm-offset-0">
                        <h3>Learn</h3>
                        <hr class="hr-sm">
                        <ul class="list-unstyled">
                           <li><a href="/how-it-works">How it Works</a></li>
                           <li><a href="/pricing">Pricing</a></li>
                           <li><a href="/faq">FAQ</a></li>
                           <li><a href="/devops-resources">DevOps Resources</a></li>
                           <li><a href="/customers">Customers</a></li>
                           <li><a href="/why-prod-is-down">Why prod is down</a></li>
                        </ul>
                     </div>
                     <div class="col-xs-10 col-xs-offset-1 col-sm-3 col-sm-offset-0">
                        <h3>Company</h3>
                        <hr class="hr-sm">
                        <ul class="list-unstyled">
                           <li><a href="/about">About</a></li>
                           <li><a href="/careers">Careers</a></li>
                           <li><a href="/How-it-works">How we work</a></li>
                        </ul>
                     </div>
                     <div class="col-xs-10 col-xs-offset-1 col-sm-3 col-sm-offset-0">
                        <h3>Connect</h3>
                        <hr class="hr-sm">
                        <ul class="list-unstyled">
                           <li><a href="/contact">Contact us</a></li>
                           <li><a href="/newsletter">Newsletter</a></li>
                           <li><a href="/">Community Forum</a></li>
                           <li>
                              <div class="btn-group btn-group-social-icons" role="group" aria-label="Group of Social Links">
                                 <a href="/" class="btn btn-default" role="button"><i class="fa fa-fw fa-facebook-square" style = "color:#1d2732"></i></a>
                                 <a href="/" class="btn btn-default" role="button"><i class="fa fa-fw fa-twitter-square" style = "color:#1d2732"></i></a>
                                 <a href="/" class="btn btn-default" role="button"><i class="fa fa-fw fa-linkedin-square" style = "color:#1d2732"></i></a>
                                 <a href="/" class="btn btn-default youtube" role="button"><i class="fa fa-fw fa-youtube-square" style = "color:#1d2732"></i></a>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div class="section section-footer-copyright">
               <div class="container">
                  <div class="row">
                     <div class="col-xs-12 text-center">
                        © 2018 Kolimi, Inc. All rights reserved.
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   </div>
</template>
<script>
export default {
  name: 'Footer'
}

</script>
<style scoped>
.btn-info{
        background: linear-gradient(135deg, #ff2b67, #ff5442);
    padding: 6px 20px;
    border: none;
    box-shadow: 0 4px 6px rgba(0,0,0,0.11), 0 1px 3px rgba(0,0,0,0.08);
}
@media (min-width: 768px)
.section {
    padding-top: 60px;
    padding-bottom: 60px;
}
@media (min-width: 768px)
.col-sm-offset-0 {
    margin-left: 0;
}
@media (min-width: 768px)
.col-sm-3 {
    width: 25%;
}
footer hr {
    border-color: #fff;
    border-width: 1px;
    max-width:100%;
}
.footer{
    background-color:#1a232d;
}
h2{
    color:#fff;
}
h3{
    font-size:25px;
    color:#fff;
}
.footer a {
    color: rgba(255,255,255,0.8);
    line-height: 1.7;
}
.section-footer-copyright{
    color:#ccc;
}
</style>
