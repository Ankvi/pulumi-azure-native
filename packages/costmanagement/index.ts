import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { BudgetArgs } from "./budget";
export type Budget = import("./budget").Budget;
export const Budget: typeof import("./budget").Budget = null as any;
utilities.lazyLoad(exports, ["Budget"], () => require("./budget"));

export { CloudConnectorArgs } from "./cloudConnector";
export type CloudConnector = import("./cloudConnector").CloudConnector;
export const CloudConnector: typeof import("./cloudConnector").CloudConnector = null as any;
utilities.lazyLoad(exports, ["CloudConnector"], () => require("./cloudConnector"));

export { ConnectorArgs } from "./connector";
export type Connector = import("./connector").Connector;
export const Connector: typeof import("./connector").Connector = null as any;
utilities.lazyLoad(exports, ["Connector"], () => require("./connector"));

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

export { GetCloudConnectorArgs, GetCloudConnectorResult, GetCloudConnectorOutputArgs } from "./getCloudConnector";
export const getCloudConnector: typeof import("./getCloudConnector").getCloudConnector = null as any;
export const getCloudConnectorOutput: typeof import("./getCloudConnector").getCloudConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getCloudConnector","getCloudConnectorOutput"], () => require("./getCloudConnector"));

export { GetConnectorArgs, GetConnectorResult, GetConnectorOutputArgs } from "./getConnector";
export const getConnector: typeof import("./getConnector").getConnector = null as any;
export const getConnectorOutput: typeof import("./getConnector").getConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getConnector","getConnectorOutput"], () => require("./getConnector"));

export { GetCostAllocationRuleArgs, GetCostAllocationRuleResult, GetCostAllocationRuleOutputArgs } from "./getCostAllocationRule";
export const getCostAllocationRule: typeof import("./getCostAllocationRule").getCostAllocationRule = null as any;
export const getCostAllocationRuleOutput: typeof import("./getCostAllocationRule").getCostAllocationRuleOutput = null as any;
utilities.lazyLoad(exports, ["getCostAllocationRule","getCostAllocationRuleOutput"], () => require("./getCostAllocationRule"));

export { GetExportArgs, GetExportResult, GetExportOutputArgs } from "./getExport";
export const getExport: typeof import("./getExport").getExport = null as any;
export const getExportOutput: typeof import("./getExport").getExportOutput = null as any;
utilities.lazyLoad(exports, ["getExport","getExportOutput"], () => require("./getExport"));

export { GetMarkupRuleArgs, GetMarkupRuleResult, GetMarkupRuleOutputArgs } from "./getMarkupRule";
export const getMarkupRule: typeof import("./getMarkupRule").getMarkupRule = null as any;
export const getMarkupRuleOutput: typeof import("./getMarkupRule").getMarkupRuleOutput = null as any;
utilities.lazyLoad(exports, ["getMarkupRule","getMarkupRuleOutput"], () => require("./getMarkupRule"));

export { GetReportArgs, GetReportResult, GetReportOutputArgs } from "./getReport";
export const getReport: typeof import("./getReport").getReport = null as any;
export const getReportOutput: typeof import("./getReport").getReportOutput = null as any;
utilities.lazyLoad(exports, ["getReport","getReportOutput"], () => require("./getReport"));

export { GetReportByBillingAccountArgs, GetReportByBillingAccountResult, GetReportByBillingAccountOutputArgs } from "./getReportByBillingAccount";
export const getReportByBillingAccount: typeof import("./getReportByBillingAccount").getReportByBillingAccount = null as any;
export const getReportByBillingAccountOutput: typeof import("./getReportByBillingAccount").getReportByBillingAccountOutput = null as any;
utilities.lazyLoad(exports, ["getReportByBillingAccount","getReportByBillingAccountOutput"], () => require("./getReportByBillingAccount"));

export { GetReportByDepartmentArgs, GetReportByDepartmentResult, GetReportByDepartmentOutputArgs } from "./getReportByDepartment";
export const getReportByDepartment: typeof import("./getReportByDepartment").getReportByDepartment = null as any;
export const getReportByDepartmentOutput: typeof import("./getReportByDepartment").getReportByDepartmentOutput = null as any;
utilities.lazyLoad(exports, ["getReportByDepartment","getReportByDepartmentOutput"], () => require("./getReportByDepartment"));

export { GetReportByResourceGroupNameArgs, GetReportByResourceGroupNameResult, GetReportByResourceGroupNameOutputArgs } from "./getReportByResourceGroupName";
export const getReportByResourceGroupName: typeof import("./getReportByResourceGroupName").getReportByResourceGroupName = null as any;
export const getReportByResourceGroupNameOutput: typeof import("./getReportByResourceGroupName").getReportByResourceGroupNameOutput = null as any;
utilities.lazyLoad(exports, ["getReportByResourceGroupName","getReportByResourceGroupNameOutput"], () => require("./getReportByResourceGroupName"));

export { GetScheduledActionArgs, GetScheduledActionResult, GetScheduledActionOutputArgs } from "./getScheduledAction";
export const getScheduledAction: typeof import("./getScheduledAction").getScheduledAction = null as any;
export const getScheduledActionOutput: typeof import("./getScheduledAction").getScheduledActionOutput = null as any;
utilities.lazyLoad(exports, ["getScheduledAction","getScheduledActionOutput"], () => require("./getScheduledAction"));

