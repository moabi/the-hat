<template>
  <section class="container">
    <div class="columns is-multiline">
      <div class="column is-8 is-offset-2 register">
        <div class="columns">
          <div class="column left">
            <h1 class="title is-1">Chapeau</h1>
            <h2 class="subtitle colored is-4">un chapeau digital</h2>
            <p>
              Faîtes un don à votre groupe préféré,
              <br />retrouvez son contact facilement
            </p>
          </div>
          <div class="column right has-text-centered">
            <form>
              <div class="field">
                <div class="control">
                  <input class="input is-medium" type="text" placeholder="Nom du groupe" />
                </div>
              </div>

              <a
                href="/duke-lipton/"
                class="button is-block is-primary is-fullwidth is-medium"
              >Trouver</a>
            </form>
          </div>
        </div>
      </div>
      <div class="column is-8 is-offset-2">
        <br />
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span> &emsp;
              <span class="icon">
                <i class="fab fa-facebook"></i>
              </span> &emsp;
              <span class="icon">
                <i class="fab fa-instagram"></i>
              </span> &emsp;
              <span class="icon">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div class="level-right">
            <small
              class="level-item"
              style="color: var(--textLight)"
            >&copy; Chapeau. tous droits reservés.</small>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'groupFinder'
}
</script>