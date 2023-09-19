import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a backup instance with name in a backup vault
 */
export function getBackupInstance(args: GetBackupInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dataprotection/v20230401preview:getBackupInstance", {
        "backupInstanceName": args.backupInstanceName,
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetBackupInstanceArgs {
    /**
     * The name of the backup instance.
     */
    backupInstanceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the backup vault.
     */
    vaultName: string;
}

/**
 * BackupInstance Resource
 */
export interface GetBackupInstanceResult {
    /**
     * Proxy Resource Id represents the complete path to the resource.
     */
    readonly id: string;
    /**
     * Proxy Resource name associated with the resource.
     */
    readonly name: string;
    /**
     * BackupInstanceResource properties
     */
    readonly properties: types.outputs.BackupInstanceResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Proxy Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Proxy Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    readonly type: string;
}
/**
 * Gets a backup instance with name in a backup vault
 */
export function getBackupInstanceOutput(args: GetBackupInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBackupInstanceResult> {
    return pulumi.output(args).apply((a: any) => getBackupInstance(a, opts))
}

export interface GetBackupInstanceOutputArgs {
    /**
     * The name of the backup instance.
     */
    backupInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the backup vault.
     */
    vaultName: pulumi.Input<string>;
}
