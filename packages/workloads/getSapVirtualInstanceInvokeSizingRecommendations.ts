import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the sizing recommendations.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getSapVirtualInstanceInvokeSizingRecommendations(args: GetSapVirtualInstanceInvokeSizingRecommendationsArgs, opts?: pulumi.InvokeOptions): Promise<GetSapVirtualInstanceInvokeSizingRecommendationsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads:getSapVirtualInstanceInvokeSizingRecommendations", {
        "appLocation": args.appLocation,
        "databaseType": args.databaseType,
        "dbMemory": args.dbMemory,
        "dbScaleMethod": args.dbScaleMethod,
        "deploymentType": args.deploymentType,
        "environment": args.environment,
        "highAvailabilityType": args.highAvailabilityType,
        "location": args.location,
        "sapProduct": args.sapProduct,
        "saps": args.saps,
    }, opts);
}

export interface GetSapVirtualInstanceInvokeSizingRecommendationsArgs {
    /**
     * The geo-location where the resource is to be created.
     */
    appLocation: string;
    /**
     * The database type.
     */
    databaseType: string | types.enums.SAPDatabaseType;
    /**
     * The database memory configuration.
     */
    dbMemory: number;
    /**
     * The DB scale method.
     */
    dbScaleMethod?: string | types.enums.SAPDatabaseScaleMethod;
    /**
     * The deployment type. Eg: SingleServer/ThreeTier
     */
    deploymentType: string | types.enums.SAPDeploymentType;
    /**
     * Defines the environment type - Production/Non Production.
     */
    environment: string | types.enums.SAPEnvironmentType;
    /**
     * The high availability type.
     */
    highAvailabilityType?: string | types.enums.SAPHighAvailabilityType;
    /**
     * The name of the Azure region.
     */
    location: string;
    /**
     * Defines the SAP Product type.
     */
    sapProduct: string | types.enums.SAPProductType;
    /**
     * The SAP Application Performance Standard measurement.
     */
    saps: number;
}

/**
 * The SAP sizing recommendation result.
 */
export interface GetSapVirtualInstanceInvokeSizingRecommendationsResult {
    /**
     * The deployment type. Eg: SingleServer/ThreeTier
     */
    readonly deploymentType: string;
}
/**
 * Gets the sizing recommendations.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getSapVirtualInstanceInvokeSizingRecommendationsOutput(args: GetSapVirtualInstanceInvokeSizingRecommendationsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSapVirtualInstanceInvokeSizingRecommendationsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:workloads:getSapVirtualInstanceInvokeSizingRecommendations", {
        "appLocation": args.appLocation,
        "databaseType": args.databaseType,
        "dbMemory": args.dbMemory,
        "dbScaleMethod": args.dbScaleMethod,
        "deploymentType": args.deploymentType,
        "environment": args.environment,
        "highAvailabilityType": args.highAvailabilityType,
        "location": args.location,
        "sapProduct": args.sapProduct,
        "saps": args.saps,
    }, opts);
}

export interface GetSapVirtualInstanceInvokeSizingRecommendationsOutputArgs {
    /**
     * The geo-location where the resource is to be created.
     */
    appLocation: pulumi.Input<string>;
    /**
     * The database type.
     */
    databaseType: pulumi.Input<string | types.enums.SAPDatabaseType>;
    /**
     * The database memory configuration.
     */
    dbMemory: pulumi.Input<number>;
    /**
     * The DB scale method.
     */
    dbScaleMethod?: pulumi.Input<string | types.enums.SAPDatabaseScaleMethod>;
    /**
     * The deployment type. Eg: SingleServer/ThreeTier
     */
    deploymentType: pulumi.Input<string | types.enums.SAPDeploymentType>;
    /**
     * Defines the environment type - Production/Non Production.
     */
    environment: pulumi.Input<string | types.enums.SAPEnvironmentType>;
    /**
     * The high availability type.
     */
    highAvailabilityType?: pulumi.Input<string | types.enums.SAPHighAvailabilityType>;
    /**
     * The name of the Azure region.
     */
    location: pulumi.Input<string>;
    /**
     * Defines the SAP Product type.
     */
    sapProduct: pulumi.Input<string | types.enums.SAPProductType>;
    /**
     * The SAP Application Performance Standard measurement.
     */
    saps: pulumi.Input<number>;
}