import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetOrganizationArgs, GetOrganizationResult, GetOrganizationOutputArgs } from "./getOrganization";
export const getOrganization: typeof import("./getOrganization").getOrganization = null as any;
export const getOrganizationOutput: typeof import("./getOrganization").getOrganizationOutput = null as any;
utilities.lazyLoad(exports, ["getOrganization","getOrganizationOutput"], () => require("./getOrganization"));

export { OrganizationArgs } from "./organization";
export type Organization = import("./organization").Organization;
export const Organization: typeof import("./organization").Organization = null as any;
utilities.lazyLoad(exports, ["Organization"], () => require("./organization"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:confluent/v20211201:Organization":
                return new Organization(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "confluent/v20211201", _module)
