/* eslint-disable */

/* 
webpack-dev-server
    -> 가상의 bundle.js를 만들어줌
webpack.config.js
    -> webpack을 실행 시 옵션지정 */

const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development',
    // 시작점(모든 import 등)
    entry: './public/index.js',
    // 번들링된 파일명과 경로 지정
    output: {
        //해당경로로 모두 뱉어짐
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/dist/',   뭐하는놈일까
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.resolve('./dist'),
        index: 'index.html',
        port: 9000, // webpack-dev-server –port 9000
        open: true, // dev server 구동 후 브라우저 열기, webpack-dev-server –open
        /* 
        host : '127.0.0.1', // webpack-dev-server –host 127.0.0.1
        compress: true,     // 모든 항목에 대해 gzip압축 사용, webpack-dev-server –compress
        hot : true,     // webpack의 HMR 기능 활성화	
        inline: true,   // inline 모드 활성화, webpack-dev-server –inline=true
        */
    },
    // 번들링 규칙?
    module: {
        rules: [
            {
                // .js로 끝나는 파일들을 모두 babel로 처리
                test: /\.js$/,
                include: path.join(__dirname),
                //node_modules폴더와 dist폴더는 제외
                exclude: /(node_modules)|(dist)/,
                // use: 경우 여러 loader를 지정할 때 [], 하나의 경우 객체 {}로 해도 됨
                // loader는 단일로 사용, loader : "dd"
                use: {
                    // CommonJS 형식(import -> require 구문 등)으로 변환
                    loader: 'babel-loader',
                    // 최상위 .babelrc에 기술
                    // options: {
                    //     presets: ["@babel/preset-env", "@babel/preset-react"]
                    // }
                },
                // -> use: ['babel-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true },
                    },
                ],
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]?[hash]',
                        },
                    },
                ],
            },
            //압축화 안할 시 사용
            /* {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            } */
            // 압축화
            {
                test: /\.css$/,
                // 'style-loader' -> style태그로 html파일안에 삽입해줌
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            //turns on the CSS modules mode
                            modules: true,
                            //defines the structure of the generated CSS class should be
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            //turns on the CSS modules mode
                            modules: true,
                            //defines the structure of the generated CSS class should be
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    // 임포트 시 절대경로(별명) 설정, 모듈없이 바로 사용 가능
    // babel-plugin-module-resolver로 대체, .babelrc에 기술
    /* resolve: {
        alias: {
          src: path.resolve('./src')
        }
    }, */
    plugins: [
        // 자동으로 파일들을 html에 바인딩 해줌
        new HtmlWebPackPlugin({
            //favicon: './static/asset/favicon.ico',
            template: './public/index.html', // public/index.html 파일을 읽는다.
            filename: 'index.html', // output으로 출력할 파일은 index.html 이다.
            //chunks: ['css', 'index', 'app', 'system', 'monitor']
        }),
        // 저용량 css파일로 뱉어줌
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        // 빌드 할 때 마다 필요없는 파일들 삭제해줌
        //new CleanWebpackPlugin(['dist']),
        new CleanWebpackPlugin(),
        // 난독화와 압축
        new UglifyWebpackPlugin(),
    ],
};

/* 
mode : "production"
     최적화되어 빌드되어지는 특징
mode : "development"
    빠르게 빌드
mode : "none"
    아무 기능 없이 웹팩으로 빌드
*/
