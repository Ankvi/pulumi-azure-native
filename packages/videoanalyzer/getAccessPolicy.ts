import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves an existing access policy resource with the given name.
 *
 * Uses Azure REST API version 2021-11-01-preview.
 */
export function getAccessPolicy(args: GetAccessPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetAccessPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:videoanalyzer:getAccessPolicy", {
        "accessPolicyName": args.accessPolicyName,
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccessPolicyArgs {
    /**
     * The Access Policy name.
     */
    accessPolicyName: string;
    /**
     * The Azure Video Analyzer account name.
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Access policies help define the authentication rules, and control access to specific video resources.
 */
export interface GetAccessPolicyResult {
    /**
     * Authentication method to be used when validating client API access.
     */
    readonly authentication?: types.outputs.JwtAuthenticationResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Defines the access level granted by this policy.
     */
    readonly role?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieves an existing access policy resource with the given name.
 *
 * Uses Azure REST API version 2021-11-01-preview.
 */
export function getAccessPolicyOutput(args: GetAccessPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAccessPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:videoanalyzer:getAccessPolicy", {
        "accessPolicyName": args.accessPolicyName,
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccessPolicyOutputArgs {
    /**
     * The Access Policy name.
     */
    accessPolicyName: pulumi.Input<string>;
    /**
     * The Azure Video Analyzer account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}