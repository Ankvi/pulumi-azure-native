import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AgriServiceArgs } from "./agriService";
export type AgriService = import("./agriService").AgriService;
export const AgriService: typeof import("./agriService").AgriService = null as any;
utilities.lazyLoad(exports, ["AgriService"], () => require("./agriService"));

export { GetAgriServiceArgs, GetAgriServiceResult, GetAgriServiceOutputArgs } from "./getAgriService";
export const getAgriService: typeof import("./getAgriService").getAgriService = null as any;
export const getAgriServiceOutput: typeof import("./getAgriService").getAgriServiceOutput = null as any;
utilities.lazyLoad(exports, ["getAgriService","getAgriServiceOutput"], () => require("./getAgriService"));

export { ListAgriServiceAvailableSolutionsArgs, ListAgriServiceAvailableSolutionsResult, ListAgriServiceAvailableSolutionsOutputArgs } from "./listAgriServiceAvailableSolutions";
export const listAgriServiceAvailableSolutions: typeof import("./listAgriServiceAvailableSolutions").listAgriServiceAvailableSolutions = null as any;
export const listAgriServiceAvailableSolutionsOutput: typeof import("./listAgriServiceAvailableSolutions").listAgriServiceAvailableSolutionsOutput = null as any;
utilities.lazyLoad(exports, ["listAgriServiceAvailableSolutions","listAgriServiceAvailableSolutionsOutput"], () => require("./listAgriServiceAvailableSolutions"));


// Export enums:
export * from "./types/enums";



const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:agricultureplatform:AgriService":
                return new AgriService(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "agricultureplatform", _module)