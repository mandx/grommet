// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var __path__ = '../../src/js/components/icons/Search';

var ReactTestUtils = require('../../mocks/ReactTestUtils');

describe('Grommet Search', function() {
  it('loads an search icon', function() {
    require('react/addons');
    var Component = ReactTestUtils.getComponent(__path__);

    ReactTestUtils.componentShouldExist(Component, 'control-icon-search');
  });

  it('loads a custom search icon', function() {
    require('react/addons');
    var Component = ReactTestUtils.getComponent(__path__, null, { className: 'testing' });

    ReactTestUtils.componentShouldExist(Component, 'testing');
  });
});
