import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Defines the behavior of resources that are no longer managed after the stack is updated or deleted.
 */
export interface ActionOnUnmanageArgs {
    /**
     * Specifies an action for a newly unmanaged resource. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state.
     */
    managementGroups?: pulumi.Input<string | enums.DeploymentStacksDeleteDetachEnum>;
    /**
     * Specifies an action for a newly unmanaged resource. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state.
     */
    resourceGroups?: pulumi.Input<string | enums.DeploymentStacksDeleteDetachEnum>;
    /**
     * Specifies an action for a newly unmanaged resource. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state.
     */
    resources: pulumi.Input<string | enums.DeploymentStacksDeleteDetachEnum>;
}

/**
 * Settings to customize ACI container instance.
 */
export interface ContainerConfigurationArgs {
    /**
     * Container group name, if not specified then the name will get auto-generated. Not specifying a 'containerGroupName' indicates the system to generate a unique name which might end up flagging an Azure Policy as non-compliant. Use 'containerGroupName' when you have an Azure Policy that expects a specific naming convention or when you want to fully control the name. 'containerGroupName' property must be between 1 and 63 characters long, must contain only lowercase letters, numbers, and dashes and it cannot start or end with a dash and consecutive dashes are not allowed. To specify a 'containerGroupName', add the following object to properties: { "containerSettings": { "containerGroupName": "contoso-container" } }. If you do not want to specify a 'containerGroupName' then do not add 'containerSettings' property.
     */
    containerGroupName?: pulumi.Input<string>;
    /**
     * The subnet resource IDs for a container group.
     */
    subnetIds?: pulumi.Input<pulumi.Input<ContainerGroupSubnetIdArgs>[]>;
}

/**
 * Container group subnet information.
 */
export interface ContainerGroupSubnetIdArgs {
    /**
     * Resource ID of subnet.
     */
    id: pulumi.Input<string>;
    /**
     * Friendly name for the subnet.
     */
    name?: pulumi.Input<string>;
}

/**
 * The debug setting.
 */
export interface DebugSettingArgs {
    /**
     * Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information you are passing in during deployment. By logging information about the request or response, you could potentially expose sensitive data that is retrieved through the deployment operations.
     */
    detailLevel?: pulumi.Input<string>;
}

/**
 * Defines how resources deployed by the Deployment stack are locked.
 */
export interface DenySettingsArgs {
    /**
     * DenySettings will be applied to child resource scopes of every managed resource with a deny assignment.
     */
    applyToChildScopes?: pulumi.Input<boolean>;
    /**
     * List of role-based management operations that are excluded from the denySettings. Up to 200 actions are permitted. If the denySetting mode is set to 'denyWriteAndDelete', then the following actions are automatically appended to 'excludedActions': '*\/read' and 'Microsoft.Authorization/locks/delete'. If the denySetting mode is set to 'denyDelete', then the following actions are automatically appended to 'excludedActions': 'Microsoft.Authorization/locks/delete'. Duplicate actions will be removed.
     */
    excludedActions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of AAD principal IDs excluded from the lock. Up to 5 principals are permitted.
     */
    excludedPrincipals?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * denySettings Mode that defines denied actions.
     */
    mode: pulumi.Input<string | enums.DenySettingsMode>;
}

/**
 * Deployment parameter for the template.
 */
export interface DeploymentParameterArgs {
    /**
     * Azure Key Vault parameter reference.
     */
    reference?: pulumi.Input<KeyVaultParameterReferenceArgs>;
    /**
     * Type of the value.
     */
    type?: pulumi.Input<string>;
    /**
     * Input value to the parameter.
     */
    value?: any;
}

/**
 * Deployment properties.
 */
