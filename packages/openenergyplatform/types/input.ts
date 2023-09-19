import * as pulumi from "@pulumi/pulumi";
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
