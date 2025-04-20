import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2023-04-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native workloads [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSAPSupportedSku(args: GetSAPSupportedSkuArgs, opts?: pulumi.InvokeOptions): Promise<GetSAPSupportedSkuResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads:getSAPSupportedSku", {
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
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2023-04-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native workloads [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSAPSupportedSkuOutput(args: GetSAPSupportedSkuOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSAPSupportedSkuResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:workloads:getSAPSupportedSku", {
        "appLocation": args.appLocation,
        "databaseType": args.databaseType,
        "deploymentType": args.deploymentType,
        "environment": args.environment,
        "highAvailabilityType": args.highAvailabilityType,
        "location": args.location,
        "sapProduct": args.sapProduct,
    }, opts);
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