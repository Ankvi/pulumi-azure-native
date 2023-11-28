import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a springbootsites resource.
 */
export function getSpringbootsite(args: GetSpringbootsiteArgs, opts?: pulumi.InvokeOptions): Promise<GetSpringbootsiteResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazurespringboot/v20230101preview:getSpringbootsite", {
        "resourceGroupName": args.resourceGroupName,
        "springbootsitesName": args.springbootsitesName,
    }, opts);
}

export interface GetSpringbootsiteArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The springbootsites name.
     */
    springbootsitesName: string;
}

/**
 * The springbootsites envelope resource definition.
 */
export interface GetSpringbootsiteResult {
    /**
     * The extended location definition.
     */
    readonly extendedLocation?: types.outputs.SpringbootsitesModelResponseExtendedLocation;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The springbootsites resource definition.
     */
    readonly properties: types.outputs.SpringbootsitesPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a springbootsites resource.
 */
export function getSpringbootsiteOutput(args: GetSpringbootsiteOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSpringbootsiteResult> {
    return pulumi.output(args).apply((a: any) => getSpringbootsite(a, opts))
}

export interface GetSpringbootsiteOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The springbootsites name.
     */
    springbootsitesName: pulumi.Input<string>;
}
