import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetWorkbookTemplateArgs, GetWorkbookTemplateResult, GetWorkbookTemplateOutputArgs } from "./getWorkbookTemplate";
export const getWorkbookTemplate: typeof import("./getWorkbookTemplate").getWorkbookTemplate = null as any;
export const getWorkbookTemplateOutput: typeof import("./getWorkbookTemplate").getWorkbookTemplateOutput = null as any;
utilities.lazyLoad(exports, ["getWorkbookTemplate","getWorkbookTemplateOutput"], () => require("./getWorkbookTemplate"));

export { WorkbookTemplateArgs } from "./workbookTemplate";
export type WorkbookTemplate = import("./workbookTemplate").WorkbookTemplate;
export const WorkbookTemplate: typeof import("./workbookTemplate").WorkbookTemplate = null as any;
utilities.lazyLoad(exports, ["WorkbookTemplate"], () => require("./workbookTemplate"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:insights/v20201120:WorkbookTemplate":
                return new WorkbookTemplate(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "insights/v20201120", _module)
