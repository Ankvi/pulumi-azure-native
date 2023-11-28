import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List springbootservers resource.
 */
export function getSpringbootserver(args: GetSpringbootserverArgs, opts?: pulumi.InvokeOptions): Promise<GetSpringbootserverResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazurespringboot/v20230101preview:getSpringbootserver", {
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
        "springbootserversName": args.springbootserversName,
    }, opts);
}

export interface GetSpringbootserverArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The springbootsites name.
     */
    siteName: string;
    /**
     * The springbootservers name.
     */
    springbootserversName: string;
}

/**
 * The springbootservers envelope resource definition.
 */
export interface GetSpringbootserverResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The springbootservers resource definition.
     */
    readonly properties: types.outputs.SpringbootserversPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * List springbootservers resource.
 */
export function getSpringbootserverOutput(args: GetSpringbootserverOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSpringbootserverResult> {
    return pulumi.output(args).apply((a: any) => getSpringbootserver(a, opts))
}

export interface GetSpringbootserverOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The springbootsites name.
     */
    siteName: pulumi.Input<string>;
    /**
     * The springbootservers name.
     */
    springbootserversName: pulumi.Input<string>;
}
