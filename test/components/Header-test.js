// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var __path__ = '../../src/js/components/Header';

var ReactTestUtils = require('../mocks/ReactTestUtils');

describe('Grommet Header', function() {
  it('loads a basic Header', function() {
    var React = require('react/addons');
    var Component = ReactTestUtils.getComponent(__path__, <h2>Header</h2>);

    ReactTestUtils.componentShouldExist(Component, 'header', 'Header');
  });

  it('loads a primary Header', function() {
    var React = require('react/addons');
    var Component = ReactTestUtils.getComponent(__path__, <h2>Header Primary</h2>, { primary: true });

    ReactTestUtils.componentShouldExist(Component, 'header--primary', 'Header Primary');
  });

  it('loads a fixed Header', function() {
    var React = require('react/addons');
    var Component = ReactTestUtils.getComponent(__path__, <h2>Header Fixed</h2>, { fixed: true });

    ReactTestUtils.componentShouldExist(Component, 'header--fixed', 'Header Fixed');
  });

  it('loads a large Header', function() {
    var React = require('react/addons');
    var Component = ReactTestUtils.getComponent(__path__, <h2>Header Large</h2>, { large: true });

    ReactTestUtils.componentShouldExist(Component, 'header--large', 'Header Large');
  });

  it('loads a small Header', function() {
    var React = require('react/addons');
    var Component = ReactTestUtils.getComponent(__path__, <h2>Header Small</h2>, { small: true });

    ReactTestUtils.componentShouldExist(Component, 'header--small', 'Header Small');
  });

  it('loads a custom Header', function() {
    var React = require('react/addons');
    var Component = ReactTestUtils.getComponent(__path__, <h2>Header Custom</h2>, { className: 'testing' });

    ReactTestUtils.componentShouldExist(Component, 'testing', 'Header Custom');
  });

  it('loads a colored Header', function() {
    var React = require('react/addons');
    var Component = ReactTestUtils.getComponent(__path__, <h2>Header Colored</h2>, { colorIndex: '1' });

    ReactTestUtils.componentShouldExist(Component, 'background-color-index-1', 'Header Colored');
  });
});
