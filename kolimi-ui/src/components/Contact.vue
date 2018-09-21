<template>
   <div>
      <div class="section section-hero">
         <div class="container">
            <div class="row">
               <div class="col-xs-12 text-center">
                  <h1 class="Howitworks">Contact Us</h1>
                  <p class="lead">
                     Use the form below or send an email to 
                     <a href="">info@kolimi.io</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
      <div class="section section-dark">
         <div class="container">
            <div class="row row-form">
               <div class="col-xs-12 col-md-8 col-md-offset-2">
                  <div id="error-message"></div>
                  <form id="contact-form" method="post">
                     <div class="form-group">
                        <div class="row">
                           <div class="col-xs-12 col-md-4">
                              <label for="contact-name">Name</label>
                           </div>
                           <div class="col-xs-12 col-md-8">
                              <input id="contact-name" name="contact-name" type="text" class="form-control" placeholder="some" v-model="contact.name" required="required">
                           </div>
                        </div>
                     </div>
                     <div class="form-group">
                        <div class="row">
                           <div class="col-xs-12 col-md-4">
                              <label for="contact-email">Email</label>
                           </div>
                           <div class="col-xs-12 col-md-8">
                              <input id="contact-email" name="contact-email" type="email" class="form-control" placeholder="Exa@kolimi.com" v-model="contact.email" required="required">
                           </div>
                        </div>
                     </div>
                     <div class="form-group">
                        <div class="row">
                           <div class="col-xs-12 col-md-4">
                              <label for="contact-company">Company</label>
                           </div>
                           <div class="col-xs-12 col-md-8">
                              <input id="contact-company" name="contact-company" type="text" class="form-control" placeholder="Omniwyse, Inc." v-model="contact.company" required="required">
                           </div>
                        </div>
                     </div>
                     <div class="form-group">
                        <div class="row">
                           <div class="col-xs-12 col-md-4">
                              <label>Which products are you interested in?</label>
                           </div>
                           <div class="col-xs-12 col-md-8">
                              <div class="checkbox">
                                 <input id="interested-subscription" name="interested-subscription" type="checkbox" value="true">
                                 <label for="interested-subscription">
                                Kolimi Subscription
                                 <br>
                                 <small style="font-size: 12px; display: block; margin-bottom: 10px">Includes access to the Infrastructure as Code Library and DevOps Training Library</small>
                                 </label>
                              </div>
                              <div class="checkbox">
                                 <input id="interested-dedicated-support" name="interested-dedicated-support" type="checkbox" value="true">
                                 <label for="interested-dedicated-support">
                                 Dedicated Support
                                 </label>
                              </div>
                              <div class="checkbox">
                                 <input id="interested-ref-arch" name="interested-ref-arch" type="checkbox" value="true">
                                 <label for="interested-ref-arch">
                                 Reference Architecture
                                 </label>
                              </div>
                              <div class="checkbox">
                                 <input id="interested-devops-trainee" name="interested-devops-trainee" type="checkbox" value="true">
                                 <label for="interested-devops-trainee">
                                 DevOps Training
                                 </label>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="form-group">
                        <div class="row">
                           <div class="col-xs-12 col-md-4">
                              <label for="contact-message">How can we help?</label>
                           </div>
                           <div class="col-xs-12 col-md-8">
                              <textarea id="contact-message" name="contact-message" class="form-control" rows="3" required="required" placeholder="Enter a message" v-model="contact.message"></textarea>
                           </div>
                        </div>
                     </div>
                     <div class="text-center">
                        <br>
                        <button id="btn-post" type="submit" class="btn btn-primary" v-on:click.prevent="newcontact">Submit</button>
                     </div>
                  </form>
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
    background:#ffcc5e;
    border-bottom: 2px solid rgba(15,192,239,0.25);
    padding-top: 60px;
    padding-bottom: 60px;
}
.send-button{
    background-color: #039be5;
    margin-bottom: 3%;
    background-image: none;
    color:white;
}
a {
    color: #e12635;
    text-decoration:underline;
}
.lead {
    font-size: 27px;
    color: #bfbfbf;
}
.form-group {
    margin-bottom: 24px;
}
.form-control {
    border-width: 2px;
}
.form-control {
    display: block;
    width: 100%;
    height: 44px;
    padding: 6px 12px;
    font-size: 18px;
    line-height: 1.7;
    color: #fff;
    background-color: #44576e;
    background-image: none;
    border: 1px solid #194c5f;
    border-radius: 0;
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
 .Howitworks{
      color:black;
  }
  .lead {
    font-size: 27px;
    color: black;
}
</style>
<script>
import UserService from '../services/userservice.js';

export default{
   data(){
        return{
           
            contact:{},
           
        }
    },
methods:{
    newcontact:function(){
            var contact={
                 "name":this.contact.name,
                  "email":this.contact.email,
                  "company":this.contact.company,
                  "message":this.contact.message

            }
               console.log(contact)
            UserService.NewContact(contact).then((response)=>{
                console.log(response);
            })
        }
        }
}
</script>
