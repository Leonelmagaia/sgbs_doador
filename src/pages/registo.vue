<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      animated
      done-color="red-5"
      active-color="red"
      inactive-color="secondary"
    >
    
      <q-step
        :name="1"
        title="Dados Básicos"
        icon="user"
        :done="step > 1"
      >
   
      


       <div class="q-pa-lg">
    <div class="q-gutter-md row items-end">

       <q-input filled bottom-slots v-model="dador.nome" label="Nome" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="person_outline" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="dador.nome = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
         Judite
        </template>
      </q-input>


  <q-input filled bottom-slots v-model="dador.apelido" label="Apelido" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="person_outline" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="dador.apelido = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
         Manjate
        </template>
      </q-input>

        <q-input filled bottom-slots v-model="dador.email" label="Email" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="mail" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="dador.email = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
         judite123@gmail.com
        </template>
      </q-input>


  <q-input filled bottom-slots v-model="dador.telefone" label="Telefone" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="phone_enabled" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="dador.telefone = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
         846771216
        </template>
      </q-input>
    

<!-- style="min-width: 250px; max-width: 300px ,top: 20px" -->
 <q-input filled v-model="dador.nasc" mask="date" :rules="['date']" @click="$refs.qDateProxy.show()"  hint="Data de Nascimento"  style="width: 250px" >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date title= "Aniversario" v-model="dador.nasc" @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>


 <q-select
        filled
        v-model="dador.sexo"
        :options="sexo"
          stack-label
        label="Sexo"
        hint="Masculino"
        style="width: 250px"
      />

      <q-select
        filled
        v-model="dador.nacionalidade"
        :options="cPaises"
         stack-label
        label="Nacionalidade"
        hint="Moçambicana"
        style="width: 250px"
      />
   
      <q-select
        filled
        v-model="dador.provincia"
        :options="provincia"
          stack-label
        label="Provincia"
        hint="Maputo"
        style="width: 250px"
      />

      

    </div>

   
   
  </div>
      </q-step>

      <q-step
        :name="2"
        title="Dados Intermediários"
        caption="Opcionais"
        icon="create_new_folder"
        :done="step > 2"
      >










   <div class="q-pa-lg">
    <div class="q-gutter-md row items-end">

       <q-input filled bottom-slots v-model="dador.nomePai" label="Nome de Pai" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="sentiment_satisfied_alt" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="dador.nomePai = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
         Mandjate Cossa
        </template>
      </q-input>


  <q-input filled bottom-slots v-model="dador.nomeMae" label="Nome de Mãe" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="face" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="dador.nomeMae = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
         Rosita Cumbane
        </template>
      </q-input>


  <q-input filled bottom-slots v-model="dador.telefoneParente" label="Telefone do Parente" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="phone_enabled" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="dador.telefone = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
         846771216
        </template>
      </q-input>
    

<!-- style="min-width: 250px; max-width: 300px ,top: 20px" -->



 <q-select
        filled
        v-model="dador.grau"
        :options="grau"
          stack-label
        label="Grau de Parentesco"
        hint="Irmão"
        style="width: 250px"
      />

      <q-select
        filled
        v-model="dador.fatorRH"
        :options="rh"
         stack-label
        label="Fator RH"
        hint="RH+"
        style="width: 250px"
      />


      
       



      <q-select
        filled
        v-model="sangue_cod"
        :options="options"
          stack-label
        label="Grupo Sanguineo"
        hint="A+"
        style="width: 250px"
      />

    


    
    </div>
  </div>


  
      </q-step>

      <q-step
        :name="3"
        title="Finalizar"
        icon="add_comment"
      >
       

       




   <div class="q-pa-lg">
    <div class="q-gutter-md row items-end">



 
       <q-select
        filled
        v-model="dador.tipoDocumento"
        :options="documento"
          stack-label
        label="Documento"
        hint="BI"
        style="width: 250px"
      />

        

       <q-input filled bottom-slots  v-model="dador.numeroDocumento" label="Número do Doc" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="sentiment_satisfied_alt" />
        </template>

        <template v-slot:hint>
        1250448822B
        </template>
      </q-input>

         <q-input v-model="dador.senha" filled :type="isPwd ? 'password' : 'text'" hint="Senha"  label = "Senha">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>


      </q-input>
  <q-input v-model="cpassword" filled :type="isPwd ? 'password' : 'text'" hint="Confirmar Senha"  label = "Confirmar Senha">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>


      </q-input>

    

