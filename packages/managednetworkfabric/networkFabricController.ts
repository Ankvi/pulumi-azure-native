import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Network Fabric Controller resource definition.
 *
 * Uses Azure REST API version 2023-06-15. In version 2.x of the Azure Native provider, it used API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native managednetworkfabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class NetworkFabricController extends pulumi.CustomResource {
    /**
     * Get an existing NetworkFabricController resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkFabricController {
        return new NetworkFabricController(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:managednetworkfabric:NetworkFabricController';

    /**
     * Returns true if the given object is an instance of NetworkFabricController.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkFabricController {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkFabricController.__pulumiType;
    }

    /**
     * Switch configuration description.
     */
    public readonly annotation!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * As part of an update, the Infrastructure ExpressRoute CircuitID should be provided to create and Provision a NFC. This Express route is dedicated for Infrastructure services. (This is a Mandatory attribute)
     */
    public readonly infrastructureExpressRouteConnections!: pulumi.Output<types.outputs.ExpressRouteConnectionInformationResponse[] | undefined>;
    /**
     * InfrastructureServices IP ranges.
     */
    public /*out*/ readonly infrastructureServices!: pulumi.Output<types.outputs.ControllerServicesResponse>;
    /**
     * IPv4 Network Fabric Controller Address Space.
     */
    public readonly ipv4AddressSpace!: pulumi.Output<string | undefined>;
    /**
     * IPv6 Network Fabric Controller Address Space.
     */
    public readonly ipv6AddressSpace!: pulumi.Output<string | undefined>;
    /**
     * A workload management network is required for all the tenant (workload) traffic. This traffic is only dedicated for Tenant workloads which are required to access internet or any other MSFT/Public endpoints.
     */
    public readonly isWorkloadManagementNetworkEnabled!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Managed Resource Group configuration properties.
     */
    public readonly managedResourceGroupConfiguration!: pulumi.Output<types.outputs.ManagedResourceGroupConfigurationResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The NF-ID will be an input parameter used by the NF to link and get associated with the parent NFC Service.
     */
    public /*out*/ readonly networkFabricIds!: pulumi.Output<string[]>;
    /**
     * Network Fabric Controller SKU.
     */
    public readonly nfcSku!: pulumi.Output<string | undefined>;
    /**
     * Provides you the latest status of the NFC service, whether it is Accepted, updating, Succeeded or Failed. During this process, the states keep changing based on the status of NFC provisioning.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * List of tenant InternetGateway resource IDs
     */
    public /*out*/ readonly tenantInternetGatewayIds!: pulumi.Output<string[]>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * As part of an update, the workload ExpressRoute CircuitID should be provided to create and Provision a NFC. This Express route is dedicated for Workload services. (This is a Mandatory attribute).
     */
    public readonly workloadExpressRouteConnections!: pulumi.Output<types.outputs.ExpressRouteConnectionInformationResponse[] | undefined>;
    /**
     * A workload management network is required for all the tenant (workload) traffic. This traffic is only dedicated for Tenant workloads which are required to access internet or any other MSFT/Public endpoints. This is used for the backward compatibility.
     */
    public /*out*/ readonly workloadManagementNetwork!: pulumi.Output<boolean>;
    /**
     * WorkloadServices IP ranges.
     */
    public /*out*/ readonly workloadServices!: pulumi.Output<types.outputs.ControllerServicesResponse>;

    /**
     * Create a NetworkFabricController resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkFabricControllerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["infrastructureExpressRouteConnections"] = args ? args.infrastructureExpressRouteConnections : undefined;
            resourceInputs["ipv4AddressSpace"] = (args ? args.ipv4AddressSpace : undefined) ?? "10.0.0.0/19";
            resourceInputs["ipv6AddressSpace"] = (args ? args.ipv6AddressSpace : undefined) ?? "FC00::/59";
            resourceInputs["isWorkloadManagementNetworkEnabled"] = (args ? args.isWorkloadManagementNetworkEnabled : undefined) ?? "True";
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedResourceGroupConfiguration"] = args ? args.managedResourceGroupConfiguration : undefined;
            resourceInputs["networkFabricControllerName"] = args ? args.networkFabricControllerName : undefined;
            resourceInputs["nfcSku"] = (args ? args.nfcSku : undefined) ?? "Standard";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workloadExpressRouteConnections"] = args ? args.workloadExpressRouteConnections : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["infrastructureServices"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkFabricIds"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tenantInternetGatewayIds"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workloadManagementNetwork"] = undefined /*out*/;
            resourceInputs["workloadServices"] = undefined /*out*/;
        } else {
            resourceInputs["annotation"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["infrastructureExpressRouteConnections"] = undefined /*out*/;
            resourceInputs["infrastructureServices"] = undefined /*out*/;
            resourceInputs["ipv4AddressSpace"] = undefined /*out*/;
            resourceInputs["ipv6AddressSpace"] = undefined /*out*/;
            resourceInputs["isWorkloadManagementNetworkEnabled"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedResourceGroupConfiguration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkFabricIds"] = undefined /*out*/;
            resourceInputs["nfcSku"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tenantInternetGatewayIds"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workloadExpressRouteConnections"] = undefined /*out*/;
            resourceInputs["workloadManagementNetwork"] = undefined /*out*/;
            resourceInputs["workloadServices"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:managednetworkfabric/v20230201preview:NetworkFabricController" }, { type: "azure-native:managednetworkfabric/v20230615:NetworkFabricController" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkFabricController.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkFabricController resource.
 */
export interface NetworkFabricControllerArgs {
    /**
     * Switch configuration description.
     */
    annotation?: pulumi.Input<string>;
    /**
     * As part of an update, the Infrastructure ExpressRoute CircuitID should be provided to create and Provision a NFC. This Express route is dedicated for Infrastructure services. (This is a Mandatory attribute)
     */
    infrastructureExpressRouteConnections?: pulumi.Input<pulumi.Input<types.inputs.ExpressRouteConnectionInformationArgs>[]>;
    /**
     * IPv4 Network Fabric Controller Address Space.
     */
    ipv4AddressSpace?: pulumi.Input<string>;
    /**
     * IPv6 Network Fabric Controller Address Space.
     */
    ipv6AddressSpace?: pulumi.Input<string>;
    /**
     * A workload management network is required for all the tenant (workload) traffic. This traffic is only dedicated for Tenant workloads which are required to access internet or any other MSFT/Public endpoints.
     */
    isWorkloadManagementNetworkEnabled?: pulumi.Input<string | types.enums.IsWorkloadManagementNetworkEnabled>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Managed Resource Group configuration properties.
     */
    managedResourceGroupConfiguration?: pulumi.Input<types.inputs.ManagedResourceGroupConfigurationArgs>;
    /**
     * Name of the Network Fabric Controller.
     */
    networkFabricControllerName?: pulumi.Input<string>;
    /**
     * Network Fabric Controller SKU.
     */
    nfcSku?: pulumi.Input<string | types.enums.NfcSku>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * As part of an update, the workload ExpressRoute CircuitID should be provided to create and Provision a NFC. This Express route is dedicated for Workload services. (This is a Mandatory attribute).
     */
    workloadExpressRouteConnections?: pulumi.Input<pulumi.Input<types.inputs.ExpressRouteConnectionInformationArgs>[]>;
}