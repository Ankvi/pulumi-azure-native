import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
 *
 * Uses Azure REST API version 2023-06-30.
 *
 * Other available API versions: 2016-02-03, 2017-01-19, 2017-07-01, 2018-01-22, 2018-04-01, 2018-12-01-preview, 2019-03-22, 2019-03-22-preview, 2019-07-01-preview, 2019-11-04, 2020-03-01, 2020-04-01, 2020-06-15, 2020-07-10-preview, 2020-08-01, 2020-08-31, 2020-08-31-preview, 2021-02-01-preview, 2021-03-03-preview, 2021-03-31, 2021-07-01, 2021-07-01-preview, 2021-07-02, 2021-07-02-preview, 2022-04-30-preview, 2022-11-15-preview, 2023-06-30-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native iothub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listIotHubResourceKeys(args: ListIotHubResourceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListIotHubResourceKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iothub:listIotHubResourceKeys", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListIotHubResourceKeysArgs {
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
 * The list of shared access policies with a next link.
 */
export interface ListIotHubResourceKeysResult {
    /**
     * The next link.
     */
    readonly nextLink: string;
    /**
     * The list of shared access policies.
     */
    readonly value?: types.outputs.SharedAccessSignatureAuthorizationRuleResponse[];
}
/**
 * Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
 *
 * Uses Azure REST API version 2023-06-30.
 *
 * Other available API versions: 2016-02-03, 2017-01-19, 2017-07-01, 2018-01-22, 2018-04-01, 2018-12-01-preview, 2019-03-22, 2019-03-22-preview, 2019-07-01-preview, 2019-11-04, 2020-03-01, 2020-04-01, 2020-06-15, 2020-07-10-preview, 2020-08-01, 2020-08-31, 2020-08-31-preview, 2021-02-01-preview, 2021-03-03-preview, 2021-03-31, 2021-07-01, 2021-07-01-preview, 2021-07-02, 2021-07-02-preview, 2022-04-30-preview, 2022-11-15-preview, 2023-06-30-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native iothub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listIotHubResourceKeysOutput(args: ListIotHubResourceKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListIotHubResourceKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:iothub:listIotHubResourceKeys", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListIotHubResourceKeysOutputArgs {
    /**
     * The name of the resource group that contains the IoT hub.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the IoT hub.
     */
    resourceName: pulumi.Input<string>;
}