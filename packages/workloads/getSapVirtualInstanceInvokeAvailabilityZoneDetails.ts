import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the recommended SAP Availability Zone Pair Details for your region.
 * Azure REST API version: 2024-09-01.
 */
export function getSapVirtualInstanceInvokeAvailabilityZoneDetails(args: GetSapVirtualInstanceInvokeAvailabilityZoneDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetSapVirtualInstanceInvokeAvailabilityZoneDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads:getSapVirtualInstanceInvokeAvailabilityZoneDetails", {
        "appLocation": args.appLocation,
        "databaseType": args.databaseType,
        "location": args.location,
        "sapProduct": args.sapProduct,
    }, opts);
}

export interface GetSapVirtualInstanceInvokeAvailabilityZoneDetailsArgs {
    /**
     * The geo-location where the SAP resources will be created.
     */
    appLocation: string;
    /**
     * The database type. Eg: HANA, DB2, etc
     */
    databaseType: string | types.enums.SAPDatabaseType;
    /**
     * The name of the Azure region.
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
export interface GetSapVirtualInstanceInvokeAvailabilityZoneDetailsResult {
    /**
     * Gets the list of availability zone pairs.
     */
    readonly availabilityZonePairs?: types.outputs.SAPAvailabilityZonePairResponse[];
}
/**
 * Get the recommended SAP Availability Zone Pair Details for your region.
 * Azure REST API version: 2024-09-01.
 */
export function getSapVirtualInstanceInvokeAvailabilityZoneDetailsOutput(args: GetSapVirtualInstanceInvokeAvailabilityZoneDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSapVirtualInstanceInvokeAvailabilityZoneDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:workloads:getSapVirtualInstanceInvokeAvailabilityZoneDetails", {
        "appLocation": args.appLocation,
        "databaseType": args.databaseType,
        "location": args.location,
        "sapProduct": args.sapProduct,
    }, opts);
}

export interface GetSapVirtualInstanceInvokeAvailabilityZoneDetailsOutputArgs {
    /**
     * The geo-location where the SAP resources will be created.
     */
    appLocation: pulumi.Input<string>;
    /**
     * The database type. Eg: HANA, DB2, etc
     */
    databaseType: pulumi.Input<string | types.enums.SAPDatabaseType>;
    /**
     * The name of the Azure region.
     */
    location: pulumi.Input<string>;
    /**
     * Defines the SAP Product type.
     */
    sapProduct: pulumi.Input<string | types.enums.SAPProductType>;
}