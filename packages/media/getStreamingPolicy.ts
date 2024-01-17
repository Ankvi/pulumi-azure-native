import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details of a Streaming Policy in the Media Services account
 * Azure REST API version: 2023-01-01.
 */
export function getStreamingPolicy(args: GetStreamingPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetStreamingPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:getStreamingPolicy", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "streamingPolicyName": args.streamingPolicyName,
    }, opts);
}

export interface GetStreamingPolicyArgs {
    /**
     * The Media Services account name.
     */
    accountName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
    /**
     * The Streaming Policy name.
     */
    streamingPolicyName: string;
}

/**
 * A Streaming Policy resource
 */
export interface GetStreamingPolicyResult {
    /**
     * Configuration of CommonEncryptionCbcs
     */
    readonly commonEncryptionCbcs?: types.outputs.CommonEncryptionCbcsResponse;
    /**
     * Configuration of CommonEncryptionCenc
     */
    readonly commonEncryptionCenc?: types.outputs.CommonEncryptionCencResponse;
    /**
     * Creation time of Streaming Policy
     */
    readonly created: string;
    /**
     * Default ContentKey used by current Streaming Policy
     */
    readonly defaultContentKeyPolicyName?: string;
    /**
     * Configuration of EnvelopeEncryption
     */
    readonly envelopeEncryption?: types.outputs.EnvelopeEncryptionResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Configurations of NoEncryption
     */
    readonly noEncryption?: types.outputs.NoEncryptionResponse;
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
 * Get the details of a Streaming Policy in the Media Services account
 * Azure REST API version: 2023-01-01.
 */
export function getStreamingPolicyOutput(args: GetStreamingPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStreamingPolicyResult> {
    return pulumi.output(args).apply((a: any) => getStreamingPolicy(a, opts))
}

export interface GetStreamingPolicyOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Streaming Policy name.
     */
    streamingPolicyName: pulumi.Input<string>;
}