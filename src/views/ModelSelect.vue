<template>
    <div class="container">
        <div class="breadcrumb">Toyota <img src="../assets/img/icons/right-arrow-double.svg"> <b>Pasirinkite modelį, metus</b></div>

        <div class="selection--block">
            <div class="selection--title">Pasirinkite modelį</div>
            <div class="selection--option" v-bind:class="{ active: modelSelection == 0 }" v-on:click="optionChange('model',0)">Avensis</div>
            <div class="selection--option" v-bind:class="{ active: modelSelection == 1 }" v-on:click="optionChange('model',1)">Camry</div>
            <div class="selection--option" v-bind:class="{ active: modelSelection == 2 }" v-on:click="optionChange('model',2)">Celica</div>
            <div class="selection--option" v-bind:class="{ active: modelSelection == 3 }" v-on:click="optionChange('model',3)">Corolla</div>
            <div class="selection--option" v-bind:class="{ active: modelSelection == 4 }" v-on:click="optionChange('model',4)">Prius</div>
            <div class="selection--option" v-bind:class="{ active: modelSelection == 5 }" v-on:click="optionChange('model',5)">Prius C</div>
            <div class="selection--option" v-bind:class="{ active: modelSelection == 6 }" v-on:click="optionChange('model',6)">Sienna</div>
            <div class="selection--option" v-bind:class="{ active: modelSelection == 7 }" v-on:click="optionChange('model',7)">Verso</div>
            <div class="selection--option" v-bind:class="{ active: modelSelection == 8 }" v-on:click="optionChange('model',8)">Proace</div>
            <div class="selection--option" v-bind:class="{ active: modelSelection == 9 }" v-on:click="optionChange('model',9)">Tundra</div>
        </div>
        <div class="selection--block">
            <div class="selection--title">Pasirinkite metus</div>
            <div class="selection--option" v-bind:class="{ active: yearSelection == 0 }" v-on:click="optionChange('year',0)">1970-1976</div>
            <div class="selection--option" v-bind:class="{ active: yearSelection == 1 }" v-on:click="optionChange('year',1)">1977-1983</div>
            <div class="selection--option" v-bind:class="{ active: yearSelection == 2 }" v-on:click="optionChange('year',2)">1984-1990</div>
            <div class="selection--option" v-bind:class="{ active: yearSelection == 3 }" v-on:click="optionChange('year',3)">1991-1998</div>
            <div class="selection--option" v-bind:class="{ active: yearSelection == 4 }" v-on:click="optionChange('year',4)">1999-2004</div>
            <div class="selection--option" v-bind:class="{ active: yearSelection == 5 }" v-on:click="optionChange('year',5)">2005-2009</div>
            <div class="selection--option" v-bind:class="{ active: yearSelection == 6 }" v-on:click="optionChange('year',6)">2010-2014</div>
            <div class="selection--option" v-bind:class="{ active: yearSelection == 7 }" v-on:click="optionChange('year',7)">2015-2019</div>
        </div>
        <div class="clear"></div>
    </div>    
</template>

<script>
import { setTimeout } from 'timers';
export default {
    name: "model-select",

    data: function(){
        return {
            modelSelection: -1,
            yearSelection: -1
        }
    },
    methods: {
        optionChange(type, index) {
            if(type == "model")
                this.modelSelection = index;
            if(type == "year"){
                this.yearSelection = index;
                setTimeout(() => this.$router.push("group-select"), 300);
            }
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

    .selection--block {
        width: 50%;
        float:left;
        padding-top: 30px;

        .selection--title {
            width: 100%;
            border: 1px solid #bec1d1;
            background-color: #3e4462;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 16px;
            color: #fff;
            text-align: center;
            padding: 15px 25px;
        }

        .selection--option {
            background: #fbfbfb;
            width: 50%;
            float: left;
            border-left: 1px solid #bec1d1;
            border-bottom: 1px solid #bec1d1;
            text-align: center;
            padding: 15px 25px;
            cursor: pointer;
            color: #000;
            opacity: .7;
            font-weight: normal;
            transition: .3s color, .3s opacity, .3s font-weight;

            &:hover {
                opacity: 1;
            }

            &.active {
                color: #fff;
                background: #6aa1f3;
                background: -moz-linear-gradient(left, #6aa1f3 0%, #7dadf5 100%);
                background: -webkit-linear-gradient(left, #6aa1f3 0%,#7dadf5 100%);
                background: linear-gradient(to right, #6aa1f3 0%,#7dadf5 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6aa1f3', endColorstr='#7dadf5',GradientType=1 );
                opacity: 1;
                font-weight: bold;
            }

            &:nth-child(odd) {
                border-right: 1px solid #bec1d1;
            }
        }

        &:nth-child(odd) {
            padding-left: 10px;
        }
        &:nth-child(even) {
            padding-right: 10px;
        }

        @media (max-width: 768px) {
            width: 100%;
            padding: 10px;
        }
    }
</style>
