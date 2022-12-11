let datos = [
    {denominacion:"ACICLOVIR", forma:"TABLETAS",  concetracion:"200MG", presentacion:"25 TABLETAS"},
    {denominacion:"ACICLOVIR", forma:"CREMA",  concetracion:"5%", presentacion:"5G"},
    {denominacion:"ÁCIDO ACETILSALICÍLICO", forma:"TABLETAS",  concetracion:"100MG", presentacion:"30 TABLETAS"},
    {denominacion:"ÁCIDO ACETILSALICÍLICO", forma:"TABLETAS",  concetracion:"300MG", presentacion:"20 TABLETAS SOLUBLES"},
    {denominacion:"ÁCIDO FÓLICO", forma:"TABLETAS",  concetracion:"0.4MG", presentacion:"90 TABLETAS"},
    {denominacion:"ALBENDAZOL", forma:"TABLETAS",  concetracion:"200MG", presentacion:"6 TABLETAS"},
    {denominacion:"ALOPURINOL", forma:"TABLETAS",  concetracion:"300MG", presentacion:"30 TABLETAS"},
    {denominacion:"ALUMINIO/MAGNESIO/DIMETICONA	", forma:"TABLETAS",  concetracion:"-", presentacion:"48 TABLETAS"},
    {denominacion:"AMBROXOL / DEXTROMETORFANO AD", forma:"JARABE",  concetracion:"225/225ML", presentacion:"150ML"},
    {denominacion:"AMBROXOL / DEXTROMETORFANO INF", forma:"JARABE   ",  concetracion:"113/150ML", presentacion:"150ML"},
    {denominacion:"AMBROXOL", forma:"SOLUCIÓN",  concetracion:"300MG", presentacion:"120ML"},
    {denominacion:"AMBROXOL / LORATADINA", forma:"SOLUCIÓN",  concetracion:"100MG/600ML	", presentacion:"120ML"},
    {denominacion:"AMBROXOL / LORATADINA", forma:"TABLETAS",  concetracion:"30MG/5MG", presentacion:"10 TABLETAS"},
    {denominacion:"AMIKACINA", forma:"INYECTABLE",  concetracion:"100MG", presentacion:"1 FRASCO ÁMPULA"},
    {denominacion:"AMIKACINA", forma:"INYECTABLE",  concetracion:"500MG", presentacion:"1 FRASCO ÁMPULA"},
    {denominacion:"AMLODIPINO", forma:"TABLETAS",  concetracion:"5MG", presentacion:"30 TABLETAS"},
    {denominacion:"AMLODIPINO", forma:"TABLETAS",  concetracion:"5MG", presentacion:"10 TABLETAS"},
    {denominacion:"AMOXICILINA", forma:"CÁPSULAS",  concetracion:"500MG", presentacion:"12 CÁPSULAS"},
    {denominacion:"AMOXICILINA", forma:"SUSPENSIÓN",  concetracion:"250MG/5ML", presentacion:"75ML"},
    {denominacion:"AMOXICILINA/ ÁCIDO CLAVULÁNICO", forma:"SUSPENSIÓN",  concetracion:"400MG/57MG/5ML", presentacion:"75ML"},
    {denominacion:"AMOXICILINA/ ÁCIDO CLAVULÁNICO", forma:"SUSPENSIÓN",  concetracion:"125/31.25MG/5ML", presentacion:"60ML"},
    {denominacion:"AMPICILINA", forma:"INYECTABLE",  concetracion:"1G", presentacion:"1 FRASCO ÁMPULA"},
    {denominacion:"AMPICILINA", forma:"SUSPENSIÓN",  concetracion:"250MG/5ML", presentacion:"-"},
    {denominacion:"AMPICILINA", forma:"CÁPSULAS",  concetracion:"500MG", presentacion:"20 CÁPSULAS"},
    {denominacion:"AMPICILINA", forma:"INYECTABLE",  concetracion:"500MG", presentacion:"1 FRASCO ÁMPULA"},
    {denominacion:"ATENOLOL", forma:"TABLETAS",  concetracion:"50MG", presentacion:"30 TABLETAS"},
    {denominacion:"ATORVASTATINA", forma:"TABLETAS",  concetracion:"20MG", presentacion:"10 TABLETAS"},
    {denominacion:"AZITROMICINA	", forma:"TABLETAS",  concetracion:"500MG", presentacion:"3 TABLETAS"},
    {denominacion:"BENCILPENICILINA PROCAINICA Y CRISTALINA", forma:"INYECTABLE",  concetracion:"400000U U.I.", presentacion:"1 FRASCO ÁMPULA"},
    {denominacion:"BENCILPENICILINA PROCAINICA Y CRISTALINA", forma:"INYECTABLE",  concetracion:"800000U U.I.", presentacion:"1 FRASCO ÁMPULA"},
    {denominacion:"BENCILPENICILINA", forma:"INYECTABLE",  concetracion:"1'2 U", presentacion:"1 FRASCO ÁMPULA"},
    {denominacion:"BENCILPENICILINA SODICA", forma:"INYECTABLE",  concetracion:"1000,000 U", presentacion:"1 FRASCO ÁMPULA"},
    {denominacion:"BENZONATATO", forma:"TABLETAS",  concetracion:"100MG", presentacion:"20 PERLAS"},
    {denominacion:"BEZAFIBRATO", forma:"TABLETAS",  concetracion:"200MG", presentacion:"30 TABLETAS"},
    {denominacion:"BUTILHIOSCINA", forma:"TABLETAS",	concetracion:"10MG", presentacion:"10 TABLETAS"},
    {denominacion:"BUTILHIOSCINA",	forma:"INYECTABLE",	concetracion:"20MG/ML",	presentacion:"1 FRASCO ÁMPULA"},
    {denominacion:"CALCIO", forma:"TABLETAS",	concetracion:"500MG", presentacion:"12 TABLETAS EFERVESCENTES"},
    {denominacion:"CLARITROMICINA",	forma:"TABLETAS", concetracion:"500MG",	presentacion:"10 TABLETAS"},
    {denominacion:"CAPTOPRIL",	forma:"TABLETAS", concetracion:"25MG",	presentacion:"30 TABLETAS"},
    {denominacion:"CARBAMAZEPINA",	forma:"TABLETAS", concetracion:"200MG",	presentacion:"20 TABLETAS"},
    {denominacion:"CEFALEXINA",	forma:"TABLETAS", concetracion:"500MG",	presentacion:"20 TABLETAS"},
    {denominacion:"CEFALOTINA",	forma:"INYECTABLE",	concetracion:"1G",	presentacion:"5ML"},
    {denominacion:"CEFOTAXIMA",	forma:"INYECTABLE",	concetracion:"500MG",	presentacion:"2ML"},
    {denominacion:"CEFTAZIDIMA", forma:"INYECTABLE", concetracion:"1G",	presentacion:"3ML"},
    {denominacion:"CEFTRIAXONA", forma:"INYECTABLE", concetracion:"1G",	presentacion:"10ML"},
    {denominacion:"CEFTRIAXONA", forma:"INYECTABLE IV",	concetracion:"1G/3.5ML",	presentacion:"1 FRASCO ÁMPULA"},
    {denominacion:"CEFTRIAXONA", forma:"INYECTABLE IM",	concetracion:"500MG/2ML",	presentacion:"1 FRASCO ÁMPULA"},
    {denominacion:"CEFUROXIMA", forma:"INYECTABLE IM",	concetracion:"750MG",	presentacion:"5ML"},
    {denominacion:"CEFUROXIMA",	forma:"INYECTABLE",	concetracion:"75MG",	presentacion:"60 TABLETAS"},
    {denominacion:"CIPROFLOXACINO",	forma:"TABLETAS", concetracion:"250MG",	presentacion:"12 TABLETAS"},
    {denominacion:"CIPROFLOXACINO",	forma:"TABLETAS", concetracion:"500MG",	presentacion:"12 TABLETAS"},
    {denominacion:"CISAPRIDA",	forma:"TABLETAS", concetracion:"10MG",	presentacion:"30 TABLETAS"},
    {denominacion:"CLINDAMICINA", forma:"TABLETAS",	concetracion:"300MG",	presentacion:"FRASCO ÁMPULA"},
    {denominacion:"CLINDAMICINA", forma:"INYECTABLE", concetracion:"300MG",	presentacion:"16 TABLETAS"},
    {denominacion:"CLINDAMICINA", forma:"TABLETAS",	concetracion:"600MG",	presentacion:"1 FRASCO ÁMPULA"},
    {denominacion:"CLIOQUINOL",	forma:"CREMA", concetracion:"3G/100G",	presentacion:"20G"},
    {denominacion:"CLOPIDROGEL", forma:"TABLETAS", concetracion:"75MG",	presentacion:"28 TABLETAS"},
    {denominacion:"CLORANFENICOL", forma:"SOLUCIÓN", concetracion:"-",	presentacion:"GOTAS 15ML"},
    {denominacion:"CLORFENAMINA", forma:"INYECTABLE", concetracion:"4MG", presentacion:"20 TABLETAS"},
    {denominacion:"CLORFENAMINA COMPUESTA", forma:"TABLETAS", concetracion:"-",	presentacion:"4 TABLETAS"},
    {denominacion:"CLOTRIMAZOL",	forma:"CREMA", concetracion:"2%",	presentacion:"20G"},
    {denominacion:"COLCHICINA",	forma:"TABLETAS", concetracion:"1MG",	presentacion:"20 TABLETAS"},
    {denominacion:"COMPLEJO B",	forma:"TABLETAS", concetracion:"-",	presentacion:"30 TABLETAS"},
    {denominacion:"DEXAMETASONA", forma:"TABLETAS",	concetracion:"0.50MG", presentacion:"30 TABLETAS"},
    {denominacion:"DEXAMETASONA", forma:"TABLETAS",	concetracion:"0.75MG",	presentacion:"30 TABLETAS"},
    {denominacion:"DEXAMETASONA", forma:"INYECTABLE", concetracion:"8MG/2ML", presentacion:"1 FRASCO ÁMPULA"},
    {denominacion:"DICLOFENACO", forma:"GRAGEAS", concetracion:"100MG",	presentacion:"20 GRAGEAS"},
    {denominacion:"DICLOFENACO", forma:"INYECTABLE", concetracion:"75MG/3ML",	presentacion:"3 AMPOLLETAS 3ML"},
    {denominacion:"DICLOFENACO-COMPLEJO B",	forma:"TABLETAS", concetracion:"50/50/50/1MG",	presentacion:"30 TABLETAS"},
    {denominacion:"DICLOXACILINA", forma:"CÁPSULAS", concetracion:"500MG",	presentacion:"20 TABLETAS"},
    {denominacion:"DICLOXACILINA", forma:"INYECTABLE", concetracion:"500MG",	presentacion:"1 AMPOLLETA"},
    {denominacion:"DIFENIDOL", forma:"TABLETAS", concetracion:"25MG",	presentacion:"30 TABLETAS"},
    {denominacion:"DIFENIDOL", forma:"INYECTABLE", concetracion:"40MG/2ML",	presentacion:"2 AMPOLLETAS"},
    {denominacion:"ENALAPRIL", forma:"TABLETAS", concetracion:"10MG", presentacion:"30 TABLETAS"},
    {denominacion:"ERITROMICINA", forma:"TABLETAS",	concetracion:"500MG",	presentacion:"20 TABLETAS"},
    {denominacion:"ESPIRONOLACTONA", forma:"TABLETAS",	concetracion:"25MG",	presentacion:"20 TABLETAS"},
    {denominacion:"FINASTERIDA", forma:"TABLETAS", concetracion:"5MG", presentacion:"30 TABLETAS"},
    {denominacion:"FLUCONAZOL",	forma:"CÁPSULAS", concetracion:"150MG",	presentacion:"1 CÁPSULA"},
    {denominacion:"FLUOXETINA",	forma:"CÁPSULAS", concetracion:"20MG",	presentacion:"14 CÁPSULAS"},
    {denominacion:"FUROSEMIDA",	forma:"INYECTABLE",	concetracion:"20MG/2ML",	presentacion:"5 AMPOLLETAS"},
    {denominacion:"GABAPENTINA", forma:"CÁPSULAS", concetracion:"400MG", presentacion:"115 CÁPSULAS"},
    {denominacion:"GENTAMICINA", forma:"INYECTABLE", concetracion:"160MG/2ML",	presentacion:"1 FRASCO ÁMPULA"},
    {denominacion:"GENTAMICINA", forma:"INYECTABLE", concetracion:"80MG/2ML",	presentacion:"1 FRASCO ÁMPULA"},
    {denominacion:"GLIBENCLAMIDA", forma:"TABLETAS", concetracion:"5MG",	presentacion:"50 TABLETAS"},
    {denominacion:"GLIMEPRIDA",	forma:"TABLETAS", concetracion:"2MG",	presentacion:"15 TABLETAS"},
    {denominacion:"GLIMEPRIDA",	forma:"TABLETAS",concetracion:"4MG",	presentacion:"15 TABLETAS"},
    {denominacion:"KETOCONAZOL", forma:"CREMA",	concetracion:"2%", presentacion:"30G"},
    {denominacion:"KETOCONAZOL",	forma:"TABLETAS",	concetracion:"200MG", presentacion:"10 TABLETAS"},
    {denominacion:"KETOROLACO",	forma:"TABLETAS",	concetracion:"10MG", presentacion:"10 TABLETAS"},
    {denominacion:"KETOROLACO",	forma:"INYECTABLE",	concetracion:"3MG/ML", presentacion:"1X3G"},
    {denominacion:"KETOROLACO",	forma:"TABLETAS",	concetracion:"30MG", presentacion:"6 TABLETAS SUBLINGUALES"},
    {denominacion:"LANSOPRAZOL",    forma:"CÁPSULAS",	concetracion:"30MG", presentacion:"10 CÁPSULAS"},
    {denominacion:"LEVOFLOXACINO",	forma:"TABLETAS",	concetracion:"500MG", presentacion:"7 TABLETAS"},
    {denominacion:"LEVONORGESTREL",	forma:"TABLETAS",	concetracion:"0.75MG", presentacion:"2 TABLETAS"},
    {denominacion:"LEVONORGESTREL / ETINILESTRIADIOL",	forma:"TABLETAS",concetracion:"-", presentacion:"12 TABLETAS"},
    {denominacion:"LIDOCAINA / HIDROCORTISONA",	forma:"UNGÜENTO", concetracion:"-", presentacion:"20G"},
    {denominacion:"LISINOPRIL",	forma:"TABLETAS",	concetracion:"10MG", presentacion:"30 TABLETAS"},
    {denominacion:"LOPERAMIDA",	forma:"COMPRIMIDOS",	concetracion:"2MG", presentacion:"12 COMPRIMIDOS"},
    {denominacion:"LORATADINA",	forma:"TABLETAS",	concetracion:"10MG", presentacion:"10 COMPRIMIDOS"},
    {denominacion:"LOSARTÁN",	forma:"GRAGEAS",	concetracion:"50MG", presentacion:"50 GRAGEAS"},
    {denominacion:"MAGNESIO",   forma:"SUSPENSIÓN",	concetracion:"8.5%", presentacion:"360ML"},
    {denominacion:"MELOXICAM",	forma:"TABLETAS",	concetracion:"15MG", presentacion:"10 TABLETAS"},
    {denominacion:"METAMIZOL",	forma:"TABLETAS",	concetracion:"500MG", presentacion:"10 TABLETAS"},
    {denominacion:"METFORMINA",	forma:"TABLETAS",	concetracion:"500MG", presentacion:"60 TABLETAS"},
    {denominacion:"METFORMINA",	forma:"TABLETAS",	concetracion:"850MG", presentacion:"30 TABLETAS"},
    {denominacion:"METILPREDNISOLONA",	forma:"INYECTABLE",	concetracion:"40MG/ML", presentacion:"FRASCO ÁMPULA"},
    {denominacion:"METOCLOPRAMIDA",	forma:"TABLETAS",	concetracion:"10MG", presentacion:"20 TABLETAS"},
    {denominacion:"METOCLOPRAMIDA",	forma:"SOLUCIÓN",	concetracion:"4MG/ML", presentacion:"GOTAS 20ML"},
    {denominacion:"METOPROLOL",	forma:"TABLETAS",	concetracion:"10MG", presentacion:"20 TABLETAS"},
    {denominacion:"METRONIDAZOL",	forma:"TABLETAS",	concetracion:"500MG", presentacion:"30 TABLETAS"},
    {denominacion:"METRONIDAZOL/DIYODOHIDROXIQUINOLEINA",	forma:"TABLETAS",	concetracion:"400MG/200MG", presentacion:"	30 TABLETAS"},
    {denominacion:"MICONAZOL",	forma:"CREMA",	concetracion:"-", presentacion:"20G"},
    {denominacion:"MONTELUKAST",	forma:"TABLETAS",	concetracion:"5MG", presentacion:"20 TABLETAS"},
    {denominacion:"NAPROXENO",    forma:"TABLETAS",	concetracion:"250MG", presentacion:"30 TABLETAS"},
    {denominacion:"NAPROXENO",	forma:"TABLETAS",	concetracion:"500MG", presentacion:"20 TABLETAS"},
    {denominacion:"NAPROXENO SÓDICO",	forma:"TABLETAS",	concetracion:"550MG", presentacion:"12 TABLETAS"},
    {denominacion:"NAPROXENO",	forma:"SUSPENSIÓN",	concetracion:"-", presentacion:"8", presentacion:"100ML"},
    {denominacion:"NAPROXENO / PARACETAMOL",	forma:"SUSPENSIÓN",	concetracion:"125MG/100MG/5ML", presentacion:"100ML"},
    {denominacion:"NEOMICINA / CAOLÍN / PECTINA",	forma:"TABLETAS",	concetracion:"129MG/280MG/30ML", presentacion:"20 TABLETAS"},
    {denominacion:"NISTATINA PEDIÁTRICO",	forma:"SUSPENSIÓN",	concetracion:"-", presentacion:"24ML"},
    {denominacion:"OLANZAPINA",    forma:"TABLETAS",	concetracion:"10MG", presentacion:"14 TABLETAS"},
    {denominacion:"OMEPRAZOL",	forma:"CÁPSULAS",	concetracion:"20MG", presentacion:"14 CÁPSULAS"},
    {denominacion:"OMEPRAZOL",	forma:"CÁPSULAS",	concetracion:"20MG", presentacion:"7 CÁPSULAS"},
    {denominacion:"OMEPRAZOL",	forma:"CÁPSULAS",	concetracion:"20MG", presentacion:"10 CÁPSULAS"},
    {denominacion:"ORLISTAT",	forma:"TABLETAS", concetracion:"120MG", presentacion:"30 TABLETAS"},
    {denominacion:"ÓXIDO DE ZINC",	forma:"PASTA",	concetracion:"25G/100G", presentacion:"TARRO 30G"},
    {denominacion:"PARACETAMOL",    forma:"SOLUCIÓN",	concetracion:"10G/100ML", presentacion:"GOTAS 30ML"},
    {denominacion:"PARACETAMOL",	forma:"TABLETAS", concetracion:"500MG", presentacion:"10 TABLETAS"},
    {denominacion:"PARACETAMOL",	forma:"TABLETAS",	concetracion:"750MG", presentacion:"20 TABLETAS"},
    {denominacion:"PARACETAMOL / CAFEÍNA",	forma:"TABLETAS",	concetracion:"500MG/50MG", presentacion:"20 TABLETAS"},
    {denominacion:"PARACETAMOL / NAPROXENO",	forma:"TABLETAS",	concetracion:"300MG/275MG", presentacion:"15 TABLETAS"},
    {denominacion:"PENTOXIFILINA",	forma:"TABLETAS",	concetracion:"400MG", presentacion:"30 TABLETAS"},
    {denominacion:"PRAVASTATINA",	forma:"TABLETAS",	concetracion:"20MG", presentacion:"15 TABLETAS"},
    {denominacion:"PRAVASTATINA SÓDICA",	forma:"TABLETAS",	concetracion:"10MG", presentacion:"30 TABLETAS"},
    {denominacion:"PREDNISONA",	forma:"TABLETAS",	concetracion:"5MG", presentacion:"20 TABLETAS"},
    {denominacion:"PREGABALINA",	forma:"TABLETAS",	concetracion:"150MG", presentacion:"28 TABLETAS"},
    {denominacion:"PREGABALINA",	forma:"TABLETAS",	concetracion:"75MG", presentacion:"14 TABLETAS"},
    {denominacion:"PREGABALINA",	forma:"TABLETAS",	concetracion:"75MG", presentacion:"28 TABLETAS"},
    {denominacion:"RANITIDINA ", forma:"GRAGEAS",	concetracion:"150MG", presentacion:"20 GRAGEAS"},
    {denominacion:"RANITIDINA",	forma:"TABLETAS",	concetracion:"300MG", presentacion:"10 TABLETAS"},
    {denominacion:"RANITIDINA",	forma:"INYECTABLE",	concetracion:"50MG/2ML", presentacion:"5 AMPOLLETAS 2ML"},
    {denominacion:"RISPERIDONA",	forma:"TABLETAS",	concetracion:"2MG", presentacion:"40 TABLETAS"},
    {denominacion:"SILDENAFIL",  forma:"TABLETAS",	concetracion:"100MG", presentacion:" 1 TABLETA"},
    {denominacion:"SILDENAFIL",	forma:"TABLETAS",	concetracion:"50MG", presentacion:"1 TABLETA"},
    {denominacion:"SILDENAFIL",	forma:"TABLETAS",	concetracion:"50MG", presentacion:"4 TABLETAS"},
    {denominacion:"SILDENAFIL",	forma:"TABLETAS",	concetracion:"100MG", presentacion:"4 TABLETAS"},
    {denominacion:"SENOSIDOS AB",	forma:"TABLETAS",	concetracion:"187MG	20 TABLETAS"},
    {denominacion:"TELMISARTÁN", forma:"CREMA",	concetracion:"20G", presentacion:"-"},
    {denominacion:"TETRACICLINA",	forma:"TABLETAS",	concetracion:"40MG", presentacion:"30 TABLETAS"},
    {denominacion:"TAMSOLUSINA",	forma:"CÁPSULAS",	concetracion:"0.4MG", presentacion:"20 CÁPSULAS"},
    {denominacion:"TELMISARTÁN",	forma:"TABLETAS",	concetracion:"28MG", presentacion:"30 TABLETAS"},
    {denominacion:"TELMISARTAN/HIDROCLOROTIAZIDA", 	forma:"TABLETAS",	concetracion:"80/12.5MG", presentacion:"14 TABLETAS"},
    {denominacion:"TERBINAFINA",	forma:"CREMA",	concetracion:"-", presentacion:"20G"},
    {denominacion:"TOBRAMICINA/DEXAMETASONA", 	forma:"SOLUCIÓN",	concetracion:"3MG/1ML", presentacion:"GOTAS 5ML"},
    {denominacion:"TRIMETOPRIMA/ SULFAMETOXAZOL",	forma:"SUSPENSIÓN",	concetracion:"40/200MG/5ML", presentacion:"120ML"},
    {denominacion:"TRIMETOPRIMA/ SULFAMETOXAZOL", 	forma:"TABLETAS",	concetracion:"80/400MG", presentacion:"20 TABLETAS"},
    {denominacion:"TRIMETOPRIMA/ SULFAMETOXAZOL", 	forma:"TABLETAS",	concetracion:"800MG/160MG", presentacion:"14 TABLETAS"},
]

