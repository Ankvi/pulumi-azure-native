import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get metadata information on an assessment type in a specific subscription
 *
 * Uses Azure REST API version 2019-01-01-preview.
 */
export function getAssessmentsMetadataSubscription(args: GetAssessmentsMetadataSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetAssessmentsMetadataSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getAssessmentsMetadataSubscription", {
        "assessmentMetadataName": args.assessmentMetadataName,
    }, opts);
}

export interface GetAssessmentsMetadataSubscriptionArgs {
    /**
     * The Assessment Key - Unique key for the assessment type
     */
    assessmentMetadataName: string;
}

/**
 * Security assessment metadata
 */
export interface GetAssessmentsMetadataSubscriptionResult {
    /**
     * BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
     */
    readonly assessmentType: string;
    readonly categories?: string[];
    /**
     * Human readable description of the assessment
     */
    readonly description?: string;
    /**
     * User friendly display name of the assessment
     */
    readonly displayName: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The implementation effort required to remediate this assessment
     */
    readonly implementationEffort?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Azure resource ID of the policy definition that turns this assessment calculation on
     */
    readonly policyDefinitionId: string;
    /**
     * True if this assessment is in preview release status
     */
    readonly preview?: boolean;
    /**
     * Human readable description of what you should do to mitigate this security issue
     */
    readonly remediationDescription?: string;
    /**
     * The severity level of the assessment
     */
    readonly severity: string;
    readonly threats?: string[];
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * The user impact of the assessment
     */
    readonly userImpact?: string;
}
/**
 * Get metadata information on an assessment type in a specific subscription
 *
 * Uses Azure REST API version 2019-01-01-preview.
 */
export function getAssessmentsMetadataSubscriptionOutput(args: GetAssessmentsMetadataSubscriptionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAssessmentsMetadataSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getAssessmentsMetadataSubscription", {
        "assessmentMetadataName": args.assessmentMetadataName,
    }, opts);
}

export interface GetAssessmentsMetadataSubscriptionOutputArgs {
    /**
     * The Assessment Key - Unique key for the assessment type
     */
    assessmentMetadataName: pulumi.Input<string>;
}