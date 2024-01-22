export default function DefineVectorModules(data, initPoint) {

    //Pegar o ponto inicial realizando um ciclo.
    let aux = [...data, initPoint]; 
    let array = [];
  
    for(let i=0; i<aux.length - 1; i++){
          //define os modulos dos vetores do plano          
          const modules = Math.sqrt( ( aux[i + 1][0] - aux[i][0] ) ** 2 + ( aux[i + 1][1] - aux[i][1]) ** 2 + ( aux[i + 1][2] - aux[i][2] ) ** 2 );
          array = [...array, modules];
          
    }
  
    return array;
    
}