(function () {
    'use strict';
    var projection = d3.geoMercator()
    // .scale(500)
    // .translate([800, 600]);
    var pathGenerator = d3.geoPath()
        .projection(projection);

    var svg = d3.select('svg');
    d3.json('data/oslo.topojson', (error, data) => {
        if (error) {
            console.error(error);
        } else {
            var features = topojson.feature(data, data.objects['norway-south-provinces']);
            console.log(features)
            projection.fitSize([1600, 800], features);
            console.log(projection.scale())
            console.log(projection.translate())
            svg.selectAll('path')
                .data(features.features)
                .enter()
                .append('path')
                // .attr('class', d => d.properties.type)
                .attr('d', d => pathGenerator(d))
                .on('mouseenter', function (d) {
                    // console.log(d.properties);
                    d3.select(this)
                        .style('fill', 'red');
                })
                .on('mouseleave', function (d) {
                    d3.select(this)
                        .style('fill', '');
                });
            d3.json('data/oslo-places.json', (error, points) => {
                svg.selectAll('.point')
                    .data(points.features)
                    .enter()
                    .append('path')
                    .attr('d', d => pathGenerator(d));
            })
        }

    })

} ());