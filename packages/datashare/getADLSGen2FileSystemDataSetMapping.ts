import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DataSetMapping in a shareSubscription
 * Azure REST API version: 2021-08-01.
 */
export function getADLSGen2FileSystemDataSetMapping(args: GetADLSGen2FileSystemDataSetMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetADLSGen2FileSystemDataSetMappingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare:getADLSGen2FileSystemDataSetMapping", {
        "accountName": args.accountName,
        "dataSetMappingName": args.dataSetMappingName,
        "resourceGroupName": args.resourceGroupName,
        "shareSubscriptionName": args.shareSubscriptionName,
    }, opts);
}

export interface GetADLSGen2FileSystemDataSetMappingArgs {
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
 * An ADLS Gen2 file system data set mapping.
 */
export interface GetADLSGen2FileSystemDataSetMappingResult {
    /**
     * The id of the source data set.
     */
    readonly dataSetId: string;
    /**
     * Gets the status of the data set mapping.
     */
    readonly dataSetMappingStatus: string;
    /**
     * The file system name.
     */
    readonly fileSystem: string;
    /**
     * The resource id of the azure resource
     */
    readonly id: string;
    /**
     * Kind of data set mapping.
     * Expected value is 'AdlsGen2FileSystem'.
     */
    readonly kind: "AdlsGen2FileSystem";
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
    readonly systemData: types.outputs.datashare.SystemDataResponse;
    /**
     * Type of the azure resource
     */
    readonly type: string;
}
/**
 * Get a DataSetMapping in a shareSubscription
 * Azure REST API version: 2021-08-01.
 */
export function getADLSGen2FileSystemDataSetMappingOutput(args: GetADLSGen2FileSystemDataSetMappingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetADLSGen2FileSystemDataSetMappingResult> {
    return pulumi.output(args).apply((a: any) => getADLSGen2FileSystemDataSetMapping(a, opts))
}

export interface GetADLSGen2FileSystemDataSetMappingOutputArgs {
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
