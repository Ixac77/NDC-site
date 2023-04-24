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

                     "css-loader",
                     "sass-loader"
                ]
            },

            //FOR THE IMAGES
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset" //"asset/resource" //otputs into folder // ==== //"asset/inline" //inlines it into the javacsript output file //best use for small images === //"assset" it automatically determines whether it should be inline or resource according to size of files
                ,
                // parser: {  //determining the size of the files that can be allowed for "asset/resource"
                //     dataUrlCondition: {
                //         maxSize: 30* 1024
                //     }
                // }
            },

        ]
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

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        assetModuleFilename: "images/[hash][ext][query]" //output folder for images
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        open: true,
    }

}


/*

*/