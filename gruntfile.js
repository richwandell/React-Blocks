module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
            app: {
                files: ["src/**/*"],
                tasks: ['clean', 'webpack:dist', 'copy:dist']
            }
        },
        webpack: {
            dist:  {
                entry: [
                    './src/js/react_blocks.js'
                ],
                output: {
                    filename: './dist/bundle.js'
                },
                module: {
                    loaders: [{
                        exclude: /node_modules/,
                        loader: 'babel'
                    }]
                },
                resolve: {
                    extensions: ['', '.js', '.jsx']
                },
                stats: {
                    colors: true
                },
                progress: false,
                inline: false,
                devtool: 'source-map'
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['index.html', 'css/*'],
                        dest: 'dist/'
                    },{
                        expand: true,
                        cwd: 'bower_components/magic/',
                        src: ['magic.min.css'],
                        dest: 'dist/css/'
                    }
                ]
            }
        },
        clean: ['dist/**/*'],
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    'dist/bundle.js': ['dist/bundle.js']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-webpack');
};