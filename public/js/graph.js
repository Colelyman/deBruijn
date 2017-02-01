window.onload = function() {
    $.get('uploads/partial_graph.0.dot', function(res) {
        var dotFile = res;
        loadGraph(dotFile);
    });
};

loadGraph = function(dotFile) {
    var g = graphlibDot.read(dotFile);

    var graphLink = d3.select('#graphLink');

    var svg = d3.select('svg');
    var inner = d3.select('svg g');
    var zoom = d3.behavior.zoom().on('zoom', function() {
        inner.attr('transform', 'translate(' + d3.event.translate + ')' +
        'scale(' + d3.event.scale + ')');
    });
    svg.call(zoom);

    var render = dagreD3.render();

    if(!g.graph().hasOwnProperty('marginx') &&
        !g.graph().hasOwnProperty('marginy')) {
        g.graph().marginx = 20;
        g.graph().marginy = 29;
    }

    g.graph().transistion = function(selection) {
        return selection.transistion().durration(500);
    };

    d3.select('svg g').call(render, g);
};
