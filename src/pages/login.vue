<template>
  
  <div class="q-pa-md">

    <div class="row justify-center">
      
    <div class="col-12 col-md-auto">
    
    <br>
    <br>
    <br>
  

    <h4> Autenticação</h4>
        <q-input bottom-slots label="Email" :dense="dense">
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>

    <q-input bottom-slots label="Senha" :dense="dense">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
    </q-input>
    <q-btn label="Entrar" outline rounded type="submit" :loading="submitting" class="q-mt-md" color="teal" to="dashdoador"/>
    <br>
    <br>
    <label>Não tem uma conta? <a href="/registo">Clique Aqui</a></label>

    </div>
    </div>
  </div>

</template>

<script>

</script>
