<template>
    <div class="container">
        <div class="breadcrumb">Toyota <img src="../assets/img/icons/right-arrow-double.svg"> Celica, 1999-2004 <img src="../assets/img/icons/right-arrow-double.svg"> <b>Pasirinkite detalių kategoriją</b></div>

        <div class="group--list">
            <ul>
                <li v-on:mouseover="changePreview('apsvietimas')"><router-link to="/search-results" >Apšvietimas</router-link></li>
                <li v-on:mouseover="changePreview('degalu-misinio-sistema')"><router-link to="/search-results">Degalų mišinio sistema</router-link></li>
                <li v-on:mouseover="changePreview('duju-ismetimo-sistema')"><router-link to="/search-results">Dujų išmetimo sistema</router-link></li>
                <li v-on:mouseover="changePreview('durys')"><router-link to="/search-results">Durys</router-link></li>
                <li v-on:mouseover="changePreview('el-sistema')"><router-link to="/search-results">El. sistema</router-link></li>
                <li v-on:mouseover="changePreview('galine-asis')"><router-link to="/search-results">Galinė ašis</router-link></li>
                <li v-on:mouseover="changePreview('galines-isores-dalys')"><router-link to="/search-results">Galinės išorės dalys</router-link></li>
                <li v-on:mouseover="changePreview('kebulas-kebulo-dalys-kablys')"><router-link to="/search-results">Kėbulas, kėbulo dalys, kablys</router-link></li>
                <li v-on:mouseover="changePreview('kondicionierius')"><router-link to="/search-results">Kondicionierius</router-link></li>
                <li v-on:mouseover="changePreview('pavaru-deze')"><router-link to="/search-results">Pavarų dėžė</router-link></li>
                <li v-on:mouseover="changePreview('priekines-isores-dalys')"><router-link to="/search-results">Priekinės išorės dalys</router-link></li>
                <li v-on:mouseover="changePreview('ratai')"><router-link to="/search-results">Ratai</router-link></li>
                <li v-on:mouseover="changePreview('salonas')"><router-link to="/search-results">Salonas</router-link></li>
                <li v-on:mouseover="changePreview('stabdziu-sistema-priekine-asis')"><router-link to="/search-results">Stabdžių sistema, priekinė ašis</router-link></li>
                <li v-on:mouseover="changePreview('stiklai')"><router-link to="/search-results">Stiklai</router-link></li>
                <li v-on:mouseover="changePreview('stiklu-valymo-sistema')"><router-link to="/search-results">Stiklų valymo sistema</router-link></li>
                <li v-on:mouseover="changePreview('variklis')"><router-link to="/search-results">Variklis</router-link></li>
            </ul>
        </div>

        <div class="car--preview" v-bind:style="{ backgroundImage: 'url(' + currentPreview + ')' }">

        </div>

        <div class="clear"></div>
    </div>
</template>

<script>
export default {
    name: "group-select",
    data: function(){
        return {
            currentPreview: require("../assets/img/part-groups/full-car.jpg"),
        }
    },
    methods: {
        changePreview: function(slug) {
            console.log(slug);
            this.currentPreview = require(`../assets/img/part-groups/${slug}.jpg`);
        }
    }
}
</script>


<style lang="scss" scoped>
    .container {
        padding-top: 50px;
        padding-bottom: 100px;
        min-height: calc(100vh - 591px);
    }

    .group--list {
        width: 30%;
        float: left;
        padding-top: 100px;

        ul {
            list-style: none;
        }

        li a {
            padding: 3px 0;
            display: block;
            font-weight: normal;

            &:hover {
                font-weight: bold;
            }
        }

        @media (max-width: 768px) {
            padding-top: 20px;
            width: 100%;
            text-align: center;

            li {
                display: inline-block;
            }
            li a {
                display: inline-block;
                padding: 10px;
                margin: 4px 7px;
                background-color: #f4f5fa;
            }
        }

    }

    .car--preview {
        float: left;
        width: 70%;
        height: 600px;
        background-image: url("../assets/img/part-groups/full-car.jpg");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        transition: .1s background-image;

        @media (max-width: 768px) {
            width: 100%;
            height: 200px;
        }
    }
</style>

