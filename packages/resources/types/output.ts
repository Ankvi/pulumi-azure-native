import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface AliasPathMetadataResponse {
    /**
     * The attributes of the token that the alias path is referring to.
     */
    attributes: string;
    /**
     * The type of the token that the alias path is referring to.
     */
    type: string;
}

/**
 * The type of the paths for alias.
 */
export interface AliasPathResponse {
    /**
     * The API versions.
     */
    apiVersions?: string[];
    /**
     * The metadata of the alias path. If missing, fall back to the default metadata of the alias.
     */
    metadata: AliasPathMetadataResponse;
    /**
     * The path of an alias.
     */
    path?: string;
    /**
     * The pattern for an alias path.
     */
    pattern?: AliasPatternResponse;
}

/**
 * The type of the pattern for an alias path.
 */
export interface AliasPatternResponse {
    /**
     * The alias pattern phrase.
     */
    phrase?: string;
    /**
     * The type of alias pattern
     */
    type?: string;
    /**
     * The alias pattern variable.
     */
    variable?: string;
}

/**
 * The alias type. 
 */
export interface AliasResponse {
    /**
     * The default alias path metadata. Applies to the default path and to any alias path that doesn't have metadata
     */
    defaultMetadata: AliasPathMetadataResponse;
    /**
     * The default path for an alias.
     */
    defaultPath?: string;
    /**
     * The default pattern for an alias.
     */
    defaultPattern?: AliasPatternResponse;
    /**
     * The alias name.
     */
    name?: string;
    /**
     * The paths for an alias.
     */
    paths?: AliasPathResponse[];
    /**
     * The type of the alias.
     */
    type?: string;
}

export interface ApiProfileResponse {
    /**
     * The API version.
     */
    apiVersion: string;
    /**
     * The profile version.
     */
    profileVersion: string;
}

/**
 * Deployment dependency information.
 */
export interface BasicDependencyResponse {
    /**
     * The ID of the dependency.
     */
    id?: string;
    /**
     * The dependency resource name.
     */
    resourceName?: string;
    /**
     * The dependency resource type.
     */
    resourceType?: string;
}

/**
 * Settings to customize ACI container instance.
 */
export interface ContainerConfigurationResponse {
    /**
     * Container group name, if not specified then the name will get auto-generated. Not specifying a 'containerGroupName' indicates the system to generate a unique name which might end up flagging an Azure Policy as non-compliant. Use 'containerGroupName' when you have an Azure Policy that expects a specific naming convention or when you want to fully control the name. 'containerGroupName' property must be between 1 and 63 characters long, must contain only lowercase letters, numbers, and dashes and it cannot start or end with a dash and consecutive dashes are not allowed. To specify a 'containerGroupName', add the following object to properties: { "containerSettings": { "containerGroupName": "contoso-container" } }. If you do not want to specify a 'containerGroupName' then do not add 'containerSettings' property.
     */
    containerGroupName?: string;
}

/**
 * The debug setting.
 */
export interface DebugSettingResponse {
    /**
     * Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information you are passing in during deployment. By logging information about the request or response, you could potentially expose sensitive data that is retrieved through the deployment operations.
     */
    detailLevel?: string;
}

/**
 * Defines how resources deployed by the deployment stack are locked.
 */
export interface DenySettingsResponse {
    /**
     * DenySettings will be applied to child scopes.
     */
    applyToChildScopes?: boolean;
    /**
     * List of role-based management operations that are excluded from the denySettings. Up to 200 actions are permitted. If the denySetting mode is set to 'denyWriteAndDelete', then the following actions are automatically appended to 'excludedActions': '*\/read' and 'Microsoft.Authorization/locks/delete'. If the denySetting mode is set to 'denyDelete', then the following actions are automatically appended to 'excludedActions': 'Microsoft.Authorization/locks/delete'. Duplicate actions will be removed.
     */
    excludedActions?: string[];
    /**
     * List of AAD principal IDs excluded from the lock. Up to 5 principals are permitted.
     */
    excludedPrincipals?: string[];
    /**
     * denySettings Mode.
     */
    mode: string;
}

/**
 * Deployment dependency information.
 */
