import * as pulumi from "@pulumi/pulumi";
    /**
     * EngagementFabric channel description
     */
    export interface ChannelTypeDescriptionResponse {
        /**
         * Text description for the channel
         */
        channelDescription?: string;
        /**
         * All the available functions for the channel
         */
        channelFunctions?: string[];
        /**
         * Channel type
         */
        channelType?: string;
    }

    /**
     * The description of the EngagementFabric account key
     */
    export interface KeyDescriptionResponse {
        /**
         * The name of the key
         */
        name: string;
        /**
         * The rank of the key
         */
        rank: string;
        /**
         * The value of the key
         */
        value: string;
    }

    /**
     * The EngagementFabric SKU
     */
    export interface SKUResponse {
        /**
         * The name of the SKU
         */
        name: string;
        /**
         * The price tier of the SKU
         */
        tier?: string;
    }
