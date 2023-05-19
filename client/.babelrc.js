const plugins = [
    [
        require.resolve("babel-plugin-module-resolver"),
        {
            root: ["./src/"],
            alias: {
                "assets": "./assets",
                "common": "./common",
                "components": "./components",
                "hooks": "./hooks",
                "layouts": "./layouts",
                "modules": "./modules",
                "pages": "./pages",
                "routes": "./routes",
                "store": "./store",
                "views": "./views",
                "interfaces": "../../src/common/interfaces"
            }
        }

    ]

];