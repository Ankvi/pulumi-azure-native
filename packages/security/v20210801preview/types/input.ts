import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * describe the properties of a security assessment object reference (by key)
     */
    export interface AssignedComponentItemArgs {
        /**
         * unique key to a security assessment object
         */
        key?: pulumi.Input<string>;
    }

    /**
     * describe the properties of a of a security standard object reference
     */
    export interface AssignedStandardItemArgs {
        /**
         * full resourceId of the Microsoft.Security/standard object
         */
        id?: pulumi.Input<string>;
    }

    /**
     * Additional data about the assignment
     */
    export interface AssignmentPropertiesAdditionalDataArgs {
        /**
         * Exemption category of this assignment
         */
        exemptionCategory?: pulumi.Input<string>;
    }

    /**
     * Describes properties of an component as related to the standard
     */
    export interface StandardComponentPropertiesArgs {
        /**
         * Component Key matching componentMetadata
         */
        key?: pulumi.Input<string>;
    }
