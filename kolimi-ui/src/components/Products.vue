<template>
   <div>
      <div class="section section-hero">
         <div class="container">
            <div class="row">
               <div class="col-xs-12">
                  <h1>Kolimi Features</h1>
               </div>
            </div>
         </div>
      </div>
      <div class="section section-dark">
         <div class="container">
            <p class="product-text">Kolimi.io has built a hundreds of reusable modules in Terraform, Bash, 
               Python in kolimi’s infrastructure as a code library for AWS over the years
               which are proven and in production for many companies. On availing the komili.io 
               subscription you can access these hundreds of modules to define code for infrastructure
            </p>
         </div>
         <div class="container">
         <div class="row">
            <div class="col-xs-12 col-sm-6">
               <div class="panel panel-default">
                  <div class="panel-body">
                     <h3 class="kolimi-reference">Designing the Infrastructure for your Requirement</h3>
                     <p>We design the infrastructure like Network Topology, Instances/Containers, Load balancers, Auto-scaling groups, Databases, DNS, CI/CD pipelines</p>
                     <p>According to the customer need on analyzing the app or infrastructure requirement.</p>
                  </div>
               </div>
            </div>
            <div class="col-xs-12 col-sm-6">
               <div class="panel panel-default">
                  <div class="panel-body">
                     <h3 class="kolimi-reference">Defining infrastructure as code</h3>
                     <p>We define the infrastructure as code using modules from kolimi.io’s code library and pushing the code into repositories for better version control. </p>
                     <p>We create customized AMIs, Docker images using technologies like packer on demand</p>
                  </div>
               </div>
            </div>
        </div>
        <div class="row">
                <div class="col-xs-12 col-sm-6">
               <div class="panel panel-default">
                  <div class="panel-body">
                     <h3 class="kolimi-reference">Build Disaster Recovery - 100% switch over to a different region</h3>
                  <p>Our DR strategy implements 100% movement of VM’s and data to another regions within few minutes of notices in case of catastrophic events.
                     This includes puppet automation, enabling 100% recovery to the last minute.</p>
                  </div>
               </div>
            </div>
                <div class="col-xs-12 col-sm-6">
               <div class="panel panel-default">
                  <div class="panel-body">
                     <h3 class="kolimi-reference">Connectivity Solutions automated</h3>
                     <p>Build an Infrastructure Managing solution for customer to manage infrastructure in cloud by Bastion hosts (or),</p>
                     <p> open VPN server or onsite to cloud VPN depending on the requirement.</p>
                  </div>
               </div>
            </div>
            </div>
            <div class="row">
            <div class="col-xs-12 col-sm-10 col-sm-offset-1">
               <div class="panel panel-default">
                  <div class="panel-body">
                     <h3 class="kolimi-reference">Software Deployment with Puppet</h3>
                    <p>Deploying builds in a cluster and making them work is a huge challenge. With Puppet, the software deployment becomes a breeze. Our puppet templates in conjunction with terraform makes the deployment 100% programmable. No manual copy of builds.</p>
                    <p> We use r10k and puppet for deploying the builds. Get the infrastructure completely puppetized.</p>
                  </div>
               </div>
            </div>
            </div>
         </div>
      </div>
      </div>
   </div>
   
</template>
<style scoped>
.section-hero{
    background: linear-gradient(to bottom, #1a232d, #2e3b4a);
    color:#fff;
    margin-top:3%;
 }
.section-hero{
    background: #1E2934;
    border-bottom: 2px solid rgba(15,192,239,0.25);
    padding-top: 60px;
    padding-bottom: 60px;
}
.section-dark{
   background-color: #1d252f;
    font-family: 'Source Sans Pro',sans-serif;
    font-size: 18px;
    line-height: 1.7;
    color: #bfbfbf;
    border-bottom: 2px solid rgba(15,192,239,0.25);
    padding-bottom: 120px;
    padding-top: 60px;
}
.panel-default {
    border-color: #194c5f;
}
.panel {
    margin-bottom: 30px;
    background-color: transparent;
    border-radius: 0;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.05);
    box-shadow: 0 1px 1px rgba(0,0,0,0.05);
}
.kolimi-reference{
    color:#fff;
}
.product-text{
    color:#fafbfc
}
</style>