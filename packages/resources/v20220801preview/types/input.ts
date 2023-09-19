import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Defines how resources deployed by the deployment stack are locked.
     */
    export interface DenySettingsArgs {
        /**
         * DenySettings will be applied to child scopes.
         */
        applyToChildScopes?: pulumi.Input<boolean>;
        /**
         * List of role-based management operations that are excluded from the denySettings. Up to 200 actions are permitted. If the denySetting mode is set to 'denyWriteAndDelete', then the following actions are automatically appended to 'excludedActions': '*&#47;read' and 'Microsoft.Authorization/locks/delete'. If the denySetting mode is set to 'denyDelete', then the following actions are automatically appended to 'excludedActions': 'Microsoft.Authorization/locks/delete'. Duplicate actions will be removed.
         */
        excludedActions?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of AAD principal IDs excluded from the lock. Up to 5 principals are permitted.
         */
        excludedPrincipals?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * denySettings Mode.
         */
        mode: pulumi.Input<string | enums.DenySettingsMode>;
    }

    /**
     * Defines the behavior of resources that are not managed immediately after the stack is updated.
     */
    export interface DeploymentStackPropertiesActionOnUnmanageArgs {
        /**
         * Specifies the action that should be taken on the resource when the deployment stack is deleted. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state.
         */
        managementGroups?: pulumi.Input<string | enums.DeploymentStacksDeleteDetachEnum>;
        /**
         * Specifies the action that should be taken on the resource when the deployment stack is deleted. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state.
         */
        resourceGroups?: pulumi.Input<string | enums.DeploymentStacksDeleteDetachEnum>;
        /**
         * Specifies the action that should be taken on the resource when the deployment stack is deleted. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state.
         */
        resources: pulumi.Input<string | enums.DeploymentStacksDeleteDetachEnum>;
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
