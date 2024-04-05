import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { BudgetArgs } from "./budget";
export type Budget = import("./budget").Budget;
export const Budget: typeof import("./budget").Budget = null as any;
utilities.lazyLoad(exports, ["Budget"], () => require("./budget"));

export { CostAllocationRuleArgs } from "./costAllocationRule";
export type CostAllocationRule = import("./costAllocationRule").CostAllocationRule;
export const CostAllocationRule: typeof import("./costAllocationRule").CostAllocationRule = null as any;
utilities.lazyLoad(exports, ["CostAllocationRule"], () => require("./costAllocationRule"));

export { ExportArgs } from "./export";
export type Export = import("./export").Export;
export const Export: typeof import("./export").Export = null as any;
utilities.lazyLoad(exports, ["Export"], () => require("./export"));

export { GetBudgetArgs, GetBudgetResult, GetBudgetOutputArgs } from "./getBudget";
export const getBudget: typeof import("./getBudget").getBudget = null as any;
export const getBudgetOutput: typeof import("./getBudget").getBudgetOutput = null as any;
utilities.lazyLoad(exports, ["getBudget","getBudgetOutput"], () => require("./getBudget"));

export { GetCostAllocationRuleArgs, GetCostAllocationRuleResult, GetCostAllocationRuleOutputArgs } from "./getCostAllocationRule";
export const getCostAllocationRule: typeof import("./getCostAllocationRule").getCostAllocationRule = null as any;
export const getCostAllocationRuleOutput: typeof import("./getCostAllocationRule").getCostAllocationRuleOutput = null as any;
utilities.lazyLoad(exports, ["getCostAllocationRule","getCostAllocationRuleOutput"], () => require("./getCostAllocationRule"));

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

export { GetTagInheritanceSettingArgs, GetTagInheritanceSettingResult, GetTagInheritanceSettingOutputArgs } from "./getTagInheritanceSetting";
export const getTagInheritanceSetting: typeof import("./getTagInheritanceSetting").getTagInheritanceSetting = null as any;
export const getTagInheritanceSettingOutput: typeof import("./getTagInheritanceSetting").getTagInheritanceSettingOutput = null as any;
utilities.lazyLoad(exports, ["getTagInheritanceSetting","getTagInheritanceSettingOutput"], () => require("./getTagInheritanceSetting"));

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

export { TagInheritanceSettingArgs } from "./tagInheritanceSetting";
export type TagInheritanceSetting = import("./tagInheritanceSetting").TagInheritanceSetting;
export const TagInheritanceSetting: typeof import("./tagInheritanceSetting").TagInheritanceSetting = null as any;
utilities.lazyLoad(exports, ["TagInheritanceSetting"], () => require("./tagInheritanceSetting"));

export { ViewArgs } from "./view";
export type View = import("./view").View;
export const View: typeof import("./view").View = null as any;
utilities.lazyLoad(exports, ["View"], () => require("./view"));

export { ViewByScopeArgs } from "./viewByScope";
export type ViewByScope = import("./viewByScope").ViewByScope;
export const ViewByScope: typeof import("./viewByScope").ViewByScope = null as any;
utilities.lazyLoad(exports, ["ViewByScope"], () => require("./viewByScope"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:costmanagement/v20230801:Budget":
                return new Budget(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20230801:CostAllocationRule":
                return new CostAllocationRule(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20230801:Export":
                return new Export(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20230801:ScheduledAction":
                return new ScheduledAction(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20230801:ScheduledActionByScope":
                return new ScheduledActionByScope(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20230801:TagInheritanceSetting":
                return new TagInheritanceSetting(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20230801:View":
                return new View(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20230801:ViewByScope":
                return new ViewByScope(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "costmanagement/v20230801", _module)