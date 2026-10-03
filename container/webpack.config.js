import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const { ModuleFederationPlugin } = webpack.container;

export default {
    mode: 'development',
    devServer: {
        port: 8080,
       
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                'products': 'products@http://localhost:8081/remoteEntry.js',
            },
        }),
    ],
}
