import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * ResourceGuardProxyBaseResource object, used for response and request bodies for ResourceGuardProxy APIs
 */
export class DppResourceGuardProxy extends pulumi.CustomResource {
    /**
     * Get an existing DppResourceGuardProxy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DppResourceGuardProxy {
        return new DppResourceGuardProxy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dataprotection/v20230101:DppResourceGuardProxy';

    /**
     * Returns true if the given object is an instance of DppResourceGuardProxy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DppResourceGuardProxy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DppResourceGuardProxy.__pulumiType;
    }

    /**
     * Resource name associated with the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * ResourceGuardProxyBaseResource properties
     */
    public readonly properties!: pulumi.Output<types.outputs.ResourceGuardProxyBaseResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DppResourceGuardProxy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DppResourceGuardProxyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vaultName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vaultName'");
            }
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceGuardProxyName"] = args ? args.resourceGuardProxyName : undefined;
            resourceInputs["vaultName"] = args ? args.vaultName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dataprotection:DppResourceGuardProxy" }, { type: "azure-native:dataprotection/v20220901preview:DppResourceGuardProxy" }, { type: "azure-native:dataprotection/v20221001preview:DppResourceGuardProxy" }, { type: "azure-native:dataprotection/v20221101preview:DppResourceGuardProxy" }, { type: "azure-native:dataprotection/v20230401preview:DppResourceGuardProxy" }, { type: "azure-native:dataprotection/v20230501:DppResourceGuardProxy" }, { type: "azure-native:dataprotection/v20230601preview:DppResourceGuardProxy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DppResourceGuardProxy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DppResourceGuardProxy resource.
 */
export interface DppResourceGuardProxyArgs {
    /**
     * ResourceGuardProxyBaseResource properties
     */
    properties?: pulumi.Input<types.inputs.ResourceGuardProxyBaseArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * name of the resource guard proxy
     */
    resourceGuardProxyName?: pulumi.Input<string>;
    /**
     * The name of the backup vault.
     */
    vaultName: pulumi.Input<string>;
}
