import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a backup policy belonging to a backup vault
 *
 * Uses Azure REST API version 2025-01-01.
 *
 * Other available API versions: 2023-01-01, 2023-04-01-preview, 2023-05-01, 2023-06-01-preview, 2023-08-01-preview, 2023-11-01, 2023-12-01, 2024-02-01-preview, 2024-03-01, 2024-04-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dataprotection [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBackupPolicy(args: GetBackupPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dataprotection:getBackupPolicy", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2025-01-01.
 *
 * Other available API versions: 2023-01-01, 2023-04-01-preview, 2023-05-01, 2023-06-01-preview, 2023-08-01-preview, 2023-11-01, 2023-12-01, 2024-02-01-preview, 2024-03-01, 2024-04-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dataprotection [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBackupPolicyOutput(args: GetBackupPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBackupPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dataprotection:getBackupPolicy", {
        "backupPolicyName": args.backupPolicyName,
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
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