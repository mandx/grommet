// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var __path__ = '../../src/js/components/Document';

var ReactTestUtils = require('../mocks/ReactTestUtils');

describe('Grommet Document', function() {
  it('loads a basic Document', function() {
    var React = require('react/addons');
    var Component = ReactTestUtils.getComponent(__path__, <h2>Document</h2>);

    ReactTestUtils.componentShouldExist(Component, 'document', 'Document');
  });

  it('loads a Document with custom header color', function() {
    var React = require('react/addons');
    var Component = ReactTestUtils.getComponent(__path__, <h2>Document with Color 1</h2>, { colorIndex: '1' });

    ReactTestUtils.componentShouldExist(Component, 'header-color-index-1', 'Document with Color 1');
  });
});
