import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get SAP sizing recommendations by providing input SAPS for application tier and memory required for database tier
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2021-12-01-preview, 2022-11-01-preview, 2023-10-01-preview.
 */
export function getSAPSizingRecommendations(args: GetSAPSizingRecommendationsArgs, opts?: pulumi.InvokeOptions): Promise<GetSAPSizingRecommendationsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads:getSAPSizingRecommendations", {
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

export interface GetSAPSizingRecommendationsArgs {
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
     * The name of Azure region.
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
export interface GetSAPSizingRecommendationsResult {
    /**
     * The type of SAP deployment, single server or Three tier.
     */
    readonly deploymentType: string;
}
/**
 * Get SAP sizing recommendations by providing input SAPS for application tier and memory required for database tier
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2021-12-01-preview, 2022-11-01-preview, 2023-10-01-preview.
 */
export function getSAPSizingRecommendationsOutput(args: GetSAPSizingRecommendationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSAPSizingRecommendationsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:workloads:getSAPSizingRecommendations", {
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

export interface GetSAPSizingRecommendationsOutputArgs {
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
     * The name of Azure region.
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