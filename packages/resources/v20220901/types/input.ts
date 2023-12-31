import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
     * Deployment parameter for the template.
     */
    export interface DeploymentParameterArgs {
        /**
         * Azure Key Vault parameter reference.
         */
        reference?: pulumi.Input<KeyVaultParameterReferenceArgs>;
        /**
         * Input value to the parameter .
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
         * Azure Key Vault resource id.
         */
        id: pulumi.Input<string>;
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
