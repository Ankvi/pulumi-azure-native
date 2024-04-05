import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of a storage account’s Queue service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 */
export function getQueueServiceProperties(args: GetQueueServicePropertiesArgs, opts?: pulumi.InvokeOptions): Promise<GetQueueServicePropertiesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storage/v20220901:getQueueServiceProperties", {
        "accountName": args.accountName,
        "queueServiceName": args.queueServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetQueueServicePropertiesArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: string;
    /**
     * The name of the Queue Service within the specified storage account. Queue Service Name must be 'default'
     */
    queueServiceName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The properties of a storage account’s Queue service.
 */
export interface GetQueueServicePropertiesResult {
    /**
     * Specifies CORS rules for the Queue service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Queue service.
     */
    readonly cors?: types.outputs.CorsRulesResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the properties of a storage account’s Queue service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 */
export function getQueueServicePropertiesOutput(args: GetQueueServicePropertiesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetQueueServicePropertiesResult> {
    return pulumi.output(args).apply((a: any) => getQueueServiceProperties(a, opts))
}

export interface GetQueueServicePropertiesOutputArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the Queue Service within the specified storage account. Queue Service Name must be 'default'
     */
    queueServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}