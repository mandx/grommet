// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var __path__ = '../../src/js/actions/IndexActions';

var rewire = require('rewire');
var expect = require('expect');
var should = require('should');

describe('Grommet IndexActions', function() {
  describe('Setup', function() {
    it('shows setup as TBD', function(done) {

      var IndexActions = require(__path__);
      var Reflux = require('reflux');

      Reflux.createStore({
        listenables: IndexActions,
        onSetupCompleted: function() {
          should.fail('Expected the setup to fail.');
        },
        onSetupFailed: function(err) {
          expect(err).toBe('TBD');
          done();
        }
      });

      IndexActions.setup();
    });
  });

  describe('GetItems', function() {
    it('gets an item set from index', function(done) {

      var IndexActions = rewire(__path__);
      IndexActions.__set__('Rest', {
        get: function () {
          return {
            end: function (callback) {
              callback(undefined, { ok: true, body: {
                total: 10,
                unfilteredTotal: 100,
                start: 0,
                count: 10,
                items: [{ id: '1', value: 'Fake 1'}, { id: '2', value: 'Fake 2'}]
              }});
            }
          };
        }
      });
      var Reflux = require('reflux');

      Reflux.createStore({
        listenables: IndexActions,
        onGetItemsCompleted: function(data, params) {
          expect(data).toExist();
          expect(params).toNotExist();
          done();
        },
        onGetItemsFailed: function() {
          should.fail('Expected the getItems to succeed.');
        }
      });

      IndexActions.getItems();
    });

    it('gets an item set from index with query param', function(done) {

      var IndexActions = rewire(__path__);
      IndexActions.__set__('Rest', {
        get: function () {
          return {
            end: function (callback) {
              callback(undefined, { ok: true, body: {
                total: 10,
                unfilteredTotal: 100,
                start: 0,
                count: 10,
                items: [{ id: '1', value: 'Fake 1'}, { id: '2', value: 'Fake 2'}]
              }});
            }
          };
        }
      });
      var Reflux = require('reflux');

      Reflux.createStore({
        listenables: IndexActions,
        onGetItemsCompleted: function(data, params) {
          expect(data).toExist();
          expect(params.query.fullText).toBe('Filter Me');
          done();
        },
        onGetItemsFailed: function() {
          should.fail('Expected the getItems to succeed.');
        }
      });

      IndexActions.getItems({
        query: {
          fullText: 'Filter Me'
        }
      });
    });

    it('logout if bad request is sent to getItems', function(done) {
      var IndexActions = rewire(__path__);
      var logout = false;
      IndexActions.__set__('Actions', {
        logout: function() {
          logout = true;
        }
      });
      IndexActions.__set__('Rest', {
        get: function () {
          return {
            end: function (callback) {
              callback(undefined, { status: 400 });
            }
          };
        }
      });

      IndexActions.getItems();

      setTimeout(function() {
        expect(logout).toBe(true);
        done();
      }, 10);
    });

    it('handle failing scenarios from the backend', function(done) {
      var IndexActions = rewire(__path__);
      IndexActions.__set__('Rest', {
        get: function () {
          return {
            end: function (callback) {
              callback(410, { ok: false, body: { message: 'An expected error occured.' }});
            }
          };
        }
      });

      var Reflux = require('reflux');

      Reflux.createStore({
        listenables: IndexActions,
        onGetItemsCompleted: function() {
          should.fail('Expected the getItems action to fail.');
        },
        onGetItemsFailed: function(err, response) {
          expect(err).toBe(410);
          expect(response.message).toBe('An expected error occured.');
          done();
        }
      });

      IndexActions.getItems();
    });
  });

  describe('getAggregate', function() {
    it('gets an item set from index aggregate', function(done) {

      var IndexActions = rewire(__path__);
      IndexActions.__set__('Rest', {
        get: function () {
          return {
            end: function (callback) {
              callback(undefined, { ok: true, body: {
                total: 10,
                unfilteredTotal: 100,
                start: 0,
                count: 10,
                items: [{ id: '1', value: 'Fake 1'}, { id: '2', value: 'Fake 2'}]
              }});
            }
          };
        }
      });
      var Reflux = require('reflux');

      Reflux.createStore({
        listenables: IndexActions,
        onGetAggregateCompleted: function(data, params) {
          expect(data).toExist();
          expect(params).toNotExist();
          done();
        },
        onGetAggregateFailed: function() {
          should.fail('Expected the getItems to succeed.');
        }
      });

      IndexActions.getAggregate();
    });

    it('gets an item set from index aggregate with query param', function(done) {

      var IndexActions = rewire(__path__);
      IndexActions.__set__('Rest', {
        get: function () {
          return {
            end: function (callback) {
              callback(undefined, { ok: true, body: {
                total: 10,
                unfilteredTotal: 100,
                start: 0,
                count: 10,
                items: [{ id: '1', value: 'Fake 1'}, { id: '2', value: 'Fake 2'}]
              }});
            }
          };
        }
      });
      var Reflux = require('reflux');

      Reflux.createStore({
        listenables: IndexActions,
        onGetAggregateCompleted: function(data, params) {
          expect(data).toExist();
          expect(params.query.fullText).toBe('Filter Me');
          done();
        },
        onGetAggregateFailed: function() {
          should.fail('Expected the getItems to succeed.');
        }
      });

      IndexActions.getAggregate({
        query: {
          fullText: 'Filter Me'
        }
      });
    });

    it('logout if bad request is sent to getAggregate', function(done) {
      var IndexActions = rewire(__path__);
      var logout = false;
      IndexActions.__set__('Actions', {
        logout: function() {
          logout = true;
        }
      });
      IndexActions.__set__('Rest', {
        get: function () {
          return {
            end: function (callback) {
              callback(undefined, { status: 400 });
            }
          };
        }
      });

      IndexActions.getAggregate();

      setTimeout(function() {
        expect(logout).toBe(true);
        done();
      }, 10);
    });

    it('handle failing scenarios from the backend', function(done) {
      var IndexActions = rewire(__path__);
      IndexActions.__set__('Rest', {
        get: function () {
          return {
            end: function (callback) {
              callback(410, { ok: false, body: { message: 'An expected error occured.' }});
            }
          };
        }
      });

      var Reflux = require('reflux');

      Reflux.createStore({
        listenables: IndexActions,
        onGetAggregateCompleted: function() {
          should.fail('Expected the getItems action to fail.');
        },
        onGetAggregateFailed: function(err, response) {
          expect(err).toBe(410);
          expect(response.message).toBe('An expected error occured.');
          done();
        }
      });

      IndexActions.getAggregate();
    });
  });
});
