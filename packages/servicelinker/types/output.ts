import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The access key directly from target resource properties, which target service is Azure Resource, such as Microsoft.Storage
 */
export interface AccessKeyInfoBaseResponse {
    /**
     * Optional. Indicates how to configure authentication. If optInAllAuth, service linker configures authentication such as enabling identity on source resource and granting RBAC roles. If optOutAllAuth, opt out authentication setup. Default is optInAllAuth.
     */
    authMode?: string;
    /**
     * The authentication type.
     * Expected value is 'accessKey'.
     */
    authType: "accessKey";
    /**
     * Permissions of the accessKey. `Read` and `Write` are for Azure Cosmos DB and Azure App Configuration, `Listen`, `Send` and `Manage` are for Azure Event Hub and Azure Service Bus.
     */
    permissions?: string[];
}

/**
 * The resource properties when type is Azure Key Vault
 */
export interface AzureKeyVaultPropertiesResponse {
    /**
     * True if connect via Kubernetes CSI Driver.
     */
    connectAsKubernetesCsiDriver?: boolean;
    /**
     * The azure resource type.
     * Expected value is 'KeyVault'.
     */
    type: "KeyVault";
}

/**
 * The azure resource info when target service type is AzureResource
 */
export interface AzureResourceResponse {
    /**
     * The Id of azure resource.
     */
    id?: string;
    /**
     * The azure resource connection related properties.
     */
    resourceProperties?: AzureKeyVaultPropertiesResponse;
    /**
     * The target service type.
     * Expected value is 'AzureResource'.
     */
    type: "AzureResource";
}

/**
 * The represent of basic error
 */
export interface BasicErrorDryrunPrerequisiteResultResponse {
    /**
     * The error code.
     */
    code?: string;
    /**
     * The error message.
     */
    message?: string;
    /**
     * The type of dryrun result.
     * Expected value is 'basicError'.
     */
    type: "basicError";
}

/**
 * The configuration information, used to generate configurations or save to applications
 */
export interface ConfigurationInfoResponse {
    /**
     * Optional, indicate whether to apply configurations on source application. If enable, generate configurations and applied to the source application. Default is enable. If optOut, no configuration change will be made on source.
     */
    action?: string;
    /**
     * A dictionary of additional configurations to be added. Service will auto generate a set of basic configurations and this property is to full fill more customized configurations
     */
    additionalConfigurations?: {[key: string]: string};
    /**
     * A dictionary of additional properties to be added in the end of connection string.
     */
    additionalConnectionStringProperties?: {[key: string]: string};
    /**
     * An option to store configuration into different place
     */
    configurationStore?: ConfigurationStoreResponse;
    /**
     * Optional. A dictionary of default key name and customized key name mapping. If not specified, default key name will be used for generate configurations
     */
    customizedKeys?: {[key: string]: string};
    /**
     * Indicates some additional properties for dapr client type
     */
    daprProperties?: DaprPropertiesResponse;
    /**
     * Indicates whether to clean up previous operation when Linker is updating or deleting
     */
    deleteOrUpdateBehavior?: string;
}

/**
 * An option to store configuration into different place
 */
export interface ConfigurationStoreResponse {
    /**
     * The app configuration id to store configuration
     */
    appConfigurationId?: string;
}

/**
 * The service properties when target service type is ConfluentBootstrapServer
 */
export interface ConfluentBootstrapServerResponse {
    /**
     * The endpoint of service.
     */
    endpoint?: string;
    /**
     * The target service type.
     * Expected value is 'ConfluentBootstrapServer'.
     */
    type: "ConfluentBootstrapServer";
}

/**
 * The service properties when target service type is ConfluentSchemaRegistry
 */
export interface ConfluentSchemaRegistryResponse {
    /**
     * The endpoint of service.
     */
    endpoint?: string;
    /**
     * The target service type.
     * Expected value is 'ConfluentSchemaRegistry'.
     */
    type: "ConfluentSchemaRegistry";
}

/**
 * The dryrun parameters for creation or update a linker
 */
