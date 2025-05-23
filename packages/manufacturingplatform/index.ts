import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetManufacturingDataServiceArgs, GetManufacturingDataServiceResult, GetManufacturingDataServiceOutputArgs } from "./getManufacturingDataService";
export const getManufacturingDataService: typeof import("./getManufacturingDataService").getManufacturingDataService = null as any;
export const getManufacturingDataServiceOutput: typeof import("./getManufacturingDataService").getManufacturingDataServiceOutput = null as any;
utilities.lazyLoad(exports, ["getManufacturingDataService","getManufacturingDataServiceOutput"], () => require("./getManufacturingDataService"));

export { ListManufacturingDataServiceAvailableVersionsArgs, ListManufacturingDataServiceAvailableVersionsResult, ListManufacturingDataServiceAvailableVersionsOutputArgs } from "./listManufacturingDataServiceAvailableVersions";
export const listManufacturingDataServiceAvailableVersions: typeof import("./listManufacturingDataServiceAvailableVersions").listManufacturingDataServiceAvailableVersions = null as any;
export const listManufacturingDataServiceAvailableVersionsOutput: typeof import("./listManufacturingDataServiceAvailableVersions").listManufacturingDataServiceAvailableVersionsOutput = null as any;
utilities.lazyLoad(exports, ["listManufacturingDataServiceAvailableVersions","listManufacturingDataServiceAvailableVersionsOutput"], () => require("./listManufacturingDataServiceAvailableVersions"));

export { ManufacturingDataServiceArgs } from "./manufacturingDataService";
export type ManufacturingDataService = import("./manufacturingDataService").ManufacturingDataService;
export const ManufacturingDataService: typeof import("./manufacturingDataService").ManufacturingDataService = null as any;
utilities.lazyLoad(exports, ["ManufacturingDataService"], () => require("./manufacturingDataService"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:manufacturingplatform:ManufacturingDataService":
                return new ManufacturingDataService(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "manufacturingplatform", _module)