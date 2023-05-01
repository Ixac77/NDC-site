const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/tscBase/index.ts',

    module: {
        rules: [
            //FOR THE TYPESCRIPT AND BABEL
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                //without additional settings, this will reference .babelrc
                loader: 'babel-loader',
            },

            //FOR THE CSS AND SASS
            {
                test: /\.s?css$/i,

                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: ""}
                    },
                    {
                        loader: 'css-loader',
                       // options: { ...}
                    }, 

                    /* 
                    resolve-url-loader enables fully relative asset paths instead of root relative paths 
                    reference documentation of resolve-url-loader for details
                    */
                    {
                        loader: 'resolve-url-loader', // <-- VERY IMPORTANT
                       // options: { ...}
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true, // <-- !!IMPORTANT!!
                        }
                    }
                ],
            },

            //FOR THE IMAGES
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset", //"asset/resource" //outputs into folder // ==== //"asset/inline" //in lines it into the javascript output file //best use for small images === //"asset" it automatically determines whether it should be inline or resource according to size of files

                // parser: {  //determining the size of the files that can be allowed for "asset/resource"
                //     dataUrlCondition: {
                //         maxSize: 30* 1024
                //     }
                // }
            },

            //FOR THE FONTS
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
            },
        ]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        assetModuleFilename: "images/[hash][ext][query]" //output folder for images in dist
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    devtool: 'source-map',

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },


    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8000,
        open: true,
    }

}


/*

*/