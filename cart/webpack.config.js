import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const { ModuleFederationPlugin } = webpack.container;

export default {
    mode: 'development',
    devServer: {
        port: 8082,
        headers: {
            'Cross-Origin-Resource-Policy': 'cross-origin',
        },
        client: {
            // Prevents the browser from rapidly disconnecting and reconnecting
            // if the initial compilation is sluggish
            overlay: true,
            progress: true,
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/index',
            },
        }),
    ],
}
