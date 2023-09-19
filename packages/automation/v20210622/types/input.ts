import * as pulumi from "@pulumi/pulumi";
    /**
     * Definition of RunAs credential to use for hybrid worker.
     */
    export interface RunAsCredentialAssociationPropertyArgs {
        /**
         * Gets or sets the name of the credential.
         */
        name?: pulumi.Input<string>;
    }
