import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ExtensionArgs } from "./extension";
export type Extension = import("./extension").Extension;
export const Extension: typeof import("./extension").Extension = null as any;
utilities.lazyLoad(exports, ["Extension"], () => require("./extension"));

export { FarmBeatsModelArgs } from "./farmBeatsModel";
export type FarmBeatsModel = import("./farmBeatsModel").FarmBeatsModel;
export const FarmBeatsModel: typeof import("./farmBeatsModel").FarmBeatsModel = null as any;
utilities.lazyLoad(exports, ["FarmBeatsModel"], () => require("./farmBeatsModel"));

export { GetExtensionArgs, GetExtensionResult, GetExtensionOutputArgs } from "./getExtension";
export const getExtension: typeof import("./getExtension").getExtension = null as any;
export const getExtensionOutput: typeof import("./getExtension").getExtensionOutput = null as any;
utilities.lazyLoad(exports, ["getExtension","getExtensionOutput"], () => require("./getExtension"));

export { GetFarmBeatsModelArgs, GetFarmBeatsModelResult, GetFarmBeatsModelOutputArgs } from "./getFarmBeatsModel";
export const getFarmBeatsModel: typeof import("./getFarmBeatsModel").getFarmBeatsModel = null as any;
export const getFarmBeatsModelOutput: typeof import("./getFarmBeatsModel").getFarmBeatsModelOutput = null as any;
utilities.lazyLoad(exports, ["getFarmBeatsModel","getFarmBeatsModelOutput"], () => require("./getFarmBeatsModel"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetSolutionArgs, GetSolutionResult, GetSolutionOutputArgs } from "./getSolution";
export const getSolution: typeof import("./getSolution").getSolution = null as any;
export const getSolutionOutput: typeof import("./getSolution").getSolutionOutput = null as any;
utilities.lazyLoad(exports, ["getSolution","getSolutionOutput"], () => require("./getSolution"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { SolutionArgs } from "./solution";
export type Solution = import("./solution").Solution;
export const Solution: typeof import("./solution").Solution = null as any;
utilities.lazyLoad(exports, ["Solution"], () => require("./solution"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:agfoodplatform/v20210901preview:Extension":
                return new Extension(name, <any>undefined, { urn })
            case "azure-native:agfoodplatform/v20210901preview:FarmBeatsModel":
                return new FarmBeatsModel(name, <any>undefined, { urn })
            case "azure-native:agfoodplatform/v20210901preview:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:agfoodplatform/v20210901preview:Solution":
                return new Solution(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "agfoodplatform/v20210901preview", _module)
