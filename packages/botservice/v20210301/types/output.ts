import * as pulumi from "@pulumi/pulumi";
    /**
     * Extra Parameters specific to each Service Provider
     */
    export interface ServiceProviderParameterResponse {
        /**
         * Default Name for the Service Provider
         */
        default: string;
        /**
         * Description of the Service Provider
         */
        description: string;
        /**
         * Display Name of the Service Provider
         */
        displayName: string;
        /**
         * Help Url for the  Service Provider
         */
        helpUrl: string;
        /**
         * Meta data for the Service Provider
         */
        metadata: ServiceProviderParameterResponseMetadata;
        /**
         * Name of the Service Provider
         */
        name: string;
        /**
         * Type of the Service Provider
         */
        type: string;
    }

    /**
     * the constraints of the bot meta data.
     */
    export interface ServiceProviderParameterResponseConstraints {
        /**
         * Whether required the constraints of the bot meta data.
         */
        required?: boolean;
    }

    /**
     * Meta data for the Service Provider
     */
    export interface ServiceProviderParameterResponseMetadata {
        /**
         * the constraints of the bot meta data.
         */
        constraints?: ServiceProviderParameterResponseConstraints;
    }

    /**
     * The Object used to describe a Service Provider supported by Bot Service
     */
    export interface ServiceProviderPropertiesResponse {
        /**
         * URL of Dev Portal
         */
        devPortalUrl: string;
        /**
         * Display Name of the Service Provider
         */
        displayName: string;
        /**
         * The URL of icon
         */
        iconUrl?: string;
        /**
         * Id for Service Provider
         */
        id: string;
        /**
         * The list of parameters for the Service Provider
         */
        parameters?: ServiceProviderParameterResponse[];
        /**
         * Name of the Service Provider
         */
        serviceProviderName: string;
    }
    /**
     * serviceProviderPropertiesResponseProvideDefaults sets the appropriate defaults for ServiceProviderPropertiesResponse
     */
    export function serviceProviderPropertiesResponseProvideDefaults(val: ServiceProviderPropertiesResponse): ServiceProviderPropertiesResponse {
        return {
            ...val,
            iconUrl: (val.iconUrl) ?? "",
        };
    }

    /**
     * Service Provider Definition
     */
    export interface ServiceProviderResponse {
        /**
         * The Properties of a Service Provider Object
         */
        properties?: ServiceProviderPropertiesResponse;
    }
    /**
     * serviceProviderResponseProvideDefaults sets the appropriate defaults for ServiceProviderResponse
     */
    export function serviceProviderResponseProvideDefaults(val: ServiceProviderResponse): ServiceProviderResponse {
        return {
            ...val,
            properties: (val.properties ? serviceProviderPropertiesResponseProvideDefaults(val.properties) : undefined),
        };
    }