export interface DependencyResponse {
    /**
     * The list of dependencies.
     */
    dependsOn?: BasicDependencyResponse[];
    /**
     * The ID of the dependency.
     */
    id?: string;
    /**
     * The dependency resource name.
     */
    resourceName?: string;
    /**
     * The dependency resource type.
     */
    resourceType?: string;
}

/**
 * Deployment properties with additional details.
 */
export interface DeploymentPropertiesExtendedResponse {
    /**
     * The correlation ID of the deployment.
     */
    correlationId: string;
    /**
     * The debug setting of the deployment.
     */
    debugSetting: DebugSettingResponse;
    /**
     * The list of deployment dependencies.
     */
    dependencies: DependencyResponse[];
    /**
     * The duration of the template deployment.
     */
    duration: string;
    /**
     * The deployment error.
     */
    error: ErrorResponseResponse;
    /**
     * The deployment mode. Possible values are Incremental and Complete.
     */
    mode: string;
    /**
     * The deployment on error behavior.
     */
    onErrorDeployment: OnErrorDeploymentExtendedResponse;
    /**
     * Array of provisioned resources.
     */
    outputResources: ResourceReferenceResponse[];
    /**
     * Key/value pairs that represent deployment output.
     */
    outputs: any;
    /**
     * Deployment parameters. 
     */
    parameters: any;
    /**
     * The URI referencing the parameters. 
     */
    parametersLink: ParametersLinkResponse;
    /**
     * The list of resource providers needed for the deployment.
     */
    providers: ProviderResponse[];
    /**
     * Denotes the state of provisioning.
     */
    provisioningState: string;
    /**
     * The hash produced for the template.
     */
    templateHash: string;
    /**
     * The URI referencing the template.
     */
    templateLink: TemplateLinkResponse;
    /**
     * The timestamp of the template deployment.
     */
    timestamp: string;
    /**
     * Array of validated resources.
     */
    validatedResources: ResourceReferenceResponse[];
}

/**
 * Defines the behavior of resources that are not managed immediately after the stack is updated.
 */
export interface DeploymentStackPropertiesResponseActionOnUnmanage {
    /**
     * Specifies the action that should be taken on the resource when the deployment stack is deleted. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state.
     */
    managementGroups?: string;
    /**
     * Specifies the action that should be taken on the resource when the deployment stack is deleted. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state.
     */
    resourceGroups?: string;
    /**
     * Specifies the action that should be taken on the resource when the deployment stack is deleted. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state.
     */
    resources: string;
}

/**
 * The debug setting.
 */
export interface DeploymentStacksDebugSettingResponse {
    /**
     * Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information that is being passed in during deployment. By logging information about the request or response, sensitive data that is retrieved through the deployment operations could potentially be exposed.
     */
    detailLevel?: string;
}

/**
 * Entity representing the reference to the deployment parameters.
 */
export interface DeploymentStacksParametersLinkResponse {
    /**
     * If included, must match the ContentVersion in the template.
     */
    contentVersion?: string;
    /**
     * The URI of the parameters file.
     */
    uri: string;
}

/**
 * The environment variable to pass to the script in the container instance.
 */
export interface EnvironmentVariableResponse {
    /**
     * The name of the environment variable.
     */
    name: string;
    /**
     * The value of the secure environment variable.
     */
    secureValue?: string;
    /**
     * The value of the environment variable.
     */
    value?: string;
}

/**
 * The resource management error additional info.
 */
export interface ErrorAdditionalInfoResponse {
    /**
     * The additional info.
     */
    info: any;
    /**
     * The additional info type.
     */
    type: string;
}

/**
 * The error detail.
 */
export interface ErrorDetailResponse {
    /**
     * The error additional info.
     */
    additionalInfo: ErrorAdditionalInfoResponse[];
    /**
     * The error code.
     */
    code: string;
    /**
     * The error details.
     */
    details: ErrorDetailResponse[];
    /**
     * The error message.
     */
    message: string;
    /**
     * The error target.
     */
    target: string;
}

/**
 * Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.).
 */
export interface ErrorResponseResponse {
    /**
     * The error additional info.
     */
    additionalInfo?: ErrorAdditionalInfoResponse[];
    /**
     * The error code.
     */
    code?: string;
    /**
     * The error details.
     */
    details?: ErrorResponseResponse[];
    /**
     * The error object.
     */
    error?: ErrorDetailResponse;
    /**
     * The error message.
     */
    message?: string;
    /**
     * The error target.
     */
    target?: string;
}

