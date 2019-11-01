<template>
  
  <div class="q-pa-md">

    <div class="row justify-center">
      
    <div class="col-12 col-md-auto">
  
      <q-stepper
        v-model="step"
        ref="stepper"
        animated
        done-color="red-7"
        active-color="red"
        inactive-color="secondary"
      >
    
        <q-step
          :name="1"
          title="Informações Pessoais"
          icon="user"
          :done="step > 1"
        >
    
        <div class="q-pa-lg">
      <div class="col-12 col-md-auto">

        <q-input bottom-slots label="Nome" :dense="dense">
          <template v-slot:prepend>
            <q-icon name="person_outline" />
          </template>
          <template v-slot:append>
            <q-icon name="close" @click="dador.nome = ''" class="cursor-pointer" />
        </template>

        </q-input>

      <q-input bottom-slots label="Apelido" :dense="dense">
          <template v-slot:prepend>
            <q-icon name="person_outline" />
          </template>
          <template v-slot:append>
            <q-icon name="close" @click="dador.apelido = ''" class="cursor-pointer" />
          </template>

        </q-input>

          <q-input bottom-slots label="Email" :dense="dense">
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
          <template v-slot:append>
            <q-icon name="close" @click="dador.email = ''" class="cursor-pointer" />
          </template>

        </q-input>


    <q-input bottom-slots label="Telefone" :dense="dense">
          <template v-slot:prepend>
            <q-icon name="phone_enabled" />
          </template>
          <template v-slot:append>
            <q-icon name="close" @click="dador.telefone = ''" class="cursor-pointer" />
          </template>

        </q-input>
      

    <q-input mask="date" :rules="['date']" @click="$refs.qDateProxy.show()" label="Data de Nascimento" hint=""  style="width: 250px" >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date title= "Data de Nascimento" @input="() => $refs.qDateProxy.hide()" />
              </q-popup-proxy>
            </q-icon>
          </template>
   </q-input>


    <q-select

            v-model="dador.sexo"
            :options="sexo"
              stack-label
            label="Sexo"
            hint=""
            style="width: 250px"
          />

          <q-select
            v-model="dador.nacionalidade"
            :options="nacionalidade"
            stack-label
            label="Nacionalidade"
            hint=""
            style="width: 250px"
          />
      
          <q-select
            v-model="dador.provincia"
            :options="provincia"
              stack-label
            label="Provincia"
            hint=""
            style="width: 250px"
          />

          

        </div>

      
      
      </div>
          </q-step>

          <q-step
            :name="2"
            title="Informações Complementares"
            icon="create_new_folder"
            :done="step > 2"
          >


      <div class="q-pa-lg">
        <div class="col-12 col-md-auto">

          <q-input bottom-slots v-model="dador.nomePai" label="Nome de Pai" :dense="dense">
            <template v-slot:prepend>
              <q-icon name="sentiment_satisfied_alt" />
            </template>
            <template v-slot:append>
              <q-icon name="close" @click="dador.nome = ''" class="cursor-pointer" />
            </template>

          </q-input>


      <q-input bottom-slots v-model="dador.nomeMae" label="Nome de Mãe" :dense="dense">
            <template v-slot:prepend>
              <q-icon name="face" />
            </template>
            <template v-slot:append>
              <q-icon name="close" @click="dador.apelido = ''" class="cursor-pointer" />
            </template>

          </q-input>


      <q-input bottom-slots v-model="dador.telefoneParente" label="Telefone do Parente" :dense="dense">
            <template v-slot:prepend>
              <q-icon name="phone_enabled" />
            </template>

            <template v-slot:append>
              <q-icon name="close" @click="dador.telefone = ''" class="cursor-pointer" />
            </template>

          </q-input>
        

        <q-select
            v-model="dador.grau"
            :options="grau"
            label="Grau de Parentesco"
            hint=""
            style="width: 250px"
        />
      
            <q-select
            v-model="dador.documento"
            :options="documento"
              stack-label
            label="Documento"
            hint=""
            style="width: 250px"
          />

          <q-input bottom-slots v-model="dador.numeroDocumento" label="Número do Documento" :dense="dense">
            <template v-slot:prepend>
              <q-icon name="sentiment_satisfied_alt" />
            </template>
            <template v-slot:append>
              <q-icon name="close" @click="dador.nomeDocumento = ''" class="cursor-pointer" />
            </template>
          </q-input>

        
          <q-input bottom-slots v-model="dador.senha" label="Senha" :dense="dense">
            <template v-slot:prepend>
              <q-icon name="sentiment_satisfied_alt" />
            </template>
            <template v-slot:append>
              <q-icon name="close" @click="dador.senha = ''" class="cursor-pointer" />
            </template>
          </q-input>

          <q-input bottom-slots v-model="dador.confirmarSenha" label="Confirmar Senha" :dense="dense">
            <template v-slot:prepend>
              <q-icon name="sentiment_satisfied_alt" />
            </template>
            <template v-slot:append>
              <q-icon name="close" @click="dador.confirmarSenha = ''" class="cursor-pointer" />
            </template>
          </q-input>
        </div>
      </div>


      
          </q-step>

          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn @click="$refs.stepper.next()" color="red-7" :label="step === 2 ? 'Finalizar' : 'Continuar'" />
              <q-btn v-if="step > 1" flat color="red-7" @click="$refs.stepper.previous()" label="Voltar" class="q-ml-sm" />
              <label>Já tem uma conta? <a href="/login">Clique Aqui</a></label>
            </q-stepper-navigation>
            
          </template>
        </q-stepper>
    
    </div>
    </div>
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

 }
,


watch:{


lista(val){


if(val.length){
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
      model: null,
      sangue_cod:null,
      options: [],
      sexo: ['Masculino', 'Feminino','Outro'],
      grau: ['Irmão(a)', 'Mãe','Pai','Outro'],
      documento: ['BI','Passaporte','DIRE','Cartão de Eleitor','Outro'],
      date: '2019/02/01',
      s:'',
      nacionalidade: ['Moçambique','Angola'],
      provincia : ['Maputo','Gaza','Inhambane','Manica','Sofala','Tete','Nampula','Zambezia','Niassa','Cabo Delgado']





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
        apelido: "",
        grau: "",
        senha:"",
        confirmarSenha:""
        
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
        email: this.dador.apelido
                })
                .then(function (response) {
                    currentObj.output = response.data;
                })
                .catch(function (error) {
                    currentObj.output = error;
                });

  }
}

}
</script>
