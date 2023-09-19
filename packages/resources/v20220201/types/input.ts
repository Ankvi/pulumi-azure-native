import * as pulumi from "@pulumi/pulumi";
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
