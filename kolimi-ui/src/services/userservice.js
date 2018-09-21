import axios from 'axios';
import hosturl from '../hostUrl.js';
const url=hosturl;

export default{
    NewContact(contact){
        return new Promise(function(resolve,reject){
            axios.post(url+'api/data',contact).
            then(function(res)
            {
                resolve(res);
            }).
            catch(function(err){
                reject(err);
            })
        })
    },
}