export interface DeploymentPropertiesArgs {
    /**
     * The debug setting of the deployment.
     */
    debugSetting?: pulumi.Input<DebugSettingArgs>;
    /**
     * Specifies whether template expressions are evaluated within the scope of the parent template or nested template. Only applicable to nested templates. If not specified, default value is outer.
     */
    expressionEvaluationOptions?: pulumi.Input<ExpressionEvaluationOptionsArgs>;
    /**
     * The mode that is used to deploy resources. This value can be either Incremental or Complete. In Incremental mode, resources are deployed without deleting existing resources that are not included in the template. In Complete mode, resources are deployed and existing resources in the resource group that are not included in the template are deleted. Be careful when using Complete mode as you may unintentionally delete resources.
     */
    mode: pulumi.Input<enums.DeploymentMode>;
    /**
     * The deployment on error behavior.
     */
    onErrorDeployment?: pulumi.Input<OnErrorDeploymentArgs>;
    /**
     * Name and value pairs that define the deployment parameters for the template. You use this element when you want to provide the parameter values directly in the request rather than link to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. It can be a JObject or a well formed JSON string.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<DeploymentParameterArgs>}>;
    /**
     * The URI of parameters file. You use this element to link to an existing parameters file. Use either the parametersLink property or the parameters property, but not both.
     */
    parametersLink?: pulumi.Input<ParametersLinkArgs>;
    /**
     * The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both.
     */
    template?: any;
    /**
     * The URI of the template. Use either the templateLink property or the template property, but not both.
     */
    templateLink?: pulumi.Input<TemplateLinkArgs>;
}

/**
 * The debug setting.
 */
export interface DeploymentStacksDebugSettingArgs {
    /**
     * Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information that is being passed in during deployment. By logging information about the request or response, sensitive data that is retrieved through the deployment operations could potentially be exposed.
     */
    detailLevel?: pulumi.Input<string>;
}

/**
 * Entity representing the reference to the deployment parameters.
 */
export interface DeploymentStacksParametersLinkArgs {
    /**
     * If included, must match the ContentVersion in the template.
     */
    contentVersion?: pulumi.Input<string>;
    /**
     * The URI of the parameters file.
     */
    uri: pulumi.Input<string>;
}

/**
 * Entity representing the reference to the template.
 */
export interface DeploymentStacksTemplateLinkArgs {
    /**
     * If included, must match the ContentVersion in the template.
     */
    contentVersion?: pulumi.Input<string>;
    /**
     * The resourceId of a Template Spec. Use either the id or uri property, but not both.
     */
    id?: pulumi.Input<string>;
    /**
     * The query string (for example, a SAS token) to be used with the templateLink URI.
     */
    queryString?: pulumi.Input<string>;
    /**
     * The relativePath property can be used to deploy a linked template at a location relative to the parent. If the parent template was linked with a TemplateSpec, this will reference an artifact in the TemplateSpec.  If the parent was linked with a URI, the child deployment will be a combination of the parent and relativePath URIs.
     */
    relativePath?: pulumi.Input<string>;
    /**
     * The URI of the template to deploy. Use either the uri or id property, but not both.
     */
    uri?: pulumi.Input<string>;
}

/**
 * The environment variable to pass to the script in the container instance.
 */
export interface EnvironmentVariableArgs {
    /**
     * The name of the environment variable.
     */
    name: pulumi.Input<string>;
    /**
     * The value of the secure environment variable.
     */
    secureValue?: pulumi.Input<string>;
    /**
     * The value of the environment variable.
     */
    value?: pulumi.Input<string>;
}

/**
 * Specifies whether template expressions are evaluated within the scope of the parent template or nested template.
 */
export interface ExpressionEvaluationOptionsArgs {
    /**
     * The scope to be used for evaluation of parameters, variables and functions in a nested template.
     */
    scope?: pulumi.Input<string | enums.ExpressionEvaluationOptionsScopeType>;
}

/**
 * Resource extended location.
 */
export interface ExtendedLocationArgs {
    /**
     * The extended location name.
     */
    name?: pulumi.Input<string>;
    /**
     * The extended location type.
     */
    type?: pulumi.Input<string | enums.ExtendedLocationType>;
}

/**
 * Identity for the resource.
 */
