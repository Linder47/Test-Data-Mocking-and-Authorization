const path = require("path")
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
    const modules = {
        js: {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "ts-loader",
                },
            ],
        },
        stylus: {
            test: /\.styl$/,
            use: [
                {
                    loader: "style-loader",
                },
                {
                    loader: "css-loader",
                },
                {
                    loader: "stylus-loader",
                    options: {
                        import: [ // Тут для Stylus'а можем объявить глобальные переменные или функции, чтобы каждый раз их не импортировать
                            path.resolve(__dirname, 'src/Common/Styles/variables.styl'),
                        ],
                    }
                },
            ],
        },
    }

    if (env === 'production') {
        modules.stylus.use.splice(2, 0, { loader: "postcss-loader" })
    }

    const resolve = {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: { // Тут тот же момент, что и в tsconfig.json, чтобы Webpack смог понять ссылки на директории
            App: path.resolve(__dirname, 'src/App/'),
            Pages: path.resolve(__dirname, 'src/Pages/'),
        },
    }

    // const  plugins: [
    //     new Dotenv({
    //       path: './some.other.env', // load this now instead of the ones in '.env'
    //       safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
    //       allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
    //       systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
    //       silent: true, // hide any errors
    //       defaults: false, // load '.env.defaults' as the default values if empty.
    //       prefix: 'import.meta.env.' // reference your env variables as 'import.meta.env.ENV_VAR'.
    //     })
    //   ]

    return {
        modules,
        resolve,
    }
}