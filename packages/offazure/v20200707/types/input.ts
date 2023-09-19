import * as pulumi from "@pulumi/pulumi";
    /**
     * Class for site agent properties.
     */
    export interface SiteAgentPropertiesArgs {
        /**
         * Key vault ARM Id.
         */
        keyVaultId?: pulumi.Input<string>;
        /**
         * Key vault URI.
         */
        keyVaultUri?: pulumi.Input<string>;
    }

    /**
     * Class for site properties.
     */
    export interface SitePropertiesArgs {
        /**
         * On-premises agent details.
         */
        agentDetails?: pulumi.Input<SiteAgentPropertiesArgs>;
        /**
         * Appliance Name.
         */
        applianceName?: pulumi.Input<string>;
        /**
         * ARM ID of migration hub solution for SDS.
         */
        discoverySolutionId?: pulumi.Input<string>;
        /**
         * Service principal identity details used by agent for communication to the service.
         */
        servicePrincipalIdentityDetails?: pulumi.Input<SiteSpnPropertiesArgs>;
    }

    /**
     * Class for site properties.
     */
    export interface SiteSpnPropertiesArgs {
        /**
         * AAD Authority URL which was used to request the token for the service principal.
         */
        aadAuthority?: pulumi.Input<string>;
        /**
         * Application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
         */
        applicationId?: pulumi.Input<string>;
        /**
         * Intended audience for the service principal.
         */
        audience?: pulumi.Input<string>;
        /**
         * Object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
         */
        objectId?: pulumi.Input<string>;
        /**
         * Raw certificate data for building certificate expiry flows.
         */
        rawCertData?: pulumi.Input<string>;
        /**
         * Tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
         */
        tenantId?: pulumi.Input<string>;
    }
