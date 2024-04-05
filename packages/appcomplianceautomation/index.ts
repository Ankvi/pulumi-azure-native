import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetReportArgs, GetReportResult, GetReportOutputArgs } from "./getReport";
export const getReport: typeof import("./getReport").getReport = null as any;
export const getReportOutput: typeof import("./getReport").getReportOutput = null as any;
utilities.lazyLoad(exports, ["getReport","getReportOutput"], () => require("./getReport"));

export { ReportArgs } from "./report";
export type Report = import("./report").Report;
export const Report: typeof import("./report").Report = null as any;
utilities.lazyLoad(exports, ["Report"], () => require("./report"));


// Export sub-modules:
import * as v20221116preview from "./v20221116preview";

export {
    v20221116preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:appcomplianceautomation:Report":
                return new Report(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "appcomplianceautomation", _module)