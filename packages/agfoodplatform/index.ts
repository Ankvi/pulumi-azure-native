import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DataConnectorArgs } from "./dataConnector";
export type DataConnector = import("./dataConnector").DataConnector;
export const DataConnector: typeof import("./dataConnector").DataConnector = null as any;
utilities.lazyLoad(exports, ["DataConnector"], () => require("./dataConnector"));

export { DataManagerForAgricultureResourceArgs } from "./dataManagerForAgricultureResource";
export type DataManagerForAgricultureResource = import("./dataManagerForAgricultureResource").DataManagerForAgricultureResource;
export const DataManagerForAgricultureResource: typeof import("./dataManagerForAgricultureResource").DataManagerForAgricultureResource = null as any;
utilities.lazyLoad(exports, ["DataManagerForAgricultureResource"], () => require("./dataManagerForAgricultureResource"));

export { ExtensionArgs } from "./extension";
export type Extension = import("./extension").Extension;
export const Extension: typeof import("./extension").Extension = null as any;
utilities.lazyLoad(exports, ["Extension"], () => require("./extension"));

export { GetDataConnectorArgs, GetDataConnectorResult, GetDataConnectorOutputArgs } from "./getDataConnector";
export const getDataConnector: typeof import("./getDataConnector").getDataConnector = null as any;
export const getDataConnectorOutput: typeof import("./getDataConnector").getDataConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getDataConnector","getDataConnectorOutput"], () => require("./getDataConnector"));

export { GetDataManagerForAgricultureResourceArgs, GetDataManagerForAgricultureResourceResult, GetDataManagerForAgricultureResourceOutputArgs } from "./getDataManagerForAgricultureResource";
export const getDataManagerForAgricultureResource: typeof import("./getDataManagerForAgricultureResource").getDataManagerForAgricultureResource = null as any;
export const getDataManagerForAgricultureResourceOutput: typeof import("./getDataManagerForAgricultureResource").getDataManagerForAgricultureResourceOutput = null as any;
utilities.lazyLoad(exports, ["getDataManagerForAgricultureResource","getDataManagerForAgricultureResourceOutput"], () => require("./getDataManagerForAgricultureResource"));

export { GetExtensionArgs, GetExtensionResult, GetExtensionOutputArgs } from "./getExtension";
export const getExtension: typeof import("./getExtension").getExtension = null as any;
export const getExtensionOutput: typeof import("./getExtension").getExtensionOutput = null as any;
utilities.lazyLoad(exports, ["getExtension","getExtensionOutput"], () => require("./getExtension"));

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
            case "azure-native:agfoodplatform:DataConnector":
                return new DataConnector(name, <any>undefined, { urn })
            case "azure-native:agfoodplatform:DataManagerForAgricultureResource":
                return new DataManagerForAgricultureResource(name, <any>undefined, { urn })
            case "azure-native:agfoodplatform:Extension":
                return new Extension(name, <any>undefined, { urn })
            case "azure-native:agfoodplatform:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:agfoodplatform:Solution":
                return new Solution(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "agfoodplatform", _module)