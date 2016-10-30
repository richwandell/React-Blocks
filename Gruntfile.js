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
                    path: __dirname,
                    publicPath: '/',
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
                inline: false
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
                    }
                ]
            }
        },
        clean: ['dist/']
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-webpack');
};