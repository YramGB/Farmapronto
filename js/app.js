let datos = [
    {denominacion:"ACICLOVIR", forma:"TABLETAS",  concetracion:"200MG", presentacion:"25 TABLETAS"},
    {denominacion:"ACICLOVIR", forma:"CREMA",  concetracion:"5%", presentacion:"5G"},
    {denominacion:"ÁCIDO ACETILSALICÍLICO", forma:"TABLETAS",  concetracion:"100MG", presentacion:"30 TABLETAS"},
    {denominacion:"ÁCIDO ACETILSALICÍLICO", forma:"TABLETAS",  concetracion:"300MG", presentacion:"20 TABLETAS SOLUBLES"},
    {denominacion:"ÁCIDO FÓLICO", forma:"TABLETAS",  concetracion:"0.4MG", presentacion:"90 TABLETAS"},
    {denominacion:"ALBENDAZOL", forma:"TABLETAS",  concetracion:"200MG", presentacion:"6 TABLETAS"},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""},
    {denominacion:"", forma:"",  concetracion:"", presentacion:""}
]

let crearTabla = function(lista){
    let stringTabla = "<tr><th>Denominación genérica</th><th>Forma farmacéutica</th><th>Concetracion</th><th>Presentacion</th></tr>";
    for(let medicina of lista){
        let parte1 = "<tr><td>"
        parte1 += medicina.denominacion;
        parte1 += "</td>"
                
        let parte2 = "<td>"
        parte2 += medicina.forma;
        parte2 += "</td>"
        
        let parte3 = "<td>"
        parte3 += medicina.concetracion;
        parte3 += "</td>"

        let parte4 = "<td>"
        parte4 += medicina.presentacion;
        parte4 += "</td></tr>"
                      
        stringTabla = stringTabla + parte1 + parte2 + parte3 + parte4;
    }        
    return stringTabla;
};

document.getElementById("tabla-medicamentos").innerHTML = crearTabla(datos);
crearTabla(datos);

