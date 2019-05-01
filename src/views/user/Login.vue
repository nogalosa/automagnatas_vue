<template>
    <div class="container">
        <div class="login--container">
            <h3>Prisijunkite</h3>
            <p>Kad galėtumėte matyti savo užsakymus bei valdyti juos, prisijunkite. Jei neturite dar paskyros - <router-link to="register">užsiregistruokite</router-link>.</p>
            <input type="email" name="email" placeholder="El. pašto adresas" required>
            <input type="password" name="password" placeholder="Slaptažodis" required>
            <!-- TODO: recapcha -->
            <router-link to="/profile" class="button">Prisijungti</router-link>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .container {
        padding: 100px 0;
        min-height: calc(100vh - 591px);
        width: 95%;
    }

    .login--container {
        background-color: #f4f5fa;
        padding: 30px;
        margin: auto;
        width: 95%;
        max-width: 400px;
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
    input {
        // background-color: #eceef3;
        background-color: #f4f5fa;
        font-family: 'Montserrat', sans-serif;
        border: none;
        border-bottom: 1px solid #e5e5e7;
        padding: 10px 15px;
        margin: 3px 0;
        width: 100%;
        font-size: 14px;
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
</style>

