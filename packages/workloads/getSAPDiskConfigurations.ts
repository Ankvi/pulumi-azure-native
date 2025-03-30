import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the SAP Disk Configuration Layout prod/non-prod SAP System.
 *
 * Uses Azure REST API version 2023-04-01.
 *
 * Other available API versions: 2021-12-01-preview, 2022-11-01-preview, 2023-10-01-preview.
 */
export function getSAPDiskConfigurations(args: GetSAPDiskConfigurationsArgs, opts?: pulumi.InvokeOptions): Promise<GetSAPDiskConfigurationsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads:getSAPDiskConfigurations", {
        "appLocation": args.appLocation,
        "databaseType": args.databaseType,
        "dbVmSku": args.dbVmSku,
        "deploymentType": args.deploymentType,
        "environment": args.environment,
        "location": args.location,
        "sapProduct": args.sapProduct,
    }, opts);
}

export interface GetSAPDiskConfigurationsArgs {
    /**
     * The geo-location where the SAP resources will be created.
     */
    appLocation: string;
    /**
     * The database type. Eg: HANA, DB2, etc
     */
    databaseType: string | types.enums.SAPDatabaseType;
    /**
     * The VM SKU for database instance.
     */
    dbVmSku: string;
    /**
     * The deployment type. Eg: SingleServer/ThreeTier
     */
    deploymentType: string | types.enums.SAPDeploymentType;
    /**
     * Defines the environment type - Production/Non Production.
     */
    environment: string | types.enums.SAPEnvironmentType;
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
 * The list of disk configuration for vmSku which are part of SAP deployment.
 */
export interface GetSAPDiskConfigurationsResult {
    /**
     * The disk configuration for the db volume. For HANA, Required volumes are: ['hana/data', 'hana/log', hana/shared', 'usr/sap', 'os'], Optional volume : ['backup'].
     */
    readonly volumeConfigurations?: {[key: string]: types.outputs.SAPDiskConfigurationResponse};
}
/**
 * Get the SAP Disk Configuration Layout prod/non-prod SAP System.
 *
 * Uses Azure REST API version 2023-04-01.
 *
 * Other available API versions: 2021-12-01-preview, 2022-11-01-preview, 2023-10-01-preview.
 */
export function getSAPDiskConfigurationsOutput(args: GetSAPDiskConfigurationsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSAPDiskConfigurationsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:workloads:getSAPDiskConfigurations", {
        "appLocation": args.appLocation,
        "databaseType": args.databaseType,
        "dbVmSku": args.dbVmSku,
        "deploymentType": args.deploymentType,
        "environment": args.environment,
        "location": args.location,
        "sapProduct": args.sapProduct,
    }, opts);
}

export interface GetSAPDiskConfigurationsOutputArgs {
    /**
     * The geo-location where the SAP resources will be created.
     */
    appLocation: pulumi.Input<string>;
    /**
     * The database type. Eg: HANA, DB2, etc
     */
    databaseType: pulumi.Input<string | types.enums.SAPDatabaseType>;
    /**
     * The VM SKU for database instance.
     */
    dbVmSku: pulumi.Input<string>;
    /**
     * The deployment type. Eg: SingleServer/ThreeTier
     */
    deploymentType: pulumi.Input<string | types.enums.SAPDeploymentType>;
    /**
     * Defines the environment type - Production/Non Production.
     */
    environment: pulumi.Input<string | types.enums.SAPEnvironmentType>;
    /**
     * The name of Azure region.
     */
    location: pulumi.Input<string>;
    /**
     * Defines the SAP Product type.
     */
    sapProduct: pulumi.Input<string | types.enums.SAPProductType>;
}