export default function Green(directions, points, modules){

    let area = 0;
    //ao realizar o teorema de green para uma reta tem-se essa formula.
    //Lembrar de realizar testes para que o teorema funcione ( orientação positiva e blablabla).
    for(let i=0; i<modules.length; i++){
  
      area += ( points[i][1] * directions[i][0] + 2 * points[i][0] * directions[i][1] ) * modules[i] + 3 * directions[i][0] * directions[i][1] * (modules[i] ** 2); 
  
    }
  
    return area;
  
  }
  