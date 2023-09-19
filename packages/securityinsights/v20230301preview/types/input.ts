import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Represents an incident label
     */
    export interface IncidentLabelArgs {
        /**
         * The name of the label
         */
        labelName: pulumi.Input<string>;
    }

    /**
     * Information on the user an incident is assigned to
     */
    export interface IncidentOwnerInfoArgs {
        /**
         * The name of the user the incident is assigned to.
         */
        assignedTo?: pulumi.Input<string>;
        /**
         * The email of the user the incident is assigned to.
         */
        email?: pulumi.Input<string>;
        /**
         * The object id of the user the incident is assigned to.
         */
        objectId?: pulumi.Input<string>;
        /**
         * The type of the owner the incident is assigned to.
         */
        ownerType?: pulumi.Input<string | enums.OwnerType>;
        /**
         * The user principal name of the user the incident is assigned to.
         */
        userPrincipalName?: pulumi.Input<string>;
    }
