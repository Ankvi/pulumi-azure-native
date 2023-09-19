import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Defines how resources deployed by the deployment stack are locked.
     */
    export interface DenySettingsResponse {
        /**
         * DenySettings will be applied to child scopes.
         */
        applyToChildScopes?: boolean;
        /**
         * List of role-based management operations that are excluded from the denySettings. Up to 200 actions are permitted. If the denySetting mode is set to 'denyWriteAndDelete', then the following actions are automatically appended to 'excludedActions': '*&#47;read' and 'Microsoft.Authorization/locks/delete'. If the denySetting mode is set to 'denyDelete', then the following actions are automatically appended to 'excludedActions': 'Microsoft.Authorization/locks/delete'. Duplicate actions will be removed.
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
         * The error object.
         */
        error?: ErrorDetailResponse;
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
