import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a specific custom recommendation for the requested scope by customRecommendationName
 * Azure REST API version: 2024-08-01.
 */
export function getCustomRecommendation(args: GetCustomRecommendationArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomRecommendationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getCustomRecommendation", {
        "customRecommendationName": args.customRecommendationName,
        "scope": args.scope,
    }, opts);
}

export interface GetCustomRecommendationArgs {
    /**
     * Name of the Custom Recommendation.
     */
    customRecommendationName: string;
    /**
     * The scope of the custom recommendation. Valid scopes are: management group (format: 'providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: 'subscriptions/{subscriptionId}'), or security connector (format: 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
     */
    scope: string;
}

/**
 * Custom Recommendation
 */
export interface GetCustomRecommendationResult {
    /**
     * The assessment metadata key used when an assessment is generated for this Recommendation.
     */
    readonly assessmentKey: string;
    /**
     * List of all standard supported clouds.
     */
    readonly cloudProviders?: string[];
    /**
     * The description to relate to the assessments generated by this Recommendation.
     */
    readonly description?: string;
    /**
     * The display name of the assessments generated by this Recommendation.
     */
    readonly displayName?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * KQL query representing the Recommendation results required.
     */
    readonly query?: string;
    /**
     * The remediation description to relate to the assessments generated by this Recommendation.
     */
    readonly remediationDescription?: string;
    /**
     * The severity to relate to the assessments generated by this Recommendation.
     */
    readonly securityIssue?: string;
    /**
     * The severity to relate to the assessments generated by this Recommendation.
     */
    readonly severity?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Get a specific custom recommendation for the requested scope by customRecommendationName
 * Azure REST API version: 2024-08-01.
 */
export function getCustomRecommendationOutput(args: GetCustomRecommendationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCustomRecommendationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getCustomRecommendation", {
        "customRecommendationName": args.customRecommendationName,
        "scope": args.scope,
    }, opts);
}

export interface GetCustomRecommendationOutputArgs {
    /**
     * Name of the Custom Recommendation.
     */
    customRecommendationName: pulumi.Input<string>;
    /**
     * The scope of the custom recommendation. Valid scopes are: management group (format: 'providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: 'subscriptions/{subscriptionId}'), or security connector (format: 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
     */
    scope: pulumi.Input<string>;
}