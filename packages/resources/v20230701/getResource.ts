import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a resource.
 */
export function getResource(args: GetResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetResourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resources/v20230701:getResource", {
        "parentResourcePath": args.parentResourcePath,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "resourceProviderNamespace": args.resourceProviderNamespace,
        "resourceType": args.resourceType,
    }, opts);
}

export interface GetResourceArgs {
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
 */
export function getResourceOutput(args: GetResourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetResourceResult> {
    return pulumi.output(args).apply((a: any) => getResource(a, opts))
}

export interface GetResourceOutputArgs {
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