<!-- style="min-width: 250px; max-width: 300px ,top: 20px" -->




    


    
    </div>
  </div>

      
  


      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>

          <q-btn     @click="salvar()"  v-if="step==3" label="salvar"   color="teal" />

          <q-btn  v-if="step < 3"   @click="$refs.stepper.next()" color="deep-orange"   label="Continuar"    />
          <q-btn v-if="step > 1" flat color="deep-orange" @click="$refs.stepper.previous()" label="Voltar" class="q-ml-sm" />
       
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  

 mounted(){

  axios.get(`https://sanguemozapi.herokuapp.com/api/sangue`)
    .then(response => {
      this.lista  = response.data     
      console.log("--------------")

    })
    .catch(e => {
      this.errors.push(e)
    })



  this.paises();

 }
,


watch:{


lista(val){


if(val.length){
  this.cPaises = this.pais.map(o => {
  return {
      label:  o.name,
      value:  o.name,
  }
  console.log(o.name);

})

this.options = this.lista.map(o => {
  return {
      label:  o.nome,
      value:  o.codigo
  }
  console.log(this.options);

})
}
}

}







,
 data () {
    return {
      lista: [],
      pais : [],
      model: null,
      sangue_cod:null,
       currentObj: "",
      options: [],
      cPaises : [],
      sexo: ['Masculino', 'Feminino','Outro'],
      grau: ['Irmão(a)', 'Mãe','Pai','Outro'],
      documento: ['BI','Passaporte','DIRE','Cartão de Eleitor','Outro'],
      date: '2019/02/01',
      s:'',
      rh: ['RH+','RH-'],
      nacionalidade: ['Moçambique','Outro'],
      provincia : ['Maputo','Gaza','Inhambane','Manica','Sofala','Tete','Nampula','Zambezia','Niassa','Cabo Delgado', 'Outro'],
      password: '',
      cpassword: '',

      isPwd: true,

      email: '',
      search: '',
      tel: '',
      url: '',
      time: '',
      date: ''




,
     submitting: false,
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
     
  
      
     text: '',
     nome: '',
      ph: '',
      step: 1,

      dense: false
    }
  }

,

methods:{

paises (){


 axios.get(`https://restcountries.eu/rest/v2/all`)
    .then(response => {
      this.pais  = response.data     
      console.log("--------------")

    })
    .catch(e => {
      this.errors.push(e)
    })

 },



 







  editar() {

 axios.put('http://localhost:8086/api/dador/'  + this.sangue_cod.value, {

           
        nome: this.dador.nome,
        endereco: this.dador.endereco,
        sexo: this.dador.sexo,
        telefone:this.dador.telefone,
        email: this.dador.email,
        data_nasc: this.dador.nasc,
        fatorRH: this.dador.fatorRH,
        // nacionalidade: this.dador.nacionalidade,
        nomeMae: this.dador.nomeMae,
        nomePai: this.dador.nomePai,
        numeroDeDoacoes: "",
        numeroDocumento: this.dador.numeroDocumento,
        provincia: this.dador.provincia,
        situacaoAptidao: "",
        tipoDocumento: this.dador.tipoDocumento,


                })
                .then(function (response) {
                    currentObj.output = response.data;
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
 


  }

,
showNotif () {
      this.$q.notify({
        message: this.currentObj,
        color: 'dark',
       

      })
    },
  simulateSubmit () {
      this.submitting = true

      // Simulating a delay here.
      // When we are done, we reset "submitting"
      // Boolean to false to restore the
      // initial state.
      setTimeout(() => {
        // delay simulated, we are done,
        // now restoring submit to its initial state
        
   

        this.submitting = false
      }, 3000)
    }

,
  salvar(){

    axios.post('https://sanguemozapi.herokuapp.com/api/dador/'  + this.sangue_cod.value, {

           
        nome: this.dador.nome,
        endereco: this.dador.endereco,
        sexo: this.dador.sexo,
        telefone:this.dador.telefone,
        email: this.dador.email,
        data_nasc: this.dador.nasc,
        fatorRH: this.dador.fatorRH,
        // nacionalidade: this.dador.nacionalidade,
        senha: this.dador.senha,
        nomeMae: this.dador.nomeMae,
        nomePai: this.dador.nomePai,
        numeroDeDoacoes: "",
        numeroDocumento: this.dador.numeroDocumento,
        provincia: this.dador.provincia,
        situacaoAptidao: "",
        tipoDocumento: this.dador.tipoDocumento,

                })
                .then(function (response) {
                     alert(response.data);
                 
                })
                .catch(function (error) {
                });

  }
}

}
</script>
