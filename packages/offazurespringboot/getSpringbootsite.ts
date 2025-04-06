import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a springbootsites resource.
 *
 * Uses Azure REST API version 2024-04-01-preview.
 *
 * Other available API versions: 2023-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native offazurespringboot [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSpringbootsite(args: GetSpringbootsiteArgs, opts?: pulumi.InvokeOptions): Promise<GetSpringbootsiteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazurespringboot:getSpringbootsite", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2024-04-01-preview.
 *
 * Other available API versions: 2023-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native offazurespringboot [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSpringbootsiteOutput(args: GetSpringbootsiteOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSpringbootsiteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:offazurespringboot:getSpringbootsite", {
        "resourceGroupName": args.resourceGroupName,
        "springbootsitesName": args.springbootsitesName,
    }, opts);
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