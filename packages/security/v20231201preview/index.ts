import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AutomationArgs } from "./automation";
export type Automation = import("./automation").Automation;
export const Automation: typeof import("./automation").Automation = null as any;
utilities.lazyLoad(exports, ["Automation"], () => require("./automation"));

export { GetAutomationArgs, GetAutomationResult, GetAutomationOutputArgs } from "./getAutomation";
export const getAutomation: typeof import("./getAutomation").getAutomation = null as any;
export const getAutomationOutput: typeof import("./getAutomation").getAutomationOutput = null as any;
utilities.lazyLoad(exports, ["getAutomation","getAutomationOutput"], () => require("./getAutomation"));

export { GetSecurityContactArgs, GetSecurityContactResult, GetSecurityContactOutputArgs } from "./getSecurityContact";
export const getSecurityContact: typeof import("./getSecurityContact").getSecurityContact = null as any;
export const getSecurityContactOutput: typeof import("./getSecurityContact").getSecurityContactOutput = null as any;
utilities.lazyLoad(exports, ["getSecurityContact","getSecurityContactOutput"], () => require("./getSecurityContact"));

export { SecurityContactArgs } from "./securityContact";
export type SecurityContact = import("./securityContact").SecurityContact;
export const SecurityContact: typeof import("./securityContact").SecurityContact = null as any;
utilities.lazyLoad(exports, ["SecurityContact"], () => require("./securityContact"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:security/v20231201preview:Automation":
                return new Automation(name, <any>undefined, { urn })
            case "azure-native:security/v20231201preview:SecurityContact":
                return new SecurityContact(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "security/v20231201preview", _module)