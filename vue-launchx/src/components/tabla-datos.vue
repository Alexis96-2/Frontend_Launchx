<template>
    <div class="pedidos">
        <table>
            <tr>
                <th class="digito">ID</th>
                <th class="datos-personal">NOMBRE</th>
                <th class="datos-personal">TELEFONO</th>
                <th class="datos-personal">CORREO</th>
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
                <th class="datos-pastel">DESCRIPCIÓN</th>
                <th class="Btn-Elminar">ACCIÓN</th>
            </tr>
            <tr class="Elaborar-automaticamente" v-for="(pedido, index) in $store.getters.pedidos" :key="pedido.id">
                <td>
                    {{pedido.id}}
                </td>
                <td>
                    {{pedido.name}}
                </td>
                <td>
                    {{pedido.telefono}}
                </td>
                <td>
                    {{pedido.correo}}
                </td>
                <td>
                    <table>
                        <tr>
                            <td>
                                {{pedido.pasteles[0]}}
                            </td>
                            <td>
                                {{pedido.pasteles[1]}}
                            </td>
                            <td>
                                {{pedido.pasteles[2]}}
                            </td>
                            <td>
                                {{pedido.pasteles[3]}}
                            </td>
                        </tr>
                    </table>   
                </td>
                <td>
                    <table>
                        <tr>
                            <td>
                                {{pedido.adornos[0]}}
                            </td>
                            <td>
                                {{pedido.adornos[1]}}
                            </td>
                            <td>
                                {{pedido.adornos[2]}}
                            </td>
                            <td>
                                {{pedido.adornos[3]}}
                            </td>
                        </tr>
                    </table> 
                </td>
                <td>
                    {{pedido.description}}
                </td>
                <td>
                    <button :id="'pedido'+pedido.id" @click="$store.dispatch('eliminarPedidio', index)">-</button>
                </td>
            </tr>
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
}
table{
    margin: 10px;
    width: 90%;
}
tr{
    margin-top: 5px;
}
.digito{
    width: 5%;
}
.datos-personal{
    width: 7%;
}
.datos-pastel{
    width: 30%;
}
.Btn-Elminar{
    width: 7%;
}

</style>