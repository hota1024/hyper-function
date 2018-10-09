const mix = require('laravel-mix')

mix.js('./src/index.js', './dist/hyper-function.js')
mix.js('./tests/src/test.js', './tests/dist/test.js')

mix.disableNotifications()