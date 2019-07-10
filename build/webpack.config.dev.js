const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const {VueLoaderPlugin}=require('vue-loader')

function resolve(dir){
    return path.join(__dirname,'..',dir)
}

module.exports={
    entry:{
        app:'./src/main.js'
    },
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'[name].js',
        publicPath:''
    },
    mode:'development',
    devtool:'cheap-surce-map',
    devServer:{
        disableHostCheck:true,
        clientLogLevel:'warning',
        compress:true,
        host:'0.0.0.0',
        port:9999,
        hot:true,
        open:'chrome',
        proxy:{},
        publicPath:'/',
        overlay:{
            warnings:false,
            errors:true
        },
        watchOptions:{
            poll:true
        }
        
    },
    resolve:{
        extensions:['.vue','.js'],
        modules:[
            resolve('src'),
            resolve('node_modules')
        ],
        alias:{
            '@':path.join(__dirname,'../src')
        }
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.js$/,
                loader:'babel-loader?cacheDirectory',
                include:[
                    resolve('src')
                ]
                
            },
            {
                test:/\.s?css$/,
                use:[
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
            
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'vue_components',
            filename:"index.html",
            template:"index.html",
            inject:true,
            minify:{
                minifyCSS:true,
                minifyJS:true
            }
        }),

        new VueLoaderPlugin()
    ]
}