import * as pulumi from "@pulumi/pulumi";
export namespace dynamics365fraudprotection {
    /**
     * An array of administrator user identities
     */
    export interface DFPInstanceAdministratorsArgs {
        /**
         * An array of administrator user identities.
         */
        members?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export namespace v20210201preview {
        /**
         * An array of administrator user identities
         */
        export interface DFPInstanceAdministratorsArgs {
            /**
             * An array of administrator user identities.
             */
            members?: pulumi.Input<pulumi.Input<string>[]>;
        }

    }
}
