# browserify-shimify
A very simple shim transform for browserify

## Installation

```bash
$ npm install browserify-shimify --save-dev
```

## Usage

```javascript
var gulp = require('gulp');
var browserify = require('browserify');
var shimify = require('browserify-shimify');

gulp.task('browserify', function() {

    // Shim config
    var config = {
        'sprintf-js': '{sprintf: window.sprintf, vsprintf: window.vsprintf}',
        'moment': 'window.moment'
    };

    return browserify()
        .transform(shimify.configure(config))
        .bundle()
        .pipe(gulp.dest('dist'));
});
```
