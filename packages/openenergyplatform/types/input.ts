import * as pulumi from "@pulumi/pulumi";
export namespace openenergyplatform {
    /**
     * The list of Energy services resource's Data Partition Names.
     */
    export interface DataPartitionNamesArgs {
        name?: pulumi.Input<string>;
    }

    export interface EnergyServicePropertiesArgs {
        authAppId?: pulumi.Input<string>;
        dataPartitionNames?: pulumi.Input<pulumi.Input<DataPartitionNamesArgs>[]>;
    }

    export namespace v20220404preview {
        /**
         * The list of Energy services resource's Data Partition Names.
         */
        export interface DataPartitionNamesArgs {
            name?: pulumi.Input<string>;
        }

        export interface EnergyServicePropertiesArgs {
            authAppId?: pulumi.Input<string>;
            dataPartitionNames?: pulumi.Input<pulumi.Input<v20220404preview.DataPartitionNamesArgs>[]>;
        }

    }
}
