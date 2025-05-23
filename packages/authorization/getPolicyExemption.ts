import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation retrieves a single policy exemption, given its name and the scope it was created at.
 *
 * Uses Azure REST API version 2022-07-01-preview.
 *
 * Other available API versions: 2020-07-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPolicyExemption(args: GetPolicyExemptionArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyExemptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getPolicyExemption", {
        "policyExemptionName": args.policyExemptionName,
        "scope": args.scope,
    }, opts);
}

export interface GetPolicyExemptionArgs {
    /**
     * The name of the policy exemption to delete.
     */
    policyExemptionName: string;
    /**
     * The scope of the policy exemption. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
     */
    scope: string;
}

/**
 * The policy exemption.
 */
export interface GetPolicyExemptionResult {
    /**
     * The option whether validate the exemption is at or under the assignment scope.
     */
    readonly assignmentScopeValidation?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The description of the policy exemption.
     */
    readonly description?: string;
    /**
     * The display name of the policy exemption.
     */
    readonly displayName?: string;
    /**
     * The policy exemption category. Possible values are Waiver and Mitigated.
     */
    readonly exemptionCategory: string;
    /**
     * The expiration date and time (in UTC ISO 8601 format yyyy-MM-ddTHH:mm:ssZ) of the policy exemption.
     */
    readonly expiresOn?: string;
    /**
     * The ID of the policy exemption.
     */
    readonly id: string;
    /**
     * The policy exemption metadata. Metadata is an open ended object and is typically a collection of key value pairs.
     */
    readonly metadata?: any;
    /**
     * The name of the policy exemption.
     */
    readonly name: string;
    /**
     * The ID of the policy assignment that is being exempted.
     */
    readonly policyAssignmentId: string;
    /**
     * The policy definition reference ID list when the associated policy assignment is an assignment of a policy set definition.
     */
    readonly policyDefinitionReferenceIds?: string[];
    /**
     * The resource selector list to filter policies by resource properties.
     */
    readonly resourceSelectors?: types.outputs.ResourceSelectorResponse[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource (Microsoft.Authorization/policyExemptions).
     */
    readonly type: string;
}
/**
 * This operation retrieves a single policy exemption, given its name and the scope it was created at.
 *
 * Uses Azure REST API version 2022-07-01-preview.
 *
 * Other available API versions: 2020-07-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPolicyExemptionOutput(args: GetPolicyExemptionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPolicyExemptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:getPolicyExemption", {
        "policyExemptionName": args.policyExemptionName,
        "scope": args.scope,
    }, opts);
}

export interface GetPolicyExemptionOutputArgs {
    /**
     * The name of the policy exemption to delete.
     */
    policyExemptionName: pulumi.Input<string>;
    /**
     * The scope of the policy exemption. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
     */
    scope: pulumi.Input<string>;
}