import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * A key property for the reference data set. A reference data set can have multiple key properties.
     */
    export interface ReferenceDataSetKeyPropertyResponse {
        /**
         * The name of the key property.
         */
        name?: string;
        /**
         * The type of the key property.
         */
        type?: string;
    }
