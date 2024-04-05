import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
 */
export function listIotHubResourceKeysForKeyName(args: ListIotHubResourceKeysForKeyNameArgs, opts?: pulumi.InvokeOptions): Promise<ListIotHubResourceKeysForKeyNameResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devices/v20230630preview:listIotHubResourceKeysForKeyName", {
        "keyName": args.keyName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListIotHubResourceKeysForKeyNameArgs {
    /**
     * The name of the shared access policy.
     */
    keyName: string;
    /**
     * The name of the resource group that contains the IoT hub.
     */
    resourceGroupName: string;
    /**
     * The name of the IoT hub.
     */
    resourceName: string;
}

/**
 * The properties of an IoT hub shared access policy.
 */
export interface ListIotHubResourceKeysForKeyNameResult {
    /**
     * The name of the shared access policy.
     */
    readonly keyName: string;
    /**
     * The primary key.
     */
    readonly primaryKey?: string;
    /**
     * The permissions assigned to the shared access policy.
     */
    readonly rights: string;
    /**
     * The secondary key.
     */
    readonly secondaryKey?: string;
}
/**
 * Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
 */
export function listIotHubResourceKeysForKeyNameOutput(args: ListIotHubResourceKeysForKeyNameOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListIotHubResourceKeysForKeyNameResult> {
    return pulumi.output(args).apply((a: any) => listIotHubResourceKeysForKeyName(a, opts))
}

export interface ListIotHubResourceKeysForKeyNameOutputArgs {
    /**
     * The name of the shared access policy.
     */
    keyName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the IoT hub.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the IoT hub.
     */
    resourceName: pulumi.Input<string>;
}