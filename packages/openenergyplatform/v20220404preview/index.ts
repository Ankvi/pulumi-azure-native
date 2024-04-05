import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { EnergyServiceArgs } from "./energyService";
export type EnergyService = import("./energyService").EnergyService;
export const EnergyService: typeof import("./energyService").EnergyService = null as any;
utilities.lazyLoad(exports, ["EnergyService"], () => require("./energyService"));

export { GetEnergyServiceArgs, GetEnergyServiceResult, GetEnergyServiceOutputArgs } from "./getEnergyService";
export const getEnergyService: typeof import("./getEnergyService").getEnergyService = null as any;
export const getEnergyServiceOutput: typeof import("./getEnergyService").getEnergyServiceOutput = null as any;
utilities.lazyLoad(exports, ["getEnergyService","getEnergyServiceOutput"], () => require("./getEnergyService"));

export { ListEnergyServicePartitionsArgs, ListEnergyServicePartitionsResult, ListEnergyServicePartitionsOutputArgs } from "./listEnergyServicePartitions";
export const listEnergyServicePartitions: typeof import("./listEnergyServicePartitions").listEnergyServicePartitions = null as any;
export const listEnergyServicePartitionsOutput: typeof import("./listEnergyServicePartitions").listEnergyServicePartitionsOutput = null as any;
utilities.lazyLoad(exports, ["listEnergyServicePartitions","listEnergyServicePartitionsOutput"], () => require("./listEnergyServicePartitions"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:openenergyplatform/v20220404preview:EnergyService":
                return new EnergyService(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "openenergyplatform/v20220404preview", _module)