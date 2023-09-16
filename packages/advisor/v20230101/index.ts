import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetSuppressionArgs, GetSuppressionResult, GetSuppressionOutputArgs } from "./getSuppression";
export const getSuppression: typeof import("./getSuppression").getSuppression = null as any;
export const getSuppressionOutput: typeof import("./getSuppression").getSuppressionOutput = null as any;
utilities.lazyLoad(exports, ["getSuppression","getSuppressionOutput"], () => require("./getSuppression"));

export { SuppressionArgs } from "./suppression";
export type Suppression = import("./suppression").Suppression;
export const Suppression: typeof import("./suppression").Suppression = null as any;
utilities.lazyLoad(exports, ["Suppression"], () => require("./suppression"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:advisor/v20230101:Suppression":
                return new Suppression(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "advisor/v20230101", _module)
