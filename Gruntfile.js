module.exports = function (grunt) {


    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                compress: true
            },
            love2spa: {
                src: ['love2spa/*.js'],
                dest: 'love2spa/love2spa/love2spa.min.js'
            },
            backbone: {
                src: ['backbone/backbone-min.js',
                        'backbone/underscore-min.js'],
                dest: 'backbone/backbone.min.js'
            }
        },
        compress: {
            options: {
                compress: true
            },
            angular: {
                src: ['angular/angular.min.js'],
                dest: 'angular/angular.zip.js'
            },
            love2spa: {
                src: ['love2spa/love2spa/love2spa.min.js'],
                dest: 'love2spa/love2spa/love2spa.zip.js'
            },
            backbone: {
                src: ['backbone/backbone-min.js',
                        'backbone/underscore-in.js'],
                dest: 'backbone/backbone.zip.js'
            },
            ember: {
                src: ['ember/ember.min.js'],
                dest: 'ember/ember.zip.js'
            },
            //durandal: {
            //    src: ['durandal/*.js'],
            //    dest: 'durandal/durandal.zip.js'
            //},
            jquery: {
                src: ['jquery/jquery-2.1.1.min.js'],
                dest: 'jquery/jquery.zip.js'
            }
        },

    });

    // Default task.
    grunt.registerTask('default', ['uglify', 'compress']);

};