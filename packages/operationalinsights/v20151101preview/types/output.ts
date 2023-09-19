import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * A machine reference with a hint of the machine's name and operating system.
     */
    export interface MachineReferenceWithHintsResponse {
        /**
         * Last known display name.
         */
        displayNameHint: string;
        /**
         * Resource URI.
         */
        id: string;
        /**
         * Specifies the sub-class of the reference.
         * Expected value is 'ref:machinewithhints'.
         */
        kind: "ref:machinewithhints";
        /**
         * Resource name.
         */
        name: string;
        /**
         * Last known operating system family.
         */
        osFamilyHint: string;
        /**
         * Resource type qualifier.
         */
        type: string;
    }

    /**
     * The SKU (tier) of a workspace.
     */
    export interface SkuResponse {
        /**
         * The name of the SKU.
         */
        name: string;
    }
