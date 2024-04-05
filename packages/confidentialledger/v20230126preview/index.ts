import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetLedgerArgs, GetLedgerResult, GetLedgerOutputArgs } from "./getLedger";
export const getLedger: typeof import("./getLedger").getLedger = null as any;
export const getLedgerOutput: typeof import("./getLedger").getLedgerOutput = null as any;
utilities.lazyLoad(exports, ["getLedger","getLedgerOutput"], () => require("./getLedger"));

export { GetManagedCCFArgs, GetManagedCCFResult, GetManagedCCFOutputArgs } from "./getManagedCCF";
export const getManagedCCF: typeof import("./getManagedCCF").getManagedCCF = null as any;
export const getManagedCCFOutput: typeof import("./getManagedCCF").getManagedCCFOutput = null as any;
utilities.lazyLoad(exports, ["getManagedCCF","getManagedCCFOutput"], () => require("./getManagedCCF"));

export { LedgerArgs } from "./ledger";
export type Ledger = import("./ledger").Ledger;
export const Ledger: typeof import("./ledger").Ledger = null as any;
utilities.lazyLoad(exports, ["Ledger"], () => require("./ledger"));

export { ManagedCCFArgs } from "./managedCCF";
export type ManagedCCF = import("./managedCCF").ManagedCCF;
export const ManagedCCF: typeof import("./managedCCF").ManagedCCF = null as any;
utilities.lazyLoad(exports, ["ManagedCCF"], () => require("./managedCCF"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:confidentialledger/v20230126preview:Ledger":
                return new Ledger(name, <any>undefined, { urn })
            case "azure-native:confidentialledger/v20230126preview:ManagedCCF":
                return new ManagedCCF(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "confidentialledger/v20230126preview", _module)