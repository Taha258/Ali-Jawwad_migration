"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_1 = require("sanity/cli");
exports.default = (0, cli_1.defineCliConfig)({
    api: {
        projectId: 'kkvky8lo',
        dataset: 'production'
    },
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
});