/**
 * Resource extended location.
 */
export interface ExtendedLocationResponse {
    /**
     * The extended location name.
     */
    name?: string;
    /**
     * The extended location type.
     */
    type?: string;
}

/**
 * Identity for the resource.
 */
export interface IdentityResponse {
    /**
     * The principal ID of resource identity.
     */
    principalId: string;
    /**
     * The tenant ID of resource.
     */
    tenantId: string;
    /**
     * The identity type.
     */
    type?: string;
    /**
     * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: {[key: string]: IdentityResponseUserAssignedIdentities};
}

export interface IdentityResponseUserAssignedIdentities {
    /**
     * The client id of user assigned identity.
     */
    clientId: string;
    /**
     * The principal id of user assigned identity.
     */
    principalId: string;
}

/**
 * Represents a Template Spec artifact containing an embedded Azure Resource Manager template for use as a linked template.
 */
export interface LinkedTemplateArtifactResponse {
    /**
     * A filesystem safe relative path of the artifact.
     */
    path: string;
    /**
     * The Azure Resource Manager template.
     */
    template: any;
}

/**
 * The managed resource model.
 */
export interface ManagedResourceReferenceResponse {
    /**
     * denyAssignment settings applied to the resource.
     */
    denyStatus?: string;
    /**
     * The resourceId of a resource managed by the deployment stack.
     */
    id: string;
    /**
     * Current management state of the resource in the deployment stack.
     */
    status?: string;
}
/**
 * managedResourceReferenceResponseProvideDefaults sets the appropriate defaults for ManagedResourceReferenceResponse
 */
export function managedResourceReferenceResponseProvideDefaults(val: ManagedResourceReferenceResponse): ManagedResourceReferenceResponse {
    return {
        ...val,
        denyStatus: (val.denyStatus) ?? "None",
        status: (val.status) ?? "None",
    };
}

/**
 * Managed identity generic object.
 */