export interface CreateOrUpdateDryrunParametersResponse {
    /**
     * The name of action for you dryrun job.
     * Expected value is 'createOrUpdate'.
     */
    actionName: "createOrUpdate";
    /**
     * The authentication type.
     */
    authInfo?: AccessKeyInfoBaseResponse | EasyAuthMicrosoftEntraIDAuthInfoResponse | SecretAuthInfoResponse | ServicePrincipalCertificateAuthInfoResponse | ServicePrincipalSecretAuthInfoResponse | SystemAssignedIdentityAuthInfoResponse | UserAccountAuthInfoResponse | UserAssignedIdentityAuthInfoResponse;
    /**
     * The application client type
     */
    clientType?: string;
    /**
     * The connection information consumed by applications, including secrets, connection strings.
     */
    configurationInfo?: ConfigurationInfoResponse;
    /**
     * The provisioning state. 
     */
    provisioningState: string;
    /**
     * The network solution.
     */
    publicNetworkSolution?: PublicNetworkSolutionResponse;
    /**
     * connection scope in source service.
     */
    scope?: string;
    /**
     * An option to store secret value in secure place
     */
    secretStore?: SecretStoreResponse;
    /**
     * The target service properties
     */
    targetService?: AzureResourceResponse | ConfluentBootstrapServerResponse | ConfluentSchemaRegistryResponse | SelfHostedServerResponse;
    /**
     * The VNet solution.
     */
    vNetSolution?: VNetSolutionResponse;
}

/**
 * The dapr component metadata.
 */
export interface DaprMetadataResponse {
    /**
     * The description of the metadata, returned from configuration api
     */
    description?: string;
    /**
     * Metadata property name.
     */
    name?: string;
    /**
     * The value indicating whether the metadata is required or not
     */
    required?: string;
    /**
     * The secret name where dapr could get value
     */
    secretRef?: string;
    /**
     * Metadata property value.
     */
    value?: string;
}

/**
 * Indicates some additional properties for dapr client type
 */
export interface DaprPropertiesResponse {
    /**
     * The direction supported by the dapr binding component
     */
    bindingComponentDirection: string;
    /**
     * The dapr component type
     */
    componentType?: string;
    /**
     * Additional dapr metadata
     */
    metadata?: DaprMetadataResponse[];
    /**
     * The runtime version supported by the properties
     */
    runtimeVersion: string;
    /**
     * The dapr component scopes
     */
    scopes?: string[];
    /**
     * The name of a secret store dapr to retrieve secret
     */
    secretStoreComponent?: string;
    /**
     * The dapr component version
     */
    version?: string;
}

/**
 * The preview of the operations for creation
 */
export interface DryrunOperationPreviewResponse {
    /**
     * The action defined by RBAC, refer https://docs.microsoft.com/azure/role-based-access-control/role-definitions#actions-format
     */
    action?: string;
    /**
     * The description of the operation
     */
    description?: string;
    /**
     * The operation name
     */
    name?: string;
    /**
     * The operation type
     */
    operationType?: string;
    /**
     * The scope of the operation, refer https://docs.microsoft.com/azure/role-based-access-control/scope-overview
     */
    scope?: string;
}

/**
 * The authentication info when authType is EasyAuth Microsoft Entra ID
 */
export interface EasyAuthMicrosoftEntraIDAuthInfoResponse {
    /**
     * Optional. Indicates how to configure authentication. If optInAllAuth, service linker configures authentication such as enabling identity on source resource and granting RBAC roles. If optOutAllAuth, opt out authentication setup. Default is optInAllAuth.
     */
    authMode?: string;
    /**
     * The authentication type.
     * Expected value is 'easyAuthMicrosoftEntraID'.
     */
    authType: "easyAuthMicrosoftEntraID";
    /**
     * Application clientId for EasyAuth Microsoft Entra ID.
     */
    clientId?: string;
    /**
     * Indicates whether to clean up previous operation when Linker is updating or deleting
     */
    deleteOrUpdateBehavior?: string;
    /**
     * Application Secret for EasyAuth Microsoft Entra ID.
     */
    secret?: string;
}

/**
 * Target service's firewall rules. to allow connections from source service.
 */
export interface FirewallRulesResponse {
    /**
     * Allow Azure services to access the target service if true.
     */
    azureServices?: string;
    /**
     * Allow caller client IP to access the target service if true. the property is used when connecting local application to target service.
     */
    callerClientIP?: string;
    /**
     * This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account.
     */
    ipRanges?: string[];
}

/**
 * The secret info when type is keyVaultSecretReference. It's for scenario that user provides a secret stored in user's keyvault and source is Azure Kubernetes. The key Vault's resource id is linked to secretStore.keyVaultId.
 */
export interface KeyVaultSecretReferenceSecretInfoResponse {
    /**
     * Name of the Key Vault secret.
     */
    name?: string;
    /**
     * The secret type.
     * Expected value is 'keyVaultSecretReference'.
     */
    secretType: "keyVaultSecretReference";
    /**
     * Version of the Key Vault secret.
     */
    version?: string;
}

