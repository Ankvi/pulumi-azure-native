import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the extended properties of a product.
 * Azure REST API version: 2022-06-01.
 */
export function listProductDetails(args: ListProductDetailsArgs, opts?: pulumi.InvokeOptions): Promise<ListProductDetailsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestack:listProductDetails", {
        "productName": args.productName,
        "registrationName": args.registrationName,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface ListProductDetailsArgs {
    /**
     * Name of the product.
     */
    productName: string;
    /**
     * Name of the Azure Stack registration.
     */
    registrationName: string;
    /**
     * Name of the resource group.
     */
    resourceGroup: string;
}

/**
 * Extended description about the product required for installing it into Azure Stack.
 */
export interface ListProductDetailsResult {
    /**
     * Specifies kind of compute role included in the package.
     */
    readonly computeRole: string;
    /**
     * List of attached data disks.
     */
    readonly dataDiskImages: types.outputs.DataDiskImageResponse[];
    /**
     * The URI to the .azpkg file that provides information required for showing product in the gallery.
     */
    readonly galleryPackageBlobSasUri: string;
    /**
     * Specifies if product is a Virtual Machine Extension.
     */
    readonly isSystemExtension: boolean;
    /**
     * OS disk image used by product.
     */
    readonly osDiskImage: types.outputs.OsDiskImageResponse;
    /**
     * Specifies the kind of the product (virtualMachine or virtualMachineExtension).
     */
    readonly productKind: string;
    /**
     * Indicates if specified product supports multiple extensions.
     */
    readonly supportMultipleExtensions: boolean;
    /**
     * The URI.
     */
    readonly uri: string;
    /**
     * Specifies product version.
     */
    readonly version: string;
    /**
     * Specifies operating system used by the product.
     */
    readonly vmOsType: string;
    /**
     * Indicates if virtual machine Scale Set is enabled in the specified product.
     */
    readonly vmScaleSetEnabled: boolean;
}
/**
 * Returns the extended properties of a product.
 * Azure REST API version: 2022-06-01.
 */
export function listProductDetailsOutput(args: ListProductDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListProductDetailsResult> {
    return pulumi.output(args).apply((a: any) => listProductDetails(a, opts))
}

export interface ListProductDetailsOutputArgs {
    /**
     * Name of the product.
     */
    productName: pulumi.Input<string>;
    /**
     * Name of the Azure Stack registration.
     */
    registrationName: pulumi.Input<string>;
    /**
     * Name of the resource group.
     */
    resourceGroup: pulumi.Input<string>;
}
