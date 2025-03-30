import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * .NET Component.
 *
 * Uses Azure REST API version 2023-11-02-preview.
 *
 * Other available API versions: 2024-02-02-preview, 2024-08-02-preview, 2024-10-02-preview.
 */
export function getDotNetComponent(args: GetDotNetComponentArgs, opts?: pulumi.InvokeOptions): Promise<GetDotNetComponentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getDotNetComponent", {
        "environmentName": args.environmentName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDotNetComponentArgs {
    /**
     * Name of the Managed Environment.
     */
    environmentName: string;
    /**
     * Name of the .NET Component.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * .NET Component.
 */
export interface GetDotNetComponentResult {
    /**
     * Type of the .NET Component.
     */
    readonly componentType?: string;
    /**
     * List of .NET Components configuration properties
     */
    readonly configurations?: types.outputs.DotNetComponentConfigurationPropertyResponse[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the .NET Component.
     */
    readonly provisioningState: string;
    /**
     * List of .NET Components that are bound to the .NET component
     */
    readonly serviceBinds?: types.outputs.DotNetComponentServiceBindResponse[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * .NET Component.
 *
 * Uses Azure REST API version 2023-11-02-preview.
 *
 * Other available API versions: 2024-02-02-preview, 2024-08-02-preview, 2024-10-02-preview.
 */
export function getDotNetComponentOutput(args: GetDotNetComponentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDotNetComponentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:getDotNetComponent", {
        "environmentName": args.environmentName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDotNetComponentOutputArgs {
    /**
     * Name of the Managed Environment.
     */
    environmentName: pulumi.Input<string>;
    /**
     * Name of the .NET Component.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}