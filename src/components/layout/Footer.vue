<template>
    <footer>
        <div class="container">
            <div class="col">
                <ul>
                    <li class="title">Klientai</li>
                    <li><a href="#">Pristatymo taisyklės</a></li>
                    <li><a href="#">Grąžinimo taisyklės</a></li>
                    <li><a href="#">Klientų aptarnavimas</a></li>
                </ul>
            </div>
            <div class="col">
                <ul>
                    <li class="title">Klausimai</li>
                    <li><a href="#">D.U.K</a></li>
                    <li><a href="#">Kontaktai</a></li>
                </ul>
            </div>
            <div class="copyright">2019 &copy; Automagnatas, UAB</div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    footer {
        background-color: #3a3c49;
        padding: 50px;
        color: #fff;
    }
    .col {
        vertical-align: top;
        width: 25%;
        display: inline-block;
    }
    ul {
        list-style: none;
    }
    li {
        margin: 0;
        padding-bottom: 2px;
    }
    .title {
        font-weight: bold;
        text-transform: uppercase;
        padding-bottom: 7px;
    }
    .copyright {
        position: absolute;
        right: 0;
    }
    @media (max-width: 1200px) {
        .col {
            width: 50%;
        }
    }

    @media(max-width: 768px) {
        .col {
            width: 100%;
            margin-bottom: 30px;
        }
        .copyright{
            width: 100%;
            text-align: center;
        }
    }
</style>