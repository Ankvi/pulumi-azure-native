import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Provides the details of the protection intent up item. This is an asynchronous operation. To know the status of the operation,
 * call the GetItemOperationResult API.
 *
 * Uses Azure REST API version 2024-10-01.
 *
 * Other available API versions: 2023-02-01, 2023-04-01, 2023-06-01, 2023-08-01, 2024-01-01, 2024-02-01, 2024-04-01, 2024-04-30-preview, 2024-07-30-preview, 2024-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native recoveryservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getProtectionIntent(args: GetProtectionIntentArgs, opts?: pulumi.InvokeOptions): Promise<GetProtectionIntentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices:getProtectionIntent", {
        "fabricName": args.fabricName,
        "intentObjectName": args.intentObjectName,
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetProtectionIntentArgs {
    /**
     * Fabric name associated with the backed up item.
     */
    fabricName: string;
    /**
     * Backed up item name whose details are to be fetched.
     */
    intentObjectName: string;
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
 * Base class for backup ProtectionIntent.
 */
export interface GetProtectionIntentResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * ProtectionIntentResource properties
     */
    readonly properties: types.outputs.AzureRecoveryServiceVaultProtectionIntentResponse | types.outputs.AzureResourceProtectionIntentResponse | types.outputs.AzureWorkloadAutoProtectionIntentResponse | types.outputs.AzureWorkloadContainerAutoProtectionIntentResponse | types.outputs.AzureWorkloadSQLAutoProtectionIntentResponse;
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
 * Provides the details of the protection intent up item. This is an asynchronous operation. To know the status of the operation,
 * call the GetItemOperationResult API.
 *
 * Uses Azure REST API version 2024-10-01.
 *
 * Other available API versions: 2023-02-01, 2023-04-01, 2023-06-01, 2023-08-01, 2024-01-01, 2024-02-01, 2024-04-01, 2024-04-30-preview, 2024-07-30-preview, 2024-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native recoveryservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getProtectionIntentOutput(args: GetProtectionIntentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProtectionIntentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:recoveryservices:getProtectionIntent", {
        "fabricName": args.fabricName,
        "intentObjectName": args.intentObjectName,
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetProtectionIntentOutputArgs {
    /**
     * Fabric name associated with the backed up item.
     */
    fabricName: pulumi.Input<string>;
    /**
     * Backed up item name whose details are to be fetched.
     */
    intentObjectName: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    vaultName: pulumi.Input<string>;
}