import React, {Component} from 'react';
import rd3 from 'react-d3-library';
const d3 = window.d3; 
const RD3Component = rd3.Component;

/*
var branches = [];
const seed = {i: 0, x: 420, y: 600, a: 0, l: 130, d:0}; // a = angle, l = length, d = depth
const da = 0.5; // Angle delta
const dl = 0.8; // Length delta (factor)
const ar = 0.65; // Randomness
const maxDepth = 8;



const regenerate=(initialise)=>{
  branches = [];
  branch(seed);
  initialise ? create() : update();
}

const endPt=(b) =>{
  // Return endpoint of branch
  var x = b.x + b.l * Math.sin( b.a );
  var y = b.y - b.l * Math.cos( b.a );
  return {x: x, y: y};
}


// D3 functions
const x1=(d)=> {return d.x;}
const y1=(d)=> {return d.y;}
const x2=(d)=> {return endPt(d).x;}
const y2=(d)=> {return endPt(d).y;}
const highlightParents=(d)=> {
  var colour = d3.event.type === 'mouseover' ? 'green' : '#777';
  var depth = d.d;
  for(var i = 0; i <= depth; i++) {
    d3.select('#id-'+parseInt(d.i)).style('stroke', colour);
    d = branches[d.parent];
  } 
}

const create=()=> {
  d3.select(node).append('svg')
    .attr('height', 650)
    .attr('width', 960)
    .selectAll('line')
    .data(branches)
    .enter()
    .append('line')
    .attr('x1', x1)
    .attr('y1', y1)
    .attr('x2', x2)
    .attr('y2', y2)
    .style('stroke-width', (d)=> {return parseInt(maxDepth + 1 - d.d) + 'px';})
    .attr('id', (d)=> {return 'id-'+d.i;})
    .on('mouseover', highlightParents)
    .on('mouseout', highlightParents);
}

const update=()=> {
  d3.select('svg')
    .selectAll('line')
    .data(branches)
    .transition()
    .attr('x1', x1)
    .attr('y1', y1)
    .attr('x2', x2)
    .attr('y2', y2);
}

regenerate(true);

d3.select(node).select('svg')
  .on('click', regenerate);
*/
//var n = 20, // number of layers
    //  m = 200, // number of samples per layer
    // var width = 960,
     // height = 500;

const createStreamGraphInit=(n, m, width, height)=> {
   
  var streamGraph = document.createElement('div');

 
  var svg = d3.select(streamGraph).append("svg")
      .attr("width", width)
      .attr("height", height);

  var x = d3.scale.linear()
      .domain([0, m - 1])
      .range([0, width]);

  var y = d3.scale.linear()
      .domain([0, d3.max(layers0.concat(layers1), (layer) =>{ return d3.max(layer, (d)=> { return d.y0 + d.y; }); })])
      .range([height, 0]);

  var color = d3.scale.linear()
      .range(["#aad", "#556"]);

  var area = d3.svg.area()
      .x((d)=> { return x(d.x); })
      .y0((d)=>{ return y(d.y0); })
      .y1((d)=> { return y(d.y0 + d.y); });

  

  svg.selectAll("path")
      .data(layers0)
    .enter().append("path")
      .attr("d", area)
      .style("fill", ()=> { return color(Math.random()); });

  // On load function that will trigger the transitions
  svg.on('mount', ()=> {
    transition();
  });

  // This function will be triggered on load
  function transition(){
    d3.selectAll("path")
        .data(function() {
          var d = layers1;
          layers1 = layers0;
          return layers0 = d;
        })
      .transition()
        .duration(2500)
        .attr("d", area);

  }

  

 return streamGraph;
}

const bumpLayer=(n)=> {

    function bump(a) {
      var x = 1 / (.1 + Math.random()),
          y = 2 * Math.random() - .5,
          z = 10 / (.1 + Math.random());
      for (var i = 0; i < n; i++) {
        var w = (i / n - y) * z;
        a[i] += x * Math.exp(-w * w);
      }
    }

    var a = [], i;
    for (i = 0; i < n; ++i) a[i] = 0;
    for (i = 0; i < 5; ++i) bump(a);
    return a.map(function(d, i) { return {x: i, y: Math.max(0, d)}; });
  }
const updateImage=(n, m)=>{
  
      stack = d3.layout.stack().offset("wiggle"),
      layers0 = stack(d3.range(n).map(()=> { return bumpLayer(m); })),
      layers1 = stack(d3.range(n).map(()=> { return bumpLayer(m); }));
}
function addTimer(that) { 
  var g = d3.select('svg').selectAll('g');

  var width = 500,
      height = 500,
      n = 20;

  d3.timer(function(t) {
    g.attr("transform", function(d) {
        return "translate(" + [width / 2, (d + 1) * height / (n + 1)] + 
                ")scale(" + (Math.sin(d / 2 - t / 1000) + 1) / 2 + ",1)";
    });
    //return true if hasTimer has been set to false
   if(that.hasTimer === false) return true;

  });

}

export class Graphic extends Component {
    constructor(props){
        super(props);
        this.state={
            d3:""
        }
        
    }
    componentDidMount() {
        //console.log(createStreamGraph())
        this.setState({d3: createStreamGraph()});
        setInterval(()=>{
            this.setState({
                d3:createStreamGraph()
            });
        }, 7000);
    }
    render(){
        
        return (
        <div>
            <RD3Component data={this.state.d3} />
        </div>
        );
    }
    
}

