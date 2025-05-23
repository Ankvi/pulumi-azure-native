import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ControllerArgs } from "./controller";
export type Controller = import("./controller").Controller;
export const Controller: typeof import("./controller").Controller = null as any;
utilities.lazyLoad(exports, ["Controller"], () => require("./controller"));

export { GetControllerArgs, GetControllerResult, GetControllerOutputArgs } from "./getController";
export const getController: typeof import("./getController").getController = null as any;
export const getControllerOutput: typeof import("./getController").getControllerOutput = null as any;
utilities.lazyLoad(exports, ["getController","getControllerOutput"], () => require("./getController"));

export { ListControllerConnectionDetailsArgs, ListControllerConnectionDetailsResult, ListControllerConnectionDetailsOutputArgs } from "./listControllerConnectionDetails";
export const listControllerConnectionDetails: typeof import("./listControllerConnectionDetails").listControllerConnectionDetails = null as any;
export const listControllerConnectionDetailsOutput: typeof import("./listControllerConnectionDetails").listControllerConnectionDetailsOutput = null as any;
utilities.lazyLoad(exports, ["listControllerConnectionDetails","listControllerConnectionDetailsOutput"], () => require("./listControllerConnectionDetails"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:devspaces:Controller":
                return new Controller(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "devspaces", _module)