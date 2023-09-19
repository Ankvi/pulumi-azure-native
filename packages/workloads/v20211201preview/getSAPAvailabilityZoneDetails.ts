import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the recommended SAP Availability Zone Pair Details for your region.
 */
export function getSAPAvailabilityZoneDetails(args: GetSAPAvailabilityZoneDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetSAPAvailabilityZoneDetailsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads/v20211201preview:getSAPAvailabilityZoneDetails", {
        "appLocation": args.appLocation,
        "databaseType": args.databaseType,
        "location": args.location,
        "sapProduct": args.sapProduct,
    }, opts);
}

export interface GetSAPAvailabilityZoneDetailsArgs {
    /**
     * The geo-location where the SAP resources will be created.
     */
    appLocation: string;
    /**
     * The database type. Eg: HANA, DB2, etc
     */
    databaseType: string | types.enums.SAPDatabaseType;
    /**
     * The name of Azure region.
     */
    location: string;
    /**
     * Defines the SAP Product type.
     */
    sapProduct: string | types.enums.SAPProductType;
}

/**
 * The list of supported availability zone pairs which are part of SAP HA deployment.
 */
export interface GetSAPAvailabilityZoneDetailsResult {
    /**
     * Gets the list of availability zone pairs.
     */
    readonly availabilityZonePairs?: types.outputs.SAPAvailabilityZonePairResponse[];
}
/**
 * Get the recommended SAP Availability Zone Pair Details for your region.
 */
export function getSAPAvailabilityZoneDetailsOutput(args: GetSAPAvailabilityZoneDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSAPAvailabilityZoneDetailsResult> {
    return pulumi.output(args).apply((a: any) => getSAPAvailabilityZoneDetails(a, opts))
}

export interface GetSAPAvailabilityZoneDetailsOutputArgs {
    /**
     * The geo-location where the SAP resources will be created.
     */
    appLocation: pulumi.Input<string>;
    /**
     * The database type. Eg: HANA, DB2, etc
     */
    databaseType: pulumi.Input<string | types.enums.SAPDatabaseType>;
    /**
     * The name of Azure region.
     */
    location: pulumi.Input<string>;
    /**
     * Defines the SAP Product type.
     */
    sapProduct: pulumi.Input<string | types.enums.SAPProductType>;
}
