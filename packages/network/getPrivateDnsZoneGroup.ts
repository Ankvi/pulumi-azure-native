import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the private dns zone group resource by specified private dns zone group name.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPrivateDnsZoneGroup(args: GetPrivateDnsZoneGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateDnsZoneGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getPrivateDnsZoneGroup", {
        "privateDnsZoneGroupName": args.privateDnsZoneGroupName,
        "privateEndpointName": args.privateEndpointName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateDnsZoneGroupArgs {
    /**
     * The name of the private dns zone group.
     */
    privateDnsZoneGroupName: string;
    /**
     * The name of the private endpoint.
     */
    privateEndpointName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Private dns zone group resource.
 */
export interface GetPrivateDnsZoneGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * A collection of private dns zone configurations of the private dns zone group.
     */
    readonly privateDnsZoneConfigs?: types.outputs.PrivateDnsZoneConfigResponse[];
    /**
     * The provisioning state of the private dns zone group resource.
     */
    readonly provisioningState: string;
}
/**
 * Gets the private dns zone group resource by specified private dns zone group name.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPrivateDnsZoneGroupOutput(args: GetPrivateDnsZoneGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateDnsZoneGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getPrivateDnsZoneGroup", {
        "privateDnsZoneGroupName": args.privateDnsZoneGroupName,
        "privateEndpointName": args.privateEndpointName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateDnsZoneGroupOutputArgs {
    /**
     * The name of the private dns zone group.
     */
    privateDnsZoneGroupName: pulumi.Input<string>;
    /**
     * The name of the private endpoint.
     */
    privateEndpointName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}