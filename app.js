const m00 = document.getElementById("m00");
const m01 = document.getElementById("m01");
const m10 = document.getElementById("m10");
const m11 = document.getElementById("m11");

const txtMensaje = document.getElementById("txtMensaje");
const cajaResultado = document.getElementById("cajaResultado");
const logText = document.getElementById("logText");
const statusBadge = document.getElementById("status-badge");

const procesarJava = (tipoAccion) => {
    const a = parseInt(m00.value) || 0;
    const b = parseInt(m01.value) || 0;
    const c = parseInt(m10.value) || 0;
    const d = parseInt(m11.value) || 0;
    const textoCrudo = txtMensaje.value.trim();

    if (!textoCrudo) {
        mostrarError("Escribe un mensaje para continuar.");
        return;
    }

    logText.innerHTML = `Validando matriz...<br/>`;
    
    const estatusAprobacion = validarMatriz(a, b, c, d);
    if (estatusAprobacion !== "Todo esta bien mi vale (att: carlos guerrero)") {
        mostrarError(`Llave Defectuosa: ${estatusAprobacion}`);
        return;
    }

    try {
        logText.innerHTML += `Ejecutando algoritmo de ${tipoAccion}...<br/>`;
        
        let stringRespuesta = tipoAccion === "cifrar" 
            ? cifrarMensaje(textoCrudo, a, b, c, d) 
            : descifrarMensaje(textoCrudo, a, b, c, d);
        
        cajaResultado.innerHTML = `<span style="color: #60a5fa">${stringRespuesta}</span>`;
        statusBadge.innerHTML = `Proceso Exitoso`;
        statusBadge.style.color = '#4ade80';
        logText.innerHTML += `[Finalizado]`;
        
    } catch(err) {
        mostrarError("Error del sistema: " + err.message);
    }
};

const mostrarError = (mensaje) => {
    statusBadge.innerHTML = "Error";
    statusBadge.style.color = '#ef4444';
    cajaResultado.innerHTML = `<span style="color: #ef4444; font-size: 0.9rem">${mensaje}</span>`;
    logText.innerHTML += `Se detuvo el procesamiento.<br/>`;
};
