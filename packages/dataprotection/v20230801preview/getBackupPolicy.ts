import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a backup policy belonging to a backup vault
 */
export function getBackupPolicy(args: GetBackupPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dataprotection/v20230801preview:getBackupPolicy", {
        "backupPolicyName": args.backupPolicyName,
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetBackupPolicyArgs {
    backupPolicyName: string;
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
 * BaseBackupPolicy resource
 */
export interface GetBackupPolicyResult {
    /**
     * Resource Id represents the complete path to the resource.
     */
    readonly id: string;
    /**
     * Resource name associated with the resource.
     */
    readonly name: string;
    /**
     * BaseBackupPolicyResource properties
     */
    readonly properties: types.outputs.BackupPolicyResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    readonly type: string;
}
/**
 * Gets a backup policy belonging to a backup vault
 */
export function getBackupPolicyOutput(args: GetBackupPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBackupPolicyResult> {
    return pulumi.output(args).apply((a: any) => getBackupPolicy(a, opts))
}

export interface GetBackupPolicyOutputArgs {
    backupPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the backup vault.
     */
    vaultName: pulumi.Input<string>;
}
