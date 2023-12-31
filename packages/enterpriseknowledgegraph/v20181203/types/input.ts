import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The parameters to provide for the EnterpriseKnowledgeGraph.
     */
    export interface EnterpriseKnowledgeGraphPropertiesArgs {
        /**
         * The description of the EnterpriseKnowledgeGraph
         */
        description?: pulumi.Input<string>;
        /**
         * Specifies the metadata  of the resource.
         */
        metadata?: any;
        /**
         * The state of EnterpriseKnowledgeGraph provisioning
         */
        provisioningState?: pulumi.Input<string>;
    }

    /**
     * The SKU of the EnterpriseKnowledgeGraph service account.
     */
    export interface SkuArgs {
        /**
         * The sku name
         */
        name: pulumi.Input<string | enums.SkuName>;
    }
