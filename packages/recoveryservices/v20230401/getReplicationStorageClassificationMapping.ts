import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the specified storage classification mapping.
 */
export function getReplicationStorageClassificationMapping(args: GetReplicationStorageClassificationMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationStorageClassificationMappingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices/v20230401:getReplicationStorageClassificationMapping", {
        "fabricName": args.fabricName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "storageClassificationMappingName": args.storageClassificationMappingName,
        "storageClassificationName": args.storageClassificationName,
    }, opts);
}

export interface GetReplicationStorageClassificationMappingArgs {
    /**
     * Fabric name.
     */
    fabricName: string;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: string;
    /**
     * The name of the recovery services vault.
     */
    resourceName: string;
    /**
     * Storage classification mapping name.
     */
    storageClassificationMappingName: string;
    /**
     * Storage classification name.
     */
    storageClassificationName: string;
}

/**
 * Storage mapping object.
 */
export interface GetReplicationStorageClassificationMappingResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource Location
     */
    readonly location?: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * Properties of the storage mapping object.
     */
    readonly properties: types.outputs.StorageClassificationMappingPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}
/**
 * Gets the details of the specified storage classification mapping.
 */
export function getReplicationStorageClassificationMappingOutput(args: GetReplicationStorageClassificationMappingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReplicationStorageClassificationMappingResult> {
    return pulumi.output(args).apply((a: any) => getReplicationStorageClassificationMapping(a, opts))
}

export interface GetReplicationStorageClassificationMappingOutputArgs {
    /**
     * Fabric name.
     */
    fabricName: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    resourceName: pulumi.Input<string>;
    /**
     * Storage classification mapping name.
     */
    storageClassificationMappingName: pulumi.Input<string>;
    /**
     * Storage classification name.
     */
    storageClassificationName: pulumi.Input<string>;
}