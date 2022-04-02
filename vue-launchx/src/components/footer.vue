<template>
    <div class="footer">
        <hr>
        <div class="contenido">
            <div class="francua">
                <img alt="Vue logo" src="../assets/francua-left.png">
                <img alt="Vue logo" src="../assets/francua-right.png">
            </div>
            <div class="datos">
                <ul>
                    <li>MZ xx LT xx SM xxx</li>
                    <li>Av. ejemplo</li>
                    <li>9:30 am - 5:00 pm</li>
                </ul>
                <ul>
                    <li>(+52) 01 998 xxx xxxx</li>
                    <li>Acerca de nosotros</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
hr{
  margin: 0;
  margin-top: 7px;
  width: 100%;
  background: rgb(205, 15, 15);
  border-color: rgb(205, 15, 15);
  height: 4px;
}
.contenido{
    background: rgb(205, 15, 15); 
    display: flex;
    justify-content: space-between;/* Logra gracias a flex, uno a la izquierda y otro a la derecha*/
    align-items: center;
    flex-wrap: wrap;
}
.francua{
    margin: 30px;
    align-items: center;
}
img{
  width: 150px;
}
.datos {
    margin: 10px;
    color: white;
    display: flex;
    text-align: left;
    margin-top: 20px;
}
.datos li {
    list-style:none
}
</style>