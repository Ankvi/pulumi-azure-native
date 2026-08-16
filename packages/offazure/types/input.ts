import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Service Connection State
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * actions required
     */
    actionsRequired?: pulumi.Input<string | undefined>;
    /**
     * description string
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * state status
     */
    status?: pulumi.Input<string | enums.PrivateLinkServiceConnectionStateStatus | undefined>;
}

/**
 * Class for site agent properties.
 */
export interface SiteAgentPropertiesArgs {
    /**
     * Gets or sets the key vault ARM Id.
     */
    keyVaultId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the key vault URI.
     */
    keyVaultUri?: pulumi.Input<string | undefined>;
}

/**
 * Class for site appliance properties.
 */
export interface SiteAppliancePropertiesArgs {
    /**
     * Gets or sets the on-premises agent details.
     */
    agentDetails?: pulumi.Input<SiteAgentPropertiesArgs | undefined>;
    /**
     * Gets or sets the Appliance Name.
     */
    applianceName?: pulumi.Input<string | undefined>;
    /**
     *  Gets or sets the service principal identity details used by agent for  communication              to the service.
     */
    servicePrincipalIdentityDetails?: pulumi.Input<SiteSpnPropertiesArgs | undefined>;
}

/**
 * Class for site properties.
 */
export interface SitePropertiesArgs {
    /**
     * On-premises agent details.
     */
    agentDetails?: pulumi.Input<SiteAgentPropertiesArgs | undefined>;
    /**
     * Appliance Name.
     */
    applianceName?: pulumi.Input<string | undefined>;
    /**
     * ARM ID of migration hub solution for SDS.
     */
    discoverySolutionId?: pulumi.Input<string | undefined>;
    /**
     * Service principal identity details used by agent for communication to the service.
     */
    servicePrincipalIdentityDetails?: pulumi.Input<SiteSpnPropertiesArgs | undefined>;
}

/**
 * Class for site properties.
 */
export interface SiteSpnPropertiesArgs {
    /**
     * Gets or sets the AAD Authority URL which was used to request the token for
     * the
     *             service principal.
     */
    aadAuthority?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the application/client Id for the service principal with which
     * the
     *             on-premise management/data plane components would communicate
     * with our Azure
     *             services.
     */
    applicationId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the intended audience for the service principal.
     */
    audience?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the object Id of the service principal with which the on-premise
     *
     *            management/data plane components would communicate with our Azure
     * services.
     */
    objectId?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the raw certificate data for building certificate expiry flows.
     */
    rawCertData?: pulumi.Input<string | undefined>;
    /**
     * Gets or sets the tenant Id for the service principal with which the
     * on-premise
     *             management/data plane components would communicate with
     * our Azure services.
     */
    tenantId?: pulumi.Input<string | undefined>;
}
