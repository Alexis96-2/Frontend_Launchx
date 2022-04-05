<template>
    <div class="pedidos">
        <table class="pedidos-tabla">
            <caption><h2>PEDIDOS</h2></caption>
         <thead><tr>
                <th class="digito">ID</th>
                <th class="datos-personal-celda">NOMBRE</th>
                <th class="datos-personal-celda">TELEFONO</th>
                <th class="datos-personal-celda">CORREO</th>
                <th><table>
                        <tr>
                            <th class="digito">
                                Chocolate
                            </th>
                            <th class="digito">
                                Coco
                            </th>
                            <th class="digito">
                                Leche
                            </th>
                            <th class="digito">
                                Queso
                            </th>
                        </tr>
                    </table>
                </th>
                <th><table>
                        <tr>
                            <th class="digito">
                                Flores
                            </th>
                            <th class="digito">
                                Paredes
                            </th>
                            <th class="digito">
                                Perlas
                            </th>
                            <th class="digito">
                                Imagen
                            </th>
                        </tr>
                    </table>
                </th>
                <th class="datos-pastel-celda">DESCRIPCIÓN</th>
                <th class="Btn-celda">ACCIÓN</th>
            </tr></thead>
            
            <tbody>
                <tr class="Elaborar-automaticamente" v-for="(pedido, index) in $store.getters.pedidos" :key="pedido.id">
                <td class="digito-data">
                    {{pedido.id}}
                </td>
                <td class="datos-personal">
                    {{pedido.name}}
                </td>
                <td class="datos-personal">
                    {{pedido.telefono}}
                </td>
                <td class="datos-personal">
                    {{pedido.correo}}
                </td>
                <td>
                    <table>
                        <tr>
                            <td class="digito-data" v-for="(saborisante) in pedido.pasteles" :key="saborisante">
                                {{saborisante}}
                            </td>
                            <!----<td>
                                {{pedido.pasteles[1]}}
                            </td>
                            <td>
                                {{pedido.pasteles[2]}}
                            </td>
                            <td>
                                {{pedido.pasteles[3]}}
                            </td>--->
                        </tr>
                    </table>   
                </td>
                <td>
                    <table>
                        <tr>
                            <td class="digito-data" v-for="(adornar) in pedido.adornos" :key="adornar">
                                {{adornar}}
                            </td>
                            <!---<td>
                                {{pedido.adornos[1]}}
                            </td>
                            <td>
                                {{pedido.adornos[2]}}
                            </td>
                            <td>
                                {{pedido.adornos[3]}}
                            </td>--->
                        </tr>
                    </table> 
                </td>
                <td class="datos-pastel">
                    {{pedido.description}}
                </td>
                <td>
                    <button class="Btn-Aceptar" :id="'pedidoAceptar'+pedido.id" @click="$store.dispatch('aceptarPedidio', index)">+</button>
                    <button class="Btn-Elminar" :id="'pedidoEliminar'+pedido.id" @click="$store.dispatch('eliminarPedidio', index)">-</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.pedidos{
    width: 100%;
    display: flex;
    justify-content: center;/* Logra gracias a flex, uno a la izquierda y otro a la derecha*/
    align-items: center;
    flex-wrap: wrap;
}
table{
    margin: 10px;
    width: 90%;
    border-collapse: collapse;
}
.pedidos-tabla{
    margin: 10px;
    width: 90%;
}
thead{
    color:rgb(227, 227, 227);
    background: rgb(48, 48, 48);
}
caption {
    background: rgb(204, 204, 204);
}
tbody{
    color:rgb(48, 48, 48);
    background: rgb(227, 227, 227);
}
tr{
    margin-top: 5px;
}
.Elaborar-automaticamente{
    border-bottom: 1px solid rgb(48, 48, 48);
}
th, td{
    margin: 0;
}
.digito{
    width: 5%;
}
.datos-personal-celda{
    width: 7%;
}
.datos-pastel-celda{
    width: 30%;
}
.datos-personal{
    text-align: left;
}
.datos-pastel{
    text-align: left;
}
.Btn-celda{
    width: 7%;
}
.Btn-Elminar{
    color: gainsboro;
    width: 50%;
    border-color: #851111;
    background: #e50d0d;
}
.Btn-Aceptar{
    color: gainsboro;
    width: 50%;
    border-color: #075a15;
    background: #0beb30;
}
</style>