/**
 * The secret info when type is keyVaultSecretUri. It's for scenario that user provides a secret stored in user's keyvault and source is Web App, Spring Cloud or Container App.
 */
export interface KeyVaultSecretUriSecretInfoResponse {
    /**
     * The secret type.
     * Expected value is 'keyVaultSecretUri'.
     */
    secretType: "keyVaultSecretUri";
    /**
     * URI to the keyvault secret
     */
    value?: string;
}

/**
 * The represent of missing permissions
 */
export interface PermissionsMissingDryrunPrerequisiteResultResponse {
    /**
     * The permission list
     */
    permissions?: string[];
    /**
     * The recommended role to resolve permissions missing
     */
    recommendedRole?: string;
    /**
     * The permission scope
     */
    scope?: string;
    /**
     * The type of dryrun result.
     * Expected value is 'permissionsMissing'.
     */
    type: "permissionsMissing";
}

/**
 * Indicates public network solution, include firewall rules
 */
export interface PublicNetworkSolutionResponse {
    /**
     * Optional. Indicates public network solution. If enable, enable public network access of target service with best try. Default is enable. If optOut, opt out public network access configuration.
     */
    action?: string;
    /**
     * Indicates whether to clean up previous operation(such as firewall rules) when Linker is updating or deleting
     */
    deleteOrUpdateBehavior?: string;
    /**
     * Describe firewall rules of target service to make sure source application could connect to the target.
     */
    firewallRules?: FirewallRulesResponse;
}

/**
 * The authentication info when authType is secret
 */
export interface SecretAuthInfoResponse {
    /**
     * Optional. Indicates how to configure authentication. If optInAllAuth, service linker configures authentication such as enabling identity on source resource and granting RBAC roles. If optOutAllAuth, opt out authentication setup. Default is optInAllAuth.
     */
    authMode?: string;
    /**
     * The authentication type.
     * Expected value is 'secret'.
     */
    authType: "secret";
    /**
     * Username or account name for secret auth.
     */
    name?: string;
    /**
     * Password or key vault secret for secret auth.
     */
    secretInfo?: KeyVaultSecretReferenceSecretInfoResponse | KeyVaultSecretUriSecretInfoResponse | ValueSecretInfoResponse;
}

/**
 * An option to store secret value in secure place
 */
export interface SecretStoreResponse {
    /**
     * The key vault id to store secret
     */
    keyVaultId?: string;
    /**
     * The key vault secret name to store secret, only valid when storing one secret
     */
    keyVaultSecretName?: string;
}

/**
 * The service properties when target service type is SelfHostedServer
 */
export interface SelfHostedServerResponse {
    /**
     * The endpoint of service.
     */
    endpoint?: string;
    /**
     * The target service type.
     * Expected value is 'SelfHostedServer'.
     */
    type: "SelfHostedServer";
}

/**
 * The authentication info when authType is servicePrincipal certificate
 */
export interface ServicePrincipalCertificateAuthInfoResponse {
    /**
     * Optional. Indicates how to configure authentication. If optInAllAuth, service linker configures authentication such as enabling identity on source resource and granting RBAC roles. If optOutAllAuth, opt out authentication setup. Default is optInAllAuth.
     */
    authMode?: string;
    /**
     * The authentication type.
     * Expected value is 'servicePrincipalCertificate'.
     */
    authType: "servicePrincipalCertificate";
    /**
     * ServicePrincipal certificate for servicePrincipal auth.
     */
    certificate: string;
    /**
     * Application clientId for servicePrincipal auth.
     */
    clientId: string;
    /**
     * Indicates whether to clean up previous operation when Linker is updating or deleting
     */
    deleteOrUpdateBehavior?: string;
    /**
     * Principal Id for servicePrincipal auth.
     */
    principalId: string;
    /**
     * Optional, this value specifies the Azure roles to be assigned. Automatically 
     */
    roles?: string[];
}

/**
 * The authentication info when authType is servicePrincipal secret
 */
