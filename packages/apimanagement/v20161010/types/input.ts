import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Description of an additional API Management resource location.
     */
    export interface AdditionalRegionArgs {
        /**
         * The location name of the additional region among Azure Data center regions.
         */
        location: pulumi.Input<string>;
        /**
         * The SKU type in the location.
         */
        skuType: pulumi.Input<enums.SkuType>;
        /**
         * The SKU Unit count at the location. The maximum SKU Unit count depends on the SkuType. Maximum allowed for Developer SKU is 1, for Standard SKU is 4, and for Premium SKU is 10, at a location.
         */
        skuUnitCount?: pulumi.Input<number>;
        /**
         * Virtual network configuration for the location.
         */
        vpnconfiguration?: pulumi.Input<VirtualNetworkConfigurationArgs>;
    }
    /**
     * additionalRegionArgsProvideDefaults sets the appropriate defaults for AdditionalRegionArgs
     */
    export function additionalRegionArgsProvideDefaults(val: AdditionalRegionArgs): AdditionalRegionArgs {
        return {
            ...val,
            skuUnitCount: (val.skuUnitCount) ?? 1,
        };
    }

    /**
     * API Management service resource SKU properties.
     */
    export interface ApiManagementServiceSkuPropertiesArgs {
        /**
         * Capacity of the SKU (number of deployed units of the SKU). The default value is 1.
         */
        capacity?: pulumi.Input<number>;
        /**
         * Name of the Sku.
         */
        name: pulumi.Input<enums.SkuType>;
    }
    /**
     * apiManagementServiceSkuPropertiesArgsProvideDefaults sets the appropriate defaults for ApiManagementServiceSkuPropertiesArgs
     */
    export function apiManagementServiceSkuPropertiesArgsProvideDefaults(val: ApiManagementServiceSkuPropertiesArgs): ApiManagementServiceSkuPropertiesArgs {
        return {
            ...val,
            capacity: (val.capacity) ?? 1,
        };
    }

    /**
     * SSL certificate information.
     */
    export interface CertificateInformationArgs {
        /**
         * Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
         */
        expiry: pulumi.Input<string>;
        /**
         * Subject of the certificate.
         */
        subject: pulumi.Input<string>;
        /**
         * Thumbprint of the certificate.
         */
        thumbprint: pulumi.Input<string>;
    }

    /**
     * Custom hostname configuration.
     */
    export interface HostnameConfigurationArgs {
        /**
         * Certificate information.
         */
        certificate: pulumi.Input<CertificateInformationArgs>;
        /**
         * Hostname.
         */
        hostname: pulumi.Input<string>;
        /**
         * Hostname type.
         */
        type: pulumi.Input<enums.HostnameType>;
    }

    /**
     * Configuration of a virtual network to which API Management service is deployed.
     */
    export interface VirtualNetworkConfigurationArgs {
        /**
         * The location of the virtual network.
         */
        location?: pulumi.Input<string>;
        /**
         * The full resource ID of a subnet in a virtual network to deploy the API Management service in.
         */
        subnetResourceId?: pulumi.Input<string>;
    }