export { GetScheduledActionByScopeArgs, GetScheduledActionByScopeResult, GetScheduledActionByScopeOutputArgs } from "./getScheduledActionByScope";
export const getScheduledActionByScope: typeof import("./getScheduledActionByScope").getScheduledActionByScope = null as any;
export const getScheduledActionByScopeOutput: typeof import("./getScheduledActionByScope").getScheduledActionByScopeOutput = null as any;
utilities.lazyLoad(exports, ["getScheduledActionByScope","getScheduledActionByScopeOutput"], () => require("./getScheduledActionByScope"));

export { GetSettingArgs, GetSettingResult, GetSettingOutputArgs } from "./getSetting";
export const getSetting: typeof import("./getSetting").getSetting = null as any;
export const getSettingOutput: typeof import("./getSetting").getSettingOutput = null as any;
utilities.lazyLoad(exports, ["getSetting","getSettingOutput"], () => require("./getSetting"));

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

export { MarkupRuleArgs } from "./markupRule";
export type MarkupRule = import("./markupRule").MarkupRule;
export const MarkupRule: typeof import("./markupRule").MarkupRule = null as any;
utilities.lazyLoad(exports, ["MarkupRule"], () => require("./markupRule"));

export { ReportArgs } from "./report";
export type Report = import("./report").Report;
export const Report: typeof import("./report").Report = null as any;
utilities.lazyLoad(exports, ["Report"], () => require("./report"));

export { ReportByBillingAccountArgs } from "./reportByBillingAccount";
export type ReportByBillingAccount = import("./reportByBillingAccount").ReportByBillingAccount;
export const ReportByBillingAccount: typeof import("./reportByBillingAccount").ReportByBillingAccount = null as any;
utilities.lazyLoad(exports, ["ReportByBillingAccount"], () => require("./reportByBillingAccount"));

export { ReportByDepartmentArgs } from "./reportByDepartment";
export type ReportByDepartment = import("./reportByDepartment").ReportByDepartment;
export const ReportByDepartment: typeof import("./reportByDepartment").ReportByDepartment = null as any;
utilities.lazyLoad(exports, ["ReportByDepartment"], () => require("./reportByDepartment"));

export { ReportByResourceGroupNameArgs } from "./reportByResourceGroupName";
export type ReportByResourceGroupName = import("./reportByResourceGroupName").ReportByResourceGroupName;
export const ReportByResourceGroupName: typeof import("./reportByResourceGroupName").ReportByResourceGroupName = null as any;
utilities.lazyLoad(exports, ["ReportByResourceGroupName"], () => require("./reportByResourceGroupName"));

export { ScheduledActionArgs } from "./scheduledAction";
export type ScheduledAction = import("./scheduledAction").ScheduledAction;
export const ScheduledAction: typeof import("./scheduledAction").ScheduledAction = null as any;
utilities.lazyLoad(exports, ["ScheduledAction"], () => require("./scheduledAction"));

export { ScheduledActionByScopeArgs } from "./scheduledActionByScope";
export type ScheduledActionByScope = import("./scheduledActionByScope").ScheduledActionByScope;
export const ScheduledActionByScope: typeof import("./scheduledActionByScope").ScheduledActionByScope = null as any;
utilities.lazyLoad(exports, ["ScheduledActionByScope"], () => require("./scheduledActionByScope"));

export { SettingArgs } from "./setting";
export type Setting = import("./setting").Setting;
export const Setting: typeof import("./setting").Setting = null as any;
utilities.lazyLoad(exports, ["Setting"], () => require("./setting"));

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
            case "azure-native:costmanagement:Budget":
                return new Budget(name, <any>undefined, { urn })
            case "azure-native:costmanagement:CloudConnector":
                return new CloudConnector(name, <any>undefined, { urn })
            case "azure-native:costmanagement:Connector":
                return new Connector(name, <any>undefined, { urn })
            case "azure-native:costmanagement:CostAllocationRule":
                return new CostAllocationRule(name, <any>undefined, { urn })
            case "azure-native:costmanagement:Export":
                return new Export(name, <any>undefined, { urn })
            case "azure-native:costmanagement:MarkupRule":
                return new MarkupRule(name, <any>undefined, { urn })
            case "azure-native:costmanagement:Report":
                return new Report(name, <any>undefined, { urn })
            case "azure-native:costmanagement:ReportByBillingAccount":
                return new ReportByBillingAccount(name, <any>undefined, { urn })
            case "azure-native:costmanagement:ReportByDepartment":
                return new ReportByDepartment(name, <any>undefined, { urn })
            case "azure-native:costmanagement:ReportByResourceGroupName":
                return new ReportByResourceGroupName(name, <any>undefined, { urn })
            case "azure-native:costmanagement:ScheduledAction":
                return new ScheduledAction(name, <any>undefined, { urn })
            case "azure-native:costmanagement:ScheduledActionByScope":
                return new ScheduledActionByScope(name, <any>undefined, { urn })
            case "azure-native:costmanagement:Setting":
                return new Setting(name, <any>undefined, { urn })
            case "azure-native:costmanagement:TagInheritanceSetting":
                return new TagInheritanceSetting(name, <any>undefined, { urn })
            case "azure-native:costmanagement:View":
                return new View(name, <any>undefined, { urn })
            case "azure-native:costmanagement:ViewByScope":
                return new ViewByScope(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "costmanagement", _module)