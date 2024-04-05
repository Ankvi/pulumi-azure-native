import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CustomLocationArgs } from "./customLocation";
export type CustomLocation = import("./customLocation").CustomLocation;
export const CustomLocation: typeof import("./customLocation").CustomLocation = null as any;
utilities.lazyLoad(exports, ["CustomLocation"], () => require("./customLocation"));

export { GetCustomLocationArgs, GetCustomLocationResult, GetCustomLocationOutputArgs } from "./getCustomLocation";
export const getCustomLocation: typeof import("./getCustomLocation").getCustomLocation = null as any;
export const getCustomLocationOutput: typeof import("./getCustomLocation").getCustomLocationOutput = null as any;
utilities.lazyLoad(exports, ["getCustomLocation","getCustomLocationOutput"], () => require("./getCustomLocation"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:extendedlocation/v20210815:CustomLocation":
                return new CustomLocation(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "extendedlocation/v20210815", _module)