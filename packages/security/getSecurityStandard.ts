import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a specific security standard for the requested scope by standardId
 *
 * Uses Azure REST API version 2024-08-01.
 */
export function getSecurityStandard(args: GetSecurityStandardArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityStandardResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getSecurityStandard", {
        "scope": args.scope,
        "standardId": args.standardId,
    }, opts);
}

export interface GetSecurityStandardArgs {
    /**
     * The scope of the security standard. Valid scopes are: management group (format: 'providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: 'subscriptions/{subscriptionId}'), or security connector (format: 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
     */
    scope: string;
    /**
     * The Security Standard key - unique key for the standard type
     */
    standardId: string;
}

/**
 * Security Standard on a resource
 */
export interface GetSecurityStandardResult {
    /**
     * List of assessment keys to apply to standard scope.
     */
    readonly assessments?: types.outputs.PartialAssessmentPropertiesResponse[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * List of all standard supported clouds.
     */
    readonly cloudProviders?: string[];
    /**
     * Description of the standard
     */
    readonly description?: string;
    /**
     * Display name of the standard, equivalent to the standardId
     */
    readonly displayName?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The security standard metadata.
     */
    readonly metadata?: types.outputs.StandardMetadataResponse;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The policy set definition id associated with the standard.
     */
    readonly policySetDefinitionId?: string;
    /**
     * Standard type (Custom or Default or Compliance only currently)
     */
    readonly standardType: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Get a specific security standard for the requested scope by standardId
 *
 * Uses Azure REST API version 2024-08-01.
 */
export function getSecurityStandardOutput(args: GetSecurityStandardOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSecurityStandardResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getSecurityStandard", {
        "scope": args.scope,
        "standardId": args.standardId,
    }, opts);
}

export interface GetSecurityStandardOutputArgs {
    /**
     * The scope of the security standard. Valid scopes are: management group (format: 'providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: 'subscriptions/{subscriptionId}'), or security connector (format: 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
     */
    scope: pulumi.Input<string>;
    /**
     * The Security Standard key - unique key for the standard type
     */
    standardId: pulumi.Input<string>;
}