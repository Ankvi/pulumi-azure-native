import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DataSetMapping in a shareSubscription
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function getBlobContainerDataSetMapping(args: GetBlobContainerDataSetMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetBlobContainerDataSetMappingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare:getBlobContainerDataSetMapping", {
        "accountName": args.accountName,
        "dataSetMappingName": args.dataSetMappingName,
        "resourceGroupName": args.resourceGroupName,
        "shareSubscriptionName": args.shareSubscriptionName,
    }, opts);
}

export interface GetBlobContainerDataSetMappingArgs {
    /**
     * The name of the share account.
     */
    accountName: string;
    /**
     * The name of the dataSetMapping.
     */
    dataSetMappingName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The name of the shareSubscription.
     */
    shareSubscriptionName: string;
}

/**
 * A Blob container data set mapping.
 */
export interface GetBlobContainerDataSetMappingResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * BLOB Container name.
     */
    readonly containerName: string;
    /**
     * The id of the source data set.
     */
    readonly dataSetId: string;
    /**
     * Gets the status of the data set mapping.
     */
    readonly dataSetMappingStatus: string;
    /**
     * The resource id of the azure resource
     */
    readonly id: string;
    /**
     * Kind of data set mapping.
     * Expected value is 'Container'.
     */
    readonly kind: "Container";
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Provisioning state of the data set mapping.
     */
    readonly provisioningState: string;
    /**
     * Resource group of storage account.
     */
    readonly resourceGroup: string;
    /**
     * Storage account name of the source data set.
     */
    readonly storageAccountName: string;
    /**
     * Subscription id of storage account.
     */
    readonly subscriptionId: string;
    /**
     * System Data of the Azure resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Type of the azure resource
     */
    readonly type: string;
}
/**
 * Get a DataSetMapping in a shareSubscription
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function getBlobContainerDataSetMappingOutput(args: GetBlobContainerDataSetMappingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBlobContainerDataSetMappingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datashare:getBlobContainerDataSetMapping", {
        "accountName": args.accountName,
        "dataSetMappingName": args.dataSetMappingName,
        "resourceGroupName": args.resourceGroupName,
        "shareSubscriptionName": args.shareSubscriptionName,
    }, opts);
}

export interface GetBlobContainerDataSetMappingOutputArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the dataSetMapping.
     */
    dataSetMappingName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the shareSubscription.
     */
    shareSubscriptionName: pulumi.Input<string>;
}