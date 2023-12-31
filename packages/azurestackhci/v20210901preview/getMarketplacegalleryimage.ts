import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets marketplacegalleryimages by resource name
 */
export function getMarketplacegalleryimage(args: GetMarketplacegalleryimageArgs, opts?: pulumi.InvokeOptions): Promise<GetMarketplacegalleryimageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci/v20210901preview:getMarketplacegalleryimage", {
        "marketplacegalleryimagesName": args.marketplacegalleryimagesName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMarketplacegalleryimageArgs {
    /**
     * Name of the marketplace gallery image
     */
    marketplacegalleryimagesName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The marketplace gallery image resource definition.
 */
export interface GetMarketplacegalleryimageResult {
    /**
     * Datasource for the gallery image when provisioning with cloud-init [Azure, NoCloud]
     */
    readonly cloudInitDataSource?: string;
    /**
     * Container Name for storage container
     */
    readonly containerName?: string;
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * The hypervisor generation of the Virtual Machine [V1, V2]
     */
    readonly hyperVGeneration?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * This is the gallery image definition identifier.
     */
    readonly identifier?: types.outputs.GalleryImageIdentifierResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * operating system type that the gallery image uses. Expected to be linux or windows
     */
    readonly osType?: string;
    /**
     * Provisioning state of the gallery image.
     */
    readonly provisioningState: string;
    /**
     * name of the object to be used in moc
     */
    readonly resourceName?: string;
    /**
     * MarketplaceGalleryImageStatus defines the observed state of marketplacegalleryimages
     */
    readonly status: types.outputs.MarketplaceGalleryImageStatusResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
    /**
     * Specifies information about the gallery image version that you want to create or update.
     */
    readonly version?: types.outputs.GalleryImageVersionResponse;
}
/**
 * Gets marketplacegalleryimages by resource name
 */
export function getMarketplacegalleryimageOutput(args: GetMarketplacegalleryimageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMarketplacegalleryimageResult> {
    return pulumi.output(args).apply((a: any) => getMarketplacegalleryimage(a, opts))
}

export interface GetMarketplacegalleryimageOutputArgs {
    /**
     * Name of the marketplace gallery image
     */
    marketplacegalleryimagesName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
