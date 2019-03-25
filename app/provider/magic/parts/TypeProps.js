'use strict';

var typeEntryFactory = require('./implementation/Type'),
    is = require('bpmn-js/lib/util/ModelUtil').is;

module.exports = function (group, element, translate) {

    if (is(element, 'bpmn:Task')) {

        var options;
        // if (is(element, 'bpmn:task')) {
        options = { modelProperty: 'text' };
        // }

        // name
        group.entries = group.entries.concat(typeEntryFactory(element, options, translate));

    }

};
