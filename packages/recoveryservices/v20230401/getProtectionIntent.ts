import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Provides the details of the protection intent up item. This is an asynchronous operation. To know the status of the operation,
 * call the GetItemOperationResult API.
 */
export function getProtectionIntent(args: GetProtectionIntentArgs, opts?: pulumi.InvokeOptions): Promise<GetProtectionIntentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recoveryservices/v20230401:getProtectionIntent", {
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
 */
export function getProtectionIntentOutput(args: GetProtectionIntentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProtectionIntentResult> {
    return pulumi.output(args).apply((a: any) => getProtectionIntent(a, opts))
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