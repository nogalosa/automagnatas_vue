<template>
    <div class="container">
        <div class="breadcrumb">Toyota <img src="../assets/img/icons/right-arrow-double.svg"> Celica, 1999-2004 <img src="../assets/img/icons/right-arrow-double.svg"> Apšvietimo sistema <img src="../assets/img/icons/right-arrow-double.svg"> <b>Priekinis žibintas</b></div>

        <div class="col">
            <div class="description">
                <h2>Priekinis žibintas</h2>
                
                <table>
                    <tr><td>Prekės numeris</td><td>999999</td></tr>
                    <tr><td>Detalės kodas</td><td>86110-47220</td></tr>
                    <tr><td>Automobilis</td><td>Toyota Celica</td></tr>
                    <tr><td>Metai</td><td>2002</td></tr>
                    <tr><td>Variklis</td><td>1.8l 105kw</td></tr>
                    <tr><td>Kokybė</td><td>Naudota</td></tr>
                    <tr><td>Kiekis sandelyje</td><td><b>3</b></td></tr>
                </table>
            </div>

            <div class="extra">
                <h4>Aprašymas:</h4>
                Europa, yra siek tiek vidui ikritusiu dulkiu matosi foto, bet siaip viskas OK. Toyota Celica Right Headlight LHD
                <br><br><br>

                <div class="right">
                    <router-link class="buy" to="/cart">🛒 Pirkti</router-link>
                    <router-link class="add--wishlist" to="/item-details">💖 Noriu</router-link><br>
                    <small>Įkėlimo data: 2019-04-01</small>
                </div>
                <div class="price">€ 35.00</div>
            </div>
        </div>

        <div class="col">
            <div class="img--wrapper">
                <img src="../assets/img/part-groups/full-car.jpg" alt="Priekinis žibintas">
            </div>
        </div>

        <div class="clear"></div>

    </div>    
</template>

<style lang="scss" scoped>
    .container {
        padding-top: 50px;
        padding-bottom: 100px;
        min-height: calc(100vh - 591px);
    }

    .col {
        float: left;
        width: 50%;
        margin-top: 50px;

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    .img--wrapper {
        img {
            width: 100%;
        }
    }

    .description {
        padding: 20px;
        background-color: #f5f5f5;
    }

    table {
        padding: 20px 0;

        td {
            padding: 0 20px;

            &:first-child {
                padding-left: 0;
            }
        }
    }

    .price {
        font-size: 24px;
        font-weight: bold;
    }
    .right {
        float: right;
        text-align: right;
    }

    .buy, .add--wishlist {
        background-color: #fa4e46;
        border: none;
        padding: 15px 25px;
        text-transform: uppercase;
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
        transition: .3s background-color;
        font-size: 14px;
        text-align: center;
        margin-left: 10px;
        display: inline-block;

        &:hover {
            background-color: #fa6a63;
        }
    }

    .buy {
        background-color: #5f68d1;
        padding: 15px 45px;

        &:hover {
            background-color: #7d86e6;
        }
    }

    .extra {
        padding: 20px;

        h4 {
            padding-bottom: 5px;
        }
    }
</style>

