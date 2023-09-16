import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { BudgetArgs } from "./budget";
export type Budget = import("./budget").Budget;
export const Budget: typeof import("./budget").Budget = null as any;
utilities.lazyLoad(exports, ["Budget"], () => require("./budget"));

export { ExportArgs } from "./export";
export type Export = import("./export").Export;
export const Export: typeof import("./export").Export = null as any;
utilities.lazyLoad(exports, ["Export"], () => require("./export"));

export { GetBudgetArgs, GetBudgetResult, GetBudgetOutputArgs } from "./getBudget";
export const getBudget: typeof import("./getBudget").getBudget = null as any;
export const getBudgetOutput: typeof import("./getBudget").getBudgetOutput = null as any;
utilities.lazyLoad(exports, ["getBudget","getBudgetOutput"], () => require("./getBudget"));

export { GetExportArgs, GetExportResult, GetExportOutputArgs } from "./getExport";
export const getExport: typeof import("./getExport").getExport = null as any;
export const getExportOutput: typeof import("./getExport").getExportOutput = null as any;
utilities.lazyLoad(exports, ["getExport","getExportOutput"], () => require("./getExport"));

export { GetScheduledActionArgs, GetScheduledActionResult, GetScheduledActionOutputArgs } from "./getScheduledAction";
export const getScheduledAction: typeof import("./getScheduledAction").getScheduledAction = null as any;
export const getScheduledActionOutput: typeof import("./getScheduledAction").getScheduledActionOutput = null as any;
utilities.lazyLoad(exports, ["getScheduledAction","getScheduledActionOutput"], () => require("./getScheduledAction"));

export { GetScheduledActionByScopeArgs, GetScheduledActionByScopeResult, GetScheduledActionByScopeOutputArgs } from "./getScheduledActionByScope";
export const getScheduledActionByScope: typeof import("./getScheduledActionByScope").getScheduledActionByScope = null as any;
export const getScheduledActionByScopeOutput: typeof import("./getScheduledActionByScope").getScheduledActionByScopeOutput = null as any;
utilities.lazyLoad(exports, ["getScheduledActionByScope","getScheduledActionByScopeOutput"], () => require("./getScheduledActionByScope"));

export { GetViewArgs, GetViewResult, GetViewOutputArgs } from "./getView";
export const getView: typeof import("./getView").getView = null as any;
export const getViewOutput: typeof import("./getView").getViewOutput = null as any;
utilities.lazyLoad(exports, ["getView","getViewOutput"], () => require("./getView"));

export { GetViewByScopeArgs, GetViewByScopeResult, GetViewByScopeOutputArgs } from "./getViewByScope";
export const getViewByScope: typeof import("./getViewByScope").getViewByScope = null as any;
export const getViewByScopeOutput: typeof import("./getViewByScope").getViewByScopeOutput = null as any;
utilities.lazyLoad(exports, ["getViewByScope","getViewByScopeOutput"], () => require("./getViewByScope"));

export { ScheduledActionArgs } from "./scheduledAction";
export type ScheduledAction = import("./scheduledAction").ScheduledAction;
export const ScheduledAction: typeof import("./scheduledAction").ScheduledAction = null as any;
utilities.lazyLoad(exports, ["ScheduledAction"], () => require("./scheduledAction"));

export { ScheduledActionByScopeArgs } from "./scheduledActionByScope";
export type ScheduledActionByScope = import("./scheduledActionByScope").ScheduledActionByScope;
export const ScheduledActionByScope: typeof import("./scheduledActionByScope").ScheduledActionByScope = null as any;
utilities.lazyLoad(exports, ["ScheduledActionByScope"], () => require("./scheduledActionByScope"));

export { ViewArgs } from "./view";
export type View = import("./view").View;
export const View: typeof import("./view").View = null as any;
utilities.lazyLoad(exports, ["View"], () => require("./view"));

export { ViewByScopeArgs } from "./viewByScope";
export type ViewByScope = import("./viewByScope").ViewByScope;
export const ViewByScope: typeof import("./viewByScope").ViewByScope = null as any;
utilities.lazyLoad(exports, ["ViewByScope"], () => require("./viewByScope"));


// Export enums:
export * from "../types/enums/v20230401preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:costmanagement/v20230401preview:Budget":
                return new Budget(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20230401preview:Export":
                return new Export(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20230401preview:ScheduledAction":
                return new ScheduledAction(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20230401preview:ScheduledActionByScope":
                return new ScheduledActionByScope(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20230401preview:View":
                return new View(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20230401preview:ViewByScope":
                return new ViewByScope(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "costmanagement/v20230401preview", _module)
