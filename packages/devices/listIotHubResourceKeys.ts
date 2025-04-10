import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
 *
 * Uses Azure REST API version 2022-04-30-preview.
 *
 * Other available API versions: 2022-11-15-preview, 2023-06-30, 2023-06-30-preview.
 */
export function listIotHubResourceKeys(args: ListIotHubResourceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListIotHubResourceKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devices:listIotHubResourceKeys", {
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
 * Uses Azure REST API version 2022-04-30-preview.
 *
 * Other available API versions: 2022-11-15-preview, 2023-06-30, 2023-06-30-preview.
 */
export function listIotHubResourceKeysOutput(args: ListIotHubResourceKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListIotHubResourceKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devices:listIotHubResourceKeys", {
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