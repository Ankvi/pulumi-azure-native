import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { BudgetArgs } from "./budget";
export type Budget = import("./budget").Budget;
export const Budget: typeof import("./budget").Budget = null as any;
utilities.lazyLoad(exports, ["Budget"], () => require("./budget"));

export { GetBudgetArgs, GetBudgetResult, GetBudgetOutputArgs } from "./getBudget";
export const getBudget: typeof import("./getBudget").getBudget = null as any;
export const getBudgetOutput: typeof import("./getBudget").getBudgetOutput = null as any;
utilities.lazyLoad(exports, ["getBudget","getBudgetOutput"], () => require("./getBudget"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:consumption:Budget":
                return new Budget(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "consumption", _module)