import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets details of the specific container registered to your Recovery Services Vault.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-06-01, 2023-08-01, 2024-01-01, 2024-02-01.
 */
export function getProtectionContainer(args: GetProtectionContainerArgs, opts?: pulumi.InvokeOptions): Promise<GetProtectionContainerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices:getProtectionContainer", {
        "containerName": args.containerName,
        "fabricName": args.fabricName,
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetProtectionContainerArgs {
    /**
     * Name of the container whose details need to be fetched.
     */
    containerName: string;
    /**
     * Name of the fabric where the container belongs.
     */
    fabricName: string;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: string;
    /**
     * The name of the recovery services vault.
     */
    vaultName: string;
}

/**
 * Base class for container with backup items. Containers with specific workloads are derived from this class.
 */
export interface GetProtectionContainerResult {
    /**
     * Optional ETag.
     */
    readonly eTag?: string;
    /**
     * Resource Id represents the complete path to the resource.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name associated with the resource.
     */
    readonly name: string;
    /**
     * ProtectionContainerResource properties
     */
    readonly properties: types.outputs.AzureBackupServerContainerResponse | types.outputs.AzureIaaSClassicComputeVMContainerResponse | types.outputs.AzureIaaSComputeVMContainerResponse | types.outputs.AzureSQLAGWorkloadContainerProtectionContainerResponse | types.outputs.AzureSqlContainerResponse | types.outputs.AzureStorageContainerResponse | types.outputs.AzureVMAppContainerProtectionContainerResponse | types.outputs.AzureWorkloadContainerResponse | types.outputs.DpmContainerResponse | types.outputs.GenericContainerResponse | types.outputs.IaaSVMContainerResponse | types.outputs.MabContainerResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    readonly type: string;
}
/**
 * Gets details of the specific container registered to your Recovery Services Vault.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-06-01, 2023-08-01, 2024-01-01, 2024-02-01.
 */
export function getProtectionContainerOutput(args: GetProtectionContainerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProtectionContainerResult> {
    return pulumi.output(args).apply((a: any) => getProtectionContainer(a, opts))
}

export interface GetProtectionContainerOutputArgs {
    /**
     * Name of the container whose details need to be fetched.
     */
    containerName: pulumi.Input<string>;
    /**
     * Name of the fabric where the container belongs.
     */
    fabricName: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    vaultName: pulumi.Input<string>;
}