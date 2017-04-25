dataset =[ 
["bulbasaur","https://play.pokemonshowdown.com/sprites/bwani/bulbasaur.gif"],
["ivysaur","https://play.pokemonshowdown.com/sprites/bwani/ivysaur.gif"],
["venusaur","https://play.pokemonshowdown.com/sprites/bwani/venusaur.gif"],
["charmander","https://play.pokemonshowdown.com/sprites/bwani/charmander.gif"],
["charmeleon","https://play.pokemonshowdown.com/sprites/bwani/charmeleon.gif"],
["charizard","https://play.pokemonshowdown.com/sprites/bwani/charizard.gif"],
["squirtle","https://play.pokemonshowdown.com/sprites/bwani/squirtle.gif"],
["wartortle","https://play.pokemonshowdown.com/sprites/bwani/wartortle.gif"],
["blastoise","https://play.pokemonshowdown.com/sprites/bwani/blastoise.gif"]
]

var w = 1000; //w of svg
var h = 1000; //h of svg
var svg = d3.select('body') //make new svg 'canvas'
  .append('svg')
  .attr('width',w)
  .attr('height',h);

var grid = {rows: 3, cols: 3}; //dim of array of pokemon.(only cols matters)
var max = { x: 50, y: 50}; //size of pokemon images

// define background patterns
// identified by id=PokemonName
svg.selectAll('defs')
  .data(dataset)
  .enter()
  .append('defs')
    .append("pattern")
    .attr("id", function(d){
  return d[0];
}).attr('patternUnits', 'userSpaceOnUse')
    .attr("width", max.x)
    .attr("height", max.y)
    .append("image")
    .attr("xlink:href", function(d){
  return d[1]
})
    .attr("width", max.x)
    .attr("height", max.y);

//add rectangles that contain pokemon image
svg.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr("x", function(d,i){
  return (i% grid.cols)*max.x;
}).attr("y", function(d,i){
  return Math.floor(i/(grid.cols))*max.y;
}).attr("width", max.x)
  .attr("height", max.y)
  .attr("fill", function(d){
 return "url(#" + d[0]+ ")"; 
})