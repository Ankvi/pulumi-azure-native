import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Define the SAP Central Services Instance resource.
 * Azure REST API version: 2023-04-01. Prior API version in Azure Native 1.x: 2021-12-01-preview
 */
export class SAPCentralInstance extends pulumi.CustomResource {
    /**
     * Get an existing SAPCentralInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SAPCentralInstance {
        return new SAPCentralInstance(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:workloads:SAPCentralInstance';

    /**
     * Returns true if the given object is an instance of SAPCentralInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SAPCentralInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SAPCentralInstance.__pulumiType;
    }

    /**
     * Defines the SAP Enqueue Replication Server (ERS) properties.
     */
    public /*out*/ readonly enqueueReplicationServerProperties!: pulumi.Output<types.outputs.EnqueueReplicationServerPropertiesResponse | undefined>;
    /**
     * Defines the SAP Enqueue Server properties.
     */
    public /*out*/ readonly enqueueServerProperties!: pulumi.Output<types.outputs.EnqueueServerPropertiesResponse | undefined>;
    /**
     * Defines the errors related to SAP Central Services Instance resource.
     */
    public /*out*/ readonly errors!: pulumi.Output<types.outputs.SAPVirtualInstanceErrorResponse>;
    /**
     * Defines the SAP Gateway Server properties.
     */
    public /*out*/ readonly gatewayServerProperties!: pulumi.Output<types.outputs.GatewayServerPropertiesResponse | undefined>;
    /**
     * Defines the health of SAP Instances.
     */
    public /*out*/ readonly health!: pulumi.Output<string>;
    /**
     * The central services instance number.
     */
    public /*out*/ readonly instanceNo!: pulumi.Output<string>;
    /**
     * The central services instance Kernel Patch level.
     */
    public /*out*/ readonly kernelPatch!: pulumi.Output<string>;
    /**
     * The central services instance Kernel Version.
     */
    public /*out*/ readonly kernelVersion!: pulumi.Output<string>;
    /**
     * The Load Balancer details such as LoadBalancer ID attached to ASCS Virtual Machines
     */
    public /*out*/ readonly loadBalancerDetails!: pulumi.Output<types.outputs.LoadBalancerDetailsResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Defines the SAP Message Server properties.
     */
    public /*out*/ readonly messageServerProperties!: pulumi.Output<types.outputs.MessageServerPropertiesResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Defines the provisioning states.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Defines the SAP Instance status.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The central services instance subnet.
     */
    public /*out*/ readonly subnet!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The list of virtual machines corresponding to the Central Services instance.
     */
    public /*out*/ readonly vmDetails!: pulumi.Output<types.outputs.CentralServerVmDetailsResponse[]>;

    /**
     * Create a SAPCentralInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SAPCentralInstanceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sapVirtualInstanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sapVirtualInstanceName'");
            }
            resourceInputs["centralInstanceName"] = args ? args.centralInstanceName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sapVirtualInstanceName"] = args ? args.sapVirtualInstanceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["enqueueReplicationServerProperties"] = undefined /*out*/;
            resourceInputs["enqueueServerProperties"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["gatewayServerProperties"] = undefined /*out*/;
            resourceInputs["health"] = undefined /*out*/;
            resourceInputs["instanceNo"] = undefined /*out*/;
            resourceInputs["kernelPatch"] = undefined /*out*/;
            resourceInputs["kernelVersion"] = undefined /*out*/;
            resourceInputs["loadBalancerDetails"] = undefined /*out*/;
            resourceInputs["messageServerProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subnet"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmDetails"] = undefined /*out*/;
        } else {
            resourceInputs["enqueueReplicationServerProperties"] = undefined /*out*/;
            resourceInputs["enqueueServerProperties"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["gatewayServerProperties"] = undefined /*out*/;
            resourceInputs["health"] = undefined /*out*/;
            resourceInputs["instanceNo"] = undefined /*out*/;
            resourceInputs["kernelPatch"] = undefined /*out*/;
            resourceInputs["kernelVersion"] = undefined /*out*/;
            resourceInputs["loadBalancerDetails"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["messageServerProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subnet"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmDetails"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:workloads/v20211201preview:SAPCentralInstance" }, { type: "azure-native:workloads/v20221101preview:SAPCentralInstance" }, { type: "azure-native:workloads/v20230401:SAPCentralInstance" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SAPCentralInstance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SAPCentralInstance resource.
 */
export interface SAPCentralInstanceArgs {
    /**
     * Central Services Instance resource name string modeled as parameter for auto generation to work correctly.
     */
    centralInstanceName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Virtual Instances for SAP solutions resource
     */
    sapVirtualInstanceName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
