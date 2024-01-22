export default function DefineX0Y0(vectorDirection){

    let array = [[0, 0]];
  
    for(let i=0; i<vectorDirection.length; i++){
      
      let XY = array[array.length - 1];
      let M = vectorModules[i];
      let a = vectorDirection[i];
  
      //Verificar essa matematika
      array = [...ar, [ XY[0] + a[0] * M, XY[1] + a[1] * M] ]
  
    }
  
    return array;
  
  }
  