export interface ManagedServiceIdentityResponse {
    /**
     * ID of the Azure Active Directory.
     */
    tenantId: string;
    /**
     * Type of the managed identity.
     */
    type?: string;
    /**
     * The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * Deployment on error behavior with additional details.
 */
export interface OnErrorDeploymentExtendedResponse {
    /**
     * The deployment to be used on error case.
     */
    deploymentName?: string;
    /**
     * The state of the provisioning for the on error deployment.
     */
    provisioningState: string;
    /**
     * The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment.
     */
    type?: string;
}

/**
 * Entity representing the reference to the deployment parameters.
 */
export interface ParametersLinkResponse {
    /**
     * If included, must match the ContentVersion in the template.
     */
    contentVersion?: string;
    /**
     * The URI of the parameters file.
     */
    uri: string;
}

/**
 * Plan for the resource.
 */
export interface PlanResponse {
    /**
     * The plan ID.
     */
    name?: string;
    /**
     * The offer ID.
     */
    product?: string;
    /**
     * The promotion code.
     */
    promotionCode?: string;
    /**
     * The publisher ID.
     */
    publisher?: string;
    /**
     * The plan's version.
     */
    version?: string;
}

/**
 * The provider extended location. 
 */
export interface ProviderExtendedLocationResponse {
    /**
     * The extended locations for the azure location.
     */
    extendedLocations?: string[];
    /**
     * The azure location.
     */
    location?: string;
    /**
     * The extended location type.
     */
    type?: string;
}

/**
 * Resource type managed by the resource provider.
 */
export interface ProviderResourceTypeResponse {
    /**
     * The aliases that are supported by this resource type.
     */
    aliases?: AliasResponse[];
    /**
     * The API profiles for the resource provider.
     */
    apiProfiles: ApiProfileResponse[];
    /**
     * The API version.
     */
    apiVersions?: string[];
    /**
     * The additional capabilities offered by this resource type.
     */
    capabilities?: string;
    /**
     * The default API version.
     */
    defaultApiVersion: string;
    /**
     * The location mappings that are supported by this resource type.
     */
    locationMappings?: ProviderExtendedLocationResponse[];
    /**
     * The collection of locations where this resource type can be created.
     */
    locations?: string[];
    /**
     * The properties.
     */
    properties?: {[key: string]: string};
    /**
     * The resource type.
     */
    resourceType?: string;
    zoneMappings?: ZoneMappingResponse[];
}

/**
 * Resource provider information.
 */
export interface ProviderResponse {
    /**
     * The provider ID.
     */
    id: string;
    /**
     * The namespace of the resource provider.
     */
    namespace?: string;
    /**
     * The provider authorization consent state.
     */
    providerAuthorizationConsentState?: string;
    /**
     * The registration policy of the resource provider.
     */
    registrationPolicy: string;
    /**
     * The registration state of the resource provider.
     */
    registrationState: string;
    /**
     * The collection of provider resource types.
     */
    resourceTypes: ProviderResourceTypeResponse[];
}

/**
 * The resource group properties.
 */
export interface ResourceGroupPropertiesResponse {
    /**
     * The provisioning state. 
     */
    provisioningState: string;
}

/**
 * The resource Id extended model.
 */
export interface ResourceReferenceExtendedResponse {
    /**
     * Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.).
     */
    error?: ErrorResponseResponse;
    /**
     * The resourceId of a resource managed by the deployment stack.
     */
    id: string;
}

/**
 * The resource Id model.
 */
export interface ResourceReferenceResponse {
    /**
     * The resourceId of a resource managed by the deployment stack.
     */
    id: string;
}

/**
 * Generic object modeling results of script execution.
 */
export interface ScriptStatusResponse {
    /**
     * ACI resource Id.
     */
    containerInstanceId: string;
    /**
     * End time of the script execution.
     */
    endTime: string;
    /**
     * Error that is relayed from the script execution.
     */
    error?: ErrorResponseResponse;
    /**
     * Time the deployment script resource will expire.
     */
    expirationTime: string;
    /**
     * Start time of the script execution.
     */
    startTime: string;
    /**
     * Storage account resource Id.
     */
    storageAccountId: string;
}

/**
 * SKU for the resource.
 */
export interface SkuResponse {
    /**
     * The SKU capacity.
     */
    capacity?: number;
    /**
     * The SKU family.
     */
    family?: string;
    /**
     * The SKU model.
     */
    model?: string;
    /**
     * The SKU name.
     */
    name?: string;
    /**
     * The SKU size.
     */
    size?: string;
    /**
     * The SKU tier.
     */
    tier?: string;
}

/**
 * Settings to use an existing storage account. Valid storage account kinds are: Storage, StorageV2 and FileStorage
 */
export interface StorageAccountConfigurationResponse {
    /**
     * The storage account access key.
     */
    storageAccountKey?: string;
    /**
     * The storage account name.
     */
    storageAccountName?: string;
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

/**
 * A dictionary of name and value pairs.
 */
export interface TagsResponse {
    tags?: {[key: string]: string};
}

/**
 * Entity representing the reference to the template.
 */
export interface TemplateLinkResponse {
    /**
     * If included, must match the ContentVersion in the template.
     */
    contentVersion?: string;
    /**
     * The resource id of a Template Spec. Use either the id or uri property, but not both.
     */
    id?: string;
    /**
     * The query string (for example, a SAS token) to be used with the templateLink URI.
     */
    queryString?: string;
    /**
     * The relativePath property can be used to deploy a linked template at a location relative to the parent. If the parent template was linked with a TemplateSpec, this will reference an artifact in the TemplateSpec.  If the parent was linked with a URI, the child deployment will be a combination of the parent and relativePath URIs
     */
    relativePath?: string;
    /**
     * The URI of the template to deploy. Use either the uri or id property, but not both.
     */
    uri?: string;
}

/**
 * High-level information about a Template Spec version.
 */
export interface TemplateSpecVersionInfoResponse {
    /**
     * Template Spec version description.
     */
    description: string;
    /**
     * The timestamp of when the version was created.
     */
    timeCreated: string;
    /**
     * The timestamp of when the version was last modified.
     */
    timeModified: string;
}

/**
 * User-assigned managed identity.
 */
export interface UserAssignedIdentityResponse {
    /**
     * Client App Id associated with this identity.
     */
    clientId: string;
    /**
     * Azure Active Directory principal ID associated with this identity.
     */
    principalId: string;
}

export interface ZoneMappingResponse {
    /**
     * The location of the zone mapping.
     */
    location?: string;
    zones?: string[];
}








