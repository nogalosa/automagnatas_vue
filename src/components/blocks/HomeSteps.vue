<template>
    <div class="home--steps">
        <div class="step">
            <img src="../../assets/img/steps/count-1.png" alt="Step 1"><br>
            Pasirinkite automobilį<br>
            <img src="../../assets/img/steps/step-1.png" alt="Step 1">
        </div>
        <div class="step">
            <img src="../../assets/img/steps/count-2.png" alt="Step 2"><br>
            Pasirinkite detalę<br>
            <img src="../../assets/img/steps/step-2.png" alt="Step 2">
        </div>
        <div class="step">
            <img src="../../assets/img/steps/count-3.png" alt="Step 3"><br>
            Išsirinkite iš sąrašo<br>
            <img src="../../assets/img/steps/step-3.png" alt="Step 3">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .home--steps {
        margin-top: 50px;

        .step {
            float: left;
            width: 33%;
            text-align: center;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 16px;
            line-height: 2;

            img {
                max-width: 100%;
                max-height: 165px;

                &:first-child {
                    max-height: 60px;
                }
            }

            @media (max-width: 480px) {
                width: 100%;
            }
        }

        &:after {
            content: '';
            clear: both;
            display: block;
        }
    }
</style>
