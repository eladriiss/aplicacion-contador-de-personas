let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
let previousCount = 0;

function increment(){
    count +=  1
    countEl.textContent = count
}

function decrement(){
    if (count > 0) {
        count -= 1;
        countEl.textContent = count;
    }
}
let total= 0

function save(){
    let countStr = count + " / ";
    saveEl.textContent += countStr;
    count = 0;
    }













    function toggleDropdown() {
        var dropdown = document.getElementById("myDropdown");
        dropdown.classList.toggle("show");
    }
    
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    
    function seleccionarDestino() {
        let select = document.getElementById("destinos");
        let selectedOption = select.options[select.selectedIndex];
        let detallesDestino = document.getElementById("detalles-destino");
    
        if (selectedOption.value !== "") {
            document.getElementById("nombre-destino").innerText = selectedOption.text;
            document.getElementById("descripcion-destino").innerText = obtenerDescripcion(selectedOption.value);
            detallesDestino.style.display = "block";
            calcularPrecioTotal();
        } else {
            detallesDestino.style.display = "none";
        }
    }
    
    function obtenerDescripcion(destino) {
        switch (destino) {
            case "madrid":
                return "";
            case "albacete":
                return "";
            case "girona":
                return "";
            case "granada":
                return "";
            case "alicante":
                return "";
            default:
                return "";
        }
    }
    
    function calcularPrecioTotal() {
        let selectCantidad = document.getElementById("cantidad-billetes");
        let cantidad = parseInt(selectCantidad.value);
        let precioUnitario = obtenerPrecioUnitario();
        let precioTotal = cantidad * precioUnitario;
        document.getElementById("precio-total").innerText = "Precio total: " + precioTotal + "€";
    }
    
    function obtenerPrecioUnitario() {
        let select = document.getElementById("destinos");
        let selectedOption = select.options[select.selectedIndex].value;
        
        switch (selectedOption) {
            case "madrid":
                return 200;
            case "albacete":
                return 300;
            case "girona":
                return 350;
            case "granada":
                return 450;
            case "alicante":
                return 500;
            default:
                return 0;
        }
    }
    
    function comprar() {
        let select = document.getElementById("destinos");
        let selectedOption = select.options[select.selectedIndex];
        let cantidadBilletes = document.getElementById("cantidad-billetes").value;
        let precioTotal = document.getElementById("precio-total").innerText;
    
        if (selectedOption.value !== "" && cantidadBilletes !== "") {
            alert("¡Has comprado " + cantidadBilletes + " billetes a " + selectedOption.text + "!\n" + precioTotal);
        } else {
            alert("Por favor, seleccione un destino y la cantidad de boletos antes de comprar.");
        }
    }
