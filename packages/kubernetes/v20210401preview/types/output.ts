import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The credential result response.
     */
    export interface CredentialResultResponse {
        /**
         * The name of the credential.
         */
        name: string;
        /**
         * Base64-encoded Kubernetes configuration file.
         */
        value: string;
    }

    /**
     * Contains the REP (rendezvous endpoint) and “Sender” access token.
     */
    export interface HybridConnectionConfigResponse {
        /**
         * Timestamp when this token will be expired.
         */
        expirationTime: number;
        /**
         * Name of the connection
         */
        hybridConnectionName: string;
        /**
         * Name of the relay.
         */
        relay: string;
        /**
         * Sender access token
         */
        token: string;
    }
