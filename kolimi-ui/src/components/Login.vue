<template>
   <div class="container" style="min-height:100% !important">
      <div id="loginbox">
         <div style="margin-top:13.8%;min-height:100%;margin-bottom:20%" class="mainbox col-md-4 col-md-offset-4">
            <div class="panel loginpanel" >
               <div class="panel-heading">
                  <div class="panel-title">Login</div>
                  <hr class="login-headhr">
               </div>
               <div style="padding-top:30px" class="panel-body" >
                  <form id="loginform" class="form-horizontal" role="form" name="loginform">
                     <div style="margin-bottom: 25px;width:100%;" class="input-group">
                        <!--<span class="input-group-addon input-icon"><i class="glyphicon glyphicon-user"></i></span>-->
                        <input id="login-username" type="text" class="form-control" name="username" value="" v-model="user.emailid" placeholder="username " required>  
                     </div>
                     <div style="margin-bottom: 25px;width:100%;" class="input-group">
                        <!--<span class="input-group-addon input-icon"><i class="glyphicon glyphicon-lock"></i></span>-->
                        <input id="login-password" type="password" class="form-control" name="password" v-model="user.password" placeholder="password" required>
                        <!-- <div ng-messages="loginform.password.$error"></div> -->
                     </div>
                     <div class="input-group">
                        <div class="checkbox">
                           <label>
                           <input id="login-remember" type="checkbox" name="remember" value="1"> Remember me
                           </label>
                        </div>
                     </div>
                     <div style="margin-top:10px" class="form-group">
                        <!-- Button -->
                        <div class="col-sm-12 controls">
                           <button id="btn-Register" type="submit" name="submit" v-on:click.prevent="login()" class="btn button btn-block" ng-disabled="loginform.$invalid"> 
                           Submit</button>
                        </div>
                     </div>
                     <hr>
                     <div class="form-group">
                        <div class="col-md-12 control">
                           <div style="font-size:80%" >
                              Don't have an account! 
                              <a href="/signup" style="text-decoration: none;">
                              Register Here
                              </a>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   export default {
     data() {
         return {
             user: {
                 emailid: '',
                 password: '',
            }
        }
     },
     methods: {
         login: function() {
             var user = {
                 "emailid": this.user.emailid,
                 "password": this.user.password
             }
             this.$emit('login', user);
        },
     }
 }
</script>
<style scoped>
   .loginpanel .panel-heading{
   /*background-color: #ff4949;*/
   color:#039be5;
   }
   .login-headhr,.signhp-headhr{
   margin-top: 7px;
   }
   .loginpanel{
   -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2),0 3px 10px 0 rgba(0,0,0,0.3);
   box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2),0 3px 10px 0 rgba(0,0,0,0.3);
   color: #ff4949;
   margin-bottom:-32%
   }
   @media only screen  and (min-width : 1224px) {
   /* Styles */
   }
   /* Large screens ----------- */
   @media only screen  and (min-width : 1824px) {
   /* Styles */
   .loginpanel .panel-heading{
   /*background-color: #ff4949;*/
   color:#039be5;
   }
   .login-headhr,.signhp-headhr{
   margin-top: 7px;
   }
   .loginpanel{
   -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2),0 3px 10px 0 rgba(0,0,0,0.3);
   box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2),0 3px 10px 0 rgba(0,0,0,0.3);
   color: #ff4949;
   margin-bottom:-32%
   }
   }
</style>
