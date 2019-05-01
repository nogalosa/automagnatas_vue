<template>
    <div class="container">
        <div class="login--container">
            <h3>Paskyros slaptažodis</h3>
            <p>Žvaigždute (<font color="red">*</font>) pažymėti laukeliai yra privalomi</p>
            <label>
                Dabartinis slaptažodis*
                <input type="password" name="old-password" placeholder="" required>
            </label>
            <label>
                Naujas slaptažodis*
                <input type="password" name="password" placeholder="" required>
            </label>
            <label>
                Pakartokite naują slaptažodį*
                <input type="password" name="password-repeat" placeholder="" required>
            </label>
            <router-link to="/profile" class="button">Išsaugoti</router-link>
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
    label {
        margin: 15px 0;
        font-size: 14px;
        display: block;
    }
    input {
        // background-color: #eceef3;
        background-color: #f4f5fa;
        font-family: 'Montserrat', sans-serif;
        border: none;
        border-bottom: 1px solid #e5e5e7;
        padding: 10px 15px;
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

