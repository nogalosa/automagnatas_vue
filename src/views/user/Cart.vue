<template>
    <div class="container">

        <h3>Jūsų krepšelis</h3>
        <table>
            <thead>
                <th>Nuotrauka</th>
                <th>Detalės aprašymas</th>
                <th>Detalės kodas</th>
                <th>Kokybė</th>
                <th>Metai</th>
                <th>Kaina</th>
                <th></th>
            </thead>
            <tbody>
                <tr>
                    <td><img src="../../assets/img/item-photo-placeholder.jpg" alt="Detalės pavadinimas"></td>
                    <td><b>Variklis</b><br>Toyota Celica 2002<br>Benzinas, 1.8l, 105kW</td>
                    <td>999999</td>
                    <td>Nauja</td>
                    <td>2002</td>
                    <td><b>€ 101.00</b></td>
                    <td><router-link to="/item-details">Plačiau</router-link><router-link class="remove" to="/item-details">❌</router-link></td>
                </tr>
                <tr>
                    <td><img src="../../assets/img/item-photo-placeholder.jpg" alt="Detalės pavadinimas"></td>
                    <td><b>Vairas</b><br>Toyota Celica 2002<br>Benzinas, 1.8l, 105kW</td>
                    <td>999999</td>
                    <td>Naudota</td>
                    <td>2002</td>
                    <td><b>€ 55.00</b></td>
                    <td><router-link to="/item-details">Plačiau</router-link><router-link class="remove" to="/item-details">❌</router-link></td>
                </tr>
            </tbody>
        </table>

        <div class="profile--box">
            <h3>Tolimesni veiksmai</h3>
            <router-link class="profile--button continue" to="/checkout">🛒 Tęsti pirkimą</router-link>
            <router-link class="profile--button" to="/">Ieškoti daugiau detalių</router-link>
        </div>

       
    </div>
</template>

<style lang="scss" scoped>
    .container {
        padding: 100px 0;
        width: 95%;
        min-height: calc(100vh - 591px);
    }

    
    .profile--box {
        margin: 20px 0;
        margin-bottom: 40px;

        @media (max-width: 768px) {
            text-align: center;
        }
    }
    .profile--button {
        background-color: #fa4e46;
        display: block;
        max-width: 250px;
        width: 100%;
        border: none;
        padding: 15px 25px;
        text-transform: uppercase;
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
        transition: .3s background-color;
        font-size: 14px;
        text-align: center;
        margin-right: 10px;

        &:hover {
            background-color: #fa6a63;
        }

        &.continue {
            background-color: #5f68d1;
            float: right;

            &:hover {
                background-color: #7d86e6;
            }
        }

        @media (max-width: 640px) {
            width: 100%;
            max-width: 100%;
            float: none !important;
            margin-bottom: 10px;
        }
    }

    h3 {
        padding-bottom: 20px;
    }
    table {
        width: 100%;
        border-spacing: 0;

        thead {
            background-color: #f4f5fa;

            th {
                padding: 25px 0;
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

                @media (max-width: 768px) {
                    display: block;
                    width: 50%;
                    float: left;

                    &:first-child td:nth-child(1) {
                        padding-top: 10px;
                    }
                }
            }
            td {
                text-align: center;
                padding: 0 20px;

                &:nth-child(1) {
                    width: 200px;
                    padding: 10px 0;

                    img {
                        width: 100%;
                    }
                }
                &:nth-child(2) {
                    text-align: left;
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

                @media (max-width: 768px) {
                    display: block;
                    font-size: 12px;

                    &:nth-child(1) {
                        text-align: center;
                        width: auto;

                        img {
                            width: 40vw;
                        }
                    }

                    &:nth-child(2) {
                        text-align: center;
                    }

                    &:nth-child(3), &:nth-child(4), &:nth-child(5) {
                        display: none;
                    }

                    a {
                        margin-top: 10px;
                        display: inline-block;
                    }
                }
            }
        }
    }
</style>

