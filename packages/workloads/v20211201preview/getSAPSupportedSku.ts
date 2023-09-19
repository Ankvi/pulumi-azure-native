import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 */
export function getSAPSupportedSku(args: GetSAPSupportedSkuArgs, opts?: pulumi.InvokeOptions): Promise<GetSAPSupportedSkuResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads/v20211201preview:getSAPSupportedSku", {
        "appLocation": args.appLocation,
        "databaseType": args.databaseType,
        "deploymentType": args.deploymentType,
        "environment": args.environment,
        "highAvailabilityType": args.highAvailabilityType,
        "location": args.location,
        "sapProduct": args.sapProduct,
    }, opts);
}

export interface GetSAPSupportedSkuArgs {
    /**
     * The geo-location where the resource is to be created.
     */
    appLocation: string;
    /**
     * The database type. Eg: HANA, DB2, etc
     */
    databaseType: string | types.enums.SAPDatabaseType;
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
}

/**
 * The list of supported SKUs for different resources which are part of SAP deployment.
 */
export interface GetSAPSupportedSkuResult {
    /**
     * Gets the list of SAP supported SKUs.
     */
    readonly supportedSkus?: types.outputs.SAPSupportedSkuResponse[];
}
/**
 * Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 */
export function getSAPSupportedSkuOutput(args: GetSAPSupportedSkuOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSAPSupportedSkuResult> {
    return pulumi.output(args).apply((a: any) => getSAPSupportedSku(a, opts))
}

export interface GetSAPSupportedSkuOutputArgs {
    /**
     * The geo-location where the resource is to be created.
     */
    appLocation: pulumi.Input<string>;
    /**
     * The database type. Eg: HANA, DB2, etc
     */
    databaseType: pulumi.Input<string | types.enums.SAPDatabaseType>;
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
}
