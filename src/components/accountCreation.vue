<template>
  <section class="container">
    <div class="columns is-vcentered is-mobile is-centered">
      <div class="column is-narrow">
        <h2 class="title">Création de compte</h2>

        <div class="columns is-vcentered">
          <div class="column">
            <em>Créer un compte avec :</em>
          </div>
          <div class="column">
            <div class="field is-grouped is-centered">
              <a href class="button is-info is-light is-small">Facebook</a>
              <a href class="button is-danger is-light is-small">Google</a>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header"></div>
          <div class="card-content has-text-left">
            <div class="field is-grouped">
              <div class="control">
                <input class="input" type="text" placeholder="John" />
              </div>
              <div class="control">
                <input class="input" type="text" placeholder="Doe" />
              </div>
            </div>
            <div class="fielf">
              <div class="control">
                <input class="input" type="email" placeholder="john.doe@gmail.com" />
              </div>
            </div>
            <br />
            <div class="field is-size-7">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" />
                  J'accepte
                  <a href="#">les conditions d'utilisation.</a>
                </label>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Envoyer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'accountCreation'
}
</script>