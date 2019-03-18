# Esimerkit

Tämä kansio sisältää suoritettavat versiot tutkielmassa esitetyistä
koodiesimerkeistä.


## Suorittaminen

### Esivaatimukset
Seuraavien työkalujen on oltava asennettuna ja `PATH` ympäristömuuttujassa:
* [Node.js](https://nodejs.org/en/) ja npm
* [Java](https://java.com/en/download/)

npm-pakettiriippuvuuksien on oltava asennettuna komennolla
```bash
npm install
```

### Koodiesimerkin tarkastaminen

#### Google Closure-kääntäjä
Google Closurella tarkastettavaksi tarkoitetut tiedostot on nimetty siten
että tiedostonimi päättyy "_closure.js". Tällaisen tiedoston virheiden
tarkastaminen onnistuu komennolla
```bash
npm run closure -- esimerkin-nimi_closure.js 
```

#### TypeScript
TypeScriptillä tarkastettavaksi tarkoitetut tiedostot on nimetty siten
että tiedostonimi päättyy "_typescript.ts". Tällaisen tiedoston virheiden
tarkastaminen onnistuu komennolla
```bash
npm run ts -- esimerkin-nimi_typescript.ts
```

#### Flow
Flow'lla tarkastettavaksi tarkoitetut tiedostot on nimetty siten
että tiedostonimi päättyy "_flow.js". Tällaisen tiedoston virheiden
tarkastaminen onnistuu komennolla
```bash
npm run flow -- esimerkin-nimi_flow.js 
```