import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified Content Filters associated with the Subscription.
 *
 * Uses Azure REST API version 2025-10-01-preview.
 */
export function getSubscriptionRaiPolicy(args: GetSubscriptionRaiPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetSubscriptionRaiPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cognitiveservices:getSubscriptionRaiPolicy", {
        "raiPolicyName": args.raiPolicyName,
    }, opts);
}

export interface GetSubscriptionRaiPolicyArgs {
    /**
     * The name of the RaiPolicy associated with the Cognitive Services Account
     */
    raiPolicyName: string;
}

/**
 * Cognitive Services RaiPolicy.
 */
export interface GetSubscriptionRaiPolicyResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Resource Etag.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of Cognitive Services RaiPolicy.
     */
    readonly properties: types.outputs.RaiPolicyPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the specified Content Filters associated with the Subscription.
 *
 * Uses Azure REST API version 2025-10-01-preview.
 */
export function getSubscriptionRaiPolicyOutput(args: GetSubscriptionRaiPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSubscriptionRaiPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cognitiveservices:getSubscriptionRaiPolicy", {
        "raiPolicyName": args.raiPolicyName,
    }, opts);
}

export interface GetSubscriptionRaiPolicyOutputArgs {
    /**
     * The name of the RaiPolicy associated with the Cognitive Services Account
     */
    raiPolicyName: pulumi.Input<string>;
}