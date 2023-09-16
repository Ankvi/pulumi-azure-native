import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace enterpriseknowledgegraph {
    /**
     * The parameters to provide for the EnterpriseKnowledgeGraph.
     */
    export interface EnterpriseKnowledgeGraphPropertiesResponse {
        /**
         * The description of the EnterpriseKnowledgeGraph
         */
        description?: string;
        /**
         * Specifies the metadata  of the resource.
         */
        metadata?: any;
        /**
         * The state of EnterpriseKnowledgeGraph provisioning
         */
        provisioningState?: string;
    }

    /**
     * The SKU of the EnterpriseKnowledgeGraph service account.
     */
    export interface SkuResponse {
        /**
         * The sku name
         */
        name: string;
    }

    export namespace v20181203 {
        /**
         * The parameters to provide for the EnterpriseKnowledgeGraph.
         */
        export interface EnterpriseKnowledgeGraphPropertiesResponse {
            /**
             * The description of the EnterpriseKnowledgeGraph
             */
            description?: string;
            /**
             * Specifies the metadata  of the resource.
             */
            metadata?: any;
            /**
             * The state of EnterpriseKnowledgeGraph provisioning
             */
            provisioningState?: string;
        }

        /**
         * The SKU of the EnterpriseKnowledgeGraph service account.
         */
        export interface SkuResponse {
            /**
             * The sku name
             */
            name: string;
        }

    }
}
