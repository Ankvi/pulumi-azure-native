import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Server admin credentials.
     */
    export interface AdminCredentialsArgs {
        sourceServerPassword: pulumi.Input<string>;
        targetServerPassword: pulumi.Input<string>;
    }

    /**
     * Migration secret parameters.
     */
    export interface MigrationSecretParametersArgs {
        /**
         * Server admin credentials.
         */
        adminCredentials: pulumi.Input<AdminCredentialsArgs>;
    }
