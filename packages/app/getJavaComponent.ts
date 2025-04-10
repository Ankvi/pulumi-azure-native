import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Java Component.
 *
 * Uses Azure REST API version 2023-11-02-preview.
 *
 * Other available API versions: 2024-02-02-preview, 2024-08-02-preview, 2024-10-02-preview, 2025-01-01.
 */
export function getJavaComponent(args: GetJavaComponentArgs, opts?: pulumi.InvokeOptions): Promise<GetJavaComponentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getJavaComponent", {
        "environmentName": args.environmentName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetJavaComponentArgs {
    /**
     * Name of the Managed Environment.
     */
    environmentName: string;
    /**
     * Name of the Java Component.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Java Component.
 */
export interface GetJavaComponentResult {
    /**
     * Type of the Java Component.
     */
    readonly componentType?: string;
    /**
     * List of Java Components configuration properties
     */
    readonly configurations?: types.outputs.JavaComponentConfigurationPropertyResponse[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the Java Component.
     */
    readonly provisioningState: string;
    /**
     * List of Java Components that are bound to the Java component
     */
    readonly serviceBinds?: types.outputs.JavaComponentServiceBindResponse[];
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
 * Java Component.
 *
 * Uses Azure REST API version 2023-11-02-preview.
 *
 * Other available API versions: 2024-02-02-preview, 2024-08-02-preview, 2024-10-02-preview, 2025-01-01.
 */
export function getJavaComponentOutput(args: GetJavaComponentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetJavaComponentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:getJavaComponent", {
        "environmentName": args.environmentName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetJavaComponentOutputArgs {
    /**
     * Name of the Managed Environment.
     */
    environmentName: pulumi.Input<string>;
    /**
     * Name of the Java Component.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}