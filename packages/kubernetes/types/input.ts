import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace kubernetes {
    /**
     * Identity for the connected cluster.
     */
    export interface ConnectedClusterIdentityArgs {
        /**
         * The type of identity used for the connected cluster. The type 'SystemAssigned, includes a system created identity. The type 'None' means no identity is assigned to the connected cluster.
         */
        type: pulumi.Input<enums.ResourceIdentityType>;
    }
    /**
     * connectedClusterIdentityArgsProvideDefaults sets the appropriate defaults for ConnectedClusterIdentityArgs
     */
    export function connectedClusterIdentityArgsProvideDefaults(val: ConnectedClusterIdentityArgs): ConnectedClusterIdentityArgs {
        return {
            ...val,
            type: (val.type) ?? "SystemAssigned",
        };
    }

    export namespace v20210401preview {
    }

    export namespace v20220501preview {
        /**
         * Identity for the connected cluster.
         */
        export interface ConnectedClusterIdentityArgs {
            /**
             * The type of identity used for the connected cluster. The type 'SystemAssigned, includes a system created identity. The type 'None' means no identity is assigned to the connected cluster.
             */
            type: pulumi.Input<enums.v20220501preview.ResourceIdentityType>;
        }
        /**
         * connectedClusterIdentityArgsProvideDefaults sets the appropriate defaults for ConnectedClusterIdentityArgs
         */
        export function connectedClusterIdentityArgsProvideDefaults(val: ConnectedClusterIdentityArgs): ConnectedClusterIdentityArgs {
            return {
                ...val,
                type: (val.type) ?? "SystemAssigned",
            };
        }

    }

    export namespace v20221001preview {
        /**
         * Identity for the connected cluster.
         */
        export interface ConnectedClusterIdentityArgs {
            /**
             * The type of identity used for the connected cluster. The type 'SystemAssigned, includes a system created identity. The type 'None' means no identity is assigned to the connected cluster.
             */
            type: pulumi.Input<enums.v20221001preview.ResourceIdentityType>;
        }
        /**
         * connectedClusterIdentityArgsProvideDefaults sets the appropriate defaults for ConnectedClusterIdentityArgs
         */
        export function connectedClusterIdentityArgsProvideDefaults(val: ConnectedClusterIdentityArgs): ConnectedClusterIdentityArgs {
            return {
                ...val,
                type: (val.type) ?? "SystemAssigned",
            };
        }

    }
}
