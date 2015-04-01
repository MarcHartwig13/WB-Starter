module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
    concat: 'grunt-contrib-concat-sourcemaps',
    replace: 'grunt-text-replace',
    htmlbuild: 'grunt-html-build'
  });

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    autoprefixer: {
      all: {
        options: {
          browsers: ['last 2 versions']
        },
        src: '<%= pkg.build_path %>css/compiled/all.css',
        dest: '<%= pkg.build_path %>css/release/all.css'
      },
      ie9: {
        options: {
          browsers: ['ie 9']
        },
        src: '<%= pkg.build_path %>css/compiled/ie9.css',
        dest: '<%= pkg.build_path %>css/release/ie9.css'
      }
    },
    clean: {
      css: [
        '<%= pkg.build_path %>css',
        '<%= pkg.theme_path %>css/*'
        ],
      critcss: [
        '<%= pkg.build_path %>critcss'
        ],
      html: [
        '<%= pkg.build_path %>html',
        '<%= pkg.build_path %>html_backup/'
        ],
      images: [
        '<%= pkg.build_path %>img',
        '<%= pkg.build_path %>grunticon',
        '<%= pkg.theme_path %>img/*'
        ],
      scripts: [
        '<%= pkg.build_path %>js',
        '<%= pkg.build_path %>uglified',
        '<%= pkg.theme_path %>js/*'
        ],
    },
    concat: {
      scripts: {
        files: [
          {
            src: [
              '<%= pkg.build_path %>uglified/head/prepend/*.js',
              '<%= pkg.build_path %>uglified/head/head.js',
              '<%= pkg.build_path %>uglified/head/append/*.js',
            ],
            dest: '<%= pkg.theme_path %>js/head.min.js'
          },
          {
            src: [
              '<%= pkg.build_path %>uglified/main/prepend/*.js',
              '<%= pkg.build_path %>uglified/main/main.js',
              '<%= pkg.build_path %>uglified/main/append/*.js',
            ],
            dest: '<%= pkg.theme_path %>js/main.min.js'
          }
        ]
      }
    },
    copy: {
      grunticon: {
        files: [
          // move images to build folder
          {
            expand: true,
            cwd: '<%= pkg.build_path %>grunticon/',
            src: ['sprites.main.svg.css', 'sprites.main.png.css', 'icons.fallback.css'],
            dest: '<%= pkg.build_path %>css/release/'
          },
        ],
      },
      htmlbuild: {
        files: [
          // backup all HTML files (just in case)
          {
            expand: true,
            cwd: '<%= pkg.html_build_path %>',
            src: ['**/*.html', '!**/_source/**', '!**/_build/**', '!**/node_modules/**'],
            dest: '<%= pkg.build_path %>html_backup/'
          },
          // move images to build folder
          {
            expand: true,
            cwd: '<%= pkg.source_path %>_html/',
            src: '**/*',
            dest: '<%= pkg.build_path %>html/'
          },
        ],
      },
      imagesbuild: {
        files: [
          // move images to build folder
          {
            expand: true,
            cwd: '<%= pkg.source_path %>_img/',
            src: '**/*',
            dest: '<%= pkg.build_path %>img/'
          },
        ],
      },
      scriptsbuild: {
        files: [
          // move scripts to build folder
          {
            expand: true,
            flatten: true,
            src: [
              '<%= pkg.source_path %>bower_components/loadcss/loadCSS.js',
              '<%= pkg.source_path %>_js/loadJS.js'
            ],
            dest: '<%= pkg.build_path %>js/'
          },
          {
            expand: true,
            flatten: true,
            src: [
              '<%= pkg.source_path %>_js/head.js'
            ],
            dest: '<%= pkg.build_path %>js/head/'
          },
          {
            expand: true,
            flatten: true,
            cwd: '<%= pkg.source_path %>_js/head/prepend/',
            src: '**/*.js',
            dest: '<%= pkg.build_path %>js/head/prepend/'
          },
          {
            expand: true,
            flatten: true,
            cwd: '<%= pkg.source_path %>_js/head/append/',
            src: '**/*.js',
            dest: '<%= pkg.build_path %>js/head/append/'
          },
          {
            expand: true,
            flatten: true,
            src: [
              '<%= pkg.source_path %>bower_components/jquery/dist/jquery.js'
            ],
            dest: '<%= pkg.build_path %>js/main/prepend/'
          },
          {
            expand: true,
            flatten: true,
            src: [
              '<%= pkg.source_path %>_js/main.js'
            ],
            dest: '<%= pkg.build_path %>js/main/'
          },
          {
            expand: true,
            flatten: true,
            src: [
              '<%= pkg.source_path %>bower_components/picturefill/dist/picturefill.js'
            ],
            dest: '<%= pkg.build_path %>js/main/append/'
          },
          {
            expand: true,
            flatten: true,
            cwd: '<%= pkg.source_path %>_js/main/prepend/',
            src: '**/*.js',
            dest: '<%= pkg.build_path %>js/main/prepend/'
          },
          {
            expand: true,
            flatten: true,
            cwd: '<%= pkg.source_path %>_js/main/append/',
            src: '**/*.js',
            dest: '<%= pkg.build_path %>js/main/append/'
          },
        ],
      },
      sourcemaps: {
        files: [
          // move css
          {
            expand: true,
            cwd: '<%= pkg.build_path %>css/compiled/',
            src: '**/*.css.map',
            dest: '<%= pkg.theme_path %>css/',
            filter: 'isFile'
          },
        ],
      },
    },
    criticalcss: {
      index: {
        options: {
          url: "<%= pkg.html_build_path %>index_grunt.html", // Change to live or dev URL
          width: 1200,
          height: 900,
          outputfile: "<%= pkg.build_path %>critcss/compiled/index.css",
          filename: "<%= pkg.theme_path %>css/all.css"
        }
      }
    },
    csslint: {
      options: {
        'adjoining-classes': false
      },
      dist: {
        src: '<%= pkg.build_path %>css/*_prefixed.css'
      },
    },
    cssmin: {
      styles: {
        files: [
          {
            expand: true,
            cwd: '<%= pkg.build_path %>css/release/',
            src: '**/*.css',
            dest: '<%= pkg.theme_path %>css/'
          }
        ],
      },
      critcss: {
        files: [
          {
            expand: true,
            cwd: '<%= pkg.build_path %>critcss/compiled/',
            src: '**/*.css',
            dest: '<%= pkg.build_path %>critcss/release/',
            rename: function(dest, src) {
              return dest + src.replace('.css','.min.css');
            }
          }
        ],
      },
    },
    favicons: {
      options: {
        trueColor: true,
        precomposed: true,
        appleTouchBackgroundColor: "#ffffff",
        coast: true,
        windowsTile: true,
        tileBlackWhite: true,
        tileColor: "none",
        html: '<%= pkg.build_path %>html/meta.html',
        HTMLPrefix: "<%= pkg.html_theme_path %>img/meta/"
      },
      icons: {
        src: '<%= pkg.source_path %>_favicon/favicon.png',
        dest: '<%= pkg.build_path %>img/meta/'
      }
    },
    grunticon: {
      main: {
        options: {
          datasvgcss: 'sprites.main.svg.css',
          datapngcss: 'sprites.main.png.css',
          pngfolder: '../img/icon_fallback/',
          pngpath: '../img/icon_fallback/',
          cssprefix: ".icon_",
          enhanceSVG: true
        },
        files: [{
          expand: true,
          cwd: '<%= pkg.build_path %>img/icons',
          src: ['*.svg', '*.png'],
          dest: "<%= pkg.build_path %>/grunticon"
        }]
      }
    },
    htmlbuild: {
      layout: {
        expand: true,
        cwd: '<%= pkg.source_path %>_html',
        src: '**/*.html',
        dest: '<%= pkg.html_build_path %>',
        options: {
          scripts: {
            loadcss: '<%= pkg.build_path %>uglified/loadCSS.js',
            loadjs: '<%= pkg.build_path %>uglified/loadJS.js',
            grunticon: '<%= pkg.build_path %>grunticon/grunticon.loader.js'
          },
          styles: {
            critcss: '<%= pkg.build_path %>critcss/replaced/index.min.css'
          },
          sections: {
            meta: '<%= pkg.build_path %>html/meta.html'
          },
          data: {
            html_theme_path: '<%= pkg.html_theme_path %>',
            version: '<%= pkg.version %>'
          }
        },
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: '<%= pkg.build_path %>img',
          src: ['**/*.{png,jpg,gif}', '!2x/*', '!icons/*'],
          dest: '<%= pkg.theme_path %>img/'
        }]
      }
    },
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      dist: {
        src: '<%= pkg.source_path %>_js/*.js'
      }
    },
    modernizr: {
      dist: {
        "devFile" : "<%= pkg.source_path %>_js/_lib/modernizr.custom.js",
        "outputFile" : "<%= pkg.build_path %>js/head/prepend/modernizr-custom.js",
        "extra" : {
            "shiv" : true,
            "printshiv" : false,
            "load" : true,
            "mq" : false,
            "cssclasses" : true
        },
        "extensibility" : {
            "addtest" : false,
            "prefixed" : false,
            "teststyles" : false,
            "testprops" : false,
            "testallprops" : false,
            "hasevents" : false,
            "prefixes" : false,
            "domprefixes" : false,
            "cssclassprefix": ""
        },
        "uglify" : true,
        "tests" : ['flexbox'],
        "parseFiles" : true,
        "matchCommunityTests" : false,
        "customTests" : []
      }
    },
    notify: {
      watchcss: {
        options: {
          title: 'Grunt Watch Complete',
          message: 'CSS updated'
        }
      },
      watchhtml: {
        options: {
          title: 'Grunt Watch Complete',
          message: 'HTML processed'
        }
      },
      watchimg: {
        options: {
          title: 'Grunt Watch Complete',
          message: 'Images processed'
        }
      },
      watchjs: {
        options: {
          title: 'Grunt Watch Complete',
          message: 'Scripts updated'
        }
      },
      build: {
        options: {
          message: 'Grunt build complete'
        }
      },
      release: {
        options: {
          message: 'Grunt release complete'
        }
      }
    },
    replace: {
      critcss: {
        src: ['<%= pkg.build_path %>critcss/release/index.min.css'],
        dest: '<%= pkg.build_path %>critcss/replaced/index.min.css',
        replacements: [{
          from: '{#',
          to: '{ #'
        }]
      },
      csssourcemaps: {
        src: ['<%= pkg.build_path %>css/compiled/*.map'],
        dest: '<%= pkg.theme_path %>css/',
        replacements: [{
          from: '../',
          to: '/<%= pkg.source_path %>_sass/'
        }]
      },
      cssaddsourcemaps: {
        src: ['<%= pkg.theme_path %>css/*.css'],
        overwrite: true,
        replacements: [{
          from: '/*!',
          to: '/*#'
        }]
      }
    },
    responsive_images: {
      retina: {
        options: {
          engine: 'im',
          sizes: [
            {
              rename: false,
              width: '100%',
              quality: 40,
              suffix: '@2x'
            },
            {
              rename: false,
              width: '50%',
              suffix: ''
            }
          ]
        },
        files: [{
          expand: true,
          cwd: '<%= pkg.build_path %>img/2x/',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= pkg.build_path %>img/'
        }]
      }
    },
    sass: {
      styles: {
        options: {
          cacheLocation: '<%= pkg.build_path %>.sass-cache',
          precision: 10,
          style: 'compressed'
        },
        files: {
          '<%= pkg.build_path %>css/compiled/all.css': '<%= pkg.source_path %>_sass/all.scss',
          '<%= pkg.build_path %>css/compiled/ie9.css': '<%= pkg.source_path %>_sass/ie9.scss'
        },
      },
    },
    uglify: {
      scripts: {
        files: [
          {
            expand: true,
            cwd: '<%= pkg.build_path %>js/',
            src: '**/*.js',
            dest: '<%= pkg.build_path %>uglified/',
          }
        ]
      }
    },
    watch: {
      css: {
        files: ['<%= pkg.source_path %>_sass/**/*.scss'],
        tasks: ['sass', 'newer:autoprefixer', 'newer:cssmin:styles', 'replace:csssourcemaps', 'replace:cssaddsourcemaps', 'notify:watchcss'],
        options: {
          spawn: false,
          livereload: true
        },
      },
      htmlbuild: {
        files: ['<%= pkg.source_path %>_html/**/*'],
        tasks: ['clean:critcss', 'newer:copy:htmlbuild', 'newer:htmlbuild', 'notify:watchhtml'],
        options: {
          spawn: false,
          livereload: true
        },
      },
      images: {
        files: ['<%= pkg.source_path %>_img/**/*'],
        tasks: ['newer:copy:imagesbuild', 'newer:responsive_images', 'newer:grunticon', 'newer:copy:grunticon', 'newer:imagemin', 'notify:watchimg'],
        options: {
          spawn: false
        },
      },
      scripts: {
        files: ['<%= pkg.source_path %>_js/**/*.js'],
        tasks: ['jshint', 'newer:copy:scriptsbuild', 'modernizr', 'newer:uglify', 'concat:scripts', 'notify:watchjs'],
        options: {
          spawn: false,
          livereload: true
        },
      },
    }

  });
  
  // Grouped tasks to be used below
  grunt.registerTask('meta', ['favicons', 'newer:imagemin']);
  grunt.registerTask('critcss', ['criticalcss', 'cssmin:critcss']);
  grunt.registerTask('htmlprocess', ['replace:critcss', 'copy:htmlbuild', 'htmlbuild']);
  
  // Main Grunt tasks
  grunt.registerTask('release', ['default', 'meta', 'critcss', 'htmlprocess', 'notify:release']);
  grunt.registerTask('default', ['clean', 'copy:imagesbuild', 'responsive_images', 'grunticon', 'copy:grunticon', 'imagemin', 'copy:scriptsbuild', 'modernizr', 'uglify', 'concat:scripts', 'sass', 'autoprefixer', 'cssmin:styles', 'replace:csssourcemaps', 'replace:cssaddsourcemaps', 'notify:build']);

};