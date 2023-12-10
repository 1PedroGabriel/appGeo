export default function Plane(x0, y0, z0, x, y){

    return z0 - ( x0 / z0 ) * ( x - x0 ) - ( y0 / z0 ) * ( y - y0 );
}