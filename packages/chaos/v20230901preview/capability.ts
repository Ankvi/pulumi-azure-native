import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Model that represents a Capability resource.
 */
export class Capability extends pulumi.CustomResource {
    /**
     * Get an existing Capability resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Capability {
        return new Capability(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:chaos/v20230901preview:Capability';

    /**
     * Returns true if the given object is an instance of Capability.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Capability {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Capability.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The properties of a capability resource.
     */
    public /*out*/ readonly properties!: pulumi.Output<types.outputs.CapabilityPropertiesResponse>;
    /**
     * The standard system metadata of a resource type.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Capability resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CapabilityArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.parentProviderNamespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentProviderNamespace'");
            }
            if ((!args || args.parentResourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentResourceName'");
            }
            if ((!args || args.parentResourceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentResourceType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.targetName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetName'");
            }
            resourceInputs["capabilityName"] = args ? args.capabilityName : undefined;
            resourceInputs["parentProviderNamespace"] = args ? args.parentProviderNamespace : undefined;
            resourceInputs["parentResourceName"] = args ? args.parentResourceName : undefined;
            resourceInputs["parentResourceType"] = args ? args.parentResourceType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["targetName"] = args ? args.targetName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:chaos:Capability" }, { type: "azure-native:chaos/v20210915preview:Capability" }, { type: "azure-native:chaos/v20220701preview:Capability" }, { type: "azure-native:chaos/v20221001preview:Capability" }, { type: "azure-native:chaos/v20230401preview:Capability" }, { type: "azure-native:chaos/v20230415preview:Capability" }, { type: "azure-native:chaos/v20231027preview:Capability" }, { type: "azure-native:chaos/v20231101:Capability" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Capability.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Capability resource.
 */
export interface CapabilityArgs {
    /**
     * String that represents a Capability resource name.
     */
    capabilityName?: pulumi.Input<string>;
    /**
     * String that represents a resource provider namespace.
     */
    parentProviderNamespace: pulumi.Input<string>;
    /**
     * String that represents a resource name.
     */
    parentResourceName: pulumi.Input<string>;
    /**
     * String that represents a resource type.
     */
    parentResourceType: pulumi.Input<string>;
    /**
     * String that represents an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * String that represents a Target resource name.
     */
    targetName: pulumi.Input<string>;
}
