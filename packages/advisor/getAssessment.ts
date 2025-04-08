import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a existing Azure Advisor assessment.
 *
 * Uses Azure REST API version 2023-09-01-preview.
 */
export function getAssessment(args: GetAssessmentArgs, opts?: pulumi.InvokeOptions): Promise<GetAssessmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:advisor:getAssessment", {
        "assessmentName": args.assessmentName,
    }, opts);
}

export interface GetAssessmentArgs {
    /**
     * Advisor assessment name.
     */
    assessmentName: string;
}

/**
 * The Advisor assessment result data structure.
 */
export interface GetAssessmentResult {
    /**
     * Assessment Id.
     */
    readonly assessmentId: string;
    /**
     * Assessment Type Description.
     */
    readonly description: string;
    /**
     * Assessment Id
     */
    readonly id: string;
    /**
     * Assessment Type Locale.
     */
    readonly locale?: string;
    /**
     * Assessment Name
     */
    readonly name: string;
    /**
     * Assessment Score.
     */
    readonly score: number;
    /**
     * Assessment State.
     */
    readonly state: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource Type
     */
    readonly type: string;
    /**
     * Assessment Type Id.
     */
    readonly typeId?: string;
    /**
     * Assessment Type Version.
     */
    readonly typeVersion: string;
    /**
     * Workload Id.
     */
    readonly workloadId?: string;
    /**
     * Workload Name.
     */
    readonly workloadName: string;
}
/**
 * Get a existing Azure Advisor assessment.
 *
 * Uses Azure REST API version 2023-09-01-preview.
 */
export function getAssessmentOutput(args: GetAssessmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAssessmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:advisor:getAssessment", {
        "assessmentName": args.assessmentName,
    }, opts);
}

export interface GetAssessmentOutputArgs {
    /**
     * Advisor assessment name.
     */
    assessmentName: pulumi.Input<string>;
}