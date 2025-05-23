import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an existing assessment with the specified name. Returns a json object of type 'assessment' as specified in Models section.
 *
 * Uses Azure REST API version 2019-10-01.
 */
export function getAssessment(args: GetAssessmentArgs, opts?: pulumi.InvokeOptions): Promise<GetAssessmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getAssessment", {
        "assessmentName": args.assessmentName,
        "groupName": args.groupName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAssessmentArgs {
    /**
     * Unique name of an assessment within a project.
     */
    assessmentName: string;
    /**
     * Unique name of a group within a project.
     */
    groupName: string;
    /**
     * Name of the Azure Migrate project.
     */
    projectName: string;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: string;
}

/**
 * An assessment created for a group in the Migration project.
 */
export interface GetAssessmentResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * For optimistic concurrency control.
     */
    readonly eTag?: string;
    /**
     * Path reference to this assessment. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessment/{assessmentName}
     */
    readonly id: string;
    /**
     * Unique name of an assessment.
     */
    readonly name: string;
    /**
     * Properties of the assessment.
     */
    readonly properties: types.outputs.AssessmentPropertiesResponse;
    /**
     * Type of the object = [Microsoft.Migrate/assessmentProjects/groups/assessments].
     */
    readonly type: string;
}
/**
 * Get an existing assessment with the specified name. Returns a json object of type 'assessment' as specified in Models section.
 *
 * Uses Azure REST API version 2019-10-01.
 */
export function getAssessmentOutput(args: GetAssessmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAssessmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getAssessment", {
        "assessmentName": args.assessmentName,
        "groupName": args.groupName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAssessmentOutputArgs {
    /**
     * Unique name of an assessment within a project.
     */
    assessmentName: pulumi.Input<string>;
    /**
     * Unique name of a group within a project.
     */
    groupName: pulumi.Input<string>;
    /**
     * Name of the Azure Migrate project.
     */
    projectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
}