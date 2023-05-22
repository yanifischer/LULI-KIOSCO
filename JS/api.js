
        var contenido = document.querySelector('#contenido');

        function traer() {
            // contenido.innerHTML = `<p>dasdas</p>`
            // https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch
            // }) // Arrow Fx: tomamos el dato que recibimos y lo trasformamos. Esta primera promesa, transforma nuestro archivo.
            // fetch('texto.txt') // Fetch hace promesas (then)
            fetch('https://mercados.ambito.com/dolar/%22+tipo+%22/variacion')
            //fetch('https://nolaborables.com.ar/api/v2/feriados/2023') // Fetch devuelve promesas (then)
                // .then(res => {
                //     console.log(res)
                // .then(res => res.text())
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    //console.log(data.motivo)
                    //console.log(data.tipo) // Esto es random, no siempre trae el mismo dato.
                        // contenido.innerHTML = `${data}`
                    contenido.innerHTML = /*html*/
                        `
                        <p>Compra: ${data.compra}</p>
                        <p>Venta: ${data.venta}</p>
                        <p>Fecha/Hora: ${data.fecha}</p>

                        `
                })
        }
    
