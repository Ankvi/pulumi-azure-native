import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace servicenetworking {
    /**
     * Association Subnet.
     */
    export interface AssociationSubnetArgs {
        /**
         * Association ID.
         */
        id: pulumi.Input<string>;
    }

    export namespace v20221001preview {
        /**
         * Association Subnet.
         */
        export interface AssociationSubnetArgs {
            /**
             * Association ID.
             */
            id: pulumi.Input<string>;
        }

        /**
         * Frontend IP Address.
         */
        export interface FrontendPropertiesIPAddressArgs {
            /**
             * IP Address.
             */
            id: pulumi.Input<string>;
        }

    }

    export namespace v20230501preview {
        /**
         * Association Subnet.
         */
        export interface AssociationSubnetArgs {
            /**
             * Association ID.
             */
            id: pulumi.Input<string>;
        }

    }
}
