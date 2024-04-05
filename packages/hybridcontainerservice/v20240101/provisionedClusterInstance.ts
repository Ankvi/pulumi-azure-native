import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The provisioned cluster resource definition.
 */
export class ProvisionedClusterInstance extends pulumi.CustomResource {
    /**
     * Get an existing ProvisionedClusterInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ProvisionedClusterInstance {
        return new ProvisionedClusterInstance(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybridcontainerservice/v20240101:ProvisionedClusterInstance';

    /**
     * Returns true if the given object is an instance of ProvisionedClusterInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProvisionedClusterInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProvisionedClusterInstance.__pulumiType;
    }

    /**
     * Extended location pointing to the underlying infrastructure
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of the provisioned cluster.
     */
    public readonly properties!: pulumi.Output<types.outputs.ProvisionedClusterPropertiesResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ProvisionedClusterInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProvisionedClusterInstanceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.connectedClusterResourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectedClusterResourceUri'");
            }
            resourceInputs["connectedClusterResourceUri"] = args ? args.connectedClusterResourceUri : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["properties"] = args ? (args.properties ? pulumi.output(args.properties).apply(types.inputs.provisionedClusterPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridcontainerservice/v20240101:provisionedClusterInstance" }, { type: "azure-native:hybridcontainerservice/v20231115preview:ProvisionedClusterInstance" }, { type: "azure-native:hybridcontainerservice/v20231115preview:provisionedClusterInstance" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ProvisionedClusterInstance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ProvisionedClusterInstance resource.
 */
export interface ProvisionedClusterInstanceArgs {
    /**
     * The fully qualified Azure Resource Manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: pulumi.Input<string>;
    /**
     * Extended location pointing to the underlying infrastructure
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Properties of the provisioned cluster.
     */
    properties?: pulumi.Input<types.inputs.ProvisionedClusterPropertiesArgs>;
}