import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified packet core control plane.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-04-01-preview, 2022-11-01, 2023-06-01, 2023-09-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mobilenetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPacketCoreControlPlane(args: GetPacketCoreControlPlaneArgs, opts?: pulumi.InvokeOptions): Promise<GetPacketCoreControlPlaneResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilenetwork:getPacketCoreControlPlane", {
        "packetCoreControlPlaneName": args.packetCoreControlPlaneName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPacketCoreControlPlaneArgs {
    /**
     * The name of the packet core control plane.
     */
    packetCoreControlPlaneName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Packet core control plane resource.
 */
export interface GetPacketCoreControlPlaneResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The control plane interface on the access network. For 5G networks, this is the N2 interface. For 4G networks, this is the S1-MME interface.
     */
    readonly controlPlaneAccessInterface: types.outputs.InterfacePropertiesResponse;
    /**
     * The virtual IP address(es) for the control plane on the access network in a High Availability (HA) system. In an HA deployment the access network router should be configured to anycast traffic for this address to the control plane access interfaces on the active and standby nodes. In non-HA system this list should be omitted or empty.
     */
    readonly controlPlaneAccessVirtualIpv4Addresses?: string[];
    /**
     * The core network technology generation (5G core or EPC / 4G core).
     */
    readonly coreNetworkTechnology?: string;
    /**
     * Configuration for uploading packet core diagnostics
     */
    readonly diagnosticsUpload?: types.outputs.DiagnosticsUploadConfigurationResponse;
    /**
     * Configuration for sending packet core events to an Azure Event Hub.
     */
    readonly eventHub?: types.outputs.EventHubConfigurationResponse;
    /**
     * The provisioning state of the secret containing private keys and keyIds for SUPI concealment.
     */
    readonly homeNetworkPrivateKeysProvisioning: types.outputs.HomeNetworkPrivateKeysProvisioningResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The identity used to retrieve the ingress certificate from Azure key vault.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The installation state of the packet core control plane resource.
     */
    readonly installation?: types.outputs.InstallationResponse;
    /**
     * The currently installed version of the packet core software.
     */
    readonly installedVersion: string;
    /**
     * Settings to allow interoperability with third party components e.g. RANs and UEs.
     */
    readonly interopSettings?: any;
    /**
     * The kubernetes ingress configuration to control access to packet core diagnostics over local APIs.
     */
    readonly localDiagnosticsAccess: types.outputs.LocalDiagnosticsAccessConfigurationResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The platform where the packet core is deployed.
     */
    readonly platform: types.outputs.PlatformConfigurationResponse;
    /**
     * The provisioning state of the packet core control plane resource.
     */
    readonly provisioningState: string;
    /**
     * The previous version of the packet core software that was deployed. Used when performing the rollback action.
     */
    readonly rollbackVersion: string;
    /**
     * Signaling configuration for the packet core.
     */
    readonly signaling?: types.outputs.SignalingConfigurationResponse;
    /**
     * Site(s) under which this packet core control plane should be deployed. The sites must be in the same location as the packet core control plane.
     */
    readonly sites: types.outputs.SiteResourceIdResponse[];
    /**
     * The SKU defining the throughput and SIM allowances for this packet core control plane deployment.
     */
    readonly sku: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The MTU (in bytes) signaled to the UE. The same MTU is set on the user plane data links for all data networks. The MTU set on the user plane access link is calculated to be 60 bytes greater than this value to allow for GTP encapsulation.
     */
    readonly ueMtu?: number;
    /**
     * The user consent configuration for the packet core.
     */
    readonly userConsent?: types.outputs.UserConsentConfigurationResponse;
    /**
     * The desired version of the packet core software.
     */
    readonly version?: string;
}
/**
 * Gets information about the specified packet core control plane.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-04-01-preview, 2022-11-01, 2023-06-01, 2023-09-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mobilenetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPacketCoreControlPlaneOutput(args: GetPacketCoreControlPlaneOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPacketCoreControlPlaneResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:mobilenetwork:getPacketCoreControlPlane", {
        "packetCoreControlPlaneName": args.packetCoreControlPlaneName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPacketCoreControlPlaneOutputArgs {
    /**
     * The name of the packet core control plane.
     */
    packetCoreControlPlaneName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}