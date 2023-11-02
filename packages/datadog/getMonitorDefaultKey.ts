import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Azure REST API version: 2022-06-01.
 *
 * Other available API versions: 2022-08-01, 2023-01-01.
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
 * Azure REST API version: 2022-06-01.
 *
 * Other available API versions: 2022-08-01, 2023-01-01.
 */
export function getMonitorDefaultKeyOutput(args: GetMonitorDefaultKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMonitorDefaultKeyResult> {
    return pulumi.output(args).apply((a: any) => getMonitorDefaultKey(a, opts))
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
