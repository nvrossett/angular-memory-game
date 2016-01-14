// Init Grunt modules
// ---------------------------------
module.exports = function(grunt) {

  // Grunt Time
  // ---------------------------------
  require('time-grunt')(grunt);

   // Load all tasks
  // ---------------------------------
  require('jit-grunt')(grunt);
  grunt.loadNpmTasks('grunt-angular-gettext');

  // Init Grunt config
  // ---------------------------------
  grunt.initConfig({

    // Define our source and build folders
    // ---------------------------------
    build:     '_public',
    css_build: '<%= build %>/css',
    js_build:  '<%= build %>/js',
    img_build: '<%= build %>/img',
    vendor:    '<%= build %>/vendors',

    src:       '_source',
    css_src:   '<%= src %>/stylus',
    js_src:    '<%= src %>/js',
    img_src:   '<%= src %>/img',
    svg_src:   '<%= src %>/svg',

    test:      'test',



    // Task: Stylus
    // ---------------------------------
    stylus: {
      dev: {
        options: {
          use: [
            require('jeet'),
            require('rupture'),
          ],
          compress: false,
          paths: [
            'node_modules/grunt-contrib-stylus/node_modules',
            'node_modules/jeet/stylus',
            'node_modules/rupture',
            'node_modules/nib/lib',
            'node_modules/stylus-font-face/lib',
            'node_modules/stylus-font-face/lib/plugin.js'
          ]
        },
        files: {
          '<%= css_build %>/style.css': '<%= css_src %>/style.styl'
        }
      }
    },


    // Task: Agroup Media Querie
    // ---------------------------------
    combine_mq: {
      options: {
        log: true
      },
      dev: {
        files: {
          '<%= css_build %>/style.css': ['<%= css_build %>/style.css']
        }
      }
    },


    // CSSMin
    // ---------------------------------
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          '<%= css_build %>/style.css': '<%= css_build %>/style.css',
        }
      }
    },

    // Task: Ugligy
    // ---------------------------------
    uglify: {
      vendor: {
        options: {
          mangle: false,
          compress : false,
          sourceMap: true,
          report: 'min'
        },
        files: {
          '<%= js_build %>/_vendor.js': [

            // Vendor Plugins
            'bower_components/angular/angular.min.js',  // Angular
            'bower_components/angular-ui-router/release/angular-ui-router.js',  // Angular - Routes
            'bower_components/jquery/dist/jquery.js', // jQuery
            'custom_components/shuffle.js', // Shuffle
            // 'bower_components/angular/angular-sanitize.min.js',   // Angular - Sanatize
            // 'bower_components/angular/angular-animate.min.js',   // Angular - animate

          ]
        }
      },


      dev: {
        options: {
          mangle: false,
          compress : false,
          sourceMap: true,
          report: 'min'
        },
        files: {
          '<%= js_build %>/app.js': [
            '<%= js_src %>/*.js',
            '<%= js_src %>/**/*.js',
          ]
        }
      },


    },


    // Task: JShint
    // ---------------------------------
    jshint: {

      ignore_warning: {
        options: {
          '-W033': true,
          '-W099': true,
        },
        src: ['<%= js_src %>/*.js', '<%= js_src %>/**/*.js', '<%= test %>/spec/*.js', '<%= test %>/spec/**/*.js'],
      },

    },


    // Task: Jade
    // ---------------------------------
    jade: {
      compile: {
        options: {
          client: false,
          preserveComments: false,
          pretty: false,
        },
        files: [{
          cwd: '<%= src %>',
          src: '**/*.jade',
          dest: '<%= build %>',
          expand: true,
          ext: '.html'
        }]
      }
    },

    // Task: Karma
    // ---------------------------------
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        autoWatch: true
      }
    },


    // Task: Watch
    // ---------------------------------
    watch: {
      options: {
        interval: 200
      },
      stylus: {
        files: [
          '<%= css_src %>/**/*.styl'
        ],
        tasks: ['stylus', 'combine_mq', 'cssmin']
      },

      js: {
        files: ['<%= js_src %>/*.js', '<%= js_src %>/**/*.js'],
        tasks: ['uglify:dev']
      },

      html: {
        files: ['<%= src %>/*.jade','<%= src %>/**/*.jade'],
        tasks: ['jade']
      },


      build: {
        files: [
          'Gruntfile.js'
        ],
        tasks: ['build']
      }
    },


    // Task: BrowserSync
    // ---------------------------------
    browserSync: {
      dev: {

        options: {


          files : [
            '<%= build %>/css/*.css',
            '<%= build %>/js/*.js',
            '<%= build %>/**/*.jpg',
            '<%= build %>/**/*.png',
            '<%= build %>/**/*.svg',
            '<%= build %>/*.html'
          ],

          host : '',

          server: {
            baseDir: '<%= build %>/',
          },

          watchTask: true,

          ghostMode: {
            clicks: true,
            scroll: true,
            links: true,
            forms: true
          }
        }

      }
    },


    nggettext_extract: {
        pot: {
          files: {
            '<%= src %>/po/template.pot': ['<%= build %>/*.html','<%= build %>/views/*.html']
          }
        },
    },

    nggettext_compile: {
        all: {
          files: {
            '<%= src %>/js/translations.js': ['<%= src %>/po/*.po']
          }
        },
    },

  });

    // Grunt registers
    // ---------------------------------

    // Stylus
    grunt.registerTask( 'styl', ['stylus'] );

    // Js
    grunt.registerTask( 'js', ['jshint', 'uglify']);

    // CSS
    grunt.registerTask( 'css', ['stylus', 'combine_mq', 'cssmin']);

    // GetText
    grunt.registerTask( 'extract', ['nggettext_extract']);

    // GetText
    grunt.registerTask( 'compile', ['nggettext_compile']);

    // Test
    grunt.registerTask( 'test', ['karma']);

    // Build
    grunt.registerTask( 'build', ['jshint', 'uglify', 'jade', 'stylus', 'combine_mq', 'cssmin' ] );

    // Watch
    grunt.registerTask( 'w', ['browserSync', 'watch' ] );

};
