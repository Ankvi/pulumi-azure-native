import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace iotsecurity {
    /**
     * MDE integration configuration
     */
    export interface DefenderSettingsPropertiesMdeIntegrationArgs {
        /**
         * Integration status
         */
        status: pulumi.Input<string | enums.MdeIntegration>;
    }

    export namespace v20210201preview {
        /**
         * MDE integration configuration
         */
        export interface DefenderSettingsPropertiesMdeIntegrationArgs {
            /**
             * Integration status
             */
            status: pulumi.Input<string | enums.v20210201preview.MdeIntegration>;
        }

    }
}
