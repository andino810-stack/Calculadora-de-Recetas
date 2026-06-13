function calcular() {
    let receta = document.getElementById("receta").value;
    let peso = parseFloat(document.getElementById("pesoBase").value);

    if (!peso || peso <= 0) {
        alert("Ingresá un peso válido.");
        return;
    }

    let r = {};

    if (receta === "hummus") {
        // Basado en 775 g → tus proporciones exactas
        r.tahine = Math.floor(peso * (185/775));
        r.limon = Math.floor(peso * (90/775));
        r.aceite = Math.floor(peso * (80/775));
        r.ajo = Math.floor(peso * (15/775));
        r.sal = Math.floor(peso * (15/775));
        r.agua = Math.floor(peso * (100/775));
    }

    if (receta === "mutabal") {
        // Basado en 995 g → tus proporciones exactas
        r.tahine = Math.floor(peso * (220/995));
        r.limon = Math.floor(peso * (115/995));
        r.aceite = Math.floor(peso * (90/995));
        r.ajo = Math.floor(peso * (15/995));
        r.sal = Math.floor(peso * (17/995));
        r.yogur = Math.floor(peso * (70/995));
    }

    let html = "<h3>Ingredientes calculados:</h3>";

    for (let key in r) {
        html += `<p><strong>${capitalizar(key)}:</strong> ${r[key]} g</p>`;
    }

    document.getElementById("resultado").innerHTML = html;
}

function capitalizar(txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1);
}
