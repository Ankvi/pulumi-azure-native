import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Description of an additional API Management resource location.
     */
    export interface AdditionalRegionResponse {
        /**
         * The location name of the additional region among Azure Data center regions.
         */
        location: string;
        /**
         * The SKU type in the location.
         */
        skuType: string;
        /**
         * The SKU Unit count at the location. The maximum SKU Unit count depends on the SkuType. Maximum allowed for Developer SKU is 1, for Standard SKU is 4, and for Premium SKU is 10, at a location.
         */
        skuUnitCount?: number;
        /**
         * Static IP addresses of the location's virtual machines.
         */
        staticIPs: string[];
        /**
         * Virtual network configuration for the location.
         */
        vpnconfiguration?: VirtualNetworkConfigurationResponse;
    }
    /**
     * additionalRegionResponseProvideDefaults sets the appropriate defaults for AdditionalRegionResponse
     */
    export function additionalRegionResponseProvideDefaults(val: AdditionalRegionResponse): AdditionalRegionResponse {
        return {
            ...val,
            skuUnitCount: (val.skuUnitCount) ?? 1,
        };
    }

    /**
     * API Management service resource SKU properties.
     */
    export interface ApiManagementServiceSkuPropertiesResponse {
        /**
         * Capacity of the SKU (number of deployed units of the SKU). The default value is 1.
         */
        capacity?: number;
        /**
         * Name of the Sku.
         */
        name: string;
    }
    /**
     * apiManagementServiceSkuPropertiesResponseProvideDefaults sets the appropriate defaults for ApiManagementServiceSkuPropertiesResponse
     */
    export function apiManagementServiceSkuPropertiesResponseProvideDefaults(val: ApiManagementServiceSkuPropertiesResponse): ApiManagementServiceSkuPropertiesResponse {
        return {
            ...val,
            capacity: (val.capacity) ?? 1,
        };
    }

    /**
     * SSL certificate information.
     */
    export interface CertificateInformationResponse {
        /**
         * Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
         */
        expiry: string;
        /**
         * Subject of the certificate.
         */
        subject: string;
        /**
         * Thumbprint of the certificate.
         */
        thumbprint: string;
    }

    /**
     * Custom hostname configuration.
     */
    export interface HostnameConfigurationResponse {
        /**
         * Certificate information.
         */
        certificate: CertificateInformationResponse;
        /**
         * Hostname.
         */
        hostname: string;
        /**
         * Hostname type.
         */
        type: string;
    }

    /**
     * Configuration of a virtual network to which API Management service is deployed.
     */
    export interface VirtualNetworkConfigurationResponse {
        /**
         * The location of the virtual network.
         */
        location?: string;
        /**
         * The full resource ID of a subnet in a virtual network to deploy the API Management service in.
         */
        subnetResourceId?: string;
        /**
         * The name of the subnet.
         */
        subnetname: string;
        /**
         * The virtual network ID. This is typically a GUID. Expect a null GUID by default.
         */
        vnetid: string;
    }
