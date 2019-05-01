<template>
  <div class="container">
    <div class="search--block">
      <div class="make--select">
        <router-link to="/model-select" class="make">
          <img src="../assets/img/car-makes/alfa-romeo.png"><span>Alfa Romeo</span>
        </router-link>
        <router-link to="/model-select" class="make">
          <img src="../assets/img/car-makes/bmw.png"><span>BMW</span>
        </router-link>
        <router-link to="/model-select" class="make">
          <img src="../assets/img/car-makes/chrysler.png"><span>Chrysler</span>
        </router-link>
        <router-link to="/model-select" class="make">
          <img src="../assets/img/car-makes/dodge.png"><span>Dodge</span>
        </router-link>
        <router-link to="/model-select" class="make">
          <img src="../assets/img/car-makes/fiat.png"><span>Fiat</span>
        </router-link>
        <router-link to="/model-select" class="make">
          <img src="../assets/img/car-makes/ford.png"><span>Ford</span>
        </router-link>
        <router-link to="/model-select" class="make">
          <img src="../assets/img/car-makes/honda.png"><span>Honda</span>
        </router-link>
        <router-link to="/model-select" class="make">
          <img src="../assets/img/car-makes/hyundai.png"><span>Hyundai</span>
        </router-link>
        <router-link to="/model-select" class="make">
          <img src="../assets/img/car-makes/mazda.png"><span>Mazda</span>
        </router-link>
        <router-link to="/model-select" class="make">
          <img src="../assets/img/car-makes/nissan.png"><span>Nissan</span>
        </router-link>
        <router-link to="/model-select" class="make">
          <img src="../assets/img/car-makes/opel.png"><span>Opel</span>
        </router-link>
        <router-link to="/model-select" class="make">
          <img src="../assets/img/car-makes/peugeot.png"><span>Peugeot</span>
        </router-link>
        <router-link to="/model-select" class="make">
          <img src="../assets/img/car-makes/renault.png"><span>Renault</span>
        </router-link>
        <router-link to="/model-select" class="make">
          <img src="../assets/img/car-makes/seat.png"><span>Seat</span>
        </router-link>
        <router-link to="/model-select" class="make">
          <img src="../assets/img/car-makes/skoda.png"><span>Škoda</span>
        </router-link>
        <router-link to="/model-select" class="make">
          <img src="../assets/img/car-makes/suzuki.png"><span>Suzuki</span>
        </router-link>
        <router-link to="/model-select" class="make">
          <img src="../assets/img/car-makes/toyota.png"><span>Toyota</span>
        </router-link>
        <router-link to="/model-select" class="make">
          <img src="../assets/img/car-makes/volkswagen.png"><span>Volkswagen</span>
        </router-link>

        <div class="selection">
          <select name="make--selection">
            <option value="Visi gamintojai" disabled selected>Visi gamintojai</option>
            <option value="Alfa Romeo">Alfa Romeo</option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Citroen">Citroen</option>
            <option value="Dacia">Dacia</option>
          </select>
        </div>
      </div>
      <div class="fast--search">
        <h4>GREITOJI DALIŲ PAIEŠKA</h4>
        <div class="fast--search--select">
          <select name="make--selection">
            <option value="Markė" disabled selected>Markė</option>
            <option value="Alfa Romeo">Alfa Romeo</option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Citroen">Citroen</option>
            <option value="Dacia">Dacia</option>
          </select>
        </div>
        <div class="fast--search--select">
          <select name="make--selection">
            <option value="Markė" disabled selected>Modelis</option>
            <option value="Avensis">Avensis</option>
            <option value="Camry">Camry</option>
            <option value="Celica">Celica</option>
            <option value="Corolla">Corolla</option>
            <option value="Prius">Prius</option>
          </select>
        </div>
        <div class="fast--search--select">
          <select name="make--selection">
            <option value="Markė" disabled selected>Metai nuo</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
          </select>
        </div>
        <div class="fast--search--select">
          <select name="make--selection">
            <option value="Markė" disabled selected>Metai iki</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
          </select>
        </div>
        <div class="fast--search--select">
          <select name="make--selection">
            <option value="Markė" disabled selected>Detalė</option>
            <option value="ABS blokas">ABS blokas</option>
            <option value="ABS daviklis">ABS daviklis</option>
            <option value="Alkūninio veleno skriemulys">Alkūninio veleno skriemulys</option>
            <option value="Armotizatorius">Armotizatorius</option>
            <option value="Antena">Antena</option>
          </select>
        </div>
        <div class="fast--search--select">
          <select name="make--selection">
            <option value="Markė" disabled selected>Spalva</option>
            <option value="Juoda">Juoda</option>
            <option value="Balta">Balta</option>
            <option value="Geltona">Geltona</option>
            <option value="Raudona">Raudona</option>
            <option value="Žalia">Žalia</option>
          </select>
        </div>
        <div class="fast--search--button--wrapper">
          <router-link to="/search-results" class="search">IEŠKOTI</router-link>
        </div>
      </div>
    </div>
    <Break/>
    <HomeSteps/>
  </div>
</template>

<script>
import Break from '@/components/blocks/Break.vue';
import HomeSteps from '@/components/blocks/HomeSteps.vue';

export default {
  name: "Home",
  components: {
    Break,
    HomeSteps
  }
}
</script>


<style lang="scss" scoped>
.container {
  padding-top: 100px;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    padding-top: 30px;
  }
}

.search--block {
  padding-bottom: 50px;

  &::after {
    content: '';
    clear: both;
    display: block;
  }
}

.make--select {
  width: 60%;
  float: left;

  .make {
    width: 16%;
    display: inline-block;
    text-align: center;
    padding: 15px 20px;
    transform: scale(1);
    transition: .3s transform;

    img {
      width: 100%;
      padding: 0 5px;
    }

    span {
      text-transform: uppercase;
      display: block;
      font-size: 10.5px;
      font-weight: bold;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
  .selection {
    text-align: center;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;

    .make {
      width: 20%;
    }
  }
  @media (max-width: 480px) {
    .make {
      width: 33%;
    }
  }
}

select {
  border: none;
  padding: 15px 25px;
  background-color: #f4f5fa;
  max-width: 250px;
  width: 100%;
  cursor: pointer;
  -moz-appearance:none; /* Firefox */
  -webkit-appearance:none; /* Safari and Chrome */
  appearance:none;
  background-image: url("../assets/img/icons/down-arrow.svg");
  background-size: 20px;
  background-position: 92% 50%;
  background-repeat: no-repeat;
  font-family: 'Montserrat', sans-serif;
  -webkit-box-shadow: 0px 0px 0px -2px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 0px 0px -2px rgba(0,0,0,0.15);
  box-shadow: 0px 0px 0px -2px rgba(0,0,0,0.15);
  transition: .3s box-shadow;
  
  &:hover {
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.07);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.07);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.07);
  }
}

.fast--search {
  float: left;
  width: 40%;

  h4 {
    text-align: center;
    padding-bottom: 30px;
  }

  .fast--search--select {
    width: 50%;
    float: left;
    padding-bottom: 25px;

    &:nth-child(even) {
      padding-right: 20px;
    }
    &:nth-child(odd) {
      padding-left: 20px;
    }
  }
  .fast--search--button--wrapper {
    text-align: center;

    .search {
      background-color: #fa4e46;
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
      display: inline-block;

      &:hover {
        background-color: #fa6a63;
      }
    }
  }

  @media (max-width: 768px) {
    width: 95%;
    margin-left: 2.5%;
    padding-top: 50px;
  }
}
</style>


