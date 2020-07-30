Package.describe({
  name: 'urbanetic:utility',
  summary: 'A collection of utility modules',
  version: '1.2.3_1',
  git: 'https://github.com/urbanetic/meteor-utility.git'
});

Package.onUse(function (api) {
  Npm.depends({
    '@urbanetic/utility': '0.1.10'
  });

  api.versionsFrom('METEOR@1.2.1');

  api.use([
    'coffeescript',
    'underscore',
    'minimongo',
    'aramk:q@1.0.1_1',
    'aramk:tinycolor@1.1.0_1',
  ], ['client', 'server']);

  api.use([
    'deps',
    'jquery',
    'less',
    'templating'
  ], 'client');

  // Compile the Node.js package for server and client, and export the global Services namespace.
  api.use(['cosmos:browserify']);
  api.addFiles(['src/lib.browserify.js']);

  api.use([
    'aldeed:autoform',
    'momentjs:moment',
    'matb33:collection-hooks',
    'semantic:ui-css',
    'session',
    'reactive-var',
    'tracker'
  ], 'client', { weak: true });

  // Either of these will contain the Async module, but we don't want to strongly require either
  // since we don't know which is being used.
  api.use([
    'meteorhacks:async',
    'meteorhacks:npm'
  ], 'server', { weak: true });

  api.use([
    'aldeed:simple-schema',
    'aldeed:collection2'
  ], ['client', 'server']);

  // Make these available to the app to allow working with tiem and deferreds.
  api.imply(['momentjs:moment', 'aramk:q'], ['client', 'server']);
  api.export([
    'Collections',
    'Colors',
    'Dates',
    'DeferredQueue',
    'DeferredQueueSet',
    'DeferredQueueMap',
    'Depends',
    'Environment',
    'Promises'
  ], ['client', 'server']);

  api.export([
    'Buffers'
  ], 'server');

  api.export([
    'Blobs',
    'Forms',
    'Templates'
  ], 'client');

  api.addFiles([
    'src/Collections.coffee',
    'src/Colors.coffee',
    'src/data/DeferredQueue.coffee',
    'src/data/DeferredQueueSet.coffee',
    'src/data/DeferredQueueMap.coffee',
    'src/Dates.coffee',
    'src/Depends.coffee',
    'src/Environment.coffee',
    'src/Promises.coffee'
  ], ['client', 'server']);

  api.addFiles([
    'src/Blobs.coffee',
    'src/Forms.coffee',
    'src/Templates.coffee',
    'src/forms.less'
  ], 'client');

  api.addFiles([
    'src/Buffers.coffee'
  ], 'server');
  
});