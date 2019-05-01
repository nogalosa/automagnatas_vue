<template>
    <header>
        <div class="inner--header container">
            <div class="nav" v-bind:class="{active: showNav}">
                <div class="button" v-on:click="navToggle"><span></span><span></span><span></span></div>
            </div>
            <div class="navigation" v-bind:class="{active: showNav}">
                <ul>
                    <li><router-link to="/contacts">Kontaktai</router-link></li>
                    <li><router-link to="/faq">D.U.K</router-link></li>
                    <li><router-link to="/shipping-terms">Pristatymo taisyklės</router-link></li>
                    <li><router-link to="/return-terms">Grąžinimo taisyklės</router-link></li>
                    <li><router-link to="/support">Klientų aptarnavimas</router-link></li>
                </ul>
            </div>

            <div class="logo"><router-link to="/">AUTOMAGNATAS</router-link></div>

            <div class="misc">
                <a href="#">LT</a>
                <router-link to="/contacts"><img src="../../assets/img/icons/map-pin.svg"></router-link>
                <router-link to="/login"><img src="../../assets/img/icons/avatar.svg"></router-link>
                <a href="#" v-on:click="cartToggle"><img src="../../assets/img/icons/cart.svg"></a>
                <div class="cart" v-bind:class="{active: showCart}">
                    <table>
                        <tr>
                            <td><img src="../../assets/img/item-photo-placeholder.jpg"></td>
                            <td>Variklis<br><b>€ 105.00</b></td>
                        </tr>
                        <tr>
                            <td><img src="../../assets/img/item-photo-placeholder.jpg"></td>
                            <td>Variklis<br><b>€ 105.00</b></td>
                        </tr>
                        <tr>
                            <td>IŠ VISO</td>
                            <td class="right">€ 210.00</td>
                        </tr>
                    </table>
                    <router-link class="cart--button" to="/cart">Tęsti</router-link>
                </div>
            </div>

            <div class="search">
                <input type="text" name="search" placeholder="Įveskite detalės pavadinimą...">
                <router-link to="/search-results"><img src="../../assets/img/icons/search.svg"></router-link>
            </div>

            <div class="info">
                <img src="../../assets/img/icons/cog.svg"> Turime virš 20 000 automobilių dalių, kurių skaičius vis didėja 
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data: function(){
        return {
            showCart: false,
            showNav: false,
        }
    },
    methods: {
        cartToggle: function(){
            this.showCart = !this.showCart;
        },
        navToggle: function() {
            this.showNav = !this.showNav;
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    min-height: 390px;
    width: 100%;
    color: #fff;
    background-image: url("../../assets/img/header-bg.jpg");
    background-size: cover;
    background-position: center;
}

.inner--header {
    padding: 30px;
}

.nav {
    float: left;

    &.active {
        position: fixed;
        z-index: 10;
        left: 305px;
        top: 5px;

        background-color: rgba(0,0,0,.5);
        padding: 20px;
        padding-right: 12px;
        padding-bottom: 14px;
        border-radius: 40px;

        span:first-child {
            transform: rotate(45deg);
        }
        span:nth-child(2){
            opacity: 0;
        }
        span:last-child {
            transform: rotate(-45deg);
        }
    }
}

.navigation {
    position: fixed;
    left: 0;
    top: 0;
    background-color: #f4f5fa;
    color: #000;
    height: 100vh;
    width: 300px;
    z-index: 10;
    margin-left: -300px;
    transition: .3s margin-left;

    &.active {
        margin-left:0px;
    }

    ul {
        list-style: none;

        li {
            padding: 10px 30px;
            border-bottom: 1px solid #ccc;

            &:first-child {
                border-top: 1px solid #ccc;
                margin-top: 20px;
            }

            a {
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}

.cart {
    background-color: #6771e2;
    padding: 20px;
    z-index: 10;
    position: absolute;
    width: 100%;
    display: none;

    &.active {
        display: block;
    }

    table {
        width: 100%;
        border-spacing: 0;
        font-size: 12px;

        td {
            border-bottom: 1px solid #848de8;
            &:first-child {
                width: 60px;
                height: 80px;
                padding: 10px 0;
            }
            &:last-child {
                padding-left: 10px;
            }

            &.right {
                text-align: right;
            }
        }
        tr {
            &:last-child {
                td {
                    border: none;
                    padding: 10px 0;
                    height: auto;
                }
            }
        }
        img {
            max-width: 60px;
            max-height: 60px;
        }
    }


    .cart--button {
        background-color: #5f68d1;
        max-width: 200px;
        width: 100%;
        border: none;
        padding: 10px 25px;
        text-transform: uppercase;
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
        -webkit-transition: .3s background-color;
        transition: .3s background-color;
        font-size: 14px;
        font-weight: normal;
        text-align: center;
        margin: auto;
        margin-top: 5px;
        display: block;
        border-radius: 20px;

        &:hover {
            background-color: #515abe;
        }
    }
}

.logo {
    float: left;
    font-weight: bold;
    font-size: 24px;
    letter-spacing: 1px;
    padding-left: 16px;
    line-height: 1.25;
}

.nav .button {
    cursor: pointer;
}

.nav .button span {
    display: block;
    background-color: #fff;
    width: 35px;
    height: 5px;
    margin-bottom: 7px;
    border-radius: 2px;
    opacity: 1;
    transition: .3s transform, .3s opacity;
    transform-origin: 0 50%;
}

.misc {
    position: absolute;
    right: 10px;
    top: 10px;
}

.misc a {
    padding:20px;
    font-size: 18px;
    font-weight: bold;
    display: inline-block;
    vertical-align: middle;
}

.misc a img {
    width: 34px;
}

.search {
    padding: 23px 35px;
    border-radius: 40px;
    background-color: rgba(255,255,255,.3);
    max-width: 800px;
    widows: 100%;
    margin: auto;
    margin-top: 150px;
}
.search input {
    background: transparent;
    border: none;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    width: calc(100% - 47px);
    outline: none;
    font-size: 16px;
    height: 32px;
    vertical-align: middle;
    display: inline-block;
}

.search a {
    background: transparent;
    border: none;
    outline: none;
    float: right;
    cursor: pointer;
    transform: scale(1) rotate(0deg);
    transition: .3s transform;
}

.search a:hover {
    transform: scale(1.1) rotate(10deg);
}


.search img {
    width: 32px;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgba(255,255,255,.5);
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: rgba(255,255,255,.5);
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: rgba(255,255,255,.5);
}

.info {
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    margin-top: 50px;
}
.info img {
    width: 32px;
    vertical-align: middle;
}

@media (max-width: 768px) {
    .logo {
        position: absolute;
        left: 0;
        margin-top: 80px;
        width: 100%;
        text-align: center;
    }
}
@media (max-width: 480px) {
    .misc a {
        padding: 12px;
    }
}
</style>