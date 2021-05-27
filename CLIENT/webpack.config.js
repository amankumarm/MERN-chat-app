module.exports={
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
                
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                use: 'html' 
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                loader: 'url-loader'
            },{
            test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],}

        ]
    },
    // loader: [
    //   ],
    performance:{
        hints:false
    }
}