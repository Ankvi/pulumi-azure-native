import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
     * Identity of the Extension resource in an AKS cluster
     */
    export interface ExtensionResponseAksAssignedIdentity {
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
    }

    /**
     * Status from the extension.
     */
    export interface ExtensionStatusResponse {
        /**
         * Status code provided by the Extension
         */
        code?: string;
        /**
         * Short description of status of the extension.
         */
        displayStatus?: string;
        /**
         * Level of the status.
         */
        level?: string;
        /**
         * Detailed message of the status from the Extension.
         */
        message?: string;
        /**
         * DateLiteral (per ISO8601) noting the time of installation status.
         */
        time?: string;
    }
    /**
     * extensionStatusResponseProvideDefaults sets the appropriate defaults for ExtensionStatusResponse
     */
    export function extensionStatusResponseProvideDefaults(val: ExtensionStatusResponse): ExtensionStatusResponse {
        return {
            ...val,
            level: (val.level) ?? "Information",
        };
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
    }

    /**
     * Specifies that the scope of the extension is Cluster
     */
    export interface ScopeClusterResponse {
        /**
         * Namespace where the extension Release must be placed, for a Cluster scoped extension.  If this namespace does not exist, it will be created
         */
        releaseNamespace?: string;
    }

    /**
     * Specifies that the scope of the extension is Namespace
     */
    export interface ScopeNamespaceResponse {
        /**
         * Namespace where the extension will be created for an Namespace scoped extension.  If this namespace does not exist, it will be created
         */
        targetNamespace?: string;
    }

    /**
     * Scope of the extension. It can be either Cluster or Namespace; but not both.
     */
    export interface ScopeResponse {
        /**
         * Specifies that the scope of the extension is Cluster
         */
        cluster?: ScopeClusterResponse;
        /**
         * Specifies that the scope of the extension is Namespace
         */
        namespace?: ScopeNamespaceResponse;
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
