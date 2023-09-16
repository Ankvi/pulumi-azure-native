import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get metadata information on an assessment type in a specific subscription
 */
export function getAssessmentMetadataInSubscription(args: GetAssessmentMetadataInSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetAssessmentMetadataInSubscriptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security/v20210601:getAssessmentMetadataInSubscription", {
        "assessmentMetadataName": args.assessmentMetadataName,
    }, opts);
}

export interface GetAssessmentMetadataInSubscriptionArgs {
    /**
     * The Assessment Key - Unique key for the assessment type
     */
    assessmentMetadataName: string;
}

/**
 * Security assessment metadata response
 */
export interface GetAssessmentMetadataInSubscriptionResult {
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
     * Describes the partner that created the assessment
     */
    readonly partnerData?: types.outputs.security.v20210601.SecurityAssessmentMetadataPartnerDataResponse;
    readonly plannedDeprecationDate?: string;
    /**
     * Azure resource ID of the policy definition that turns this assessment calculation on
     */
    readonly policyDefinitionId: string;
    /**
     * True if this assessment is in preview release status
     */
    readonly preview?: boolean;
    readonly publishDates?: types.outputs.security.v20210601.SecurityAssessmentMetadataPropertiesResponseResponsePublishDates;
    /**
     * Human readable description of what you should do to mitigate this security issue
     */
    readonly remediationDescription?: string;
    /**
     * The severity level of the assessment
     */
    readonly severity: string;
    readonly tactics?: string[];
    readonly techniques?: string[];
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
 */
export function getAssessmentMetadataInSubscriptionOutput(args: GetAssessmentMetadataInSubscriptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAssessmentMetadataInSubscriptionResult> {
    return pulumi.output(args).apply((a: any) => getAssessmentMetadataInSubscription(a, opts))
}

export interface GetAssessmentMetadataInSubscriptionOutputArgs {
    /**
     * The Assessment Key - Unique key for the assessment type
     */
    assessmentMetadataName: pulumi.Input<string>;
}
