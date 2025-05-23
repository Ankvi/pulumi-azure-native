import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Uses Azure REST API version 2023-10-20.
 *
 * Other available API versions: 2022-06-01, 2022-08-01, 2023-01-01, 2023-07-07. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native datadog [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMonitorDefaultKey(args: GetMonitorDefaultKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetMonitorDefaultKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datadog:getMonitorDefaultKey", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMonitorDefaultKeyArgs {
    /**
     * Monitor resource name
     */
    monitorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

export interface GetMonitorDefaultKeyResult {
    /**
     * The time of creation of the API key.
     */
    readonly created?: string;
    /**
     * The user that created the API key.
     */
    readonly createdBy?: string;
    /**
     * The value of the API key.
     */
    readonly key: string;
    /**
     * The name of the API key.
     */
    readonly name?: string;
}
/**
 * Uses Azure REST API version 2023-10-20.
 *
 * Other available API versions: 2022-06-01, 2022-08-01, 2023-01-01, 2023-07-07. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native datadog [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMonitorDefaultKeyOutput(args: GetMonitorDefaultKeyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMonitorDefaultKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datadog:getMonitorDefaultKey", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMonitorDefaultKeyOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}