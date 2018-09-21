<template>
<div class="container" style="min-height: 100%;">
   <div id="signupbox" style="margin-top:5%;margin-bottom:25%;" class="mainbox  col-md-10 col-md-offset-1">
      <div class="panel registerpanel" >
         <div class="panel-heading">
            <div class="panel-title">Register</div>
            <hr class="signhp-headhr">
         </div>
         <div class="panel-body" >
            <form id="form" class="form-horizontal" role="form" name="registrationform" method="POST">
               <div class="col-md-6 register-middleBorder">
                  <div class="left-side-form" style="margin-top: 5%">
                     <div class="row">
                        <div class="col-md-4" control-label>
                           <label for="Name of the School" >School Name</label>
                        </div>
                        <div class="col-md-8 ">
                           <input type="text" class="form-control" id="" name="SchoolName" 
                              placeholder="Name of the School" ng-model="vm.user.schoolname"
                              ng-pattern="/[aA-zZ\s]$/" required>
                           <span  style="color:red" ng-show="registrationform.SchoolName.$touched && registrationform.SchoolName.$invalid ">only alphabates are allowed</span>
                           <!--  <div ng-messages="registrationform.name.$error">alphabates only</div> -->
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-4" control-label>
                           <label for="Name of Person" >Contact Name</label>
                        </div>
                        <div class="col-md-8 ">
                           <input type="text" class="form-control" name="ContactPersonName" 
                              placeholder="Name of the Contact Person" ng-model="vm.user.contactname" ng-pattern="/[aA-zZ\s]$/" required>
                           <span style="color:red" ng-show="registrationform.ContactPersonName.$touched && registrationform.ContactPersonName.$invalid">only alphabates are allowed</span>
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-4" control-label>
                           <label for="PassWord" >Password</label>
                        </div>
                        <div class="col-md-8 ">
                           <input type="password" class="form-control" name="Password" 
                              placeholder="Password" ng-model="vm.user.password" required>
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-4" control-label>
                           <label for="Confirm" >Confirm Password</label>
                        </div>
                        <div class="col-md-8 ">
                           <input type="password" class="form-control" name="ConfirmPassword" 
                              placeholder="Confirm Password" ng-model="vm.user.confirmpassword" required>
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-4" control-label>
                           <label for="EmailId" >e-mail Id</label>
                        </div>
                        <div class="col-md-8 ">
                           <input type="email" class="form-control" name="Email" 
                           placeholder="Enter Email Id" ng-model="vm.user.emailid" ng-pattern="" required>
                           <span style="color:red" ng-show="registrationform.Email.$touched && registrationform.Email.$invalid">invalid e-mail id</span>
                        </div>
                     </div>
                     <br><br><br>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="right-side-form" style="margin-top: 5%">
                     <div class="row">
                        <div class="col-md-4" control-label>
                           <label >School Code</label>
                        </div>
                        <div class="col-md-8 ">
                           <input type="text" class="form-control" name="code" placeholder="code" ng-model="vm.user.schoolcode" ng-pattern="/[A-Z\s]$/" required>
                           <span  style="color:red" ng-show="registrationform.code.$touched && registrationform.code.$invalid">Use uppercase only </span> 
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-4" control-label>
                           <label for="Number of the Person" >Contact Number</label>
                        </div>
                        <div class="col-md-8 ">
                           <input type="text" class="form-control" name="phonenumber" 
                              placeholder="Contact Number" ng-model="vm.user.contactnumber" ng-pattern="/^[0-9]{10,10}$/" required>
                           <span style="color:red" ng-show="registrationform.phonenumber.$touched && registrationform.phonenumber.$invalid">invalid contact number</span>
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-4" control-label>
                           <label for="Name of the Street" >Street </label>
                        </div>
                        <div class="col-md-8 ">
                           <input type="text" class="form-control" name="StreetName" 
                              placeholder="Enter the Name of the Street" ng-model="vm.user.street" ng-pattern="/[aA0-zZ9\.\-\_\s]$/" required>
                           <span style="color:red" ng-show="registrationform.StreetName.$touched && registrationform.StreetName.$invalid">only alphanumerics are allowed</span>
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-4" control-label>
                           <label for="Name of the City" >City </label>
                        </div>
                        <div class="col-md-8 ">
                           <input type="text" class="form-control" name="CityName" 
                              placeholder="Enter the Name of the City" ng-model="vm.user.city" ng-pattern="/[aA0-zZ9\.\-\_\s]$/" required>
                           <span style="color:red" ng-show="registrationform.CityName.$touched && registrationform.CityName.$invalid">only alphanumerics are allowed</span>
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-4" control-label>
                           <label for="Year of Establishment" >Year of Establishment</label>
                        </div>
                        <div class="col-md-8 ">
                           <input type="date" class="form-control" name="YOE" placeholder="DD/MM/YYYY" ng-pattern="" ng-model="vm.user.dateofestablishment">
                           <span ng-show="registrationform.YOE.$touched && registrationform.YOE.$invalid">invalid date format</span>
                        </div>
                     </div>
                     <br>
             <div class="row">
                <div class="text-center">
                     <div class="col-md-6">
                        <button id="btn-reset" type="reset" class="btn button btn-block"> Reset</button>
                     </div>
                 <div class="col-md-6">
                 <button id="btn-Register" type="submit" name="submit" ng-click="vm.signup()" class="btn button btn-block" ng-disabled="registrationform.$invalid"> 
                 Submit</button>
            </div>                  
         </div>
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
export default{
    name:'Register'
}
</script>
<style scoped>
.registerpanel .panel-heading{
    color:#039be5;

}
.registerpanel{
    color: #000;
     -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2),0 3px 10px 0 rgba(0,0,0,0.3);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2),0 3px 10px 0 rgba(0,0,0,0.3);
    
}
 .panel-title {
        font-size: 24px;
    }
.register-middleBorder{
  border-right: 1px solid silver;
}
</style>

