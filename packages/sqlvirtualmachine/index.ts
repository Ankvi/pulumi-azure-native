import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AvailabilityGroupListenerArgs } from "./availabilityGroupListener";
export type AvailabilityGroupListener = import("./availabilityGroupListener").AvailabilityGroupListener;
export const AvailabilityGroupListener: typeof import("./availabilityGroupListener").AvailabilityGroupListener = null as any;
utilities.lazyLoad(exports, ["AvailabilityGroupListener"], () => require("./availabilityGroupListener"));

export { GetAvailabilityGroupListenerArgs, GetAvailabilityGroupListenerResult, GetAvailabilityGroupListenerOutputArgs } from "./getAvailabilityGroupListener";
export const getAvailabilityGroupListener: typeof import("./getAvailabilityGroupListener").getAvailabilityGroupListener = null as any;
export const getAvailabilityGroupListenerOutput: typeof import("./getAvailabilityGroupListener").getAvailabilityGroupListenerOutput = null as any;
utilities.lazyLoad(exports, ["getAvailabilityGroupListener","getAvailabilityGroupListenerOutput"], () => require("./getAvailabilityGroupListener"));

export { GetSqlVirtualMachineArgs, GetSqlVirtualMachineResult, GetSqlVirtualMachineOutputArgs } from "./getSqlVirtualMachine";
export const getSqlVirtualMachine: typeof import("./getSqlVirtualMachine").getSqlVirtualMachine = null as any;
export const getSqlVirtualMachineOutput: typeof import("./getSqlVirtualMachine").getSqlVirtualMachineOutput = null as any;
utilities.lazyLoad(exports, ["getSqlVirtualMachine","getSqlVirtualMachineOutput"], () => require("./getSqlVirtualMachine"));

export { GetSqlVirtualMachineGroupArgs, GetSqlVirtualMachineGroupResult, GetSqlVirtualMachineGroupOutputArgs } from "./getSqlVirtualMachineGroup";
export const getSqlVirtualMachineGroup: typeof import("./getSqlVirtualMachineGroup").getSqlVirtualMachineGroup = null as any;
export const getSqlVirtualMachineGroupOutput: typeof import("./getSqlVirtualMachineGroup").getSqlVirtualMachineGroupOutput = null as any;
utilities.lazyLoad(exports, ["getSqlVirtualMachineGroup","getSqlVirtualMachineGroupOutput"], () => require("./getSqlVirtualMachineGroup"));

export { SqlVirtualMachineArgs } from "./sqlVirtualMachine";
export type SqlVirtualMachine = import("./sqlVirtualMachine").SqlVirtualMachine;
export const SqlVirtualMachine: typeof import("./sqlVirtualMachine").SqlVirtualMachine = null as any;
utilities.lazyLoad(exports, ["SqlVirtualMachine"], () => require("./sqlVirtualMachine"));

export { SqlVirtualMachineGroupArgs } from "./sqlVirtualMachineGroup";
export type SqlVirtualMachineGroup = import("./sqlVirtualMachineGroup").SqlVirtualMachineGroup;
export const SqlVirtualMachineGroup: typeof import("./sqlVirtualMachineGroup").SqlVirtualMachineGroup = null as any;
utilities.lazyLoad(exports, ["SqlVirtualMachineGroup"], () => require("./sqlVirtualMachineGroup"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:sqlvirtualmachine:AvailabilityGroupListener":
                return new AvailabilityGroupListener(name, <any>undefined, { urn })
            case "azure-native:sqlvirtualmachine:SqlVirtualMachine":
                return new SqlVirtualMachine(name, <any>undefined, { urn })
            case "azure-native:sqlvirtualmachine:SqlVirtualMachineGroup":
                return new SqlVirtualMachineGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "sqlvirtualmachine", _module)