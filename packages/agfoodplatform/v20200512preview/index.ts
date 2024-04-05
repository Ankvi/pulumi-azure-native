import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { FarmBeatsModelArgs } from "./farmBeatsModel";
export type FarmBeatsModel = import("./farmBeatsModel").FarmBeatsModel;
export const FarmBeatsModel: typeof import("./farmBeatsModel").FarmBeatsModel = null as any;
utilities.lazyLoad(exports, ["FarmBeatsModel"], () => require("./farmBeatsModel"));

export { GetFarmBeatsModelArgs, GetFarmBeatsModelResult, GetFarmBeatsModelOutputArgs } from "./getFarmBeatsModel";
export const getFarmBeatsModel: typeof import("./getFarmBeatsModel").getFarmBeatsModel = null as any;
export const getFarmBeatsModelOutput: typeof import("./getFarmBeatsModel").getFarmBeatsModelOutput = null as any;
utilities.lazyLoad(exports, ["getFarmBeatsModel","getFarmBeatsModelOutput"], () => require("./getFarmBeatsModel"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:agfoodplatform/v20200512preview:FarmBeatsModel":
                return new FarmBeatsModel(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "agfoodplatform/v20200512preview", _module)