export interface IdentityArgs {
    /**
     * The identity type.
     */
    type?: pulumi.Input<enums.ResourceIdentityType>;
    /**
     * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Azure Key Vault parameter reference.
 */
export interface KeyVaultParameterReferenceArgs {
    /**
     * Azure Key Vault reference.
     */
    keyVault: pulumi.Input<KeyVaultReferenceArgs>;
    /**
     * Azure Key Vault secret name.
     */
    secretName: pulumi.Input<string>;
    /**
     * Azure Key Vault secret version.
     */
    secretVersion?: pulumi.Input<string>;
}

/**
 * Azure Key Vault reference.
 */
export interface KeyVaultReferenceArgs {
    /**
     * Azure Key Vault resourceId.
     */
    id: pulumi.Input<string>;
}

/**
 * Represents a Template Spec artifact containing an embedded Azure Resource Manager template for use as a linked template.
 */
export interface LinkedTemplateArtifactArgs {
    /**
     * A filesystem safe relative path of the artifact.
     */
    path: pulumi.Input<string>;
    /**
     * The Azure Resource Manager template.
     */
    template: any;
}

/**
 * Managed identity generic object.
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of the managed identity.
     */
    type?: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Deployment on error behavior.
 */
export interface OnErrorDeploymentArgs {
    /**
     * The deployment to be used on error case.
     */
    deploymentName?: pulumi.Input<string>;
    /**
     * The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment.
     */
    type?: pulumi.Input<enums.OnErrorDeploymentType>;
}

/**
 * Entity representing the reference to the deployment parameters.
 */
export interface ParametersLinkArgs {
    /**
     * If included, must match the ContentVersion in the template.
     */
    contentVersion?: pulumi.Input<string>;
    /**
     * The URI of the parameters file.
     */
    uri: pulumi.Input<string>;
}

/**
 * Plan for the resource.
 */
export interface PlanArgs {
    /**
     * The plan ID.
     */
    name?: pulumi.Input<string>;
    /**
     * The offer ID.
     */
    product?: pulumi.Input<string>;
    /**
     * The promotion code.
     */
    promotionCode?: pulumi.Input<string>;
    /**
     * The publisher ID.
     */
    publisher?: pulumi.Input<string>;
    /**
     * The plan's version.
     */
    version?: pulumi.Input<string>;
}

/**
 * SKU for the resource.
 */
export interface SkuArgs {
    /**
     * The SKU capacity.
     */
    capacity?: pulumi.Input<number>;
    /**
     * The SKU family.
     */
    family?: pulumi.Input<string>;
    /**
     * The SKU model.
     */
    model?: pulumi.Input<string>;
    /**
     * The SKU name.
     */
    name?: pulumi.Input<string>;
    /**
     * The SKU size.
     */
    size?: pulumi.Input<string>;
    /**
     * The SKU tier.
     */
    tier?: pulumi.Input<string>;
}

/**
 * Settings to use an existing storage account. Valid storage account kinds are: Storage, StorageV2 and FileStorage
 */
export interface StorageAccountConfigurationArgs {
    /**
     * The storage account access key.
     */
    storageAccountKey?: pulumi.Input<string>;
    /**
     * The storage account name.
     */
    storageAccountName?: pulumi.Input<string>;
}

/**
 * A dictionary of name and value pairs.
 */
export interface TagsArgs {
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * Entity representing the reference to the template.
 */
export interface TemplateLinkArgs {
    /**
     * If included, must match the ContentVersion in the template.
     */
    contentVersion?: pulumi.Input<string>;
    /**
     * The resource id of a Template Spec. Use either the id or uri property, but not both.
     */
    id?: pulumi.Input<string>;
    /**
     * The query string (for example, a SAS token) to be used with the templateLink URI.
     */
    queryString?: pulumi.Input<string>;
    /**
     * The relativePath property can be used to deploy a linked template at a location relative to the parent. If the parent template was linked with a TemplateSpec, this will reference an artifact in the TemplateSpec.  If the parent was linked with a URI, the child deployment will be a combination of the parent and relativePath URIs
     */
    relativePath?: pulumi.Input<string>;
    /**
     * The URI of the template to deploy. Use either the uri or id property, but not both.
     */
    uri?: pulumi.Input<string>;
}
