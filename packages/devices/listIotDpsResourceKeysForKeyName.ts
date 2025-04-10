import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List primary and secondary keys for a specific key name
 *
 * Uses Azure REST API version 2022-12-12.
 *
 * Other available API versions: 2020-09-01-preview, 2023-03-01-preview, 2025-02-01-preview.
 */
export function listIotDpsResourceKeysForKeyName(args: ListIotDpsResourceKeysForKeyNameArgs, opts?: pulumi.InvokeOptions): Promise<ListIotDpsResourceKeysForKeyNameResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devices:listIotDpsResourceKeysForKeyName", {
        "keyName": args.keyName,
        "provisioningServiceName": args.provisioningServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListIotDpsResourceKeysForKeyNameArgs {
    /**
     * Logical key name to get key-values for.
     */
    keyName: string;
    /**
     * Name of the provisioning service.
     */
    provisioningServiceName: string;
    /**
     * The name of the resource group that contains the provisioning service.
     */
    resourceGroupName: string;
}

/**
 * Description of the shared access key.
 */
export interface ListIotDpsResourceKeysForKeyNameResult {
    /**
     * Name of the key.
     */
    readonly keyName: string;
    /**
     * Primary SAS key value.
     */
    readonly primaryKey?: string;
    /**
     * Rights that this key has.
     */
    readonly rights: string;
    /**
     * Secondary SAS key value.
     */
    readonly secondaryKey?: string;
}
/**
 * List primary and secondary keys for a specific key name
 *
 * Uses Azure REST API version 2022-12-12.
 *
 * Other available API versions: 2020-09-01-preview, 2023-03-01-preview, 2025-02-01-preview.
 */
export function listIotDpsResourceKeysForKeyNameOutput(args: ListIotDpsResourceKeysForKeyNameOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListIotDpsResourceKeysForKeyNameResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devices:listIotDpsResourceKeysForKeyName", {
        "keyName": args.keyName,
        "provisioningServiceName": args.provisioningServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListIotDpsResourceKeysForKeyNameOutputArgs {
    /**
     * Logical key name to get key-values for.
     */
    keyName: pulumi.Input<string>;
    /**
     * Name of the provisioning service.
     */
    provisioningServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the provisioning service.
     */
    resourceGroupName: pulumi.Input<string>;
}