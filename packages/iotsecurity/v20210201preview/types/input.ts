import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * MDE integration configuration
     */
    export interface DefenderSettingsPropertiesMdeIntegrationArgs {
        /**
         * Integration status
         */
        status: pulumi.Input<string | enums.MdeIntegration>;
    }
