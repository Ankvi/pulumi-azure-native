import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * API key payload which is exposed in the request/response of the resource provider.
     */
    export interface ApiKeyResponse {
        /**
         * Gets or sets the API key name.
         */
        keyName?: string;
        /**
         * Gets or sets the API key value.
         */
        value?: string;
    }

    /**
     * Payload of the blockchain member nodes Sku for a blockchain member.
     */
    export interface BlockchainMemberNodesSkuResponse {
        /**
         * Gets or sets the nodes capacity.
         */
        capacity?: number;
    }

    /**
     * Consortium payload
     */
    export interface ConsortiumResponse {
        /**
         * Gets or sets the blockchain member name.
         */
        name?: string;
        /**
         * Gets or sets the protocol for the consortium.
         */
        protocol?: string;
    }

    /**
     * Ip range for firewall rules
     */
    export interface FirewallRuleResponse {
        /**
         * Gets or sets the end IP address of the firewall rule range.
         */
        endIpAddress?: string;
        /**
         * Gets or sets the name of the firewall rules.
         */
        ruleName?: string;
        /**
         * Gets or sets the start IP address of the firewall rule range.
         */
        startIpAddress?: string;
    }

    /**
     * Blockchain member Sku in payload
     */
    export interface SkuResponse {
        /**
         * Gets or sets Sku name
         */
        name?: string;
        /**
         * Gets or sets Sku tier
         */
        tier?: string;
    }
