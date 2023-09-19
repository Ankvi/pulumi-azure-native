import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * DevOps Configuration resource.
 * Azure REST API version: 2023-09-01-preview.
 */
export function getDevOpsConfiguration(args: GetDevOpsConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetDevOpsConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getDevOpsConfiguration", {
        "resourceGroupName": args.resourceGroupName,
        "securityConnectorName": args.securityConnectorName,
    }, opts);
}

export interface GetDevOpsConfigurationArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The security connector name.
     */
    securityConnectorName: string;
}

/**
 * DevOps Configuration resource.
 */
export interface GetDevOpsConfigurationResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * DevOps Configuration properties.
     */
    readonly properties: types.outputs.DevOpsConfigurationPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * DevOps Configuration resource.
 * Azure REST API version: 2023-09-01-preview.
 */
export function getDevOpsConfigurationOutput(args: GetDevOpsConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDevOpsConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getDevOpsConfiguration(a, opts))
}

export interface GetDevOpsConfigurationOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The security connector name.
     */
    securityConnectorName: pulumi.Input<string>;
}
