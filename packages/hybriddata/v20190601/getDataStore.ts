import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This method gets the data store/repository by name.
 */
export function getDataStore(args: GetDataStoreArgs, opts?: pulumi.InvokeOptions): Promise<GetDataStoreResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybriddata/v20190601:getDataStore", {
        "dataManagerName": args.dataManagerName,
        "dataStoreName": args.dataStoreName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataStoreArgs {
    /**
     * The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    dataManagerName: string;
    /**
     * The data store/repository name queried.
     */
    dataStoreName: string;
    /**
     * The Resource Group Name
     */
    resourceGroupName: string;
}

/**
 * Data store.
 */
export interface GetDataStoreResult {
    /**
     * List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
     */
    readonly customerSecrets?: types.outputs.CustomerSecretResponse[];
    /**
     * The arm id of the data store type.
     */
    readonly dataStoreTypeId: string;
    /**
     * A generic json used differently by each data source type.
     */
    readonly extendedProperties?: any;
    /**
     * Id of the object.
     */
    readonly id: string;
    /**
     * Name of the object.
     */
    readonly name: string;
    /**
     * Arm Id for the manager resource to which the data source is associated. This is optional.
     */
    readonly repositoryId?: string;
    /**
     * State of the data source.
     */
    readonly state: string;
    /**
     * Type of the object.
     */
    readonly type: string;
}
/**
 * This method gets the data store/repository by name.
 */
export function getDataStoreOutput(args: GetDataStoreOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataStoreResult> {
    return pulumi.output(args).apply((a: any) => getDataStore(a, opts))
}

export interface GetDataStoreOutputArgs {
    /**
     * The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    dataManagerName: pulumi.Input<string>;
    /**
     * The data store/repository name queried.
     */
    dataStoreName: pulumi.Input<string>;
    /**
     * The Resource Group Name
     */
    resourceGroupName: pulumi.Input<string>;
}
