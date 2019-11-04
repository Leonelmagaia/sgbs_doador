<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">Desculpa, nada aqui...<strong>(Erro 404)</strong></p>
    <q-btn
      color="secondary"
      style="width:100px;"
      to="/"
      label="Voltar"
    />
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
