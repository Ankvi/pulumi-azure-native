import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
 *
 * Uses Azure REST API version 2023-06-30.
 *
 * Other available API versions: 2016-02-03, 2017-01-19, 2017-07-01, 2018-01-22, 2018-04-01, 2018-12-01-preview, 2019-03-22, 2019-03-22-preview, 2019-07-01-preview, 2019-11-04, 2020-03-01, 2020-04-01, 2020-06-15, 2020-07-10-preview, 2020-08-01, 2020-08-31, 2020-08-31-preview, 2021-02-01-preview, 2021-03-03-preview, 2021-03-31, 2021-07-01, 2021-07-01-preview, 2021-07-02, 2021-07-02-preview, 2022-04-30-preview, 2022-11-15-preview, 2023-06-30-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native iothub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listIotHubResourceKeysForKeyName(args: ListIotHubResourceKeysForKeyNameArgs, opts?: pulumi.InvokeOptions): Promise<ListIotHubResourceKeysForKeyNameResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iothub:listIotHubResourceKeysForKeyName", {
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
 *
 * Uses Azure REST API version 2023-06-30.
 *
 * Other available API versions: 2016-02-03, 2017-01-19, 2017-07-01, 2018-01-22, 2018-04-01, 2018-12-01-preview, 2019-03-22, 2019-03-22-preview, 2019-07-01-preview, 2019-11-04, 2020-03-01, 2020-04-01, 2020-06-15, 2020-07-10-preview, 2020-08-01, 2020-08-31, 2020-08-31-preview, 2021-02-01-preview, 2021-03-03-preview, 2021-03-31, 2021-07-01, 2021-07-01-preview, 2021-07-02, 2021-07-02-preview, 2022-04-30-preview, 2022-11-15-preview, 2023-06-30-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native iothub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listIotHubResourceKeysForKeyNameOutput(args: ListIotHubResourceKeysForKeyNameOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListIotHubResourceKeysForKeyNameResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:iothub:listIotHubResourceKeysForKeyName", {
        "keyName": args.keyName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
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