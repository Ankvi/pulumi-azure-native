import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AuthorityArgs } from "./authority";
export type Authority = import("./authority").Authority;
export const Authority: typeof import("./authority").Authority = null as any;
utilities.lazyLoad(exports, ["Authority"], () => require("./authority"));

export { GetAuthorityArgs, GetAuthorityResult, GetAuthorityOutputArgs } from "./getAuthority";
export const getAuthority: typeof import("./getAuthority").getAuthority = null as any;
export const getAuthorityOutput: typeof import("./getAuthority").getAuthorityOutput = null as any;
utilities.lazyLoad(exports, ["getAuthority","getAuthorityOutput"], () => require("./getAuthority"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:verifiedid:Authority":
                return new Authority(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "verifiedid", _module)