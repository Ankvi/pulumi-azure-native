import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CommunityTrainingArgs } from "./communityTraining";
export type CommunityTraining = import("./communityTraining").CommunityTraining;
export const CommunityTraining: typeof import("./communityTraining").CommunityTraining = null as any;
utilities.lazyLoad(exports, ["CommunityTraining"], () => require("./communityTraining"));

export { GetCommunityTrainingArgs, GetCommunityTrainingResult, GetCommunityTrainingOutputArgs } from "./getCommunityTraining";
export const getCommunityTraining: typeof import("./getCommunityTraining").getCommunityTraining = null as any;
export const getCommunityTrainingOutput: typeof import("./getCommunityTraining").getCommunityTrainingOutput = null as any;
utilities.lazyLoad(exports, ["getCommunityTraining","getCommunityTrainingOutput"], () => require("./getCommunityTraining"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:community:CommunityTraining":
                return new CommunityTraining(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "community", _module)