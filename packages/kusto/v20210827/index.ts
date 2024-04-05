import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetScriptArgs, GetScriptResult, GetScriptOutputArgs } from "./getScript";
export const getScript: typeof import("./getScript").getScript = null as any;
export const getScriptOutput: typeof import("./getScript").getScriptOutput = null as any;
utilities.lazyLoad(exports, ["getScript","getScriptOutput"], () => require("./getScript"));

export { ScriptArgs } from "./script";
export type Script = import("./script").Script;
export const Script: typeof import("./script").Script = null as any;
utilities.lazyLoad(exports, ["Script"], () => require("./script"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:kusto/v20210827:Script":
                return new Script(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "kusto/v20210827", _module)