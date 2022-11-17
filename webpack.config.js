// el nombre que deseemos
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin =require('mini-css-extract-plugin'); 
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {

    mode: 'development',

    // para limpiar y volver a generar borra todo y vuelve a crear
    output: {
        clean: true

    },


    module: {
        rules: [
            {
                // con esto va buscar el html que encuentre
                test: /\.html$/,
                loader: 'html-loader',
                options:
                {
                    sources: false

                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']

            },
            // para un estilo global
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              }
        ]
    },

    optimization: {},


    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi Aplicación',
            filename: 'index.html',
            template: './src/index.html',

        }),
        new CopyPlugin({
            patterns: [
              { from: "src/assets/", to: "assets/" }
            ],
          }),
      
        new MiniCssExtractPlugin({
            // que use el mismo nombre del archivo o otro me va generar con un hash es muy bueno para que no se quede en navegadorn
            // [fullhash] para generar un hash ejemplo  '[name].[fullhash].css'
            filename: '[name].css',
            ignoreOrder: false
        })
    ],



}