import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified Content Filters associated with the Azure OpenAI account.
 * Azure REST API version: 2023-10-01-preview.
 */
export function getRaiPolicy(args: GetRaiPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetRaiPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cognitiveservices:getRaiPolicy", {
        "accountName": args.accountName,
        "raiPolicyName": args.raiPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRaiPolicyArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: string;
    /**
     * The name of the RaiPolicy associated with the Cognitive Services Account
     */
    raiPolicyName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Cognitive Services RaiPolicy.
 */
export interface GetRaiPolicyResult {
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
     * Metadata pertaining to creation and last modification of the resource.
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
 * Gets the specified Content Filters associated with the Azure OpenAI account.
 * Azure REST API version: 2023-10-01-preview.
 */
export function getRaiPolicyOutput(args: GetRaiPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRaiPolicyResult> {
    return pulumi.output(args).apply((a: any) => getRaiPolicy(a, opts))
}

export interface GetRaiPolicyOutputArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the RaiPolicy associated with the Cognitive Services Account
     */
    raiPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}