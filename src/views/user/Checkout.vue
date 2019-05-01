<template>
    <div class="container">
        <div class="col">
            <h3>Kontaktiniai duomenys</h3>
            <p>
                Rekomenduojame <router-link to="/login">prisijungti</router-link>, kad matytumėte savo užsakymų istoriją bei galėtumėte sekti savo užsakymą.
                <br><small>Žvaigždute (<font color="red">*</font>) pažymėti laukeliai yra privalomi.</small>
                <label>
                    Vardas, pavardė*
                    <input type="password" name="password" placeholder="" required>
                </label>
                <label>
                    Telefono numeris*
                    <input type="tel" name="postcode" placeholder="" required>
                </label>
                <label v-bind:class="{ hidden : hideAddress }">
                    Adresas*
                    <input type="text" name="address1" placeholder="">
                    <input type="text" name="address2" placeholder="">
                </label>
                <label v-bind:class="{ hidden : hideAddress }">
                    Miestas*
                    <input type="text" name="city" placeholder="">
                </label>
                <label v-bind:class="{ hidden : hideAddress }">
                    Pašto kodas*
                    <input type="text" name="postcode" placeholder="">
                </label>
            </p>
        </div>
         <div class="col">
            <h3>Pristatymas</h3>
            <p>
                Pasirinkite pristatymo metodą:
            </p>
            <table class="shipping-method">
                <tr>
                    <td><input type="radio" name="shipping-method" value="shop" checked v-on:click="setAddressNeeded(false)"></td>
                    <td>Atsiėmimas parduotuvėje<br><small>€ 0.00</small></td>
                </tr>
                <tr>
                    <td><input type="radio" name="shipping-method" value="dpd" v-on:click="setAddressNeeded(true)"></td>
                    <td>Siuntimas kurjeriu<br><small>€ 5.00</small></td>
                </tr>
            </table>
            <br>
            <h3>Apmokėjimo būdas</h3>
            <p>
                Pasirinkite apmokėjimo metodą:
            </p>
            <table class="shipping-method">
                <tr v-bind:class="{ hidden : !hideAddress }">
                    <td><input type="radio" name="payment-method" checked value="shop"></td>
                    <td>Apmokėjimas parduotuvėje<br><small>Apmokėkite už prekę atsiimdami ją parduotuvėje.</small></td>
                </tr>
                <tr>
                    <td><input type="radio" name="payment-method" value="bank"></td>
                    <td>Apmokėjimas banku<br><small>Apmokėkite už prekę dabar.</small></td>
                </tr>
            </table>
        </div>
        <div class="col">
            <h3>Patvirtinkite užsakymą</h3>
            <table class="items">
                <tbody>
                    <tr class="item">
                        <td><img src="../../assets/img/item-photo-placeholder.jpg" alt="Detalės pavadinimas"></td>
                        <td><b>Variklis</b><br>Toyota Celica 2002<br>Benzinas, 1.8l, 105kW</td>
                        <td><b>€ 101.00</b></td>
                    </tr>
                    <tr class="item">
                        <td><img src="../../assets/img/item-photo-placeholder.jpg" alt="Detalės pavadinimas"></td>
                        <td><b>Vairas</b><br>Toyota Celica 2002<br>Benzinas, 1.8l, 105kW</td>
                        <td><b>€ 55.00</b></td>
                    </tr>
                    <tr><td colspan="3"><br></td></tr>
                    <tr>
                        <td></td>
                        <td>Prekių kaina:</td>
                        <td><b>€ 156.00</b></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Siuntimo išlaidos:</td>
                        <td><b>€ 0.00</b></td>
                    </tr>
                    <tr class="total">
                        <td></td>
                        <td>Viso:</td>
                        <td><b>€ 156.00</b></td>
                    </tr>
                </tbody>
            </table>

            <router-link class="button" to="/checkout-success">Užsakyti</router-link>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
export default {
    name: "Checkout",  
    data: function() {
        return {
            hideAddress: true
        }
    },
    methods: {
        setAddressNeeded: function(needed) {
            this.hideAddress = !needed;
        }
    }
}
</script>


<style lang="scss" scoped>
    .container {
        padding: 100px 0;
        min-height: calc(100vh - 591px);

        @media (max-width: 768px) {
            padding: 30px 0;
        }
    }

    .col {
        width: calc(33% - 20px);
        float: left;
        padding: 20px;
        margin: 10px;
        background-color: #f4f5fa;

        @media (max-width: 1200px) {
            width: calc(100% - 20px);
        }
    }
    
    a {
        text-decoration: underline;
    }
    h3 {
        text-transform: uppercase;
    }
    p {
        padding: 10px 0;
    }
    label {
        margin: 15px 0;
        font-size: 14px;
        display: block;
    }
    .hidden {
        display: none;
    }
    input {
        // background-color: #eceef3;
        background-color: #f4f5fa;
        font-family: 'Montserrat', sans-serif;
        border: none;
        border-bottom: 1px solid #e5e5e7;
        padding: 10px 15px;
        width: 100%;
        font-size: 14px;

        &[type=radio] {
            width: auto;
        }
    }

    .button {
        background-color: #fa4e46;
        text-align: center;
        text-decoration: none;
        margin-top: 10px;
        width: 100%;
        border: none;
        padding: 15px 25px;
        text-transform: uppercase;
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
        transition: .3s background-color;
        font-size: 14px;
        display: inline-block;

        &:hover {
            background-color: #fa6a63;
        }
    }

    table {
        border-spacing: 0;

        &.shipping-method {
            td {
                vertical-align: top;

                small {
                    color: #777;
                }

                &:last-child {
                    padding-left: 5px;
                }
            }
        }
    }

    
    table.items {
        width: 100%;
        border-spacing: 0;
        font-size: 12px;
        margin: 10px 0;

        thead {
            background-color: #e7e9ee;

            th {
                padding: 10px 0;
                font-weight: normal;
                font-size: 12px;
                text-transform: uppercase;

                &:nth-child(2) {
                    text-align: left;
                    padding-left: 20px;
                }
            }

            @media (max-width: 768px) {
                display: none;
            }
        }

        tbody {
            tr {
                margin: 10px 0;

                &:first-child td:nth-child(1) {
                    padding-top: 20px;
                }
                
                &.item td {
                    border-bottom: 1px solid #e7e9ee;
                }
            }
            td {
                text-align: center;
                padding: 0 20px;

                &:nth-child(1) {
                    width: 100px;
                    padding: 10px 0;

                    img {
                        width: 100%;
                    }
                }
                &:nth-child(2) {
                    text-align: left;
                }
                &:nth-child(3) {
                    text-align: right;
                }
                &:last-child {
                    padding: 0;
                }

                a {
                    background-color: #5f68d1;
                    border: none;
                    padding: 10px 25px;
                    text-transform: uppercase;
                    color: #fff;
                    font-family: 'Montserrat', sans-serif;
                    cursor: pointer;
                    transition: .3s background-color;
                    font-size: 14px;
                    text-align: center;

                    &:hover {
                        background-color: #7d86e6;
                    }

                    &.remove {
                        padding: 10px;
                        background-color: #fa4e46;
                        margin-left: 10px;

                        &:hover {
                            background-color: #fa6a63;
                        }
                    }
                }

            }
        }

        .total {
            font-size: 14px;
        }
    }


</style>

