import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The properties specific to an Enterprise Channel Node.
     */
    export interface EnterpriseChannelNodeArgs {
        /**
         * The location of the Enterprise Channel Node.
         */
        azureLocation: pulumi.Input<string>;
        /**
         * The sku of the Enterprise Channel Node.
         */
        azureSku: pulumi.Input<string>;
        /**
         * The name of the Enterprise Channel Node.
         */
        name: pulumi.Input<string>;
        /**
         * The current state of the Enterprise Channel Node.
         */
        state?: pulumi.Input<string | enums.EnterpriseChannelNodeState>;
    }

    /**
     * The parameters to provide for the Enterprise Channel.
     */
    export interface EnterpriseChannelPropertiesArgs {
        /**
         * The nodes associated with the Enterprise Channel.
         */
        nodes: pulumi.Input<pulumi.Input<EnterpriseChannelNodeArgs>[]>;
        /**
         * The current state of the Enterprise Channel.
         */
        state?: pulumi.Input<string | enums.EnterpriseChannelState>;
    }

    /**
     * The SKU of the cognitive services account.
     */
    export interface SkuArgs {
        /**
         * The sku name
         */
        name: pulumi.Input<string | enums.SkuName>;
    }
