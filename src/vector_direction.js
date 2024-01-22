export default function DefineVectorDirection(data, initPoint) {

    //Pegar o ponto inicial realizando um ciclo.
    let aux = [...data, initPoint];
    let array = [];
  
    for(let i=0; i<aux.length - 1; i++){
  
      //Definição do vetor (Ponto B   - Ponto A);
      const XYVector = [aux[i + 1][0] - aux[i][0], aux[i+1][1] - aux[i][1]]
      const Module = Math.sqrt( XYVector[0] ** 2 + XYVector[1] ** 2);
      //Definindo o Versor (apenas a direção)
      XYVector[0] = XYVector[0] / Module;
      XYVector[1] = XYVector[1] / Module;
      array = [...array, [XYVector[0], XYVector[1]]]
      console.log(Module);
      
    }
  
    return array;
  
  }
  