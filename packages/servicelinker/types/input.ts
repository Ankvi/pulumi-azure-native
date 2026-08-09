import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The access key directly from target resource properties, which target service is Azure Resource, such as Microsoft.Storage
 */
export interface AccessKeyInfoBaseArgs {
    /**
     * Optional. Indicates how to configure authentication. If optInAllAuth, service linker configures authentication such as enabling identity on source resource and granting RBAC roles. If optOutAllAuth, opt out authentication setup. Default is optInAllAuth.
     */
    authMode?: pulumi.Input<string | enums.AuthMode | undefined>;
    /**
     * The authentication type.
     * Expected value is 'accessKey'.
     */
    authType: pulumi.Input<"accessKey">;
    /**
     * Permissions of the accessKey. `Read` and `Write` are for Azure Cosmos DB and Azure App Configuration, `Listen`, `Send` and `Manage` are for Azure Event Hub and Azure Service Bus.
     */
    permissions?: pulumi.Input<pulumi.Input<string | enums.AccessKeyPermissions>[] | undefined>;
}

/**
 * The resource properties when type is Azure Key Vault
 */
export interface AzureKeyVaultPropertiesArgs {
    /**
     * True if connect via Kubernetes CSI Driver.
     */
    connectAsKubernetesCsiDriver?: pulumi.Input<boolean | undefined>;
    /**
     * The azure resource type.
     * Expected value is 'KeyVault'.
     */
    type: pulumi.Input<"KeyVault">;
}

/**
 * The azure resource info when target service type is AzureResource
 */
export interface AzureResourceArgs {
    /**
     * The Id of azure resource.
     */
    id?: pulumi.Input<string | undefined>;
    /**
     * The azure resource connection related properties.
     */
    resourceProperties?: pulumi.Input<AzureKeyVaultPropertiesArgs | undefined>;
    /**
     * The target service type.
     * Expected value is 'AzureResource'.
     */
    type: pulumi.Input<"AzureResource">;
}

/**
 * The configuration information, used to generate configurations or save to applications
 */
export interface ConfigurationInfoArgs {
    /**
     * Optional, indicate whether to apply configurations on source application. If enable, generate configurations and applied to the source application. Default is enable. If optOut, no configuration change will be made on source.
     */
    action?: pulumi.Input<string | enums.ActionType | undefined>;
    /**
     * A dictionary of additional configurations to be added. Service will auto generate a set of basic configurations and this property is to full fill more customized configurations
     */
    additionalConfigurations?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * A dictionary of additional properties to be added in the end of connection string.
     */
    additionalConnectionStringProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * An option to store configuration into different place
     */
    configurationStore?: pulumi.Input<ConfigurationStoreArgs | undefined>;
    /**
     * Optional. A dictionary of default key name and customized key name mapping. If not specified, default key name will be used for generate configurations
     */
    customizedKeys?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Indicates some additional properties for dapr client type
     */
    daprProperties?: pulumi.Input<DaprPropertiesArgs | undefined>;
    /**
     * Indicates whether to clean up previous operation when Linker is updating or deleting
     */
    deleteOrUpdateBehavior?: pulumi.Input<string | enums.DeleteOrUpdateBehavior | undefined>;
}

/**
 * An option to store configuration into different place
 */
export interface ConfigurationStoreArgs {
    /**
     * The app configuration id to store configuration
     */
    appConfigurationId?: pulumi.Input<string | undefined>;
}

/**
 * The service properties when target service type is ConfluentBootstrapServer
 */
export interface ConfluentBootstrapServerArgs {
    /**
     * The endpoint of service.
     */
    endpoint?: pulumi.Input<string | undefined>;
    /**
     * The target service type.
     * Expected value is 'ConfluentBootstrapServer'.
     */
    type: pulumi.Input<"ConfluentBootstrapServer">;
}

/**
 * The service properties when target service type is ConfluentSchemaRegistry
 */
export interface ConfluentSchemaRegistryArgs {
    /**
     * The endpoint of service.
     */
    endpoint?: pulumi.Input<string | undefined>;
    /**
     * The target service type.
     * Expected value is 'ConfluentSchemaRegistry'.
     */
    type: pulumi.Input<"ConfluentSchemaRegistry">;
}

/**
 * The dryrun parameters for creation or update a linker
 */