let crearTabla = function(lista){
    let stringTabla = "<tr><th>Denominación genérica</th><th>Forma farmacéutica</th><th>Concetracion</th><th>Presentacion</th></tr>";
    for(let medicina of lista){
        let parte1 = "<tr><td class=\"medicina\">"
        parte1 += medicina.denominacion;
        parte1 += "</td>"
                
        let parte2 = "<td class=\"medicina2\">"
        parte2 += medicina.forma;
        parte2 += "</td>"
        
        let parte3 = "<td class=\"medicina3\">"
        parte3 += medicina.concetracion;
        parte3 += "</td>"

        let parte4 = "<td class=\"medicina4\">"
        parte4 += medicina.presentacion;
        parte4 += "</td></tr>"
                      
        stringTabla = stringTabla + parte1 + parte2 + parte3 + parte4;
    }        
    return stringTabla;
};

document.getElementById("tabla-medicamentos").innerHTML = crearTabla(datos);
crearTabla(datos);

document.addEventListener("keyup", e=>{
    if(e.target.matches("#buscador")){
       document.querySelectorAll(".medicina").forEach(elemento =>{
            elemento.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?elemento.classList.remove("filtro")
            :elemento.classList.add("filtro")           
        })
    }
    if(e.target.matches("#buscador")){
        document.querySelectorAll(".medicina2").forEach(elemento2 =>{
             elemento2.textContent.toLowerCase().includes(e.target.value.toLowerCase())
             ?elemento2.classList.remove("filtro2")
             :elemento2.classList.add("filtro2")           
         })
     }
     if(e.target.matches("#buscador")){
        document.querySelectorAll(".medicina3").forEach(elemento3 =>{
             elemento3.textContent.toLowerCase().includes(e.target.value.toLowerCase())
             ?elemento3.classList.remove("filtro3")
             :elemento3.classList.add("filtro3")           
         })
     }
     if(e.target.matches("#buscador")){
        document.querySelectorAll(".medicina4").forEach(elemento4 =>{
             elemento4.textContent.toLowerCase().includes(e.target.value.toLowerCase())
             ?elemento4.classList.remove("filtro4")
             :elemento4.classList.add("filtro4")           
         })
     }
})
