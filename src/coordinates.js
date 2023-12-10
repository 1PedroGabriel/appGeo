export default function Coordinates(latitude, longitude) {

    const EARTH_RADIUS = 6371000; //in meters;

    const x= EARTH_RADIUS * Math.cos(longitude * Math.PI / 180) * Math.cos(latitude * Math.PI / 180);
    const y= EARTH_RADIUS * Math.cos(longitude * Math.PI / 180) * Math.sin(latitude * Math.PI / 180);
    const z= EARTH_RADIUS * Math.sin(latitude * Math.PI / 180);

    return [x, y, z];
}

