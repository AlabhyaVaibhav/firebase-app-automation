cytoscape({
  container: document.getElementById('cy'),

  layout: {
    name: 'cose',
    padding: 10
  },

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'shape': 'data(faveShape)',
        'width': 'mapData(weight, 40, 40, 40, 40)',
        'content': 'data(name)',
        'text-valign': 'center',
        'text-outline-width': 1,
        'text-outline-color': 'data(faveColor)',
        'background-color': 'data(faveColor)',
        'color': '#fff'
      })
    .selector(':selected')
      .css({
        'border-width': 3,
        'border-color': '#333'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'opacity': 0.666,
        'width': 'mapData(strength, 70, 100, 2, 6)',
        'target-arrow-shape': 'triangle',
        'source-arrow-shape': 'circle',
        'line-color': 'data(faveColor)',
        'source-arrow-color': 'data(faveColor)',
        'target-arrow-color': 'data(faveColor)'
      })
    .selector('edge.questionable')
      .css({
        'line-style': 'dotted',
        'target-arrow-shape': 'diamond'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
      { data: { id: '1', name: 'Entry', weight: 30, faveColor: '#B2E2f3', faveShape: 'triangle' } },
      { data: { id: '2', name: 'Health', weight: 30, faveColor: '#B2E2f3', faveShape: 'ellipse' } },
      { data: { id: '3', name: 'Cereal', weight: 30, faveColor: '#B2E2f3', faveShape: 'octagon' } },
      { data: { id: '4', name: 'Exit', weight: 30 , faveColor: '#B2E2f3', faveShape: 'rectangle' } }
    ],
    edges: [
      // { data: { source: '1', target: '2', faveColor: '#6FB1FC', strength: 60 } },
      // { data: { source: '2', target: '3', faveColor: '#6FB1FC', strength: 60 } },
      // { data: { source: '3', target: '4', faveColor: '#6FB1FC', strength: 60 } },

      /*{ data: { source: 'g', target: 'e', faveColor: '#EDA1ED', strength: 60 } },
      { data: { source: 'j', target: 'k', faveColor: '#EDA1ED', strength: 60 } },
      { data: { source: 'k', target: 'j', faveColor: '#EDA1ED', strength: 60 } },
      { data: { source: 'j', target: 'g', faveColor: '#EDA1ED', strength: 60 } }
*/
      // { data: { source: 'k', target: 'j', faveColor: '#86B342', strength: 60 } },
      // { data: { source: 'k', target: 'e', faveColor: '#86B342', strength: 60 } },
      // { data: { source: 'k', target: 'g', faveColor: '#86B342', strength: 60 } },

      // { data: { source: 'g', target: 'j', faveColor: '#F5A45D', strength: 60 } }
    ]
  },

  ready: function(){
    window.cy = this;
  }
});