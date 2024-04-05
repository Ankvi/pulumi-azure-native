import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetWebServiceArgs, GetWebServiceResult, GetWebServiceOutputArgs } from "./getWebService";
export const getWebService: typeof import("./getWebService").getWebService = null as any;
export const getWebServiceOutput: typeof import("./getWebService").getWebServiceOutput = null as any;
utilities.lazyLoad(exports, ["getWebService","getWebServiceOutput"], () => require("./getWebService"));

export { WebServiceArgs } from "./webService";
export type WebService = import("./webService").WebService;
export const WebService: typeof import("./webService").WebService = null as any;
utilities.lazyLoad(exports, ["WebService"], () => require("./webService"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:machinelearning/v20170101:WebService":
                return new WebService(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "machinelearning/v20170101", _module)