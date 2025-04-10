import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a workspace key
 *
 * Uses Azure REST API version 2021-06-01.
 *
 * Other available API versions: 2021-06-01-preview.
 */
export function getKey(args: GetKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse:getKey", {
        "keyName": args.keyName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetKeyArgs {
    /**
     * The name of the workspace key
     */
    keyName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * A workspace key
 */
export interface GetKeyResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Used to activate the workspace after a customer managed key is provided.
     */
    readonly isActiveCMK?: boolean;
    /**
     * The Key Vault Url of the workspace key.
     */
    readonly keyVaultUrl?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a workspace key
 *
 * Uses Azure REST API version 2021-06-01.
 *
 * Other available API versions: 2021-06-01-preview.
 */
export function getKeyOutput(args: GetKeyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:synapse:getKey", {
        "keyName": args.keyName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetKeyOutputArgs {
    /**
     * The name of the workspace key
     */
    keyName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}