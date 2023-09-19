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
         * Name of the Service Provider
         */
        name: string;
        /**
         * Type of the Service Provider
         */
        type: string;
    }

    /**
     * The Object used to describe a Service Provider supported by Bot Service
     */
    export interface ServiceProviderPropertiesResponse {
        /**
         * Display Name of the Service Provider
         */
        devPortalUrl: string;
        /**
         * Display Name of the Service Provider
         */
        displayName: string;
        /**
         * Display Name of the Service Provider
         */
        iconUrl: string;
        /**
         * Id for Service Provider
         */
        id: string;
        /**
         * The list of parameters for the Service Provider
         */
        parameters?: ServiceProviderParameterResponse[];
        /**
         * Display Name of the Service Provider
         */
        serviceProviderName: string;
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
