import 'firebase/auth';

import * as f from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDDBnF9u4mB7wnw8FfzKTYhA37Fh4pEfBc",
    authDomain: "wave-70402.firebaseapp.com",
    databaseURL: "https://wave-70402.firebaseio.com",
    projectId: "wave-70402",
    storageBucket: "wave-70402.appspot.com",
    messagingSenderId: "970071629490",
    appId: "1:970071629490:web:9c9b9343790bafa2cd73ab",
    measurementId: "G-2LDCF7XTSW"
  };

class Fire {
  static instance: Fire;
  app!: f.app.App;
  constructor(){
   if(! Fire.instance){
     this.app = f.initializeApp( firebaseConfig );
     Fire.instance = this;
   }

   return Fire.instance;
  }

 //rest is the same code as preceding example

}

const fire = new Fire();
Object.freeze(fire);

export default fire;