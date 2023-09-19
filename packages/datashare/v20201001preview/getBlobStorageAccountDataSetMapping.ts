import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DataSetMapping in a shareSubscription
 */
export function getBlobStorageAccountDataSetMapping(args: GetBlobStorageAccountDataSetMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetBlobStorageAccountDataSetMappingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare/v20201001preview:getBlobStorageAccountDataSetMapping", {
        "accountName": args.accountName,
        "dataSetMappingName": args.dataSetMappingName,
        "resourceGroupName": args.resourceGroupName,
        "shareSubscriptionName": args.shareSubscriptionName,
    }, opts);
}

export interface GetBlobStorageAccountDataSetMappingArgs {
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
 * A blob storage account data set mapping.
 */
export interface GetBlobStorageAccountDataSetMappingResult {
    /**
     * Gets or sets the container name.
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
     * Gets or sets the path to folder within the container.
     */
    readonly folder: string;
    /**
     * The resource id of the azure resource
     */
    readonly id: string;
    /**
     * Kind of data set mapping.
     * Expected value is 'BlobStorageAccount'.
     */
    readonly kind: "BlobStorageAccount";
    /**
     * Location of the sink storage account.
     */
    readonly location: string;
    /**
     * Gets or sets the mount path on the consumer side where the dataset is to be mapped.
     */
    readonly mountPath?: string;
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Provisioning state of the data set mapping.
     */
    readonly provisioningState: string;
    /**
     * Resource id of the sink storage account
     */
    readonly storageAccountResourceId: string;
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
 */
export function getBlobStorageAccountDataSetMappingOutput(args: GetBlobStorageAccountDataSetMappingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBlobStorageAccountDataSetMappingResult> {
    return pulumi.output(args).apply((a: any) => getBlobStorageAccountDataSetMapping(a, opts))
}

export interface GetBlobStorageAccountDataSetMappingOutputArgs {
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
