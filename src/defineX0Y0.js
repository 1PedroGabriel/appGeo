export default function DefineX0Y0(vectorDirection){

    /*Define the new points (x, y) in the new plane, those points are setted in sequence, first we have the point
    zero [0, 0], the next point is defined taking the direction and the modules of the pre-determined vectors,
    so the point Xn+1 = Xn +  Mn * axn , Yn+1 = Yn + Mn * ayn*/
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
  