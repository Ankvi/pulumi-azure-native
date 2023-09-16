import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the SAP Disk Configuration Layout prod/non-prod SAP System.
 */
export function getSAPDiskConfigurations(args: GetSAPDiskConfigurationsArgs, opts?: pulumi.InvokeOptions): Promise<GetSAPDiskConfigurationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads/v20221101preview:getSAPDiskConfigurations", {
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
    databaseType: string | types.enums.v20221101preview.SAPDatabaseType;
    /**
     * The VM SKU for database instance.
     */
    dbVmSku: string;
    /**
     * The deployment type. Eg: SingleServer/ThreeTier
     */
    deploymentType: string | types.enums.v20221101preview.SAPDeploymentType;
    /**
     * Defines the environment type - Production/Non Production.
     */
    environment: string | types.enums.v20221101preview.SAPEnvironmentType;
    /**
     * The name of Azure region.
     */
    location: string;
    /**
     * Defines the SAP Product type.
     */
    sapProduct: string | types.enums.v20221101preview.SAPProductType;
}

/**
 * The list of disk configuration for vmSku which are part of SAP deployment.
 */
export interface GetSAPDiskConfigurationsResult {
    /**
     * The disk configuration for the db volume. For HANA, Required volumes are: ['hana/data', 'hana/log', hana/shared', 'usr/sap', 'os'], Optional volume : ['backup'].
     */
    readonly volumeConfigurations?: {[key: string]: types.outputs.workloads.v20221101preview.SAPDiskConfigurationResponse};
}
/**
 * Get the SAP Disk Configuration Layout prod/non-prod SAP System.
 */
export function getSAPDiskConfigurationsOutput(args: GetSAPDiskConfigurationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSAPDiskConfigurationsResult> {
    return pulumi.output(args).apply((a: any) => getSAPDiskConfigurations(a, opts))
}

export interface GetSAPDiskConfigurationsOutputArgs {
    /**
     * The geo-location where the SAP resources will be created.
     */
    appLocation: pulumi.Input<string>;
    /**
     * The database type. Eg: HANA, DB2, etc
     */
    databaseType: pulumi.Input<string | types.enums.v20221101preview.SAPDatabaseType>;
    /**
     * The VM SKU for database instance.
     */
    dbVmSku: pulumi.Input<string>;
    /**
     * The deployment type. Eg: SingleServer/ThreeTier
     */
    deploymentType: pulumi.Input<string | types.enums.v20221101preview.SAPDeploymentType>;
    /**
     * Defines the environment type - Production/Non Production.
     */
    environment: pulumi.Input<string | types.enums.v20221101preview.SAPEnvironmentType>;
    /**
     * The name of Azure region.
     */
    location: pulumi.Input<string>;
    /**
     * Defines the SAP Product type.
     */
    sapProduct: pulumi.Input<string | types.enums.v20221101preview.SAPProductType>;
}
