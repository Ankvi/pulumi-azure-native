import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Product compatibility
 */
export interface CompatibilityResponse {
    /**
     * Full error message if any compatibility issues are found
     */
    description?: string;
    /**
     * Tells if product is compatible with current device
     */
    isCompatible?: boolean;
    /**
     * List of all issues found
     */
    issues?: string[];
    /**
     * Short error message if any compatibility issues are found
     */
    message?: string;
}

/**
 * Data disk image.
 */
export interface DataDiskImageResponse {
    /**
     * The LUN.
     */
    lun: number;
    /**
     * SAS key for source blob.
     */
    sourceBlobSasUri: string;
}

/**
 * Links to product icons.
 */
export interface IconUrisResponse {
    /**
     * URI to hero icon.
     */
    hero?: string;
    /**
     * URI to large icon.
     */
    large?: string;
    /**
     * URI to medium icon.
     */
    medium?: string;
    /**
     * URI to small icon.
     */
    small?: string;
    /**
     * URI to wide icon.
     */
    wide?: string;
}

/**
 * OS disk image.
 */
export interface OsDiskImageResponse {
    /**
     * OS operating system type.
     */
    operatingSystem: string;
    /**
     * SAS key for source blob.
     */
    sourceBlobSasUri: string;
}

/**
 * Link with additional information about a product.
 */
export interface ProductLinkResponse {
    /**
     * The description of the link.
     */
    displayName?: string;
    /**
     * The URI corresponding to the link.
     */
    uri?: string;
}

/**
 * Additional properties of the product
 */
export interface ProductPropertiesResponse {
    /**
     * The version.
     */
    version?: string;
}

/**
 * Product information.
 */
export interface ProductResponse {
    /**
     * The part number used for billing purposes.
     */
    billingPartNumber?: string;
    /**
     * Product compatibility with current device.
     */
    compatibility?: CompatibilityResponse;
    /**
     * The description of the product.
     */
    description?: string;
    /**
     * The display name of the product.
     */
    displayName?: string;
    /**
     * The entity tag used for optimistic concurrency when modifying the resource.
     */
    etag?: string;
    /**
     * The identifier of the gallery item corresponding to the product.
     */
    galleryItemIdentity?: string;
    /**
     * Additional links available for this product.
     */
    iconUris?: IconUrisResponse;
    /**
     * ID of the resource.
     */
    id: string;
    /**
     * The legal terms.
     */
    legalTerms?: string;
    /**
     * Additional links available for this product.
     */
    links?: ProductLinkResponse[];
    /**
     * Name of the resource.
     */
    name: string;
    /**
     * The offer representing the product.
     */
    offer?: string;
    /**
     * The version of the product offer.
     */
    offerVersion?: string;
    /**
     * The length of product content.
     */
    payloadLength?: number;
    /**
     * The privacy policy.
     */
    privacyPolicy?: string;
    /**
     * The kind of the product (virtualMachine or virtualMachineExtension)
     */
    productKind?: string;
    /**
     * Additional properties for the product.
     */
    productProperties?: ProductPropertiesResponse;
    /**
     * The user-friendly name of the product publisher.
     */
    publisherDisplayName?: string;
    /**
     * Publisher identifier.
     */
    publisherIdentifier?: string;
    /**
     * The product SKU.
     */
    sku?: string;
    /**
     * Type of Resource.
     */
    type: string;
    /**
     * The type of the Virtual Machine Extension.
     */
    vmExtensionType?: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

