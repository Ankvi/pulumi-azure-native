import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a hybrid machine.
 */
export class Machine extends pulumi.CustomResource {
    /**
     * Get an existing Machine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Machine {
        return new Machine(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybridcompute/v20220510preview:Machine';

    /**
     * Returns true if the given object is an instance of Machine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Machine {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Machine.__pulumiType;
    }

    /**
     * Identity for the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Hybrid Compute Machine properties
     */
    public readonly properties!: pulumi.Output<types.outputs.MachinePropertiesResponse>;
    /**
     * The list of extensions affiliated to the machine
     */
    public /*out*/ readonly resources!: pulumi.Output<types.outputs.MachineExtensionResponse[]>;
    /**
     * The system meta data relating to this resource.
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
     * Create a Machine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MachineArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["machineName"] = args ? args.machineName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["resources"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["resources"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridcompute:Machine" }, { type: "azure-native:hybridcompute/v20190318preview:Machine" }, { type: "azure-native:hybridcompute/v20190802preview:Machine" }, { type: "azure-native:hybridcompute/v20191212:Machine" }, { type: "azure-native:hybridcompute/v20200730preview:Machine" }, { type: "azure-native:hybridcompute/v20200802:Machine" }, { type: "azure-native:hybridcompute/v20200815preview:Machine" }, { type: "azure-native:hybridcompute/v20210128preview:Machine" }, { type: "azure-native:hybridcompute/v20210325preview:Machine" }, { type: "azure-native:hybridcompute/v20210422preview:Machine" }, { type: "azure-native:hybridcompute/v20210517preview:Machine" }, { type: "azure-native:hybridcompute/v20210520:Machine" }, { type: "azure-native:hybridcompute/v20210610preview:Machine" }, { type: "azure-native:hybridcompute/v20211210preview:Machine" }, { type: "azure-native:hybridcompute/v20220310:Machine" }, { type: "azure-native:hybridcompute/v20220811preview:Machine" }, { type: "azure-native:hybridcompute/v20221110:Machine" }, { type: "azure-native:hybridcompute/v20221227:Machine" }, { type: "azure-native:hybridcompute/v20221227preview:Machine" }, { type: "azure-native:hybridcompute/v20230315preview:Machine" }, { type: "azure-native:hybridcompute/v20230620preview:Machine" }, { type: "azure-native:hybridcompute/v20231003preview:Machine" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Machine.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Machine resource.
 */
export interface MachineArgs {
    /**
     * Identity for the resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the hybrid machine.
     */
    machineName?: pulumi.Input<string>;
    /**
     * Hybrid Compute Machine properties
     */
    properties?: pulumi.Input<types.inputs.MachinePropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
