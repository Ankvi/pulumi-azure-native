import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An object that represents a scope map for a container registry.
 */
export class ScopeMap extends pulumi.CustomResource {
    /**
     * Get an existing ScopeMap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ScopeMap {
        return new ScopeMap(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerregistry/v20230101preview:ScopeMap';

    /**
     * Returns true if the given object is an instance of ScopeMap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScopeMap {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ScopeMap.__pulumiType;
    }

    /**
     * The list of scoped permissions for registry artifacts.
     * E.g. repositories/repository-name/content/read,
     * repositories/repository-name/metadata/write
     */
    public readonly actions!: pulumi.Output<string[]>;
    /**
     * The creation date of scope map.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * The user friendly description of the scope map.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ScopeMap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScopeMapArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.actions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'actions'");
            }
            if ((!args || args.registryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["actions"] = args ? args.actions : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scopeMapName"] = args ? args.scopeMapName : undefined;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["actions"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerregistry:ScopeMap" }, { type: "azure-native:containerregistry/v20190501preview:ScopeMap" }, { type: "azure-native:containerregistry/v20201101preview:ScopeMap" }, { type: "azure-native:containerregistry/v20210601preview:ScopeMap" }, { type: "azure-native:containerregistry/v20210801preview:ScopeMap" }, { type: "azure-native:containerregistry/v20211201preview:ScopeMap" }, { type: "azure-native:containerregistry/v20220201preview:ScopeMap" }, { type: "azure-native:containerregistry/v20221201:ScopeMap" }, { type: "azure-native:containerregistry/v20230601preview:ScopeMap" }, { type: "azure-native:containerregistry/v20230701:ScopeMap" }, { type: "azure-native:containerregistry/v20230801preview:ScopeMap" }, { type: "azure-native:containerregistry/v20231101preview:ScopeMap" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ScopeMap.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ScopeMap resource.
 */
export interface ScopeMapArgs {
    /**
     * The list of scoped permissions for registry artifacts.
     * E.g. repositories/repository-name/content/read,
     * repositories/repository-name/metadata/write
     */
    actions: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The user friendly description of the scope map.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the scope map.
     */
    scopeMapName?: pulumi.Input<string>;
}