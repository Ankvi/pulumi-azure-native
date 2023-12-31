import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
     * Represents a Template Spec artifact containing an embedded Azure Resource Manager template.
     */
    export interface TemplateSpecTemplateArtifactResponse {
        /**
         * The kind of artifact.
         * Expected value is 'template'.
         */
        kind: "template";
        /**
         * A filesystem safe relative path of the artifact.
         */
        path: string;
        /**
         * The Azure Resource Manager template.
         */
        template: any;
    }
