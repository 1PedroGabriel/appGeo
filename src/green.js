export default function Green(directions, points, modules){


    /*That code is based on the Green theorem  ( https://en.wikipedia.org/wiki/Green%27s_theorem )
      When the functions are just lines (y = ax + b) whe get the formula 
      area += ( points[i][1] * directions[i][0] + 2 * points[i][0] * directions[i][1] ) * modules[i] + 3 * directions[i][0] * directions[i][1] * (modules[i] ** 2); */
    let area = 0;
    for(let i=0; i<modules.length; i++){
  
      area += ( points[i][1] * directions[i][0] + 2 * points[i][0] * directions[i][1] ) * modules[i] + 3 * directions[i][0] * directions[i][1] * (modules[i] ** 2); 
  
    }
  
    return area;
  
  }
  