export interface ServicePrincipalSecretAuthInfoResponse {
    /**
     * Optional. Indicates how to configure authentication. If optInAllAuth, service linker configures authentication such as enabling identity on source resource and granting RBAC roles. If optOutAllAuth, opt out authentication setup. Default is optInAllAuth.
     */
    authMode?: string;
    /**
     * The authentication type.
     * Expected value is 'servicePrincipalSecret'.
     */
    authType: "servicePrincipalSecret";
    /**
     * ServicePrincipal application clientId for servicePrincipal auth.
     */
    clientId: string;
    /**
     * Indicates whether to clean up previous operation when Linker is updating or deleting
     */
    deleteOrUpdateBehavior?: string;
    /**
     * Principal Id for servicePrincipal auth.
     */
    principalId: string;
    /**
     * Optional, this value specifies the Azure roles to be assigned. Automatically 
     */
    roles?: string[];
    /**
     * Secret for servicePrincipal auth.
     */
    secret: string;
    /**
     * Username created in the database which is mapped to a user in AAD.
     */
    userName?: string;
}

/**
 * A configuration item for source resource
 */
export interface SourceConfigurationResponse {
    /**
     * The type of setting
     */
    configType: string;
    /**
     * Descriptive information for the configuration
     */
    description?: string;
    /**
     * The identity for key vault reference, system or user-assigned managed identity ID
     */
    keyVaultReferenceIdentity?: string;
    /**
     * The name of setting.
     */
    name?: string;
    /**
     * The value of setting
     */
    value?: string;
}

/**
 * The authentication info when authType is systemAssignedIdentity
 */
export interface SystemAssignedIdentityAuthInfoResponse {
    /**
     * Optional. Indicates how to configure authentication. If optInAllAuth, service linker configures authentication such as enabling identity on source resource and granting RBAC roles. If optOutAllAuth, opt out authentication setup. Default is optInAllAuth.
     */
    authMode?: string;
    /**
     * The authentication type.
     * Expected value is 'systemAssignedIdentity'.
     */
    authType: "systemAssignedIdentity";
    /**
     * Indicates whether to clean up previous operation when Linker is updating or deleting
     */
    deleteOrUpdateBehavior?: string;
    /**
     * Optional, this value specifies the Azure role to be assigned
     */
    roles?: string[];
    /**
     * Username created in the database which is mapped to a user in AAD.
     */
    userName?: string;
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
 * The authentication info when authType is user account
 */
export interface UserAccountAuthInfoResponse {
    /**
     * Optional. Indicates how to configure authentication. If optInAllAuth, service linker configures authentication such as enabling identity on source resource and granting RBAC roles. If optOutAllAuth, opt out authentication setup. Default is optInAllAuth.
     */
    authMode?: string;
    /**
     * The authentication type.
     * Expected value is 'userAccount'.
     */
    authType: "userAccount";
    /**
     * Indicates whether to clean up previous operation when Linker is updating or deleting
     */
    deleteOrUpdateBehavior?: string;
    /**
     * Principal Id for user account.
     */
    principalId?: string;
    /**
     * Optional, this value specifies the Azure roles to be assigned. Automatically 
     */
    roles?: string[];
    /**
     * Username created in the database which is mapped to a user in AAD.
     */
    userName?: string;
}

/**
 * The authentication info when authType is userAssignedIdentity
 */
export interface UserAssignedIdentityAuthInfoResponse {
    /**
     * Optional. Indicates how to configure authentication. If optInAllAuth, service linker configures authentication such as enabling identity on source resource and granting RBAC roles. If optOutAllAuth, opt out authentication setup. Default is optInAllAuth.
     */
    authMode?: string;
    /**
     * The authentication type.
     * Expected value is 'userAssignedIdentity'.
     */
    authType: "userAssignedIdentity";
    /**
     * Client Id for userAssignedIdentity.
     */
    clientId?: string;
    /**
     * Indicates whether to clean up previous operation when Linker is updating or deleting
     */
    deleteOrUpdateBehavior?: string;
    /**
     * Optional, this value specifies the Azure role to be assigned
     */
    roles?: string[];
    /**
     * Subscription id for userAssignedIdentity.
     */
    subscriptionId?: string;
    /**
     * Username created in the database which is mapped to a user in AAD.
     */
    userName?: string;
}

/**
 * The VNet solution for linker
 */
export interface VNetSolutionResponse {
    /**
     * Indicates whether to clean up previous operation when Linker is updating or deleting
     */
    deleteOrUpdateBehavior?: string;
    /**
     * Type of VNet solution.
     */
    type?: string;
}

/**
 * The secret info when type is rawValue. It's for scenarios that user input the secret.
 */
export interface ValueSecretInfoResponse {
    /**
     * The secret type.
     * Expected value is 'rawValue'.
     */
    secretType: "rawValue";
    /**
     * The actual value of the secret.
     */
    value?: string;
}
