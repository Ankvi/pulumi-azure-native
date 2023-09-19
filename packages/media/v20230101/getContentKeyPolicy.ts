import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details of a Content Key Policy in the Media Services account
 */
export function getContentKeyPolicy(args: GetContentKeyPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetContentKeyPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media/v20230101:getContentKeyPolicy", {
        "accountName": args.accountName,
        "contentKeyPolicyName": args.contentKeyPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetContentKeyPolicyArgs {
    /**
     * The Media Services account name.
     */
    accountName: string;
    /**
     * The Content Key Policy name.
     */
    contentKeyPolicyName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * A Content Key Policy resource.
 */
export interface GetContentKeyPolicyResult {
    /**
     * The creation date of the Policy
     */
    readonly created: string;
    /**
     * A description for the Policy.
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The last modified date of the Policy
     */
    readonly lastModified: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The Key Policy options.
     */
    readonly options: types.outputs.ContentKeyPolicyOptionResponse[];
    /**
     * The legacy Policy ID.
     */
    readonly policyId: string;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the details of a Content Key Policy in the Media Services account
 */
export function getContentKeyPolicyOutput(args: GetContentKeyPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContentKeyPolicyResult> {
    return pulumi.output(args).apply((a: any) => getContentKeyPolicy(a, opts))
}

export interface GetContentKeyPolicyOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The Content Key Policy name.
     */
    contentKeyPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
