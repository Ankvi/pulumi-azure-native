import * as pulumi from "@pulumi/pulumi";
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
