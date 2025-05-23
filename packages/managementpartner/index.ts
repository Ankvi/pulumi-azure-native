import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetPartnerArgs, GetPartnerResult, GetPartnerOutputArgs } from "./getPartner";
export const getPartner: typeof import("./getPartner").getPartner = null as any;
export const getPartnerOutput: typeof import("./getPartner").getPartnerOutput = null as any;
utilities.lazyLoad(exports, ["getPartner","getPartnerOutput"], () => require("./getPartner"));

export { PartnerArgs } from "./partner";
export type Partner = import("./partner").Partner;
export const Partner: typeof import("./partner").Partner = null as any;
utilities.lazyLoad(exports, ["Partner"], () => require("./partner"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:managementpartner:Partner":
                return new Partner(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "managementpartner", _module)