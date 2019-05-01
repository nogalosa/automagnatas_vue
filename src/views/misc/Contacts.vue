<template>
    <div class="container">
        <h2>Kontaktai</h2>
        <div class="col">
            <b>Automagnatas, UAB</b><br>
            Mažeikiai, Skuodo g. 18<br>
            automagnatas@gmail.com<br><br>
            <h3>Darbo laikas:</h3>
            <table>
                <tr><td>Pirmadieniais - penktadieniais</td><td>09:00 - 18:00</td></tr>
                <tr><td>Šeštadieniais</td><td>09:00 - 14:00</td></tr>
                <tr><td>Sekmadieniais</td><td>nedirbame</td></tr>
            </table>
            <small>Šventinėmis dienomis nedirbame.</small>
        </div>
        <div class="col">
            <h3>Pardavimų skyrius:</h3>
            <table>
                <tr><td colspan="2"><b>Mažeikiai</b></td></tr>
                <tr><td>Tomas</td><td><a href="tel:+37060819275">+370-608-19275</a></td></tr>
                <tr><td>Rolandas</td><td><a href="tel:+37060819274">+370-608-19274</a></td></tr>
                <tr><td colspan="2"><b>Šiauliai</b></td></tr>
                <tr><td>Ernestas</td><td><a href="tel:+37067167767">+370-671-67767</a></td></tr>
                <tr><td>Saulius</td><td><a href="tel:+37067886854">+370-678-86854</a></td></tr>
                <tr><td colspan="2"><b>Kaunas</b></td></tr>
                <tr><td>Rytis</td><td><a href="tel:+37060391363">+370-603-91363</a></td></tr>
                <tr><td colspan="2"><b>Klaipėda</b></td></tr>
                <tr><td>Remigijus</td><td><a href="tel:+37064513137">+370-645-13137</a></td></tr>
                <tr><td colspan="2"><b>Vilnius</b></td></tr>
                <tr><td>Ernestas</td><td><a href="tel:+37060682808">+370-606-82808</a></td></tr>
            </table>
        </div>
        <div class="clear"></div>
    </div>
</template>

<style scoped lang="scss">
    .container {
        padding: 100px 0;
        min-height: calc(100vh - 591px);
        width: 95%;
    }
    table {
        padding: 10px 0;
    }
    table td {
        padding: 3px 20px;
    }
    .col {
        width: 50%;
        float: left;
        padding: 20px 0;

        @media (max-width: 768px) {
            width: 100%;
        }
    }
    [colspan="2"] {
        padding-left: 10px;
    }
</style>
