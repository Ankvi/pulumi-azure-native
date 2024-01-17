import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetTriggerArgs, GetTriggerResult, GetTriggerOutputArgs } from "./getTrigger";
export const getTrigger: typeof import("./getTrigger").getTrigger = null as any;
export const getTriggerOutput: typeof import("./getTrigger").getTriggerOutput = null as any;
utilities.lazyLoad(exports, ["getTrigger","getTriggerOutput"], () => require("./getTrigger"));

export { GetVirtualMachineImageTemplateArgs, GetVirtualMachineImageTemplateResult, GetVirtualMachineImageTemplateOutputArgs } from "./getVirtualMachineImageTemplate";
export const getVirtualMachineImageTemplate: typeof import("./getVirtualMachineImageTemplate").getVirtualMachineImageTemplate = null as any;
export const getVirtualMachineImageTemplateOutput: typeof import("./getVirtualMachineImageTemplate").getVirtualMachineImageTemplateOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachineImageTemplate","getVirtualMachineImageTemplateOutput"], () => require("./getVirtualMachineImageTemplate"));

export { TriggerArgs } from "./trigger";
export type Trigger = import("./trigger").Trigger;
export const Trigger: typeof import("./trigger").Trigger = null as any;
utilities.lazyLoad(exports, ["Trigger"], () => require("./trigger"));

export { VirtualMachineImageTemplateArgs } from "./virtualMachineImageTemplate";
export type VirtualMachineImageTemplate = import("./virtualMachineImageTemplate").VirtualMachineImageTemplate;
export const VirtualMachineImageTemplate: typeof import("./virtualMachineImageTemplate").VirtualMachineImageTemplate = null as any;
utilities.lazyLoad(exports, ["VirtualMachineImageTemplate"], () => require("./virtualMachineImageTemplate"));


// Export enums:
export * from "./types/enums";


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:virtualmachineimages:Trigger":
                return new Trigger(name, <any>undefined, { urn })
            case "azure-native:virtualmachineimages:VirtualMachineImageTemplate":
                return new VirtualMachineImageTemplate(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "virtualmachineimages", _module)
