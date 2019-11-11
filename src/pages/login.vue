<template>









 <div class="q-pa-md ">

 
     <p class="text-white">.</p>
  
    <q-card-actions  class="row justify-center">
 
      <div class="q-gutter-y-md column" style="max-width: 300px">

      
    <p class="text-h6 text-center" >Tela login</p> 
   
  <q-input outlined bottom-slots v-model="dador.email" label="Usuario" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Otavio
        </template>
      </q-input>
 

      <q-input v-model="dador.senha" filled :type="isPwd ? 'password' : 'text'" hint="Data Nascimento" label="Senha">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>


    
   <q-btn   color="red-5" v-close-popup @click="method1()" label = "Entrar">

     
   </q-btn>


   <q-btn   color="primary" v-close-popup @click="registar()" label = "Registar-se">

     
   </q-btn>




    </div>
       
           
        </q-card-actions>
  </div>



 
</template>


<script>
import {bus} from '../router'
import axios from 'axios';

export default {
  data(){
    return {
      user:{
        nome:"Faruk",
        pass:"123"
      }
    }
  },

mounted()  { 
        //http://localhost:8085/api || https://sanguemozapi.herokuapp.com/api/
 



 },
    methods:{




method1()
  {
 axios.post( 'https://sanguemozapi.herokuapp.com/api/login/' , {   senha: this.dador.senha, email: this.dador.email,} )
 .then( ( res ) => {
  this.method2(res.data)  
  } )
 .catch( ( err ) => { } );     
  },

method2(res){
// statements
 if(res === 'senha incorreta'){
                     
                    this.$q.notify(res)
                    
                    }
                    else{

                  this.$router.push('/') 
                  localStorage.setItem('myCat', res);
            
                                     
                    }

} 
,

registar(){
     this.$router.push('login/registro') 

  
   },
   

    },
  data () {
    return {


  dador: {
        nome: "",
        endereco: "",
        sexo: "",
        telefone: "",
        email: "",
        numeroDeDoacoes: "",
        nomeMae: "",
        nomePai: "",
        numeroDocumento: "",
        tipoDocumento: "",
        nacionalidade: "",
        situacaoAptidao: "",
        provincia: "",
        fatorRH: "",
        apelido: "",
        grau: "",
        nasc: "",
        senha : ""
       
        
      },
     


      msg: 'This is Ali s profile',
      text: '',
      ph: '',
      password: '',
      isPwd: true,

      email: '',
      search: '',
      tel: '',
      url: '',
      time: '',
      date: '',
      data:[],

      dense: false
    }
  }


}
</script>