export interface CreateOrUpdateDryrunParametersArgs {
    /**
     * The name of action for you dryrun job.
     * Expected value is 'createOrUpdate'.
     */
    actionName: pulumi.Input<"createOrUpdate">;
    /**
     * The authentication type.
     */
    authInfo?: pulumi.Input<AccessKeyInfoBaseArgs | EasyAuthMicrosoftEntraIDAuthInfoArgs | SecretAuthInfoArgs | ServicePrincipalCertificateAuthInfoArgs | ServicePrincipalSecretAuthInfoArgs | SystemAssignedIdentityAuthInfoArgs | UserAccountAuthInfoArgs | UserAssignedIdentityAuthInfoArgs | undefined>;
    /**
     * The application client type
     */
    clientType?: pulumi.Input<string | enums.ClientType | undefined>;
    /**
     * The connection information consumed by applications, including secrets, connection strings.
     */
    configurationInfo?: pulumi.Input<ConfigurationInfoArgs | undefined>;
    /**
     * The network solution.
     */
    publicNetworkSolution?: pulumi.Input<PublicNetworkSolutionArgs | undefined>;
    /**
     * connection scope in source service.
     */
    scope?: pulumi.Input<string | undefined>;
    /**
     * An option to store secret value in secure place
     */
    secretStore?: pulumi.Input<SecretStoreArgs | undefined>;
    /**
     * The target service properties
     */
    targetService?: pulumi.Input<AzureResourceArgs | ConfluentBootstrapServerArgs | ConfluentSchemaRegistryArgs | SelfHostedServerArgs | undefined>;
    /**
     * The VNet solution.
     */
    vNetSolution?: pulumi.Input<VNetSolutionArgs | undefined>;
}

/**
 * The dapr component metadata.
 */
