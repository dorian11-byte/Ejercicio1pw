const app = {
    urldatos : "/rsc/data/autos.json",

    cargarFichas : function(){
        const fichas = document.querySelector("#fichas");
        let html = "";

        fetch(this.urldatos)
            .then( response => response.json() )
            .then( autos => {
                for(let auto of autos){
                    html += `
                    <div class="ficha">
                        <img src="/ejercicio1pw/rsc/img/${ auto.foto }" alt="${ auto.foto }">
                        <div class="datos">
                            <h3>${ auto.marca }</h3>
                            <span>${ auto.modelo }</span>
                            <span>${ auto.anio }</span>
                            <br>
                            <small> 
                                ${ auto.motor.desplazamiento },
                                ${ auto.motor.potencia },
                                ${ auto.motor.rendimiento }
                            </small>
                        </div>
                    </div>
                    `;
                }
            }).catch(error => console.error( error ));
    }   
}