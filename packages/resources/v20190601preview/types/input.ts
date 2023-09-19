import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Represents a Template Spec artifact containing an embedded Azure Resource Manager template.
     */
    export interface TemplateSpecTemplateArtifactArgs {
        /**
         * The kind of artifact.
         * Expected value is 'template'.
         */
        kind: pulumi.Input<"template">;
        /**
         * A filesystem safe relative path of the artifact.
         */
        path: pulumi.Input<string>;
        /**
         * The Azure Resource Manager template.
         */
        template: any;
    }
