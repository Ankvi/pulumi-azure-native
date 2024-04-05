import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { B2CTenantArgs } from "./b2ctenant";
export type B2CTenant = import("./b2ctenant").B2CTenant;
export const B2CTenant: typeof import("./b2ctenant").B2CTenant = null as any;
utilities.lazyLoad(exports, ["B2CTenant"], () => require("./b2ctenant"));

export { GetB2CTenantArgs, GetB2CTenantResult, GetB2CTenantOutputArgs } from "./getB2CTenant";
export const getB2CTenant: typeof import("./getB2CTenant").getB2CTenant = null as any;
export const getB2CTenantOutput: typeof import("./getB2CTenant").getB2CTenantOutput = null as any;
utilities.lazyLoad(exports, ["getB2CTenant","getB2CTenantOutput"], () => require("./getB2CTenant"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:azureactivedirectory/v20190101preview:B2CTenant":
                return new B2CTenant(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "azureactivedirectory/v20190101preview", _module)