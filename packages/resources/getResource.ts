import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a resource.
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2020-10-01, 2021-01-01, 2021-04-01, 2022-09-01, 2023-07-01, 2024-07-01, 2024-11-01, 2025-03-01, 2025-04-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native resources [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getResource(args: GetResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resources:getResource", {
        "apiVersion": args.apiVersion,
        "parentResourcePath": args.parentResourcePath,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "resourceProviderNamespace": args.resourceProviderNamespace,
        "resourceType": args.resourceType,
    }, opts);
}

export interface GetResourceArgs {
    /**
     * The API version to use for the operation.
     */
    apiVersion: string;
    /**
     * The parent resource identity.
     */
    parentResourcePath: string;
    /**
     * The name of the resource group containing the resource to get. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the resource to get.
     */
    resourceName: string;
    /**
     * The namespace of the resource provider.
     */
    resourceProviderNamespace: string;
    /**
     * The resource type of the resource.
     */
    resourceType: string;
}

/**
 * Resource information.
 */
export interface GetResourceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Resource extended location.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Resource ID
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * The kind of the resource.
     */
    readonly kind?: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * ID of the resource that manages this resource.
     */
    readonly managedBy?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The plan of the resource.
     */
    readonly plan?: types.outputs.PlanResponse;
    /**
     * The resource properties.
     */
    readonly properties: any;
    /**
     * The SKU of the resource.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets a resource.
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2020-10-01, 2021-01-01, 2021-04-01, 2022-09-01, 2023-07-01, 2024-07-01, 2024-11-01, 2025-03-01, 2025-04-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native resources [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getResourceOutput(args: GetResourceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:resources:getResource", {
        "apiVersion": args.apiVersion,
        "parentResourcePath": args.parentResourcePath,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "resourceProviderNamespace": args.resourceProviderNamespace,
        "resourceType": args.resourceType,
    }, opts);
}

export interface GetResourceOutputArgs {
    /**
     * The API version to use for the operation.
     */
    apiVersion: pulumi.Input<string>;
    /**
     * The parent resource identity.
     */
    parentResourcePath: pulumi.Input<string>;
    /**
     * The name of the resource group containing the resource to get. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource to get.
     */
    resourceName: pulumi.Input<string>;
    /**
     * The namespace of the resource provider.
     */
    resourceProviderNamespace: pulumi.Input<string>;
    /**
     * The resource type of the resource.
     */
    resourceType: pulumi.Input<string>;
}