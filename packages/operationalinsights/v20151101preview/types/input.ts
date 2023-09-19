import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * A machine reference with a hint of the machine's name and operating system.
     */
    export interface MachineReferenceWithHintsArgs {
        /**
         * Resource URI.
         */
        id: pulumi.Input<string>;
        /**
         * Specifies the sub-class of the reference.
         * Expected value is 'ref:machinewithhints'.
         */
        kind: pulumi.Input<"ref:machinewithhints">;
    }

    /**
     * The SKU (tier) of a workspace.
     */
    export interface SkuArgs {
        /**
         * The name of the SKU.
         */
        name: pulumi.Input<string | enums.SkuNameEnum>;
    }
