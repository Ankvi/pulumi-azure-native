import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the recommended SAP Availability Zone Pair Details for your region.
 *
 * Uses Azure REST API version 2023-04-01.
 *
 * Other available API versions: 2021-12-01-preview, 2022-11-01-preview, 2023-10-01-preview.
 */
export function getSAPAvailabilityZoneDetails(args: GetSAPAvailabilityZoneDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetSAPAvailabilityZoneDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads:getSAPAvailabilityZoneDetails", {
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
 *
 * Uses Azure REST API version 2023-04-01.
 *
 * Other available API versions: 2021-12-01-preview, 2022-11-01-preview, 2023-10-01-preview.
 */
export function getSAPAvailabilityZoneDetailsOutput(args: GetSAPAvailabilityZoneDetailsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSAPAvailabilityZoneDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:workloads:getSAPAvailabilityZoneDetails", {
        "appLocation": args.appLocation,
        "databaseType": args.databaseType,
        "location": args.location,
        "sapProduct": args.sapProduct,
    }, opts);
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