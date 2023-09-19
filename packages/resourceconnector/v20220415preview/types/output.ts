import * as pulumi from "@pulumi/pulumi";
    /**
     * Cluster User Credential appliance.
     */
    export interface ApplianceCredentialKubeconfigResponse {
        /**
         * Name which contains the role of the kubeconfig.
         */
        name: string;
        /**
         * Contains the kubeconfig value.
         */
        value: string;
    }

    /**
     * Appliance SSHKey definition.
     */
    export interface SSHKeyResponse {
        /**
         * User Private Key.
         */
        privateKey?: string;
        /**
         * User Public Key.
         */
        publicKey?: string;
    }
