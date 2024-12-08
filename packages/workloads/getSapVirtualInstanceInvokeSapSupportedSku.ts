import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 * Azure REST API version: 2024-09-01.
 */
export function getSapVirtualInstanceInvokeSapSupportedSku(args: GetSapVirtualInstanceInvokeSapSupportedSkuArgs, opts?: pulumi.InvokeOptions): Promise<GetSapVirtualInstanceInvokeSapSupportedSkuResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads:getSapVirtualInstanceInvokeSapSupportedSku", {
        "appLocation": args.appLocation,
        "databaseType": args.databaseType,
        "deploymentType": args.deploymentType,
        "environment": args.environment,
        "highAvailabilityType": args.highAvailabilityType,
        "location": args.location,
        "sapProduct": args.sapProduct,
    }, opts);
}

export interface GetSapVirtualInstanceInvokeSapSupportedSkuArgs {
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
     * The name of the Azure region.
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
export interface GetSapVirtualInstanceInvokeSapSupportedSkuResult {
    /**
     * Gets the list of SAP supported SKUs.
     */
    readonly supportedSkus?: types.outputs.SAPSupportedSkuResponse[];
}
/**
 * Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 * Azure REST API version: 2024-09-01.
 */
export function getSapVirtualInstanceInvokeSapSupportedSkuOutput(args: GetSapVirtualInstanceInvokeSapSupportedSkuOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSapVirtualInstanceInvokeSapSupportedSkuResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:workloads:getSapVirtualInstanceInvokeSapSupportedSku", {
        "appLocation": args.appLocation,
        "databaseType": args.databaseType,
        "deploymentType": args.deploymentType,
        "environment": args.environment,
        "highAvailabilityType": args.highAvailabilityType,
        "location": args.location,
        "sapProduct": args.sapProduct,
    }, opts);
}

export interface GetSapVirtualInstanceInvokeSapSupportedSkuOutputArgs {
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
     * The name of the Azure region.
     */
    location: pulumi.Input<string>;
    /**
     * Defines the SAP Product type.
     */
    sapProduct: pulumi.Input<string | types.enums.SAPProductType>;
}