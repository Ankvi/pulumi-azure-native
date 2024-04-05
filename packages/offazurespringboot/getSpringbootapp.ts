import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a springbootapps resource.
 * Azure REST API version: 2024-04-01-preview.
 */
export function getSpringbootapp(args: GetSpringbootappArgs, opts?: pulumi.InvokeOptions): Promise<GetSpringbootappResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazurespringboot:getSpringbootapp", {
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
        "springbootappsName": args.springbootappsName,
    }, opts);
}

export interface GetSpringbootappArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The springbootsites name.
     */
    siteName: string;
    /**
     * The springbootapps name.
     */
    springbootappsName: string;
}

/**
 * The springbootapps envelope resource definition.
 */
export interface GetSpringbootappResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The springbootapps resource definition.
     */
    readonly properties: types.outputs.SpringbootappsPropertiesResponse;
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
 * Get a springbootapps resource.
 * Azure REST API version: 2024-04-01-preview.
 */
export function getSpringbootappOutput(args: GetSpringbootappOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSpringbootappResult> {
    return pulumi.output(args).apply((a: any) => getSpringbootapp(a, opts))
}

export interface GetSpringbootappOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The springbootsites name.
     */
    siteName: pulumi.Input<string>;
    /**
     * The springbootapps name.
     */
    springbootappsName: pulumi.Input<string>;
}