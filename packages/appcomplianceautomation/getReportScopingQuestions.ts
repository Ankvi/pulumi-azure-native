import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed.
 * Azure REST API version: 2024-06-27.
 */
export function getReportScopingQuestions(args: GetReportScopingQuestionsArgs, opts?: pulumi.InvokeOptions): Promise<GetReportScopingQuestionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appcomplianceautomation:getReportScopingQuestions", {
        "reportName": args.reportName,
    }, opts);
}

export interface GetReportScopingQuestionsArgs {
    /**
     * Report Name.
     */
    reportName: string;
}

/**
 * Scoping question list.
 */
export interface GetReportScopingQuestionsResult {
    /**
     * List of scoping questions.
     */
    readonly questions?: types.outputs.ScopingQuestionResponse[];
}
/**
 * Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service unregistered, automation removed.
 * Azure REST API version: 2024-06-27.
 */
export function getReportScopingQuestionsOutput(args: GetReportScopingQuestionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReportScopingQuestionsResult> {
    return pulumi.output(args).apply((a: any) => getReportScopingQuestions(a, opts))
}

export interface GetReportScopingQuestionsOutputArgs {
    /**
     * Report Name.
     */
    reportName: pulumi.Input<string>;
}