import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetProfessionalServiceSubscriptionLevelArgs, GetProfessionalServiceSubscriptionLevelResult, GetProfessionalServiceSubscriptionLevelOutputArgs } from "./getProfessionalServiceSubscriptionLevel";
export const getProfessionalServiceSubscriptionLevel: typeof import("./getProfessionalServiceSubscriptionLevel").getProfessionalServiceSubscriptionLevel = null as any;
export const getProfessionalServiceSubscriptionLevelOutput: typeof import("./getProfessionalServiceSubscriptionLevel").getProfessionalServiceSubscriptionLevelOutput = null as any;
utilities.lazyLoad(exports, ["getProfessionalServiceSubscriptionLevel","getProfessionalServiceSubscriptionLevelOutput"], () => require("./getProfessionalServiceSubscriptionLevel"));

export { ProfessionalServiceSubscriptionLevelArgs } from "./professionalServiceSubscriptionLevel";
export type ProfessionalServiceSubscriptionLevel = import("./professionalServiceSubscriptionLevel").ProfessionalServiceSubscriptionLevel;
export const ProfessionalServiceSubscriptionLevel: typeof import("./professionalServiceSubscriptionLevel").ProfessionalServiceSubscriptionLevel = null as any;
utilities.lazyLoad(exports, ["ProfessionalServiceSubscriptionLevel"], () => require("./professionalServiceSubscriptionLevel"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:professionalservice:ProfessionalServiceSubscriptionLevel":
                return new ProfessionalServiceSubscriptionLevel(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "professionalservice", _module)