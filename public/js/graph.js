window.onload = function() {
    var g = graphlibDot.read(
        'digraph {\n' +
        '   node [rx=6 ry=6 labelStyle="font:300 14px ' + "'Helvetica Neue'" + ', Helvetica"]\n' +
        '   AGCT -> GCTT;\n' +
        '   GCTT -> CTTA;\n' +
        '   AGCT -> GCTA;\n' +
        '   GCTA -> CTAT;\n' +
        '       }'
    );

    var graphLink = d3.select('#graphLink');

    var svg = d3.select('svg');
    var inner = d3.select('svg g');
    var zoom = d3.behavior.zoom().on('zoom', function() {
        inner.attr('transform', 'translate(' + d3.event.translate + ')' +
        'scale(' + d3.event.scale + ')');
    });
    svg.call(zoom);

    //var renderer = new dagreD3.Renderer();
    var render = dagreD3.render();

    if(!g.graph().hasOwnProperty('marginx') &&
        !g.graph().hasOwnProperty('marginy')) {
        g.graph().marginx = 20;
        g.graph().marginy = 29;
    }

    g.graph().transistion = function(selection) {
        return selection.transistion().durration(500);
    };

    //renderer.run(g, svg);
    d3.select('svg g').call(render, g);

/*    var svg = document.querySelector('#graphContainer');
    var bbox = svg.getBBox();
    svg.style.width = bbox.width + 40.0 + 'px';
    svg.style.height = bbox.height + 40.0 + 'px'; */
};
