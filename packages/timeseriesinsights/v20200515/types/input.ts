import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * A key property for the reference data set. A reference data set can have multiple key properties.
     */
    export interface ReferenceDataSetKeyPropertyArgs {
        /**
         * The name of the key property.
         */
        name?: pulumi.Input<string>;
        /**
         * The type of the key property.
         */
        type?: pulumi.Input<string | enums.ReferenceDataKeyPropertyType>;
    }
