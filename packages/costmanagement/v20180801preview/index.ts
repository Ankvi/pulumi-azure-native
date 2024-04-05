import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ConnectorArgs } from "./connector";
export type Connector = import("./connector").Connector;
export const Connector: typeof import("./connector").Connector = null as any;
utilities.lazyLoad(exports, ["Connector"], () => require("./connector"));

export { GetConnectorArgs, GetConnectorResult, GetConnectorOutputArgs } from "./getConnector";
export const getConnector: typeof import("./getConnector").getConnector = null as any;
export const getConnectorOutput: typeof import("./getConnector").getConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getConnector","getConnectorOutput"], () => require("./getConnector"));

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


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:costmanagement/v20180801preview:Connector":
                return new Connector(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20180801preview:Report":
                return new Report(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20180801preview:ReportByBillingAccount":
                return new ReportByBillingAccount(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20180801preview:ReportByDepartment":
                return new ReportByDepartment(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20180801preview:ReportByResourceGroupName":
                return new ReportByResourceGroupName(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "costmanagement/v20180801preview", _module)