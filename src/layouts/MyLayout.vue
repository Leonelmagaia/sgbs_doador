<template>
  
<q-layout view="hHh lpR fFf" >
    <q-header elevated class="bg-red-7 text-white-8 q-py-xs" reveal>
      <q-toolbar>
        
        <q-btn round flat>
            <q-tooltip>Account</q-tooltip>
          </q-btn>

        <q-btn flat no-caps no-wrap icon="favorite" v-if="$q.screen.gt.xs">
          <q-toolbar-title shrink class="text-weight-bold">
            SGBS
          </q-toolbar-title>
        </q-btn>

        <q-space />
        
        <div class="q-gutter-sm row items-center no-wrap">
          
          <q-btn flat no-caps no-wrap label="Página Inicial" v-if="$q.screen.gt.sm" to="/">
          </q-btn>

          <q-btn flat no-caps no-wrap label="Por que Doar Sangue?" v-if="$q.screen.gt.sm" to="/porquedoar">
          </q-btn>

          <q-btn flat no-caps no-wrap label="Processo de Doação" v-if="$q.screen.gt.sm"    to="/processo">
          </q-btn>
          
          <q-btn outline rounded color="white" label="Entrar" v-if="$q.screen.gt.sm" to="/login">
          </q-btn>

          <q-btn round flat>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        <q-space />

        </div>
      </q-toolbar>
    </q-header>

<q-page-container>
      <router-view />
    </q-page-container>
  


    <q-footer class="bg-red text-white"    >
      <p>ola</p>
    </q-footer>

 




  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout.vue',
  data () {
    return {
    
    }
  }
}
</script>
