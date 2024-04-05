import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Connects an edge site to an orbital gateway and describes what layer 2 traffic to forward between them.
 * Azure REST API version: 2024-03-01-preview.
 *
 * Other available API versions: 2024-03-01.
 */
export class L2Connection extends pulumi.CustomResource {
    /**
     * Get an existing L2Connection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): L2Connection {
        return new L2Connection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:orbital:L2Connection';

    /**
     * Returns true if the given object is an instance of L2Connection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is L2Connection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === L2Connection.__pulumiType;
    }

    /**
     * Globally-unique identifier for this connection that is to be used as a circuit ID.
     */
    public /*out*/ readonly circuitId!: pulumi.Output<string>;
    /**
     * A reference to an Microsoft.Orbital/edgeSites resource to route traffic for.
     */
    public readonly edgeSite!: pulumi.Output<types.outputs.L2ConnectionsPropertiesResponseEdgeSite>;
    /**
     * A reference to an Microsoft.Orbital/groundStations resource to route traffic for.
     */
    public readonly groundStation!: pulumi.Output<types.outputs.L2ConnectionsPropertiesResponseGroundStation>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
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
     * The VLAN ID for the L2 connection.
     */
    public readonly vlanId!: pulumi.Output<number>;

    /**
     * Create a L2Connection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: L2ConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.edgeSite === undefined) && !opts.urn) {
                throw new Error("Missing required property 'edgeSite'");
            }
            if ((!args || args.groundStation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groundStation'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vlanId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vlanId'");
            }
            resourceInputs["edgeSite"] = args ? args.edgeSite : undefined;
            resourceInputs["groundStation"] = args ? args.groundStation : undefined;
            resourceInputs["l2ConnectionName"] = args ? args.l2ConnectionName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vlanId"] = args ? args.vlanId : undefined;
            resourceInputs["circuitId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["circuitId"] = undefined /*out*/;
            resourceInputs["edgeSite"] = undefined /*out*/;
            resourceInputs["groundStation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vlanId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:orbital/v20240301:L2Connection" }, { type: "azure-native:orbital/v20240301preview:L2Connection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(L2Connection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a L2Connection resource.
 */
export interface L2ConnectionArgs {
    /**
     * A reference to an Microsoft.Orbital/edgeSites resource to route traffic for.
     */
    edgeSite: pulumi.Input<types.inputs.L2ConnectionsPropertiesEdgeSiteArgs>;
    /**
     * A reference to an Microsoft.Orbital/groundStations resource to route traffic for.
     */
    groundStation: pulumi.Input<types.inputs.L2ConnectionsPropertiesGroundStationArgs>;
    /**
     * L2 Connection name.
     */
    l2ConnectionName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The unique name of the partner router that cross-connects with the Orbital Edge Router at the ground station site.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The VLAN ID for the L2 connection.
     */
    vlanId: pulumi.Input<number>;
}