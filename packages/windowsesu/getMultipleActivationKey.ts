import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get a MAK key.
 * Azure REST API version: 2019-09-16-preview.
 */
export function getMultipleActivationKey(args: GetMultipleActivationKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetMultipleActivationKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:windowsesu:getMultipleActivationKey", {
        "multipleActivationKeyName": args.multipleActivationKeyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMultipleActivationKeyArgs {
    /**
     * The name of the MAK key.
     */
    multipleActivationKeyName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * MAK key details.
 */
export interface GetMultipleActivationKeyResult {
    /**
     * Agreement number under which the key is requested.
     */
    readonly agreementNumber?: string;
    /**
     * End of support of security updates activated by the MAK key.
     */
    readonly expirationDate: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Number of activations/servers using the MAK key.
     */
    readonly installedServerNumber?: number;
    /**
     * <code> true </code> if user has eligible on-premises Windows physical or virtual machines, and that the requested key will only be used in their organization; <code> false </code> otherwise.
     */
    readonly isEligible?: boolean;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * MAK 5x5 key.
     */
    readonly multipleActivationKey: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Type of OS for which the key is requested.
     */
    readonly osType?: string;
    readonly provisioningState: string;
    /**
     * Type of support
     */
    readonly supportType?: string;
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
 * Get a MAK key.
 * Azure REST API version: 2019-09-16-preview.
 */
export function getMultipleActivationKeyOutput(args: GetMultipleActivationKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMultipleActivationKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:windowsesu:getMultipleActivationKey", {
        "multipleActivationKeyName": args.multipleActivationKeyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMultipleActivationKeyOutputArgs {
    /**
     * The name of the MAK key.
     */
    multipleActivationKeyName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}