import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Define the SAP Application Server Instance resource.
 *
 * Uses Azure REST API version 2023-04-01. In version 1.x of the Azure Native provider, it used API version 2021-12-01-preview.
 *
 * Other available API versions: 2021-12-01-preview, 2023-10-01-preview.
 */
export class SAPApplicationServerInstance extends pulumi.CustomResource {
    /**
     * Get an existing SAPApplicationServerInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SAPApplicationServerInstance {
        return new SAPApplicationServerInstance(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:workloads:SAPApplicationServerInstance';

    /**
     * Returns true if the given object is an instance of SAPApplicationServerInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SAPApplicationServerInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SAPApplicationServerInstance.__pulumiType;
    }

    /**
     * Defines the Application Instance errors.
     */
    public /*out*/ readonly errors!: pulumi.Output<types.outputs.SAPVirtualInstanceErrorResponse>;
    /**
     * Application server instance gateway Port.
     */
    public /*out*/ readonly gatewayPort!: pulumi.Output<number>;
    /**
     * Defines the health of SAP Instances.
     */
    public /*out*/ readonly health!: pulumi.Output<string>;
    /**
     * Application server instance SAP hostname.
     */
    public /*out*/ readonly hostname!: pulumi.Output<string>;
    /**
     * Application server instance ICM HTTP Port.
     */
    public /*out*/ readonly icmHttpPort!: pulumi.Output<number>;
    /**
     * Application server instance ICM HTTPS Port.
     */
    public /*out*/ readonly icmHttpsPort!: pulumi.Output<number>;
    /**
     * Application server Instance Number.
     */
    public /*out*/ readonly instanceNo!: pulumi.Output<string>;
    /**
     *  Application server instance SAP IP Address.
     */
    public /*out*/ readonly ipAddress!: pulumi.Output<string>;
    /**
     * Application server instance SAP Kernel Patch level.
     */
    public /*out*/ readonly kernelPatch!: pulumi.Output<string>;
    /**
     *  Application server instance SAP Kernel Version.
     */
    public /*out*/ readonly kernelVersion!: pulumi.Output<string>;
    /**
     * The Load Balancer details such as LoadBalancer ID attached to Application Server Virtual Machines
     */
    public /*out*/ readonly loadBalancerDetails!: pulumi.Output<types.outputs.LoadBalancerDetailsResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
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
     * Application server Subnet.
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
     * The list of virtual machines.
     */
    public /*out*/ readonly vmDetails!: pulumi.Output<types.outputs.ApplicationServerVmDetailsResponse[]>;

    /**
     * Create a SAPApplicationServerInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SAPApplicationServerInstanceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sapVirtualInstanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sapVirtualInstanceName'");
            }
            resourceInputs["applicationInstanceName"] = args ? args.applicationInstanceName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sapVirtualInstanceName"] = args ? args.sapVirtualInstanceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["gatewayPort"] = undefined /*out*/;
            resourceInputs["health"] = undefined /*out*/;
            resourceInputs["hostname"] = undefined /*out*/;
            resourceInputs["icmHttpPort"] = undefined /*out*/;
            resourceInputs["icmHttpsPort"] = undefined /*out*/;
            resourceInputs["instanceNo"] = undefined /*out*/;
            resourceInputs["ipAddress"] = undefined /*out*/;
            resourceInputs["kernelPatch"] = undefined /*out*/;
            resourceInputs["kernelVersion"] = undefined /*out*/;
            resourceInputs["loadBalancerDetails"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subnet"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmDetails"] = undefined /*out*/;
        } else {
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["gatewayPort"] = undefined /*out*/;
            resourceInputs["health"] = undefined /*out*/;
            resourceInputs["hostname"] = undefined /*out*/;
            resourceInputs["icmHttpPort"] = undefined /*out*/;
            resourceInputs["icmHttpsPort"] = undefined /*out*/;
            resourceInputs["instanceNo"] = undefined /*out*/;
            resourceInputs["ipAddress"] = undefined /*out*/;
            resourceInputs["kernelPatch"] = undefined /*out*/;
            resourceInputs["kernelVersion"] = undefined /*out*/;
            resourceInputs["loadBalancerDetails"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:workloads/v20211201preview:SAPApplicationServerInstance" }, { type: "azure-native:workloads/v20221101preview:SAPApplicationServerInstance" }, { type: "azure-native:workloads/v20230401:SAPApplicationServerInstance" }, { type: "azure-native:workloads/v20231001preview:SAPApplicationServerInstance" }, { type: "azure-native:workloads/v20240901:SAPApplicationServerInstance" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SAPApplicationServerInstance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SAPApplicationServerInstance resource.
 */
export interface SAPApplicationServerInstanceArgs {
    /**
     * The name of SAP Application Server instance resource.
     */
    applicationInstanceName?: pulumi.Input<string>;
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