export interface DaprMetadataArgs {
    /**
     * The description of the metadata, returned from configuration api
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Metadata property name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The value indicating whether the metadata is required or not
     */
    required?: pulumi.Input<string | enums.DaprMetadataRequired | undefined>;
    /**
     * The secret name where dapr could get value
     */
    secretRef?: pulumi.Input<string | undefined>;
    /**
     * Metadata property value.
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * Indicates some additional properties for dapr client type
 */
export interface DaprPropertiesArgs {
    /**
     * The dapr component type
     */
    componentType?: pulumi.Input<string | undefined>;
    /**
     * Additional dapr metadata
     */
    metadata?: pulumi.Input<pulumi.Input<DaprMetadataArgs>[] | undefined>;
    /**
     * The dapr component scopes
     */
    scopes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The name of a secret store dapr to retrieve secret
     */
    secretStoreComponent?: pulumi.Input<string | undefined>;
    /**
     * The dapr component version
     */
    version?: pulumi.Input<string | undefined>;
}

/**
 * The authentication info when authType is EasyAuth Microsoft Entra ID
 */
export interface EasyAuthMicrosoftEntraIDAuthInfoArgs {
    /**
     * Optional. Indicates how to configure authentication. If optInAllAuth, service linker configures authentication such as enabling identity on source resource and granting RBAC roles. If optOutAllAuth, opt out authentication setup. Default is optInAllAuth.
     */
    authMode?: pulumi.Input<string | enums.AuthMode | undefined>;
    /**
     * The authentication type.
     * Expected value is 'easyAuthMicrosoftEntraID'.
     */
    authType: pulumi.Input<"easyAuthMicrosoftEntraID">;
    /**
     * Application clientId for EasyAuth Microsoft Entra ID.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * Indicates whether to clean up previous operation when Linker is updating or deleting
     */
    deleteOrUpdateBehavior?: pulumi.Input<string | enums.DeleteOrUpdateBehavior | undefined>;
    /**
     * Application Secret for EasyAuth Microsoft Entra ID.
     */
    secret?: pulumi.Input<string | undefined>;
}

/**
 * Target service's firewall rules. to allow connections from source service.
 */
export interface FirewallRulesArgs {
    /**
     * Allow Azure services to access the target service if true.
     */
    azureServices?: pulumi.Input<string | enums.AllowType | undefined>;
    /**
     * Allow caller client IP to access the target service if true. the property is used when connecting local application to target service.
     */
    callerClientIP?: pulumi.Input<string | enums.AllowType | undefined>;
    /**
     * This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account.
     */
    ipRanges?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The secret info when type is keyVaultSecretReference. It's for scenario that user provides a secret stored in user's keyvault and source is Azure Kubernetes. The key Vault's resource id is linked to secretStore.keyVaultId.
 */
export interface KeyVaultSecretReferenceSecretInfoArgs {
    /**
     * Name of the Key Vault secret.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The secret type.
     * Expected value is 'keyVaultSecretReference'.
     */
    secretType: pulumi.Input<"keyVaultSecretReference">;
    /**
     * Version of the Key Vault secret.
     */
    version?: pulumi.Input<string | undefined>;
}

/**
 * The secret info when type is keyVaultSecretUri. It's for scenario that user provides a secret stored in user's keyvault and source is Web App, Spring Cloud or Container App.
 */
export interface KeyVaultSecretUriSecretInfoArgs {
    /**
     * The secret type.
     * Expected value is 'keyVaultSecretUri'.
     */
    secretType: pulumi.Input<"keyVaultSecretUri">;
    /**
     * URI to the keyvault secret
     */
    value?: pulumi.Input<string | undefined>;
}

/**
 * Indicates public network solution, include firewall rules
 */
export interface PublicNetworkSolutionArgs {
    /**
     * Optional. Indicates public network solution. If enable, enable public network access of target service with best try. Default is enable. If optOut, opt out public network access configuration.
     */
    action?: pulumi.Input<string | enums.ActionType | undefined>;
    /**
     * Indicates whether to clean up previous operation(such as firewall rules) when Linker is updating or deleting
     */
    deleteOrUpdateBehavior?: pulumi.Input<string | enums.DeleteOrUpdateBehavior | undefined>;
    /**
     * Describe firewall rules of target service to make sure source application could connect to the target.
     */
    firewallRules?: pulumi.Input<FirewallRulesArgs | undefined>;
}

/**
 * The authentication info when authType is secret
 */
export interface SecretAuthInfoArgs {
    /**
     * Optional. Indicates how to configure authentication. If optInAllAuth, service linker configures authentication such as enabling identity on source resource and granting RBAC roles. If optOutAllAuth, opt out authentication setup. Default is optInAllAuth.
     */
    authMode?: pulumi.Input<string | enums.AuthMode | undefined>;
    /**
     * The authentication type.
     * Expected value is 'secret'.
     */
    authType: pulumi.Input<"secret">;
    /**
     * Username or account name for secret auth.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Password or key vault secret for secret auth.
     */
    secretInfo?: pulumi.Input<KeyVaultSecretReferenceSecretInfoArgs | KeyVaultSecretUriSecretInfoArgs | ValueSecretInfoArgs | undefined>;
}

/**
 * An option to store secret value in secure place
 */
export interface SecretStoreArgs {
    /**
     * The key vault id to store secret
     */
    keyVaultId?: pulumi.Input<string | undefined>;
    /**
     * The key vault secret name to store secret, only valid when storing one secret
     */
    keyVaultSecretName?: pulumi.Input<string | undefined>;
}

/**
 * The service properties when target service type is SelfHostedServer
 */
export interface SelfHostedServerArgs {
    /**
     * The endpoint of service.
     */
    endpoint?: pulumi.Input<string | undefined>;
    /**
     * The target service type.
     * Expected value is 'SelfHostedServer'.
     */
    type: pulumi.Input<"SelfHostedServer">;
}

/**
 * The authentication info when authType is servicePrincipal certificate
 */
export interface ServicePrincipalCertificateAuthInfoArgs {
    /**
     * Optional. Indicates how to configure authentication. If optInAllAuth, service linker configures authentication such as enabling identity on source resource and granting RBAC roles. If optOutAllAuth, opt out authentication setup. Default is optInAllAuth.
     */
    authMode?: pulumi.Input<string | enums.AuthMode | undefined>;
    /**
     * The authentication type.
     * Expected value is 'servicePrincipalCertificate'.
     */
    authType: pulumi.Input<"servicePrincipalCertificate">;
    /**
     * ServicePrincipal certificate for servicePrincipal auth.
     */
    certificate: pulumi.Input<string>;
    /**
     * Application clientId for servicePrincipal auth.
     */
    clientId: pulumi.Input<string>;
    /**
     * Indicates whether to clean up previous operation when Linker is updating or deleting
     */
    deleteOrUpdateBehavior?: pulumi.Input<string | enums.DeleteOrUpdateBehavior | undefined>;
    /**
     * Principal Id for servicePrincipal auth.
     */
    principalId: pulumi.Input<string>;
    /**
     * Optional, this value specifies the Azure roles to be assigned. Automatically
     */
    roles?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The authentication info when authType is servicePrincipal secret
 */
export interface ServicePrincipalSecretAuthInfoArgs {
    /**
     * Optional. Indicates how to configure authentication. If optInAllAuth, service linker configures authentication such as enabling identity on source resource and granting RBAC roles. If optOutAllAuth, opt out authentication setup. Default is optInAllAuth.
     */
    authMode?: pulumi.Input<string | enums.AuthMode | undefined>;
    /**
     * The authentication type.
     * Expected value is 'servicePrincipalSecret'.
     */
    authType: pulumi.Input<"servicePrincipalSecret">;
    /**
     * ServicePrincipal application clientId for servicePrincipal auth.
     */
    clientId: pulumi.Input<string>;
    /**
     * Indicates whether to clean up previous operation when Linker is updating or deleting
     */
    deleteOrUpdateBehavior?: pulumi.Input<string | enums.DeleteOrUpdateBehavior | undefined>;
    /**
     * Principal Id for servicePrincipal auth.
     */
    principalId: pulumi.Input<string>;
    /**
     * Optional, this value specifies the Azure roles to be assigned. Automatically
     */
    roles?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Secret for servicePrincipal auth.
     */
    secret: pulumi.Input<string>;
    /**
     * Username created in the database which is mapped to a user in AAD.
     */
    userName?: pulumi.Input<string | undefined>;
}

/**
 * The authentication info when authType is systemAssignedIdentity
 */
export interface SystemAssignedIdentityAuthInfoArgs {
    /**
     * Optional. Indicates how to configure authentication. If optInAllAuth, service linker configures authentication such as enabling identity on source resource and granting RBAC roles. If optOutAllAuth, opt out authentication setup. Default is optInAllAuth.
     */
    authMode?: pulumi.Input<string | enums.AuthMode | undefined>;
    /**
     * The authentication type.
     * Expected value is 'systemAssignedIdentity'.
     */
    authType: pulumi.Input<"systemAssignedIdentity">;
    /**
     * Indicates whether to clean up previous operation when Linker is updating or deleting
     */
    deleteOrUpdateBehavior?: pulumi.Input<string | enums.DeleteOrUpdateBehavior | undefined>;
    /**
     * Optional, this value specifies the Azure role to be assigned
     */
    roles?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Username created in the database which is mapped to a user in AAD.
     */
    userName?: pulumi.Input<string | undefined>;
}

/**
 * The authentication info when authType is user account
 */
export interface UserAccountAuthInfoArgs {
    /**
     * Optional. Indicates how to configure authentication. If optInAllAuth, service linker configures authentication such as enabling identity on source resource and granting RBAC roles. If optOutAllAuth, opt out authentication setup. Default is optInAllAuth.
     */
    authMode?: pulumi.Input<string | enums.AuthMode | undefined>;
    /**
     * The authentication type.
     * Expected value is 'userAccount'.
     */
    authType: pulumi.Input<"userAccount">;
    /**
     * Indicates whether to clean up previous operation when Linker is updating or deleting
     */
    deleteOrUpdateBehavior?: pulumi.Input<string | enums.DeleteOrUpdateBehavior | undefined>;
    /**
     * Principal Id for user account.
     */
    principalId?: pulumi.Input<string | undefined>;
    /**
     * Optional, this value specifies the Azure roles to be assigned. Automatically
     */
    roles?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Username created in the database which is mapped to a user in AAD.
     */
    userName?: pulumi.Input<string | undefined>;
}

/**
 * The authentication info when authType is userAssignedIdentity
 */
export interface UserAssignedIdentityAuthInfoArgs {
    /**
     * Optional. Indicates how to configure authentication. If optInAllAuth, service linker configures authentication such as enabling identity on source resource and granting RBAC roles. If optOutAllAuth, opt out authentication setup. Default is optInAllAuth.
     */
    authMode?: pulumi.Input<string | enums.AuthMode | undefined>;
    /**
     * The authentication type.
     * Expected value is 'userAssignedIdentity'.
     */
    authType: pulumi.Input<"userAssignedIdentity">;
    /**
     * Client Id for userAssignedIdentity.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * Indicates whether to clean up previous operation when Linker is updating or deleting
     */
    deleteOrUpdateBehavior?: pulumi.Input<string | enums.DeleteOrUpdateBehavior | undefined>;
    /**
     * Optional, this value specifies the Azure role to be assigned
     */
    roles?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Subscription id for userAssignedIdentity.
     */
    subscriptionId?: pulumi.Input<string | undefined>;
    /**
     * Username created in the database which is mapped to a user in AAD.
     */
    userName?: pulumi.Input<string | undefined>;
}

/**
 * The VNet solution for linker
 */
export interface VNetSolutionArgs {
    /**
     * Indicates whether to clean up previous operation when Linker is updating or deleting
     */
    deleteOrUpdateBehavior?: pulumi.Input<string | enums.DeleteOrUpdateBehavior | undefined>;
    /**
     * Type of VNet solution.
     */
    type?: pulumi.Input<string | enums.VNetSolutionType | undefined>;
}

/**
 * The secret info when type is rawValue. It's for scenarios that user input the secret.
 */
export interface ValueSecretInfoArgs {
    /**
     * The secret type.
     * Expected value is 'rawValue'.
     */
    secretType: pulumi.Input<"rawValue">;
    /**
     * The actual value of the secret.
     */
    value?: pulumi.Input<string | undefined>;
}
