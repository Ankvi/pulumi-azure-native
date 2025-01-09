import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Edge device job for Azure Stack HCI solution.
 * Azure REST API version: 2024-09-01-preview.
 */
export class HciEdgeDeviceJob extends pulumi.CustomResource {
    /**
     * Get an existing HciEdgeDeviceJob resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HciEdgeDeviceJob {
        return new HciEdgeDeviceJob(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci:HciEdgeDeviceJob';

    /**
     * Returns true if the given object is an instance of HciEdgeDeviceJob.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HciEdgeDeviceJob {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HciEdgeDeviceJob.__pulumiType;
    }

    /**
     * Edge device kind.
     * Expected value is 'HCI'.
     */
    public readonly kind!: pulumi.Output<"HCI">;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * HCI Edge device job properties
     */
    public readonly properties!: pulumi.Output<types.outputs.HciCollectLogJobPropertiesResponse | types.outputs.HciRemoteSupportJobPropertiesResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a HciEdgeDeviceJob resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HciEdgeDeviceJobArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.edgeDeviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'edgeDeviceName'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceUri'");
            }
            resourceInputs["edgeDeviceName"] = args ? args.edgeDeviceName : undefined;
            resourceInputs["jobsName"] = args ? args.jobsName : undefined;
            resourceInputs["kind"] = "HCI";
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceUri"] = args ? args.resourceUri : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci/v20240901preview:HciEdgeDeviceJob" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(HciEdgeDeviceJob.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a HciEdgeDeviceJob resource.
 */
export interface HciEdgeDeviceJobArgs {
    /**
     * The name of the EdgeDevice
     */
    edgeDeviceName: pulumi.Input<string>;
    /**
     * Name of EdgeDevice Job
     */
    jobsName?: pulumi.Input<string>;
    /**
     * Edge device kind.
     * Expected value is 'HCI'.
     */
    kind: pulumi.Input<"HCI">;
    /**
     * HCI Edge device job properties
     */
    properties: pulumi.Input<types.inputs.HciCollectLogJobPropertiesArgs | types.inputs.HciRemoteSupportJobPropertiesArgs>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}