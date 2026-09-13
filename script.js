// ============================================
// CAMBIAR EL CAMPO SEGÚN LA RECETA
// ============================================

function actualizarCampo() {

    const receta = document.getElementById("receta").value;

    const label = document.getElementById("labelPeso");

    const input = document.getElementById("pesoBase");


    // ----------------------------------------
    // MUTABAL
    // ----------------------------------------

    if (receta === "mutabal") {

        label.textContent = "Peso de la berenjena:";

        input.placeholder = "Ej: 995";

    }


    // ----------------------------------------
    // HUMMUS
    // ----------------------------------------

    else if (receta === "hummus") {

        label.textContent = "Peso de los garbanzos cocidos:";

        input.placeholder = "Ej: 775";

    }


    // ----------------------------------------
    // TABULÉ
    // ----------------------------------------

    else if (receta === "tabule") {

        label.textContent = "Cantidad de porciones:";

        input.placeholder = "Ej: 6";

    }


    // ----------------------------------------
    // NIÑO ENVUELTO
    // ----------------------------------------

    else if (receta === "nino") {

        label.textContent = "Peso de la carne:";

        input.placeholder = "Ej: 1000";

    }


    // Limpiar el campo al cambiar de receta

    input.value = "";

    document.getElementById("resultado").innerHTML = "";
}



// ============================================
// CALCULAR
// ============================================

function calcular() {

    const receta = document.getElementById("receta").value;

    const valor = parseFloat(
        document.getElementById("pesoBase").value
    );


    if (!valor || valor <= 0) {

        alert("Ingresá un valor válido.");

        return;
    }


    let r = {};



    // ========================================
    // HUMMUS
    //
    // BASE:
    // 775 g de garbanzos
    // ========================================

    if (receta === "hummus") {

        r["Tahine"] =
            Math.floor(valor * (185 / 775));

        r["Jugo de limón"] =
            Math.floor(valor * (90 / 775));

        r["Aceite de oliva"] =
            Math.floor(valor * (80 / 775));

        r["Ajo"] =
            Math.floor(valor * (15 / 775));

        r["Sal"] =
            Math.floor(valor * (15 / 775));

        r["caldo"] =
            Math.floor(valor * (100 / 775));
    }



    // ========================================
    // MUTABAL
    //
    // BASE:
    // 995 g de berenjena
    // ========================================

    else if (receta === "mutabal") {

        r["Tahine"] =
            Math.floor(valor * (220 / 995));

        r["Jugo de limón"] =
            Math.floor(valor * (115 / 995));

        r["Aceite de oliva"] =
            Math.floor(valor * (90 / 995));

        r["Ajo"] =
            Math.floor(valor * (15 / 995));

        r["Sal"] =
            Math.floor(valor * (17 / 995));

        r["Yogur"] =
            Math.floor(valor * (70 / 995));
    }



    // ========================================
    // TABULÉ
    //
    // RECETA BASE:
    // 6 PORCIONES
    // ========================================

    else if (receta === "tabule") {

        const porciones = valor;

        // Factor de multiplicación
        // La receta base es para 6

        const factor = porciones / 6;


        r["Perejil"] =
            Math.round(240 * factor);

        r["Menta fresca"] =
            Math.round(30 * factor);

        r["Tomate"] =
            Math.round(180 * factor);

        r["verdeo"] =
            Math.round(75 * factor);

        r["Trigo burgol fino hidratado"] =
            Math.round(45 * factor);

        r["Jugo de limón"] =
            Math.round(90 * factor);

        r["Aceite de oliva"] =
            Math.round(54 * factor);

        r["Sal"] =
            Math.round(3 * factor);
    }



    // ========================================
    // NIÑO ENVUELTO
    // ========================================

    else if (receta === "nino") {

        alert(
            "La receta de Niño envuelto todavía no tiene una fórmula cargada."
        );

        return;
    }



    // ========================================
    // MOSTRAR RESULTADOS
    // ========================================

    let html = "<h3>Ingredientes calculados</h3>";


    for (let ingrediente in r) {

        html += `
            <div class="ingrediente">

                <span>
                    ${ingrediente}
                </span>

                <span class="cantidad">
                    ${r[ingrediente]} g
                </span>

            </div>
        `;
    }


    document.getElementById("resultado").innerHTML = html;
}



// ============================================
// CONFIGURACIÓN INICIAL
// ============================================

actualizarCampo();
