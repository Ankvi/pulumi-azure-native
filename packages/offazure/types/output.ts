import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Error contract returned when some exception occurs in Rest API.
 */
export interface HealthErrorDetailsResponse {
    /**
     * Gets the appliance name.
     */
    applianceName: string;
    /**
     * Gets the error name.
     */
    code: string;
    /**
     * Gets discovery scope for which             error is encountered.
     */
    discoveryScope: string;
    /**
     * Gets the error ID.
     */
    id: number;
    /**
     * Gets the error message.
     */
    message: string;
    /**
     * Gets the message parameters.
     */
    messageParameters: {[key: string]: string};
    /**
     * Gets the possible causes of error.
     */
    possibleCauses: string;
    /**
     * Gets the recommended action to resolve error.
     */
    recommendedAction: string;
    /**
     * Gets run as account id used while performing discovery             of entity.
     */
    runAsAccountId: string;
    /**
     * Gets the error severity.
     */
    severity: string;
    /**
     * Gets the error source.
     */
    source: string;
    /**
     * Gets the error summary message.
     */
    summaryMessage: string;
    /**
     * Gets the time stamp when the error was updated.
     */
    updatedTimeStamp: string;
}

export interface PrivateEndpointConnectionPropertiesResponse {
    privateEndpoint: ResourceIdResponse;
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
    provisioningState: string;
}

/**
 * REST model used to encapsulate Private Link properties for tracked resources.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * array of group ids
     */
    groupIds: string[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * private endpoints
     */
    privateEndpoint: ResourceIdResponse;
    /**
     * private endpoints connection state
     */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
    /**
     * provisioning state enum
     */
    provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * Service Connection State
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * actions required
     */
    actionsRequired?: string;
    /**
     * description string
     */
    description?: string;
    /**
     * state status
     */
    status?: string;
}

/**
 * PrivateEndpointModelsResourceId
 */
export interface ResourceIdResponse {
    /**
     * id name
     */
    id: string;
}

/**
 * Class for site agent properties.
 */
export interface SiteAgentPropertiesResponse {
    /**
     * Gets the ID of the agent.
     */
    id: string;
    /**
     * Gets or sets the key vault ARM Id.
     */
    keyVaultId?: string;
    /**
     * Gets or sets the key vault URI.
     */
    keyVaultUri?: string;
    /**
     * Gets the last heartbeat time of the agent in UTC.
     */
    lastHeartBeatUtc: string;
    /**
     * Gets the version of the agent.
     */
    version: string;
}

/**
 * Class for site appliance properties.
 */
export interface SiteAppliancePropertiesResponse {
    /**
     * Gets or sets the on-premises agent details.
     */
    agentDetails?: SiteAgentPropertiesResponse;
    /**
     * Gets or sets the Appliance Name.
     */
    applianceName?: string;
    /**
     *  Gets or sets the service principal identity details used by agent for  communication              to the service.  
     */
    servicePrincipalIdentityDetails?: SiteSpnPropertiesResponse;
}

/**
 * The properties of ServerSiteResource.
 */
export interface SiteHealthSummaryResponse {
    /**
     * Gets or sets the count of affected objects.
     */
    affectedObjectsCount?: number;
    /**
     * Gets the affected resource type.
     */
    affectedResourceType: string;
    /**
     * Gets or sets the affected resources.
     */
    affectedResources?: string[];
    /**
     * Gets the appliance name.
     */
    applianceName: string;
    /**
     * Gets the error code.
     */
    errorCode: string;
    /**
     * Gets the error Id.
     */
    errorId: number;
    /**
     * Gets the error message.
     */
    errorMessage: string;
    /**
     * Gets or sets sources of the exception.
     */
    fabricLayoutUpdateSources?: string[];
    /**
     * Gets or sets the hit count of the error.
     */
    hitCount?: number;
    /**
     * Gets the remediation guidance.
     */
    remediationGuidance: string;
    /**
     * Gets the severity of error.
     */
    severity: string;
    /**
     * Gets the summary message.
     */
    summaryMessage: string;
}

/**
 * Class for site properties.
 */
export interface SitePropertiesResponse {
    /**
     * On-premises agent details.
     */
    agentDetails?: SiteAgentPropertiesResponse;
    /**
     * Appliance Name.
     */
    applianceName?: string;
    /**
     * ARM ID of migration hub solution for SDS.
     */
    discoverySolutionId?: string;
    /**
     * Service endpoint.
     */
    serviceEndpoint: string;
    /**
     * Service principal identity details used by agent for communication to the service.
     */
    servicePrincipalIdentityDetails?: SiteSpnPropertiesResponse;
}

/**
 * Class for site properties.
 */
export interface SiteSpnPropertiesResponse {
    /**
     * Gets or sets the AAD Authority URL which was used to request the token for
     * the
     *             service principal.
     */
    aadAuthority?: string;
    /**
     * Gets or sets the application/client Id for the service principal with which
     * the
     *             on-premise management/data plane components would communicate
     * with our Azure 
     *             services.
     */
    applicationId?: string;
    /**
     * Gets or sets the intended audience for the service principal.
     */
    audience?: string;
    /**
     * Gets or sets the object Id of the service principal with which the on-premise
     *
     *            management/data plane components would communicate with our Azure
     * services.
     */
    objectId?: string;
    /**
     * Gets or sets the raw certificate data for building certificate expiry flows.
     */
    rawCertData?: string;
    /**
     * Gets or sets the tenant Id for the service principal with which the
     * on-premise
     *             management/data plane components would communicate with
     * our Azure services.
     */
    tenantId?: string;
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


