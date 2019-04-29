<template>
    <header>
        <div class="inner--header container">
            <div class="nav">
                <div class="button"><span></span><span></span><span></span></div>
            </div>
            <div class="logo">AUTOMAGNATAS</div>

            <div class="misc">
                <a href="#">LT</a>
                <a href="#"><img src="../../assets/img/icons/map-pin.svg"></a>
                <a href="#"><img src="../../assets/img/icons/avatar.svg"></a>
                <a href="#"><img src="../../assets/img/icons/cart.svg"></a>
            </div>

            <div class="search">
                <input type="text" name="search" placeholder="Įveskite detalės pavadinimą...">
                <button type="submit"><img src="../../assets/img/icons/search.svg"></button>
            </div>

            <div class="info">
                <img src="../../assets/img/icons/cog.svg"> Turime virš 20 000 automobilių dalių, kurių skaičius vis didėja 
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
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

.search button {
    background: transparent;
    border: none;
    outline: none;
    float: right;
    cursor: pointer;
    transform: scale(1) rotate(0deg);
    transition: .3s transform;
}

.search button:hover {
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