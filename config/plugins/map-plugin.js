const mapPlugin = require('eleventy-plugin-googlestaticmaps');
const GOOGLE_MAPS_KEY = 'AIzaSyBGHQ0cRk5wgA6htluHAvRDJcszYeOQPl8';

const staticMap = (mapPlugin, {key: GOOGLE_MAPS_KEY});

module.exports = staticMap;
