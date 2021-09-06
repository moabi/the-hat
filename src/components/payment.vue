<template>
    <div class="container">
        <div class="columns is-vcentered is-mobile is-centered is-multiline">
            <div class="column is-narrow is-4">
                <div class="container is-small">
                    <h2 class="title">Créer son compte</h2>
                    <div class="card">
                        <div class="card-content">
                            <div class="account-creation">
                                <p class="is-narrow">
                                    <a href="/account" class="link">Créer votre compte</a>
                                    ,
                                    cela vous permettra de réaliser des donations de chapeau plus facilement aux groupes que vous aimez.
                                </p>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-narrow">
                <div class="container is-small">
                    <h2 class="title">Faire un paiement direct à Duke Lipton</h2>
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">Lydia</p>
                            <button class="card-header-icon" aria-label="more options">
                                <span class="icon">
                                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                                </span>
                            </button>
                        </header>

                        <header class="card-header">
                            <p class="card-header-title">Paypal</p>
                            <button class="card-header-icon" aria-label="more options">
                                <span class="icon">
                                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                                </span>
                            </button>
                        </header>
                        <header class="card-header">
                            <p class="card-header-title">Carte Bancaire</p>
                            <button class="card-header-icon" aria-label="more options">
                                <span class="icon">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </header>
                        <div class="card-content">
                            <div id="paymentForm-a">
                                <div class="field">
                                    <label class="label">Name</label>
                                    <div class="control">
                                        <input
                                            class="input"
                                            type="text"
                                            placeholder="Numéro de la carte"
                                        />
                                    </div>
                                </div>
                                <div class="field is-horizontal">
                                    <div class="field-body">
                                        <div class="field">
                                            <p class="control is-expanded">
                                                <input class="input" type="text" placeholder="CVV" />
                                            </p>
                                        </div>
                                        <div class="field">
                                            <p
                                                class="control is-expanded has-icons-left has-icons-right"
                                            >
                                                <input
                                                    class="input is-success"
                                                    type="text"
                                                    placeholder="DD/YY"
                                                />
                                                <span class="icon is-small is-left">
                                                    <i class="far fa-calendar"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <button class="button is-primary">PAYER 2,00 €</button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <em>
                        Paiement sécurisé par
                        <a href="https//lyra.com" target="_blank">LYRA</a>
                    </em>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from "vue";

export default {
    setup: () => {
        const nav = ref(false);

        return { nav };
    },
}
</script>
<style>
.container.is-small {
    max-width: 480px !important;
}
</style>